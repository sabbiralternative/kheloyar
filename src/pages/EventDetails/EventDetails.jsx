import { MatchOdds } from "../../components/modules/EventDetails/MatchOdds";
import { Fancy } from "../../components/modules/EventDetails/Fancy";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetEventDetailsQuery,
  useVideoMutation,
} from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import { HorseGreyhoundEventDetails } from "../../components/modules/EventDetails/HorseGreyhoundEventDetails";
import Score from "../../components/modules/EventDetails/Score";
import { Settings } from "../../api";
import EventTitle from "../../components/modules/EventDetails/EventTitle";
import RightSidebar from "../../components/modules/EventDetails/RightSidebar";
import EventTitleMobile from "../../components/modules/EventDetails/EventTitleMobile";
import { Bookmaker } from "../../components/modules/EventDetails/Bookmaker";
import { useCurrentBets } from "../../hooks/currentBets";
import Premium from "../../components/modules/EventDetails/Premium";

const EventDetails = () => {
  const [tab, setTab] = useState("odds");
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const { eventTypeId, eventId } = useParams();
  const { data: currentBets } = useCurrentBets(eventId);
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

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
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );

  useEffect(() => {
    const handleGetVideo = async () => {
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        casinoCurrency: Settings.casino_currency,
      };
      await sportsVideo(payload).unwrap();
    };
    handleGetVideo();
  }, []);

  return (
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1  pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex md:grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1 h-full w-full ">
              <div className="relative w-full md:col-span-3 lg:col-span-4 xl:col-span-5 pb-[10px] md:pb-0">
                <EventTitle data={data?.result?.[0]} />
                <EventTitleMobile data={data?.result?.[0]} />
                <div className="md:hidden bg-secondary  flex justify-between mt-2">
                  <div className="flex">
                    <div
                      onClick={() => setTab("odds")}
                      className={`font-black   px-2 text-[13px] py-1 cursor-pointer ${tab === "odds" ? "border-t border-t-white" : ""}`}
                    >
                      Odds
                    </div>
                    <div
                      onClick={() => setTab("bet")}
                      className={`font-black   px-2 text-[13px] py-1 cursor-pointer ${tab !== "odds" ? "border-t border-t-white" : ""}`}
                    >
                      Matched Bet ({currentBets?.length})
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className=" "
                      height={25}
                      width={25}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM15 5.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Zm-8.5 6a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5ZM8.584 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm3.58-1.25a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {tab === "odds" && (
                  <Fragment>
                    {eventTypeId == 4 && data?.iscore && (
                      <Score iscore={data?.iscore} />
                    )}
                    {data?.score &&
                      data?.score?.tracker &&
                      data?.score?.tracker !== null && (
                        <div className="w-full overflow-hidden h-[125px]">
                          <iframe
                            id="videoComponent"
                            className="w-full h-auto relative overflow-hidden   bg-transparent"
                            src={data?.score?.tracker}
                            width="100%"
                            allowfullscreen=""
                          ></iframe>
                        </div>
                      )}
                    {iframe?.result?.url && data?.score?.hasVideo && (
                      <iframe
                        id="videoComponent"
                        className="md:hidden w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] bg-transparent"
                        src={iframe?.result?.url}
                        width="100%"
                        allowfullscreen=""
                      ></iframe>
                    )}
                    <div className="flex flex-col gap-1">
                      {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}

                      {bookmaker?.length > 0 && <Bookmaker data={bookmaker} />}
                      {data?.result?.length > 0 && (
                        <Fancy data={data?.result} />
                      )}
                      {eventTypeId == 7 || eventTypeId == 4339 ? (
                        <HorseGreyhoundEventDetails data={data?.result} />
                      ) : null}
                      {tiedMatch?.length > 0 && <MatchOdds data={tiedMatch} />}
                      {data?.premium && data?.premium?.eventId && (
                        <Premium premium={data?.premium} />
                      )}
                    </div>
                  </Fragment>
                )}
                {tab === "bet" && currentBets?.length > 0 && (
                  <table className=" text-black w-full text-[14px]">
                    <thead>
                      <tr className=" text-[#000] bg-neutral-200 text-[14px] font-medium h-[30px]">
                        <th className=" border-r border-[#e0e0e0] text-left pl-2">
                          Market
                        </th>
                        <th className=" border-r border-[#e0e0e0] text-left pl-2">
                          Odds
                        </th>
                        <th className=" border-r border-[#e0e0e0] text-left pl-2">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBets?.map((bet) => {
                        return (
                          <tr
                            key={bet?.betId}
                            className={`h-[30px]   bg-opacity-60 ${bet?.betType === "Back" ? "bg-sky1" : "bg-pink1"}`}
                          >
                            <td className=" pl-2 border-r border-white">
                              {bet?.title}
                            </td>
                            <td className=" pl-2 border-r border-white">
                              {bet?.userRate}
                            </td>
                            <td className=" pl-2 border-r border-white">
                              {bet?.amount}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
              <RightSidebar data={data} iframe={iframe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
