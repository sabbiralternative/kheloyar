import Banner from "../../components/modules/Home/Banner";
import HomeLinkSLider from "../../components/modules/Home/HomeLinkSLider";
import Banner2 from "../../components/modules/Home/Banner2";
import ExchangeLinkSlider from "../../components/modules/Home/ExchangeLinkSlider";
import ExchangeSports from "../../components/modules/Home/ExchangeSports";
import CasinoSections from "../../components/modules/Home/CasinoSections";
import Footer from "../../components/modules/Home/Footer";
import { useState } from "react";
import WhatsApp from "../../components/modules/Home/WhatsApp";

const Home = () => {
  const [isInPlay, setIsInPlay] = useState(true);
  return (
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1 bg-black pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex flex-col w-full h-full gap-1 md:gap-1">
              <div className="flex flex-col gap-2 md:gap-4">
                <Banner />
                <HomeLinkSLider />
                <Banner2 />
                <div className="flex gap-1 text-[13px] font-bold">
                  <button
                    onClick={() => setIsInPlay(true)}
                    className={`active:opacity-70 px-4 py-1 h-[36px] rounded-[4px] uppercase cursor-pointer   ${isInPlay ? "bg-buttonGradient text-reportsTableHeaderText" : "bg-gray-500 text-white"}`}
                  >
                    Inplay
                  </button>
                  <button
                    onClick={() => setIsInPlay(false)}
                    className={`active:opacity-70 px-4 py-1 h-[36px] rounded-[4px] uppercase cursor-pointer   ${!isInPlay ? "bg-buttonGradient text-reportsTableHeaderText" : "bg-gray-500 text-white"}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
