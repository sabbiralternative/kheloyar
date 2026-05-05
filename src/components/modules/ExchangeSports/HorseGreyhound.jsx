import { useNavigate, useParams } from "react-router-dom";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useEffect, useState } from "react";
import moment from "moment-timezone";
import images from "../../../assets/images";
import Notification from "../../UI/Header/Notification";

const HorseGreyhound = () => {
  const { eventTypeId } = useParams();
  const { data } = useGroupQuery(
    { sportsType: eventTypeId },
    {
      pollingInterval: 1000,
    },
  );
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
    <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
      <div className="w-full router-ctn max-md:pb-9">
        <main className="flex w-full">
          <div className="w-full">
            <div className=" ">
              <div className="flex flex-col min-h-screen">
                <Notification />
                <div className="flex flex-col flex-1 gap-[1px]">
                  <div className="flex flex-col md:gap-[1px] overflow-hidden" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 md:mt-0 mt-[2px] py-1 text-xs text-white px-2 justify-between max-md:bg-section-gradient md:bg-goldenYellow md:text-black">
                      <div className="font-bold flex gap-1 items-center">
                        <img
                          src={
                            eventTypeId == 7
                              ? images.horseRacing
                              : images.greyhoundRacing
                          }
                          alt="Horse Racing"
                          className="w-5 h-5 object-contain max-md:invert"
                        />{" "}
                        {eventName[eventTypeId]}
                      </div>
                      <div className="flex flex-row items-end gap-2">
                        <div className="flex items-center gap-2">
                          <p className="flex gap-1 items-center justify-center md:border-black border rounded-full px-2 py-[3px] cursor-pointer border-white">
                            <span>-</span>
                            <span>Live</span>
                          </p>
                          <p className="flex gap-1 items-center justify-center md:border-black border rounded-full px-2 py-[2px] min-w-20 cursor-pointer border-white">
                            <span>-</span>
                            <span>Virtual</span>
                          </p>
                          <p className="flex gap-1 items-center justify-center md:border-black border rounded-full px-2 py-[2px] min-w-20 cursor-pointer border-white">
                            <span>-</span>
                            <span>Premium</span>
                          </p>
                        </div>
                        <div className="relative max-md:hidden">
                          <div className="relative">
                            <button className=" active:opacity-70 flex justify-center hover:underline items-center gap-1 w-full px-1 py-1 rounded-[2px] text-xs capitalize md:border md:rounded-2xl md:border-black">
                              <img
                                src="data:image/svg+xml,%3csvg%20width='9'%20height='10'%20viewBox='0%200%209%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.98799%205.28125V9.21875C6.00361%209.39062%205.95674%209.52734%205.84736%209.62891C5.73799%209.73047%205.61689%209.78125%205.48408%209.78125C5.35127%209.78125%205.23018%209.73438%205.1208%209.64062L4.13643%208.63281C4.01143%208.50781%203.95674%208.36719%203.97236%208.21094V5.28125L1.08955%201.60156C0.995801%201.49219%200.960645%201.36719%200.984082%201.22656C1.00752%201.08594%201.07002%200.976562%201.17158%200.898438C1.27314%200.820312%201.37861%200.78125%201.48799%200.78125H8.47236C8.58174%200.78125%208.68721%200.820312%208.78877%200.898438C8.89033%200.976562%208.95283%201.08594%208.97627%201.22656C8.99971%201.36719%208.96455%201.49219%208.8708%201.60156L5.98799%205.28125Z'%20fill='white'/%3e%3c/svg%3e"
                                alt="chevron-down"
                                className="h-4 w-4"
                              />
                              View by
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:hidden">
                      <div className="bg-gray-300 rounded-md flex w-[75%]">
                        <div className="text-nowrap text-center w-full text-[13px] rounded-md py-2 font-medium bg-white text-blue-500 m-0.5">
                          By Time
                        </div>
                        <div className="bg-gray-300 text-nowrap text-center w-full text-[13px] rounded-md py-2 font-medium bg-gray-300">
                          By Competition
                        </div>
                      </div>
                    </div>
                    <div className="flex bg-blue4">
                      {data?.map((item) =>
                        item?.childs?.map((child) => {
                          return (
                            <button
                              onClick={() =>
                                setSelectedCategory(child?.countryCode)
                              }
                              key={child?.countryCode}
                              className={`active:opacity-70  rounded-t-[4px] py-2 px-3 ${
                                child?.countryCode === selectedCategory
                                  ? "bg-white"
                                  : ""
                              }`}
                            >
                              {child?.countryCode}
                            </button>
                          );
                        }),
                      )}
                    </div>
                  </div>
                  {findChildByCountryCode?.childs?.map((child) => {
                    return (
                      <div
                        key={child?.trackName}
                        className="flex flex-col flex-wrap md:flex-row border-b border-b-gray21 bg-gray20 p-2 justify-between w-full"
                      >
                        <div className="flex items-center font-robotoCondensed text-[14px] font-normal leading-[15px] mb-2 md:mb-0 mr-4">
                          <img
                            className="mr-2"
                            src="data:image/svg+xml,%3csvg%20width='15'%20height='13'%20viewBox='0%200%2015%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_33_3066)'%3e%3cpath%20d='M13.875%200.5H1.125C0.826631%200.5%200.540483%200.618526%200.329505%200.829505C0.118526%201.04048%200%201.32663%200%201.625L0%209.125C0%209.42337%200.118526%209.70952%200.329505%209.9205C0.540483%2010.1315%200.826631%2010.25%201.125%2010.25H6.75V11H2.625C2.52554%2011%202.43016%2011.0395%202.35984%2011.1098C2.28951%2011.1802%202.25%2011.2755%202.25%2011.375V12.125C2.25%2012.2245%202.28951%2012.3198%202.35984%2012.3902C2.43016%2012.4605%202.52554%2012.5%202.625%2012.5H12.375C12.4745%2012.5%2012.5698%2012.4605%2012.6402%2012.3902C12.7105%2012.3198%2012.75%2012.2245%2012.75%2012.125V11.375C12.75%2011.2755%2012.7105%2011.1802%2012.6402%2011.1098C12.5698%2011.0395%2012.4745%2011%2012.375%2011H8.25V10.25H13.875C14.1734%2010.25%2014.4595%2010.1315%2014.6705%209.9205C14.8815%209.70952%2015%209.42337%2015%209.125V1.625C15%201.32663%2014.8815%201.04048%2014.6705%200.829505C14.4595%200.618526%2014.1734%200.5%2013.875%200.5ZM13.5%208.75H1.5V2H13.5V8.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_33_3066'%3e%3crect%20width='15'%20height='12'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                            alt="TV"
                          />
                          <span>{child?.trackName}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-black">
                          {child?.childs?.map((children) => {
                            return (
                              <button
                                key={children?.eventId}
                                onClick={() =>
                                  navigate(
                                    `/event-details/${eventTypeId}/${children?.eventId}`,
                                  )
                                }
                                className=" active:opacity-70 bg-gray-400 px-3 py-1 rounded text-black "
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
              </div>
              <div className="h-[1px] mt-10 bg-black3 mx-2" />
              <div className="flex flex-wrap mt-3 font-sans justify-center w-full text-[14px]  text-black  text-center gap-y-2">
                <span className="cursor-pointer text-right px-3">
                  Privacy Policy
                </span>
                <span className="border-l border-black2 px-3 cursor-pointer text-right">
                  Terms And Conditions
                </span>
                <span className="border-l border-black2 px-3 cursor-pointer text-left">
                  Rules And Regulations
                </span>
                <span className="border-l border-black2 px-3 cursor-pointer">
                  About Us
                </span>
                <span className="border-l border-black2 px-3 cursor-pointer">
                  Responsible Gaming
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HorseGreyhound;
