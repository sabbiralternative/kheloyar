import { MatchOdds } from "../../components/modules/EventDetails/MatchOdds";
import { Bookmaker } from "../../components/modules/EventDetails/Bookmaker";
import { Fancy } from "../../components/modules/EventDetails/Fancy";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetEventDetailsQuery,
  useVideoMutation,
} from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";

import { HorseGreyhoundEventDetails } from "../../components/modules/EventDetails/HorseGreyhoundEventDetails";
import Score from "../../components/modules/EventDetails/Score";
import { FaTv } from "react-icons/fa6";
import { Settings } from "../../api";
import OpenBets from "../../components/modals/OpenBets/OpenBets";

const EventDetails = () => {
  const [showOpenBetsModal, setShowOpenBetsModal] = useState(false);
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const [showScore, setShowScore] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const { eventTypeId, eventId } = useParams();
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
    <div className="flex-1 flex white bg-gray1">
      {showOpenBetsModal && (
        <OpenBets setShowOpenBetsModal={setShowOpenBetsModal} />
      )}

      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            <div className="w-full">
              <div className=" ">
                <div className="relative flex flex-col gap-[1px] pb-[65px] md:pb-1 ">
                  <div className="flex flex-col gap-[1px]">
                    <div className="flex flex-col md:gap-[1px] overflow-hidden" />

                    <div className="flex items-center justify-between gap-2 px-2 py-1.5 text-white bg-section-gradient">
                      <div className="flex items-center gap-2">
                        <span className="md:text-[15px] text-[12px] font-medium">
                          {data?.result?.[0]?.eventName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {data?.score?.tracker && (
                          <div
                            onClick={() => setShowScore((prev) => !prev)}
                            className="cursor-pointer"
                          >
                            <img
                              src="/src/assets/img/Score-DC8zPSAW.svg"
                              alt="Live Score"
                              className="h-5 w-5 invert"
                              title="Toggle score"
                            />
                          </div>
                        )}

                        {data?.score?.hasVideo && (
                          <div
                            onClick={() => setShowVideo((prev) => !prev)}
                            className="cursor-pointer"
                          >
                            <FaTv className="h-5 w-5" title="Toggle video" />
                          </div>
                        )}

                        <div
                          onClick={() => setShowOpenBetsModal(true)}
                          className="md:hidden font-[400] active:bg-blue5 rounded-[3px] cursor-pointer flex items-center justify-center"
                          title="Bets"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-receipt w-5 h-5"
                          >
                            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                            <path d="M12 17.5v-11" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {eventTypeId == 4 && data?.iscore && (
                      <Score iscore={data?.iscore} />
                    )}
                    {data?.score &&
                      data?.score?.tracker !== null &&
                      showScore && (
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
                    {iframe?.result?.url &&
                      data?.score?.hasVideo &&
                      showVideo && (
                        <iframe
                          id="videoComponent"
                          className="w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] bg-transparent"
                          src={iframe?.result?.url}
                          width="100%"
                          allowfullscreen=""
                        ></iframe>
                      )}
                    <div />
                  </div>
                  <div className>
                    {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}
                    {bookmaker?.length > 0 && <Bookmaker data={bookmaker} />}
                    {data?.result?.length > 0 && <Fancy data={data?.result} />}
                    {eventTypeId == 7 || eventTypeId == 4339 ? (
                      <HorseGreyhoundEventDetails data={data?.result} />
                    ) : null}
                    {tiedMatch?.length > 0 && <MatchOdds data={tiedMatch} />}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
