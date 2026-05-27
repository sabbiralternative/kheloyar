import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";

import toast from "react-hot-toast";
import Ladder from "../../modals/Ladder/Ladder";
import DesktopBetSlip from "./DesktopBetSlip";

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
        <div className="flex lg:flex-row flex-col w-full">
          <div className="w-full flex gap-1">
            <div className="relative w-full flex flex-wrap gap-[0.5rem] items-start max-md:block">
              <div className="bg-eventRowBg w-full flex md:pt-1 gap-1 md:pb-2 text-[12px] md:text-sm overflow-auto hide-scrollbar">
                <span className=" bg-exchMarketTitleBg rounded px-3 md:px-10 py-1 md:pt-0 md:pb-0 capitalize cursor-pointer text-black font-bold text-center w-full md:w-auto text-nowrap">
                  Fancy
                </span>
              </div>
              <div className="columns-1  w-full gap-2">
                <div className="mb-2 break-inside-avoid">
                  <div className="w-full">
                    <table className="w-full border-separate border-spacing-y-[1px]">
                      <thead>
                        <tr>
                          <th className="w-[78%]" />
                          <th className="w-[6%]" />
                          <th className="w-[8%]">
                            <div className="me-[0.5px] text-center text-sm rounded-md text-black bg-fancyNoMarketBg">
                              No
                            </div>
                          </th>
                          <th className="w-[8%]">
                            <div className="ms-[0.5px] text-center text-sm rounded-md text-black bg-fancyYesMarketBg">
                              Yes
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        {fancyData.map((game) => {
                          const pnl = pnlBySelection?.find(
                            (pnl) => pnl?.MarketId === game?.id,
                          );
                          return (
                            <Fragment key={game?.id}>
                              <tr className="border-b bg-sportsTitleBg">
                                <td className="px-2 text-[12px] md:text-[14px] w-[78%] min-w-[150px]">
                                  {game?.name}
                                  {pnl && (
                                    <span
                                      className={`pl-2  ${
                                        pnl?.pnl > 0
                                          ? "text-[#1b891b]"
                                          : "text-[#ff3a3a]"
                                      }`}
                                    >
                                      {pnl?.pnl}
                                    </span>
                                  )}
                                  {pnl && (
                                    <button
                                      onClick={() =>
                                        handleGetLadder(pnl, game?.name)
                                      }
                                      className=" active:opacity-70 ml-1 px-2 bg-[#d45f5f]  rounded"
                                    >
                                      Book
                                    </button>
                                  )}
                                </td>
                                <td className="w-[6%] px-1">
                                  <div className="flex flex-col items-center justify-center text-[9px] md:text-[10px] leading-tight">
                                    <div className="text-gray-400 text-nowrap">
                                      MIN: {game?.minLiabilityPerBet}
                                    </div>
                                    <div className="text-gray-400 text-nowrap">
                                      MAX: {game?.maxLiabilityPerBet}
                                    </div>
                                  </div>
                                </td>
                                <td colSpan={2} className="relative w-[16%]">
                                  <div className="flex">
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
                                      className="w-1/2"
                                    >
                                      <div className="fancy-market-col text-center market-btn w-full ">
                                        <div className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-fancyNoMarketBg border border-fancyNoMarketBorder rounded-md">
                                          <div className="flex flex-col items-center">
                                            <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                              {
                                                game?.runners?.[0]?.lay?.[0]
                                                  ?.line
                                              }
                                            </span>
                                            <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
                                              {
                                                game?.runners?.[0]?.lay?.[0]
                                                  ?.price
                                              }
                                            </div>
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
                                      className="w-1/2"
                                    >
                                      <div className="fancy-market-col text-center market-btn w-full ">
                                        <div className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-fancyYesMarketBg border border-fancyYesMarketBorder rounded-md">
                                          <div className="flex flex-col items-center">
                                            <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                              {
                                                game?.runners?.[0]?.back?.[0]
                                                  ?.line
                                              }
                                            </span>
                                            <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
                                              {
                                                game?.runners?.[0]?.back?.[0]
                                                  ?.price
                                              }
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {game?.status === "SUSPENDED" && (
                                    <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center  bg-opacity-50 z-10">
                                      <span className="text-red-600 font-extrabold text-sm uppercase">
                                        Suspended
                                      </span>
                                    </div>
                                  )}
                                </td>
                              </tr>
                              {game?.id === runnerId && (
                                <tr className="inline-betslip md:hidden">
                                  <td colSpan={4}>
                                    {" "}
                                    <DesktopBetSlip
                                      currentPlaceBetEvent={game}
                                    />
                                  </td>
                                </tr>
                              )}
                            </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
