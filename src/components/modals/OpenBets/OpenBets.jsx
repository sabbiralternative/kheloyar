import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";

const OpenBets = ({ setShowOpenBetsModal }) => {
  const ref = useRef();

  useCloseModalClickOutside(ref, () => setShowOpenBetsModal(false));
  const { eventId } = useParams();
  const { data } = useCurrentBets(eventId);

  return (
    <div className="m-auto fixed overflow-y-scroll z-[100] inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center pt-2">
      <div
        ref={ref}
        className="bg-white rounded-lg z-[101] shadow-lg w-[90%] max-w-[90%] mx-auto px-4 py-3 relative max-h-[90vh] overflow-y-auto scroll"
      >
        <div className="flex justify-between items-center pb-3">
          <button
            onClick={() => setShowOpenBetsModal(false)}
            className=" active:opacity-70 text-lg text-black"
          >
            <svg
              className="w-5 h-5"
              fill="black"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-scroll h-fit">
          <div className="h-full overflow-auto max-h-[500px]">
            <div className="top-0 z-50 ">
              <div className="bg-blue4 flex justify-between items-center px-[2px] py-[2px] text-white text-sm">
                <div className="text-[12px]">Open Bets</div>
                <div className="cursor-pointer">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.616%2018C4.15533%2018%203.771%2017.846%203.463%2017.538C3.155%2017.23%203.00067%2016.8453%203%2016.384V5.616C3%205.15533%203.15433%204.771%203.463%204.463C3.77167%204.155%204.15567%204.00067%204.615%204H19.385C19.845%204%2020.229%204.15433%2020.537%204.463C20.845%204.77167%2020.9993%205.156%2021%205.616V16.385C21%2016.845%2020.8457%2017.2293%2020.537%2017.538C20.2283%2017.8467%2019.8443%2018.0007%2019.385%2018H15V19.192C15%2019.4247%2014.9233%2019.6173%2014.77%2019.77C14.6167%2019.9227%2014.424%2019.9993%2014.192%2020H9.808C9.576%2020%209.38333%2019.9233%209.23%2019.77C9.07667%2019.6167%209%2019.424%209%2019.192V18H4.616ZM4.616%2017H19.385C19.5383%2017%2019.6793%2016.936%2019.808%2016.808C19.9367%2016.68%2020.0007%2016.5387%2020%2016.384V5.616C20%205.462%2019.936%205.32067%2019.808%205.192C19.68%205.06333%2019.539%204.99933%2019.385%205H4.615C4.46167%205%204.32067%205.064%204.192%205.192C4.06333%205.32%203.99933%205.46133%204%205.616V16.385C4%2016.5383%204.064%2016.6793%204.192%2016.808C4.32%2016.9367%204.461%2017.0007%204.615%2017'%20fill='black'/%3e%3c/svg%3e"
                    className="w-4 h-4 invert"
                  />
                </div>
              </div>
              {data?.length > 0 ? (
                <table className="text-black w-full text-[14px]">
                  <thead>
                    <tr className="text-[#000] bg-neutral-200 text-[14px] font-medium h-[30px]">
                      <th className="border-r text-[11px] border-[#e0e0e0] text-left pl-2">
                        Market
                      </th>
                      <th className="border-r text-[11px] border-[#e0e0e0] text-left pl-2">
                        Odds
                      </th>
                      <th className="border-r text-[11px] border-[#e0e0e0] text-left pl-2">
                        Stake
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((bet) => (
                      <tr
                        key={bet?.betId}
                        className={`h-[30px] border-b-[1px] text-[11px] ${bet?.betType === "Back" ? "bg-blue-400" : "bg-pink1"} bg-opacity-60`}
                      >
                        <td className="pl-2">{bet?.title}</td>
                        <td className="pl-2">{bet?.userRate}</td>
                        <td className="pl-2">{bet?.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex items-center justify-center text-[14px] text-[#757575] bg-neutral-200 h-full pt-7 pb-6">
                  Place bet to see it here.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenBets;
