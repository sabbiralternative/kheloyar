import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

import { useIndexQuery } from "../../hooks";

const AffiliateUserProfitLoss = () => {
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  const toDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const punter_id = params.get("punter_id");
  const { data } = useIndexQuery({
    type: "get_affiliate_pl",
    punter_id,
    from_date: fromDate,
    to_date: toDate,
  });

  const getUniqueDate = Array.from(
    new Set(data?.result?.map((item) => item?.settledTime)),
  );
  return (
    <div className="flex-1 flex white bg-gray1">
      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            <div
              onClick={() => navigate(-1)}
              className="lg:hidden flex flex-col w-fit cursor-pointer text-[12px]"
            >
              <div className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1 relative">
                <div className="app-bg flex-row w-full h-full flex">
                  <div className="w-[34px] h-full flex items-center justify-center">
                    <button
                      className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-8 rounded-sm h-6 flex ml-[4px] items-center justify-center bg-buttonGradient2 active:scale-150 cursor-pointer primary-icon-color"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 7 12"
                        fill="var(--color-iconsColor)"
                      >
                        <path
                          d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                          fill="var(--color-iconsColor)"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <span className="w-full h-full capitalize ml-[4px] flex items-center text-text_Ternary  font-bold  leading-5">
                    <span>Back</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full w-full mt-2">
              {token && getUniqueDate?.length > 0 ? (
                getUniqueDate?.map((date) => {
                  const filterByDate = data?.result?.filter(
                    (item) => item?.settledTime === date,
                  );
                  const totalPnl = filterByDate?.reduce((acc, curr) => {
                    return acc + curr.memberWin;
                  }, 0);
                  return (
                    <div
                      key={date}
                      title="Profit &amp; Loss Statement"
                      className="w-full px-1 my-1.5 cursor-pointer"
                    >
                      <div className="w-full text-black rounded-[4px] flex items-center justify-between px-2.5 py-[9px] bg-primary">
                        <div className="text-xs   font-[600] leading-[140%]">
                          {moment(date).format("Do-MMM-YYYY")}
                        </div>
                        <div className="text-xs   font-[600] flex items-center justify-center leading-[140%]">
                          <span>Total PL</span>
                          <span className="-mt-0.5 ml-1">:</span>
                          <span
                            style={{ textShadow: "1px 1px #000000" }}
                            className={`ml-1 ${
                              totalPnl > 0
                                ? "text-green-500"
                                : totalPnl < 0
                                  ? "text-red-400"
                                  : "text-white"
                            }`}
                          >
                            {totalPnl}
                          </span>
                        </div>
                      </div>
                      {filterByDate?.map((item, i) => {
                        return (
                          <div key={i}>
                            <div
                              title="Cricket - 1.232257782-3066645.FY"
                              className="w-full flex active:scale-95 transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 bg-sidebarBg my-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            >
                              <div className="w-full text-start   text-text_Primary px-2.5 py-2 text-xs font-[550] capitalize flex items-center justify-between">
                                <span> {item?.narration}</span>
                                <span className="text-gray-400">
                                  {" "}
                                  {item?.time}
                                </span>
                              </div>

                              <div className="w-full bg-sidebarBg1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                                <span className="text-text_Ternary w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                                  <span>PL:</span>
                                  <span
                                    className={`font-medium ${
                                      item?.memberWin > 0
                                        ? "text-green-500"
                                        : item?.memberWin < 0
                                          ? "text-red-400"
                                          : "text-black"
                                    } `}
                                  >
                                    ₹ {item?.memberWin}
                                  </span>
                                </span>
                                <span className="text-text_Ternary w-1/2 flex items-center justify-end gap-x-1">
                                  <span>Balance:</span>
                                  <span className={`font-medium `}>
                                    ₹ {item?.balance}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center w-full pt-20">
                  <h2 className="text-base ">
                    No betting profit and loss yet!
                  </h2>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AffiliateUserProfitLoss;
