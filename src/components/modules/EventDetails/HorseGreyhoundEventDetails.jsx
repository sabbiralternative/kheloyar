import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import DesktopBetSlip from "./DesktopBetSlip";

export const HorseGreyhoundEventDetails = ({ data }) => {
  const { eventId } = useParams();
  const { data: exposure } = useExposure(eventId);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { runnerId } = useSelector((state) => state.event);

  const [timeDiff, setTimeDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    if (!data?.[0]?.openDate) return;

    const targetDateStr = data[0].openDate;
    const [date, time] = targetDateStr.split(" ");
    const [day, month, year] = date.split("/");
    const [hour, minute, second] = time.split(":");

    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;

        if (diffInMs <= 0) {
          clearInterval(interval);
          setTimeDiff({ day: 0, hour: 0, minute: 0, second: 0 });
          return;
        }

        const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minute = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setTimeDiff({ day, hour, minute, second });
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

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
        selectedBetName: runner?.horse_name,
        name: games.runners.map((runner) => runner.horse_name),
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
        dispatch(setRunnerId(runner?.id));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLoginModal(true));
    }
  };
  return (
    <Fragment>
      <div className="horse-banner">
        <img
          style={{ width: "100%" }}
          src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
          className="img-fluid"
        />
        <div className="horse-banner-detail">
          <div className="text-success">OPEN</div>
          {timeDiff?.day ||
          timeDiff?.hour ||
          timeDiff?.minute ||
          timeDiff?.second ? (
            <div className="horse-timer">
              <span style={{ display: "flex", gap: "5px" }}>
                {timeDiff?.day > 0 && (
                  <span>
                    {timeDiff?.day} <small>Day</small>
                  </span>
                )}
                {timeDiff?.hour > 0 && (
                  <span>
                    {timeDiff?.hour} <small>Hour</small>
                  </span>
                )}
                {timeDiff?.minute > 0 && (
                  <span>
                    {timeDiff?.minute} <small>Minutes</small>
                  </span>
                )}
                {timeDiff?.hour === 0 && timeDiff?.minute < 60 && (
                  <span>
                    {timeDiff?.second} <small>Seconds</small>
                  </span>
                )}
              </span>
              <span>Remaining</span>
            </div>
          ) : null}

          <div className="time-detail">
            <p>{data?.[0]?.eventName}</p>
            <h5>
              <span>{data?.[0]?.openDate}</span>
              <span>| {data?.[0]?.raceType}</span>
            </h5>
          </div>
        </div>
      </div>
      {data?.map((game) => {
        return (
          <div key={game?.id} className="flex flex-col gap-1">
            <div className="relative">
              <div className="flex justify-between items-center bg-sportsTitleBg  px-2 py-2 min-h-[35px]">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 576 512"
                      className="cursor-pointer h-4 w-4 md:h-5 md:w-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Add To Multi Markets</title>
                      <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-black p-1 lg:p-2 rounded-t-md bg-exchMarketTitleBg">
                    {game?.name?.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-nowrap">
                  <div className="tracking-tighter leading-none">
                    MIN: {game?.minLiabilityPerBet} | MAX:{" "}
                    {game?.maxLiabilityPerBet}
                  </div>
                </div>
                <div className="bg-white w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full flex items-center justify-center cursor-pointer text-black">
                  <p>i</p>
                </div>
                <div className="flex items-center justify-center text-[17px] font-black cursor-pointer">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='13'%20height='1'%20viewBox='0%200%2013%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.500122%200.5C0.500122%200.351852%200.544567%200.231481%200.633455%200.138889C0.722344%200.0462963%200.8379%200%200.980122%200H11.9668C12.109%200%2012.2335%200.0462963%2012.3401%200.138889C12.4468%200.231481%2012.5001%200.351852%2012.5001%200.5C12.5001%200.648148%2012.4468%200.768519%2012.3401%200.861111C12.2335%200.953704%2012.109%201%2011.9668%201H0.980122C0.8379%201%200.722344%200.953704%200.633455%200.861111C0.544567%200.768519%200.500122%200.648148%200.500122%200.5Z'%20fill='white'/%3e%3c/svg%3e"
                    alt="dash"
                    className="w-3 h-3 min-w-3 min-h-3"
                  />
                </div>
              </div>

              <div className="flex flex-col px max-md:max-w-full">
                <table className="w-full text-sm font-medium text-stone-900">
                  <thead>
                    <tr className="text-[10px] md:text-xs font-semibold whitespace-nowrap h-[16px] md:h-[20px]  ">
                      <th className="w-[86%]" />
                      <th className="w-[7%]">BACK</th>
                      <th className="w-[7%]">LAY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {game?.runners?.map((runner) => {
                      return (
                        <Fragment key={runner?.id}>
                          <tr className="justify-between pr-6 mt-2 w-full pl-2 h-[32px] bg-sportsTitleBg relative">
                            <td className="my-auto text-xs font-semibold px-2 flex-[6]  border-b border-black">
                              <div> {runner?.horse_name}</div>
                              <div
                                className="jockey-detail sm-d-none d-md-flex"
                                style={{ display: "flex" }}
                              >
                                {runner?.jocky && (
                                  <span className="jockey-detail-box">
                                    <b>Jockey:</b>
                                    <span style={{ fontWeight: "normal" }}>
                                      {runner?.jocky}
                                    </span>
                                  </span>
                                )}
                                {runner?.trainer && (
                                  <span className="jockey-detail-box">
                                    <b>Trainer:</b>
                                    <span style={{ fontWeight: "normal" }}>
                                      {runner?.trainer}
                                    </span>
                                  </span>
                                )}
                                {runner?.age && (
                                  <span className="jockey-detail-box">
                                    <b>Age:</b>
                                    <span style={{ fontWeight: "normal" }}>
                                      {runner?.age}
                                    </span>
                                  </span>
                                )}
                              </div>
                            </td>
                            <td>
                              <div className="web-view flex flex-row-reverse gap-[1px]">
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "back",
                                      game,
                                      runner,
                                      runner?.back?.[0]?.price,
                                    )
                                  }
                                  className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#43CEED] rounded-md"
                                >
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.back?.[0]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
                                      {runner?.back?.[0]?.size}
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
                                  className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#43CEED] rounded-md"
                                >
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.back?.[1]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
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
                                      runner?.back?.[2]?.price,
                                    )
                                  }
                                  className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#43CEED] rounded-md"
                                >
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.back?.[2]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
                                      {runner?.back?.[2]?.size}
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
                                className="mob-view"
                              >
                                <div className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#43CEED] rounded-md">
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.back?.[0]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
                                      {runner?.back?.[0]?.size}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="web-view flex gap-[1px]">
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "lay",
                                      game,
                                      runner,
                                      runner?.lay?.[0]?.price,
                                    )
                                  }
                                  className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#F796FF] rounded-md"
                                >
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.lay?.[0]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
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
                                  className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#F796FF] rounded-md"
                                >
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.lay?.[1]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
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
                                  className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#F796FF] rounded-md"
                                >
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.lay?.[2]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
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
                                className="mob-view"
                              >
                                <div className="w-[70px] h-[40px] flex items-center justify-center py-3 px-2 cursor-pointer hover:opacity-80 transition-opacity bg-[#F796FF] rounded-md">
                                  <div className="flex flex-col items-center">
                                    <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                      {runner?.lay?.[0]?.price}
                                    </span>
                                    <div className="text-[9px] text-center text-fancyBetsCountText leading-none mt-1">
                                      {runner?.lay?.[0]?.size}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {runner?.status === "SUSPENDED" && (
                                <div className="absolute top-0 right-0 w-[143px] lg:w-[30.5rem] h-full flex items-center justify-center  bg-opacity-50 z-10">
                                  <span className="text-red-600 font-extrabold text-sm uppercase">
                                    Suspended
                                  </span>
                                </div>
                              )}
                            </td>
                          </tr>
                          {runner?.id === runnerId && (
                            <tr className="inline-betslip md:hidden">
                              <td colSpan={3}>
                                {" "}
                                <DesktopBetSlip currentPlaceBetEvent={game} />
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
        );
      })}
    </Fragment>
  );
};
