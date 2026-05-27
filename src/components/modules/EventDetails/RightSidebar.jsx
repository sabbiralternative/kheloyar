import { useSelector } from "react-redux";
import DesktopBetSlip from "./DesktopBetslip";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";

const RightSidebar = ({ data, iframe }) => {
  const { placeBetValues } = useSelector((state) => state?.event);
  const { eventId } = useParams();
  const { data: currentBets } = useCurrentBets(eventId);

  return (
    <div className="relative md:col-span-2 hidden md:block">
      <div className="flex flex-col px-1 pb-2 rounded-lg bg-betsInfoBg sticky top-4">
        <div className="border-b-[2px] border-b-sportsTitleBorder" />

        <div className="w-full border-b-[2px] border-b-sportsTitleBorder">
          {/* <div className="h-fit text-nowrap rounded px-2 py-1 ">
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
          <div className="h-fit text-nowrap rounded px-2 py-1 ">Place Bet</div>
          {placeBetValues && <DesktopBetSlip />}
        </div>
        <div className="w-full border-b-[2px] border-b-sportsTitleBorder">
          <div className="h-fit text-nowrap rounded px-2 py-1 ">
            My Bets ({currentBets?.length})
          </div>
          {currentBets?.length > 0 && (
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

          {currentBets?.length === 0 && (
            <div className="flex items-center justify-center text-[14px] text-[#757575] bg-neutral-200 h-full pt-7 pb-6 ">
              Place bet to see it here
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
