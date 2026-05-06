import { MatchOdds } from "../../components/modules/EventDetails/MatchOdds";
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
import EventTitle from "../../components/modules/EventDetails/EventTitle";
import RightSidebar from "../../components/modules/EventDetails/RightSidebar";
import EventTitleMobile from "../../components/modules/EventDetails/EventTitleMobile";

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
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1 bg-black pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex md:grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1 h-full w-full ">
              <div className="relative w-full md:col-span-3 lg:col-span-4 xl:col-span-5 pb-[10px] md:pb-0">
                <EventTitle data={data?.result?.[0]} />
                <EventTitleMobile data={data?.result?.[0]} />

                <div className="flex flex-col gap-1">
                  {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}

                  <Fancy />
                </div>
              </div>
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
