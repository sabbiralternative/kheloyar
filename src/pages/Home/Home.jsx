import Banner from "../../components/modules/Home/Banner";
import HomeLinkSLider from "../../components/modules/Home/HomeLinkSLider";
import Banner2 from "../../components/modules/Home/Banner2";
import ExchangeLinkSlider from "../../components/modules/Home/ExchangeLinkSlider";
import ExchangeSports from "../../components/modules/Home/ExchangeSports";
import CasinoSections from "../../components/modules/Home/CasinoSections";
import Footer from "../../components/modules/Home/Footer";
import { useState } from "react";
import WhatsApp from "../../components/modules/Home/WhatsApp";
import MiniGames from "../../components/modules/Home/MiniGames";
import { useSelector } from "react-redux";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [isInPlay, setIsInPlay] = useState(true);

  return (
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1  pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex flex-col w-full h-full gap-1 md:gap-1">
              <div className="flex flex-col gap-2 md:gap-4">
                <Banner />
                <HomeLinkSLider />
                <Banner2 />
                <div className="flex gap-1 text-[13px] font-bold">
                  <button
                    onClick={() => setIsInPlay(true)}
                    className={`active:opacity-70 px-4 py-1 h-[36px] rounded-[4px] uppercase cursor-pointer   ${isInPlay ? "bg-buttonGradient text-reportsTableHeaderText" : "bg-primary "}`}
                  >
                    Inplay
                  </button>
                  <button
                    onClick={() => setIsInPlay(false)}
                    className={`active:opacity-70 px-4 py-1 h-[36px] rounded-[4px] uppercase cursor-pointer   ${!isInPlay ? "bg-buttonGradient text-reportsTableHeaderText" : "bg-primary "}`}
                  >
                    upcoming
                  </button>
                </div>
              </div>
              <ExchangeLinkSlider />
              <div className="flex flex-col gap-2 w-full h-full">
                <ExchangeSports isInPlay={isInPlay} />
                <CasinoSections />
                <Footer />
                <WhatsApp />
                {token && (
                  <div className="fixed bottom-[117px] left-2 w-[48px] h-fit">
                    <img
                      onClick={() => setShowMiniGames(true)}
                      loading="lazy"
                      src="/icon/uv_games-CkYT1PYz.gif"
                      alt="mini-games-gif"
                      className="absolute"
                    />
                  </div>
                )}

                {showMiniGames && (
                  <MiniGames setShowMiniGames={setShowMiniGames} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
