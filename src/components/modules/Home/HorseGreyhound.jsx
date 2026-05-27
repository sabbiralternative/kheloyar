import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";

const HorseGreyhound = ({ data, eventTypeId }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    data?.[0]?.childs?.[0]?.countryCode,
  );

  useEffect(() => {
    if (data) {
      setSelectedCategory(data?.[0]?.childs?.[0]?.countryCode);
    }
  }, [data]);

  const findChildByCountryCode =
    selectedCategory &&
    data &&
    data?.[0]?.childs?.find((child) => child?.countryCode === selectedCategory);

  const convertToIST = (utc) => {
    return moment(utc).tz("Asia/Kolkata").format("HH:mm");
  };
  const eventName = { 7: "Horse Racing", 4339: "Greyhound Racing" };
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative grid grid-cols-6 lg:grid-cols-11 w-full bg-sportsTitleBg border-b-[2px] border-b-sportsTitleBorder  text-sm font-semibold min-h-[35px] lg:min-h-[42px] py-1 lg:py-1.5">
        <div className="col-span-6 lg:col-span-8 flex items-center justify-between gap-2 ps-2 lg:ps-4 pe-2">
          <div className="flex items-center gap-2">
            <img
              src={`/icon/${eventTypeId}.svg`}
              alt="Horse Racing"
              className="w-4 h-4"
            />
            {eventName[eventTypeId]}
          </div>
        </div>
      </div>
      <div />
      <div className="flex flex-col gap-2 w-full overflow-auto scrollbar-hide">
        <div className="w-full">
          <div className="inline-flex gap-2">
            {data?.map((item) =>
              item?.childs?.map((child) => {
                return (
                  <button
                    onClick={() => setSelectedCategory(child?.countryCode)}
                    key={child?.countryCode}
                    className={`active:opacity-70 flex items-center h-[32px] px-4 py-1 min-w-fit whitespace-nowrap transition-colors cursor-pointer rounded-[8px]  ${
                      child?.countryCode === selectedCategory
                        ? "bg-buttonGradient text-reportsTableHeaderText"
                        : "bg-reportsTableHeaderText"
                    }`}
                  >
                    {child?.countryCode}
                  </button>
                );
              }),
            )}
          </div>
        </div>
      </div>
      {findChildByCountryCode?.childs?.map((child) => {
        return (
          <div
            key={child?.trackName}
            className="flex flex-col gap-2 flex-wrap md:flex-row border-b border-b-reportsTableHeaderText p-2 justify-between w-full"
          >
            <span className="text-xs">{child?.trackName}</span>
            <div className="flex flex-wrap gap-1 text-black justify-start">
              {child?.childs?.map((children) => {
                return (
                  <button
                    key={children?.eventId}
                    onClick={() =>
                      navigate(
                        `/event-details/${eventTypeId}/${children?.eventId}`,
                      )
                    }
                    className=" active:opacity-70 h-5 text-xs text-center  px-2 rounded-full bg-inputPlaceholderText hover:text-reportsTableHeaderText hover:bg-buttonGradient"
                  >
                    {convertToIST(children?.startTime)}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HorseGreyhound;
