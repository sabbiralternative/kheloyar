import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";

import BetSlip from "./BetSlip";
import toast from "react-hot-toast";
import Ladder from "../../modals/Ladder/Ladder";

export const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (games?.status !== "OPEN") return;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
      };

      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      toast.error("Please login to place a bet.");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <Fragment>
      {ladderData?.length > 0 && (
        <Ladder
          ladderData={ladderData}
          setLadderData={setLadderData}
          marketName={marketName}
        />
      )}
      {fancyData?.length > 0 && (
        <div className="relative flex flex-col w-full">
          <div className="flex flex-col gap-5">
            <div className="w-full">
              <table className="w-full bg-white">
                <thead>
                  <tr className="h-[24px] text-xs font-bold border border-slate-400 bg-slate-300">
                    <th className="w-[60%] text-start capitalize px-2">
                      Fancy
                    </th>
                    <th className="w-[20%] md:w-[10%]">
                      <div className="hidden md:flex items-center justify-center">
                        No
                      </div>
                      <div className="block md:hidden items-center justify-center">
                        NO
                      </div>
                    </th>
                    <th className="w-[20%] md:w-[10%]">
                      <div className="hidden md:flex items-center justify-center">
                        Yes
                      </div>
                      <div className="block md:hidden items-center justify-center">
                        Yes
                      </div>
                    </th>
                    <th className="hidden md:table-cell md:w-[20%] text-[12px] font-sans font-[700] " />
                  </tr>
                </thead>
                <tbody className="w-full">
                  {fancyData?.map((game) => {
                    const pnl = pnlBySelection?.find(
                      (pnl) => pnl?.MarketId === game?.id,
                    );

                    return (
                      <Fragment key={game?.id}>
                        <tr className="border-b border-b-gray13 text-xs h-[43px] relative">
                          <td className="px-2 text-[14px] w-[60%] h-[43px]">
                            <span className=" text-[12px] font-[900] flex justify-between">
                              <span>{game?.name}</span>

                              {pnl ? (
                                <span
                                  onClick={() =>
                                    handleGetLadder(pnl, game?.name)
                                  }
                                  className="col-span-2 md:col-span-2 flex flex-row items-center justify-end"
                                >
                                  <div className="opacity-100 cursor-pointer">
                                    <svg
                                      height="18"
                                      width="18"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g id="63d691358b4e4026f6539708_stairs 1">
                                        <path
                                          id="Vector"
                                          d="M5.21875 3.13672V13.1367"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_2"
                                          d="M5.21875 5.48047H10.5312"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_3"
                                          d="M5.21875 8.13672H10.5312"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_4"
                                          d="M5.21875 11.1055H10.5312"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_5"
                                          d="M10.5312 3.13672V13.1367"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </span>
                              ) : (
                                <span className="col-span-2 md:col-span-2 flex flex-row items-center justify-end">
                                  <div className="opacity-50 cursor-not-allowed">
                                    <svg
                                      height="18"
                                      width="18"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g id="63d691358b4e4026f6539708_stairs 1">
                                        <path
                                          id="Vector"
                                          d="M5.21875 3.13672V13.1367"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_2"
                                          d="M5.21875 5.48047H10.5312"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_3"
                                          d="M5.21875 8.13672H10.5312"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_4"
                                          d="M5.21875 11.1055H10.5312"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                        <path
                                          id="Vector_5"
                                          d="M10.5312 3.13672V13.1367"
                                          stroke="var(--color-text-primary)"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </span>
                              )}
                            </span>
                            {pnl && (
                              <div
                                className={`  ${
                                  pnl?.pnl > 0
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                {pnl?.pnl}
                              </div>
                            )}

                            <div className="text-left text-[10px] md:hidden">
                              <span className="font-extrabold text-blue-700">
                                Min Max{" "}
                              </span>
                              <span className="text-gray-700 font-bold">
                                {game?.minLiabilityPerBet}-
                                {game?.maxLiabilityPerBet}
                              </span>
                            </div>
                          </td>
                          <td
                            colSpan={2}
                            className="relative w-[40%] md:w-[20%] h-[43px] p-0"
                          >
                            <div className="flex w-full h-full">
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.lay?.[0]?.line,
                                    game?.runners?.[0]?.lay?.[0]?.price,
                                  )
                                }
                                className="w-1/2 text-center h-full "
                              >
                                <div
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-pink1"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {game?.runners?.[0]?.lay?.[0]?.line}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {game?.runners?.[0]?.lay?.[0]?.price}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.back?.[0]?.line,
                                    game?.runners?.[0]?.back?.[0]?.price,
                                  )
                                }
                                className="w-1/2 text-center h-full "
                              >
                                <div
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-blue13"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {game?.runners?.[0]?.back?.[0]?.line}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {game?.runners?.[0]?.back?.[0]?.price}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {game?.status !== "OPEN" && (
                              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center text-white  font-sans text-[13px] z-10 pointer-events-none">
                                {game?.status}
                              </div>
                            )}
                          </td>
                          <td className="hidden md:table-cell md:w-[20%] text-[9px] font-[700]">
                            <div className="text-left font-bold pl-8">
                              <div className="text-gray-400 font-medium capitalize">
                                min/max{" "}
                              </div>
                              {game?.minLiabilityPerBet}/
                              {game?.maxLiabilityPerBet}
                            </div>
                          </td>
                        </tr>
                        {game?.id === runnerId && (
                          <BetSlip currentPlaceBetEvent={game} />
                        )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
