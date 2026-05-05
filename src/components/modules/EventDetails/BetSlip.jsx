import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const BetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();

          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  return (
    <tr>
      <td colSpan="7">
        <div className>
          <div
            className={` relative  ${placeBetValues?.back ? "bg-[#72BBEF]" : "bg-[#FAA9BA]"}`}
          >
            <div className="flex flex-col px-2">
              <span>{placeBetValues?.selectedBetName}</span>
              <span className="text-xs">{placeBetValues?.btype}</span>
            </div>
            <div
              className={`${placeBetValues?.back ? "bg-[#72BBEF]" : "bg-[#FAA9BA]"}  flex items-center pt-1 justify-between mx-2 gap-2`}
            >
              <div className="flex items-center w-full">
                {!placeBetValues?.isWeak && (
                  <button
                    onClick={() => {
                      handleDecreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice,
                      );
                      setIsCashOut(false);
                    }}
                    className=" active:opacity-70 flex bg-gray-700 h-[30px] px-2 w-fit text-center items-center justify-center"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      color="white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                )}

                <input
                  type="number"
                  onChange={(e) => {
                    dispatch(setPrice(e.target.value));
                    setIsCashOut(false);
                  }}
                  value={price}
                  className="h-[30px] w-full text-center text-[12px]"
                />
                {!placeBetValues?.isWeak && (
                  <button
                    onClick={() => {
                      handleIncreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice,
                      );
                      setIsCashOut(false);
                    }}
                    className=" active:opacity-70 flex bg-gray-700 h-[30px] px-2 w-fit text-center items-center justify-center"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      color="white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                  </button>
                )}
              </div>
              <input
                onChange={(e) => {
                  dispatch(setStake(e.target.value));
                  setIsCashOut(false);
                }}
                className="text-[12px] h-[30px] w-full leading-[30px] text-center text-black bg-white"
                type="text"
                placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                value={stake || ""}
              />
            </div>
            <div className=" bg-[#72BBEF]  mx-1 grid grid-cols-4 gap-1 my-2.5 text-[14px]  text-center whitespace-nowrap text-stone-900">
              {parseButtonValues?.slice(0, 6)?.map((button, i) => (
                <button
                  key={i}
                  onClick={() => handleButtonValue(button?.value)}
                  className=" active:opacity-70 flex-1 rounded bg-[#ccc] border border-[#969494]"
                  style={{ color: "rgb(0, 0, 0)" }}
                >
                  {button?.value}
                </button>
              ))}
            </div>
            <div className="flex justify-between mb-1 gap-1 mx-2">
              <button
                onClick={() => dispatch(setStake(parseButtonValues[0]?.value))}
                className=" active:opacity-70 flex-1 w-full text-sm h-8 rounded text-black bg-[#e8e817]"
              >
                Min Stake
              </button>
              <button
                onClick={() =>
                  dispatch(
                    setStake(
                      parseButtonValues?.[parseButtonValues?.length - 1]?.value,
                    ),
                  )
                }
                className=" active:opacity-70 flex-1 w-full  text-sm h-8 rounded  bg-blue-700 text-white"
              >
                Max Stake
              </button>

              <button
                onClick={() => {
                  dispatch(setStake(null));
                }}
                className=" active:opacity-70 flex-1 w-full  text-sm h-8 rounded bg-red-600 text-white"
              >
                Clear
              </button>
            </div>
            <div className="flex justify-between pb-2 gap-1 mx-2">
              <button
                onClick={handleCancelBet}
                className=" active:opacity-70 flex-1 text-sm h-8 w-full rounded bg-red-600 text-white"
              >
                Reset{" "}
              </button>
              <button
                onClick={handleOrderBets}
                className=" active:opacity-70 flex-1 h-8 w-full border border-green-700 rounded text-sm bg-green-600 text-white"
              >
                Place Bet
              </button>
            </div>
            {loading && (
              <div className="absolute top-0 left-0 flex flex-col gap-1 items-center justify-center w-full h-full z-20 bg-black/30 backdrop-blur-[2px]">
                <div className="relative h-[70px] w-[70px] flex items-center justify-center">
                  <div className="absolute text-lg text-white"></div>
                  <div className="h-[80%] w-[80%] border-4 border-white rounded-full border-dotted border-t-white border-b-oneClickLoadingSpinner border-x-oneClickLoadingSpinner animate-oneClickLoadingSpinnerAnimation" />
                </div>
                <div className="flex flex-col items-center justify-center text-white">
                  <div className="text-sm font-semibold">
                    Your bet is being processed...
                  </div>
                  <div className="text-xs text-suspendedBg">Please wait</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BetSlip;
