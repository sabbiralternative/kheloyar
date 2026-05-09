import { useSelector } from "react-redux";
import DesktopBetSlip from "./DesktopBetslip";

const RightSidebar = ({ data, iframe }) => {
  const { placeBetValues } = useSelector((state) => state?.event);
  return (
    <div className="relative md:col-span-2 hidden md:block">
      <div className="flex flex-col px-1 pb-2 rounded-lg bg-betsInfoBg sticky top-4">
        <div className="border-b-[2px] border-b-sportsTitleBorder" />

        <div className="w-full border-b-[2px] border-b-sportsTitleBorder">
          {/* <div className="h-fit text-nowrap rounded px-2 py-1 text-white">
            <FaTv />
          </div> */}
          {iframe?.result?.url && data?.score?.hasVideo && (
            <iframe
              id="videoComponent"
              className="w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] bg-transparent"
              src={iframe?.result?.url}
              width="100%"
              allowfullscreen=""
            ></iframe>
          )}
        </div>
        <div className="w-full border-b-[2px] border-b-sportsTitleBorder">
          <div className="h-fit text-nowrap rounded px-2 py-1 text-white">
            Place Bet
          </div>
          {placeBetValues && <DesktopBetSlip />}
        </div>
        <div className="w-full border-b-[2px] border-b-sportsTitleBorder">
          <div className="h-fit text-nowrap rounded px-2 py-1 text-white">
            My Bets (0)
          </div>
          <div className="flex items-center justify-center text-[14px] text-[#757575] bg-neutral-200 h-full pt-7 pb-6 ">
            Place bet to see it here
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
