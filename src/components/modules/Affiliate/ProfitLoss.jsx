import { useState } from "react";
import moment from "moment";
import { useIndexMutation } from "../../../hooks";

const ProfitLoss = () => {
  const from = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  const to = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState(from);
  const [toDate, setToDate] = useState(to);
  const { mutate, data, isSuccess } = useIndexMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      type: "get_affiliate_all_pl",
      from_date: fromDate,
      to_date: toDate,
    });
  };

  const getUniqueDate = Array.from(
    new Set(data?.result?.map((item) => item?.date_added)),
  );
  return (
    <section data-v-81c2ddd8 className="nw-affi-user-wrapper affi-pd-bot">
      <div data-v-81c2ddd8 className>
        <h3 data-v-81c2ddd8 className="nw-affi-heading-text">
          User Profit / Loss
        </h3>
        <form
          onSubmit={handleSubmit}
          data-v-81c2ddd8
          className="typeslabel openbettss affiliate-pl affiliate-report affi-date-filter-form"
        >
          <ul
            style={{ paddingLeft: "0px" }}
            data-v-81c2ddd8
            className="typelabel-main flex-nowrap"
          >
            <li data-v-81c2ddd8>
              <div data-v-81c2ddd8 className="form-group">
                <label data-v-81c2ddd8 className="label-pl12">
                  From Date
                </label>
                <input
                  onChange={(e) => setFromDate(e.target.value)}
                  data-v-81c2ddd8
                  type="date"
                  id="open-bet-from"
                  className="form-control"
                  value={fromDate}
                />
              </div>
            </li>
            <li data-v-81c2ddd8>
              <div data-v-81c2ddd8 className="form-group">
                <label data-v-81c2ddd8 className="label-pl12">
                  To Date
                </label>
                <input
                  onChange={(e) => setToDate(e.target.value)}
                  data-v-81c2ddd8
                  type="date"
                  id="open-bet-from"
                  className="form-control"
                  value={toDate}
                />
              </div>
            </li>
          </ul>
          <div data-v-81c2ddd8 className="download-main">
            <button
              className="nw-affi-add-new-user-btn"
              data-bs-target="#AfAddNewUser"
              data-bs-toggle="modal"
              data-v-4c49d924
            >
              <span data-v-4c49d924>Submit</span>
            </button>
          </div>
        </form>
        {getUniqueDate?.length > 0 &&
          getUniqueDate?.map((date) => {
            const filterByDate = data?.result?.filter(
              (item) => item?.date_added === date,
            );
            const totalPnl = filterByDate?.reduce((acc, curr) => {
              return acc + Number(curr.amount);
            }, 0);
            return (
              <div
                key={date}
                title="Profit &amp; Loss Statement"
                className="w-full px-1 my-1.5 cursor-pointer"
              >
                <div className="w-full text-black rounded-[4px] flex items-center justify-between px-2.5 py-[9px] bg-primary">
                  <div className="text-xs   font-medium leading-[140%]">
                    {moment(date).format("Do-MMM-YYYY")}
                  </div>
                  <div className="text-xs   font-medium flex items-center justify-center leading-[140%]">
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
                        className="w-full flex active:scale-95 transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 bg-bg_Quaternary my-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                      >
                        <div className="w-full bg-bg_Quaternary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                          <span className="text-text_Ternary w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                            <span className={`font-medium  `}>
                              {item?.event_type_id}
                            </span>
                          </span>
                          <span className="text-text_Ternary w-1/2 flex items-center justify-end gap-x-1">
                            <span>Amount:</span>
                            <span
                              className={`font-medium ${
                                item?.amount > 0
                                  ? "text-green-500"
                                  : item?.amount < 0
                                    ? "text-red-400"
                                    : "text-black"
                              }`}
                            >
                              ₹ {item?.amount}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        {isSuccess && getUniqueDate?.length === 0 && (
          <div className="flex items-center justify-center w-full pt-20">
            <h2 className="text-base ">No betting profit and loss yet!</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfitLoss;
