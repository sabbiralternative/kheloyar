import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import BetSlip from "./BetSlip";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import { isGameSuspended } from "../../../utils/isOddSuspended";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";
import SpeedCashOut from "../../modals/SpeedCashOut/SpeedCashOut";

export const MatchOdds = ({ data }) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { windowWidth } = useSelector((state) => state.global);
  const { data: exposure } = useExposure(eventId);

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
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
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
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
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
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

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }
    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }
    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <Fragment>
      {speedCashOut && (
        <SpeedCashOut
          speedCashOut={speedCashOut}
          setSpeedCashOut={setSpeedCashOut}
        />
      )}
      {data?.length > 0 &&
        data?.map((game) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === game?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === game?.id && profit?.speedCashOut,
          );

          return (
            <div key={game?.id} className="relative flex flex-col w-full">
              <div className="flex items-center justify-between w-full bg-blue4 px-2 py-1.5 text-xs text-white font-bold">
                <div className="flex items-center w-full">
                  <span title="Add To Multi Markets">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="multi-add-icon cursor-pointer h-[100%] text-white hidden md:block"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354" />
                    </svg>
                    <img
                      src="data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4_278)'%3e%3cg%20clip-path='url(%23clip1_4_278)'%3e%3cg%20clip-path='url(%23clip2_4_278)'%3e%3cpath%20d='M11.1299%2022.7305C5.05436%2022.7305%200.129883%2017.806%200.129883%2011.7305C0.129883%205.65495%205.05436%200.730469%2011.1299%200.730469C17.2054%200.730469%2022.1299%205.65495%2022.1299%2011.7305C22.1299%2017.806%2017.2054%2022.7305%2011.1299%2022.7305ZM11.1299%2021.8505C16.7179%2021.8505%2021.2499%2017.3185%2021.2499%2011.7305C21.2499%206.14247%2016.7179%201.61047%2011.1299%201.61047C5.54188%201.61047%201.00988%206.14247%201.00988%2011.7305C1.00988%2017.3185%205.54188%2021.8505%2011.1299%2021.8505ZM15.6091%2011.2218C17.0224%2011.6759%2017.7299%2012.2162%2017.7299%2013.149C17.7299%2013.4773%2017.6709%2013.6911%2017.5539%2013.7914C17.4351%2013.8926%2017.1992%2013.9437%2016.8464%2013.9437H12.0715L11.3587%2020.9731H10.887L10.1874%2013.9437H5.41252C5.06052%2013.9437%204.82292%2013.8865%204.70588%2013.7729C4.58884%2013.6603%204.52988%2013.4526%204.52988%2013.1499C4.52988%2012.2171%205.2374%2011.6768%206.65068%2011.2227C6.72988%2011.2227%206.80908%2011.1963%206.88828%2011.147C7.31948%2010.9957%207.59404%2010.7563%207.71196%2010.4289L8.77148%205.96647V5.77639C8.77148%205.57399%208.57612%205.41119%208.18364%205.28535L8.12468%205.24751H8.06572C7.59404%205.12167%207.3582%204.90695%207.3582%204.60511C7.3582%204.25135%207.4374%204.03135%207.59404%203.94247C7.75244%203.85447%208.02524%203.81047%208.41948%203.81047H13.8403C14.2336%203.81047%2014.5091%203.85447%2014.6657%203.94247C14.8224%204.03047%2014.9016%204.25047%2014.9016%204.60423C14.9016%204.90695%2014.6657%205.12167%2014.194%205.24663H14.1351L14.0761%205.28535C13.6836%205.41119%2013.4865%205.57575%2013.4865%205.77639V5.96559L14.5478%2010.4272C14.6657%2010.7545%2014.9403%2010.9939%2015.3724%2011.1453C15.4516%2011.1954%2015.5308%2011.2209%2015.61%2011.2209L15.6091%2011.2218Z'%20fill='%237E97A7'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4_278'%3e%3crect%20width='22'%20height='22'%20fill='white'%20transform='translate(0.129883%200.730469)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_4_278'%3e%3crect%20width='22'%20height='22'%20fill='white'%20transform='translate(0.129883%200.730469)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_4_278'%3e%3crect%20width='22'%20height='22'%20fill='white'%20transform='translate(0.129883%200.730469)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      alt="multipin"
                      className="w-5 h-5 md:hidden cursor-pointer"
                    />
                  </span>
                  <div className="ml-2 flex items-center gap-2">
                    <div className="capitalize">
                      {" "}
                      {game?.name?.toUpperCase()}
                    </div>
                    <div className="cursor-pointer">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='15'%20height='14'%20viewBox='0%200%2015%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.15625%204.82031H6.84375V3.47656H8.15625V4.82031ZM8.15625%2010.1641H6.84375V6.16406H8.15625V10.1641ZM7.5%200.164062C6.625%200.164062%205.77604%200.330729%204.95312%200.664062C4.13021%200.997396%203.40625%201.47656%202.78125%202.10156C2.15625%202.72656%201.67708%203.45052%201.34375%204.27344C1.01042%205.09635%200.84375%205.94531%200.84375%206.82031C0.84375%207.69531%201.01042%208.54427%201.34375%209.36719C1.67708%2010.1901%202.15625%2010.9141%202.78125%2011.5391C3.40625%2012.1641%204.13021%2012.6432%204.95312%2012.9766C5.77604%2013.3099%206.625%2013.4766%207.5%2013.4766C8.375%2013.4766%209.22396%2013.3099%2010.0469%2012.9766C10.8698%2012.6432%2011.5938%2012.1641%2012.2188%2011.5391C12.8438%2010.9141%2013.3229%2010.1901%2013.6562%209.36719C13.9896%208.54427%2014.1562%207.69531%2014.1562%206.82031C14.1562%205.94531%2013.9896%205.09635%2013.6562%204.27344C13.3229%203.45052%2012.8438%202.72656%2012.2188%202.10156C11.5938%201.47656%2010.8698%200.997396%2010.0469%200.664062C9.22396%200.330729%208.375%200.164062%207.5%200.164062Z'%20fill='white'/%3e%3c/svg%3e"
                        alt="info-icon"
                        className="h-[13px] w-[13px] min-w-[13px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Settings.cashout &&
                    game?.runners?.length !== 3 &&
                    game?.status === "OPEN" &&
                    !speedCashOut && (
                      <button
                        onClick={() =>
                          handleCashOutPlaceBet(
                            game,
                            "lay",
                            dispatch,
                            pnlBySelection,
                            token,
                            teamProfitForGame,
                          )
                        }
                        style={{
                          cursor: `${
                            !teamProfitForGame ? "not-allowed" : "pointer"
                          }`,
                          opacity: `${!teamProfitForGame ? "0.6" : "1"}`,
                        }}
                        className={`active:opacity-70 px-2 tracking-wide text-white font-bold leading-none relative overflow-hidden text-[11px] transition-all duration-150 ease-in-out rounded-md text-center flex items-center justify-center flex-row h-[26px]  shadow-[0_2px_6px_rgba(0,0,0,0.35)] border border-white/20 loss ${
                          teamProfitForGame?.profit > 0
                            ? "bg-bg_cashOutBtnGrd"
                            : "bg-bg_color_clearBtn"
                        }`}
                      >
                        <span className="text-white whitespace-nowrap">
                          CASHOUT
                          {/* {teamProfitForGame?.profit?.toString()?.length >
                            2 && <br className="lg:hidden" />} */}
                          {teamProfitForGame?.profit &&
                            `(${teamProfitForGame.profit.toFixed(0)})`}
                        </span>
                      </button>
                    )}

                  {Settings.cashout &&
                    game?.runners?.length !== 3 &&
                    game?.status === "OPEN" &&
                    game?.name !== "toss" &&
                    speedCashOut && (
                      <button
                        onClick={() =>
                          setSpeedCashOut({
                            ...speedCashOut,
                            market_name: game?.name,
                            event_name: game?.eventName,
                          })
                        }
                        disabled={isGameSuspended(game)}
                        className=" active:opacity-70 loss-cut-btn px-2 tracking-wide text-white font-bold leading-none relative overflow-hidden text-[11px] transition-all duration-150 ease-in-out rounded-md text-center flex items-center justify-center flex-row h-[26px] cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.35)] border border-white/20"
                        style={{ background: "#82371b" }}
                      >
                        <span className="text-white whitespace-nowrap">
                          Speed Cashout
                        </span>
                      </button>
                    )}
                </div>
              </div>
              <div className="flex flex-col bg-white border border-solid border-neutral-200 max-md:max-w-full">
                <table className="w-full text-[14px] font-medium [&_td]:p-[0.2px] [&_th]:p-0">
                  <thead>
                    <tr className="border-b border-b-gray13 h-[25px]">
                      <th className="w-[60%] md:hidden bg-blue17" colSpan={1}>
                        <span className="text-blue18 text-[8px]">Min/Max</span>{" "}
                        <span className="text-[9px]">
                          {game?.minLiabilityPerBet}-{game?.maxLiabilityPerBet}
                        </span>
                      </th>
                      <th className="md:w-[40%] hidden md:table-cell" />
                      <th className="md:w-[10%] hidden md:table-cell" />
                      <th className="md:w-[10%] hidden md:table-cell" />
                      <th className="w-[20%] md:w-[10%]">
                        <div
                          className="h-full md:block hidden"
                          style={{
                            backgroundImage: 'url("data:image/png',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          Back
                        </div>
                        <div className="h-full md:hidden block">Back</div>
                      </th>
                      <th className="w-[20%] md:w-[10%]">
                        <div
                          className="h-full md:block hidden"
                          style={{
                            backgroundImage: 'url("data:image/png',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          Lay
                        </div>
                        <div className="h-full md:hidden block">Lay</div>
                      </th>
                      <th
                        className="w-[20%] bg-blue17 hidden md:table-cell"
                        colSpan={2}
                      >
                        <span className="text-blue18 text-[8px]">Min/Max</span>{" "}
                        <span className="text-[9px]">100-10K</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {game?.runners?.map((runner) => {
                      const pnl = pnlBySelection?.find(
                        (pnl) => pnl?.RunnerId === runner?.id,
                      );
                      const predictOddValues = predictOdd?.find(
                        (val) => val?.id === runner?.id,
                      );
                      return (
                        <Fragment key={runner?.id}>
                          <tr className="border-b border-b-gray13 h-[43px]">
                            <td className="text-start pl-2 w-[60%] md:w-[40%] h-[43px] hover:bg-[#eeeeee]">
                              <div className="flex items-center gap-1 h-full pl-2">
                                <div className="flex text-[11px] font-[700] items-center h-full">
                                  {runner?.name}
                                </div>
                                {pnl && (
                                  <div
                                    className={`text-[11px]  ${
                                      pnl?.pnl > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                    }`}
                                  >
                                    {pnl?.pnl}
                                  </div>
                                )}
                                {stake && runnerId && predictOddValues && (
                                  <div
                                    className={`text-[11px]  ${
                                      predictOddValues?.exposure > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                    }`}
                                  >
                                    » {predictOddValues?.exposure}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td
                              className="w-[20%] md:w-[30%] h-[43px]"
                              colSpan={windowWidth > 500 ? 3 : 1}
                            >
                              <div
                                className="hidden md:flex md:flex-row-reverse h-full"
                                style={{
                                  background:
                                    "linear-gradient(90deg, rgba(130, 183, 221, 0.15) 0%, rgba(130, 183, 221, 0.8) 65%)",
                                }}
                              >
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "back",
                                      game,
                                      runner,
                                      runner?.back?.[2]?.price,
                                    )
                                  }
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-blue13"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.back?.[2]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.back?.[2]?.size}
                                    </div>
                                  </div>
                                </div>

                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "back",
                                      game,
                                      runner,
                                      runner?.back?.[1]?.price,
                                    )
                                  }
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-blue16"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.back?.[1]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.back?.[1]?.size}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "back",
                                      game,
                                      runner,
                                      runner?.back?.[0]?.price,
                                    )
                                  }
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-blue15"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.back?.[0]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.back?.[0]?.size}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    game,
                                    runner,
                                    runner?.back?.[0]?.price,
                                  )
                                }
                                className="flex md:hidden h-full w-full"
                              >
                                <div
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-blue13"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.back?.[0]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.back?.[0]?.size}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td
                              className="w-[20%] md:w-[30%] h-[43px] relative"
                              colSpan={windowWidth > 500 ? 3 : 1}
                            >
                              <div
                                className="hidden md:flex h-full"
                                style={{
                                  background:
                                    "linear-gradient(270deg, rgba(231, 170, 184, 0.15) 5%, rgba(231, 170, 184, 0.8) 60%)",
                                }}
                              >
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "lay",
                                      game,
                                      runner,
                                      runner?.lay?.[0]?.price,
                                    )
                                  }
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-pink1"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.lay?.[0]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.lay?.[0]?.size}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "lay",
                                      game,
                                      runner,
                                      runner?.lay?.[1]?.price,
                                    )
                                  }
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-pink2"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.lay?.[1]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.lay?.[1]?.size}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "lay",
                                      game,
                                      runner,
                                      runner?.lay?.[2]?.price,
                                    )
                                  }
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-pink3"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.lay?.[2]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.lay?.[2]?.size}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    game,
                                    runner,
                                    runner?.lay?.[0]?.price,
                                  )
                                }
                                className="flex md:hidden h-full w-full"
                              >
                                <div
                                  className="w-full h-full  exch-odd-button cursor-pointer flex justify-center items-center  
              text-white bg-pink1"
                                >
                                  <div className="flex flex-col justify-center items-center gap-1  undefined ">
                                    <div className="text-[11px] text-black font-[700]">
                                      {runner?.lay?.[0]?.price}
                                    </div>
                                    <div className="text-[10px] text-[#292929] leading-none ">
                                      {runner?.lay?.[0]?.size}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {runner?.status !== "OPEN" && (
                                <div className="absolute top-0 bottom-0 left-[-100%] w-[200%] bg-black bg-opacity-25 z-10 flex items-center justify-center pointer-events-none">
                                  <span className="text-white text-[11px]">
                                    {runner?.status}
                                  </span>
                                </div>
                              )}
                            </td>
                          </tr>
                          {runner?.id === runnerId && (
                            <BetSlip currentPlaceBetEvent={game} />
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};
