import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGroupQuery } from "../../hooks/group";
import { EVENT_SORT_ORDER } from "../../const";
import HorseGreyhound from "../../components/modules/Home/HorseGreyhound";

const InPlay = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventTypeId = searchParams.get("eventTypeId");
  const eventName = {
    4: "Cricket",
    2: "Tennis",
    1: "Football",
    5: "Kabaddi",
    6: "Politics",
  };
  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) || 0 });

  useEffect(() => {
    if (data) {
      const eventCategories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId),
        ),
      );
      const sortedCategories = eventCategories.sort(
        (a, b) => EVENT_SORT_ORDER[a] - EVENT_SORT_ORDER[b],
      );
      setCategories(sortedCategories);
    }
  }, [data]);

  const navigateGameList = (eventTypeId, key) => {
    navigate(`/event-details/${eventTypeId}/${key}`);
  };

  return (
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1 bg-black pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex flex-col w-full h-full gap-1 md:gap-1">
              <div className="flex w-full min-h-[45px] bg-dashboardGamesTabsBg overflow-auto hide-scrollbar">
                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=0")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "0" ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.585938%2015.8594V18.2031H10H19.4141V15.8594H10H0.585938Z'%20fill='%23DFE7F4'/%3e%3cpath%20d='M10%201.79688H0.585938V4.14062H10H19.4141V1.79688H10Z'%20fill='%23DFE7F4'/%3e%3cpath%20d='M10%201.79688H19.4141V4.14062H10V1.79688Z'%20fill='%23C7CFE1'/%3e%3cpath%20d='M10%2015.8594H19.4141V18.2031H10V15.8594Z'%20fill='%23C7CFE1'/%3e%3cpath%20d='M10%204.14062H1.17188V15.8594H10H18.8281V4.14062H10Z'%20fill='%23FF641A'/%3e%3cpath%20d='M10%204.14062H18.8281V15.8594H10V4.14062Z'%20fill='%23F03800'/%3e%3cpath%20d='M0%2015.2734V18.7891H10H20V15.2734H10H0ZM3.16406%2017.6172H1.17188V16.4453H3.16406V17.6172ZM6.28906%2017.6172H4.33594V16.4453H6.28906V17.6172ZM9.41406%2017.6172H7.46094V16.4453H9.41406V17.6172ZM16.8359%2016.4453H18.8281V17.6172H16.8359V16.4453ZM13.7109%2016.4453H15.6641V17.6172H13.7109V16.4453ZM10.5859%2016.4453H12.5391V17.6172H10.5859V16.4453Z'%20fill='%23404A80'/%3e%3cpath%20d='M10%201.21094H0V4.72656H10H20V1.21094H10ZM3.16406%203.55469H1.17188V2.38281H3.16406V3.55469ZM6.28906%203.55469H4.33594V2.38281H6.28906V3.55469ZM9.41406%203.55469H7.46094V2.38281H9.41406V3.55469ZM12.5391%203.55469H10.5859V2.38281H12.5391V3.55469ZM15.6641%203.55469H13.7109V2.38281H15.6641V3.55469ZM18.8281%203.55469H16.8321V2.38281H18.8281V3.55469Z'%20fill='%23404A80'/%3e%3cpath%20d='M12.5391%203.55469H10.5859V2.38281H12.5391V3.55469ZM15.6641%203.55469H13.7109V2.38281H15.6641V3.55469ZM10%201.21094V4.72656H20V1.21094H10ZM18.8281%203.55469H16.8321V2.38281H18.8281V3.55469Z'%20fill='%23283366'/%3e%3cpath%20d='M20%2015.2734H10V18.7891H20V15.2734ZM12.5391%2017.6172H10.5859V16.4453H12.5391V17.6172ZM15.6641%2017.6172H13.7109V16.4453H15.6641V17.6172ZM18.8281%2017.6172H16.8359V16.4453H18.8281V17.6172Z'%20fill='%23283366'/%3e%3cpath%20d='M10%207.73344L8.24219%206.56165V13.4384L10%2012.2666L13.4%2010L10%207.73344Z'%20fill='%23F0F7FF'/%3e%3cpath%20d='M10%207.73343V12.2666L13.4%209.99999L10%207.73343Z'%20fill='%23DFE7F4'/%3e%3c/svg%3e"
                    alt="Inplay"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    Inplay
                  </span>
                </div>
                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=4")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "4" || eventTypeId === null ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="data:image/webp;base64,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"
                    alt="Cricket"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    Cricket
                  </span>
                </div>
                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=1")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "1" ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="data:image/webp;base64,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"
                    alt="Football"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    Soccer
                  </span>
                </div>
                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=2")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "2" ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="data:image/webp;base64,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"
                    alt="Tennis"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    Tennis
                  </span>
                </div>

                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=7")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "7" ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="/icon/7.svg"
                    alt="Horse Racing"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    Horse Racing
                  </span>
                </div>
                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=4339")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "4339" ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="/icon/4339.svg"
                    alt="Greyhound Racing"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    GreyHound
                  </span>
                </div>

                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=5")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "5" ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_256_520)'%3e%3cpath%20d='M9.27343%200.15625C6.07031%200.386719%203.20702%202.11328%201.46484%204.86328C1.17577%205.32031%200.749994%206.19531%200.554681%206.73828C0.394525%207.17969%200.203118%207.89453%200.0937435%208.47656C0.0117122%208.91406%20-0.0273503%2010.8984%200.0351497%2011.3945C0.16015%2012.3359%200.414056%2013.2695%200.789056%2014.1406C1.26952%2015.2617%201.99999%2016.3359%202.89062%2017.2305C4.20702%2018.5469%205.86327%2019.4766%207.68359%2019.9062C8.07812%2020%208.11327%2020%209.98046%2020C11.8516%2020%2011.8789%2020%2012.2773%2019.9062C14.1094%2019.4727%2015.7227%2018.5664%2017.0703%2017.2266C19.7344%2014.5703%2020.6758%2010.5938%2019.4922%207.00391C18.293%203.36328%2015.0703%200.699219%2011.2891%200.21875C10.6992%200.144531%209.8164%200.117188%209.27343%200.15625ZM9.80468%207.63672V8.00781H7.55859H5.31249V7.66406C5.31249%207.47266%205.32421%207.30469%205.33984%207.29297C5.35156%207.27734%206.36327%207.26562%207.58593%207.26562H9.80468V7.63672ZM14.6406%207.64453L14.6523%208.00781H12.4023H10.1562V7.63672V7.26562L12.3945%207.27344L14.6289%207.28516L14.6406%207.64453ZM5.89843%2010.1562V11.9531H5.60546H5.31249V10.1562V8.35938H5.60546H5.89843V10.1562ZM6.78906%2010.1445L6.77734%2011.9336L6.49609%2011.9453L6.21093%2011.957V10.1562V8.35938H6.5039H6.79687L6.78906%2010.1445ZM9.80468%2010.1562V11.9531H8.45702H7.10937V10.1562V8.35938H8.45702H9.80468V10.1562ZM12.8516%2010.1562V11.9531H11.5039H10.1562V10.1562V8.35938H11.5039H12.8516V10.1562ZM13.75%2010.1562V11.957L13.4687%2011.9453L13.1836%2011.9336L13.1719%2010.1445L13.1641%208.35938H13.457H13.75V10.1562ZM14.6484%2010.1562V11.9531H14.3555H14.0625V10.1562V8.35938H14.3555H14.6484V10.1562ZM9.80468%2012.6367V13.0078H7.55859H5.31249V12.6641C5.31249%2012.4727%205.32421%2012.3047%205.33984%2012.293C5.35156%2012.2773%206.36327%2012.2656%207.58593%2012.2656H9.80468V12.6367ZM14.6406%2012.6445L14.6523%2013.0078H12.4023H10.1562V12.6367V12.2656L12.3945%2012.2734L14.6289%2012.2852L14.6406%2012.6445Z'%20fill='%23FF9800'/%3e%3cpath%20d='M5.35156%207.65625V8.00781H7.57812H9.80469V7.65625V7.30469H7.57812H5.35156V7.65625Z'%20fill='white'/%3e%3cpath%20d='M10.1562%207.65625V8.00781H12.3828H14.6094V7.65625V7.30469H12.3828H10.1562V7.65625Z'%20fill='white'/%3e%3cpath%20d='M5.35156%2010.1562V11.9141H5.60547H5.85938V10.1562V8.39844H5.60547H5.35156V10.1562Z'%20fill='white'/%3e%3cpath%20d='M6.25%2010.1562V11.9141H6.50391H6.75781V10.1562V8.39844H6.50391H6.25V10.1562Z'%20fill='white'/%3e%3cpath%20d='M7.14844%2010.1562V11.9141H8.47656H9.80469V10.1562V8.39844H8.47656H7.14844V10.1562Z'%20fill='white'/%3e%3cpath%20d='M10.1562%2010.1562V11.9141H11.4844H12.8125V10.1562V8.39844H11.4844H10.1562V10.1562Z'%20fill='white'/%3e%3cpath%20d='M13.2031%2010.1562V11.9141H13.457H13.7109V10.1562V8.39844H13.457H13.2031V10.1562Z'%20fill='white'/%3e%3cpath%20d='M14.1016%2010.1562V11.9141H14.3555H14.6094V10.1562V8.39844H14.3555H14.1016V10.1562Z'%20fill='white'/%3e%3cpath%20d='M5.35156%2012.6562V13.0078H7.57812H9.80469V12.6562V12.3047H7.57812H5.35156V12.6562Z'%20fill='white'/%3e%3cpath%20d='M10.1562%2012.6562V13.0078H12.3828H14.6094V12.6562V12.3047H12.3828H10.1562V12.6562Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_256_520'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="Kabaddi"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    kabaddi
                  </span>
                </div>

                <div
                  onClick={() =>
                    navigate("/exchange_sports/in-play/?eventTypeId=6")
                  }
                  className={`flex flex-col items-center justify-center h-[45px] gap-0.5 px-2.5 py-1.5 border border-dashboardGamesTabsBg rounded-md cursor-pointer  hover:bg-buttonGradient  ${eventTypeId === "6" ? "bg-buttonGradient text-black" : ""}`}
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0233%2018.4649L14.7841%2011.1336C14.8004%2010.9768%2014.7494%2010.8205%2014.6439%2010.7034C14.5384%2010.5863%2014.3881%2010.5195%2014.2305%2010.5195H5.76953C5.61189%2010.5195%205.46167%2010.5864%205.35613%2010.7034C5.25059%2010.8205%205.19961%2010.9768%205.21586%2011.1336L5.97593%2018.4649H14.0233V18.4649Z'%20fill='%2361729B'/%3e%3cpath%20d='M14.6439%2010.7034C14.5383%2010.5864%2014.3881%2010.5195%2014.2305%2010.5195H9.99826V18.4649H14.0233L14.7841%2011.1336C14.8004%2010.9768%2014.7494%2010.8205%2014.6439%2010.7034Z'%20fill='%2347568C'/%3e%3cpath%20d='M14.4311%208.90486C14.3836%207.1916%2012.9761%205.81224%2011.2515%205.81224H8.74845C7.0239%205.81224%205.61642%207.1916%205.56888%208.90486H14.4311Z'%20fill='%239999FF'/%3e%3cpath%20d='M9.99826%208.90486H14.4311C14.3835%207.1916%2012.9761%205.81224%2011.2515%205.81224H9.99826V8.90486Z'%20fill='%236680FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.12095%205.77119H10.8788L11.0946%207.934C11.1064%208.05305%2011.066%208.17139%2010.9837%208.25823L9.99977%209.29662L9.01623%208.25823C8.93399%208.17139%208.89354%208.05312%208.90542%207.93411L9.12095%205.77119Z'%20fill='%23FF405C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.0946%207.934L10.8788%205.77119H9.99826V9.29499L9.99978%209.29659L10.9837%208.25819C11.066%208.17139%2011.1065%208.05305%2011.0946%207.934Z'%20fill='%23DB2155'/%3e%3cpath%20d='M3.91406%209.77734C3.60665%209.77734%203.35742%209.52811%203.35742%209.2207V6.84678C3.35742%206.62256%203.49194%206.42028%203.69864%206.33352L4.85067%205.85002C5.13418%205.73097%205.46037%205.86442%205.57935%206.14786C5.69832%206.43134%205.56498%206.75757%205.28151%206.87654L4.47067%207.21683V9.2207C4.4707%209.52811%204.22148%209.77734%203.91406%209.77734Z'%20fill='%23DFE7F4'/%3e%3cpath%20d='M16.0859%209.77735C15.7785%209.77735%2015.5293%209.52812%2015.5293%209.2207V7.21684L14.7185%206.87654C14.435%206.75757%2014.3016%206.43134%2014.4206%206.14786C14.5395%205.86438%2014.8658%205.73109%2015.1493%205.85002L16.3013%206.33352C16.5081%206.42028%2016.6425%206.6226%2016.6425%206.84678V9.2207C16.6426%209.52812%2016.3933%209.77735%2016.0859%209.77735Z'%20fill='%23DFE7F4'/%3e%3cpath%20d='M14.6387%2019.5H5.36133C5.05391%2019.5%204.80469%2019.2508%204.80469%2018.9434C4.80469%2018.6359%205.05391%2018.3867%205.36133%2018.3867H14.6387C14.9461%2018.3867%2015.1953%2018.6359%2015.1953%2018.9434C15.1953%2019.2508%2014.9461%2019.5%2014.6387%2019.5Z'%20fill='%236E80AA'/%3e%3cpath%20d='M16.0859%208.77933H3.91406C3.60665%208.77933%203.35742%208.94127%203.35742%209.14101V10.7781C3.35742%2010.9778%203.60665%2011.1398%203.91406%2011.1398H16.0859C16.3934%2011.1398%2016.6426%2010.9778%2016.6426%2010.7781V9.14101C16.6426%208.94127%2016.3934%208.77933%2016.0859%208.77933Z'%20fill='%233A477B'/%3e%3cpath%20d='M14.6387%2018.3867H9.99826V19.5H14.6387C14.9461%2019.5%2015.1953%2019.2508%2015.1953%2018.9434C15.1953%2018.6359%2014.9461%2018.3867%2014.6387%2018.3867Z'%20fill='%2347568C'/%3e%3cpath%20d='M16.0859%208.77933H9.99826V11.1398H16.0859C16.3934%2011.1398%2016.6426%2010.9778%2016.6426%2010.7781V9.14101C16.6426%208.94127%2016.3934%208.77933%2016.0859%208.77933Z'%20fill='%2329376D'/%3e%3cpath%20d='M7.09385%203.0116C7.07355%203.15068%207.06261%203.29277%207.06261%203.43739C7.06261%205.05707%208.38032%206.37478%2010%206.37478C11.6197%206.37478%2012.9374%205.05707%2012.9374%203.43739C12.9374%203.29277%2012.9264%203.15068%2012.9061%203.0116H7.09385Z'%20fill='%23FFE1BA'/%3e%3cpath%20d='M7.08421%203.08738H12.9158C12.7422%201.63221%2011.5012%200.5%2010%200.5C8.49881%200.5%207.25788%201.63221%207.08421%203.08738Z'%20fill='%23FFE1BA'/%3e%3cpath%20d='M12.9062%203.0116H9.99826V6.37475H10C11.6197%206.37475%2012.9374%205.05703%2012.9374%203.43735C12.9374%203.29274%2012.9264%203.15068%2012.9062%203.0116Z'%20fill='%23FFBFAB'/%3e%3cpath%20d='M9.99826%203.08738H12.9158C12.7422%201.63221%2011.5012%200.5%2010%200.5C9.99941%200.5%209.99885%200.5%209.99826%200.5V3.08738Z'%20fill='%23FFBFAB'/%3e%3c/svg%3e"
                    alt="Politics"
                    className="h-[15px] object-contain"
                  />
                  <span className="text-[10px] md:text-xs font-bold text-nowrap">
                    Politics
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full h-full">
                <div className="flex flex-col gap-1 h-full">
                  {eventTypeId != "7" && eventTypeId != "4339" && (
                    <div className="flex flex-col gap-2 w-full max-w-full">
                      {categories?.map((category) => {
                        const groupedData = Object.entries(data)
                          .filter(
                            ([, value]) =>
                              value.visible === true &&
                              value.eventTypeId === category,
                          )
                          .sort(([, a], [, b]) => {
                            return b.inPlay - a.inPlay;
                          });
                        return (
                          <div key={category} className="flex flex-col">
                            <div className="relative grid grid-cols-6 lg:grid-cols-11 w-full bg-sportsTitleBg border-b-[2px] border-b-sportsTitleBorder text-white text-sm font-semibold min-h-[35px] lg:min-h-[42px] py-1 lg:py-1.5">
                              <div className="col-span-6 lg:col-span-8 flex items-center justify-between gap-2 ps-2 lg:ps-4 pe-6 lg:pe-2">
                                <div className="flex items-center gap-2">
                                  <img
                                    src={`/icon/${category}.webp`}
                                    alt="Cricket"
                                    className="w-4 h-4"
                                  />
                                  {eventName[category]}
                                </div>
                                <div className="flex items-center justify-between gap-2 sm:justify-end px-1 text-[12px]">
                                  <div className="flex items-center gap-0.5 bg-transparent overflow-x-auto scrollbar-hide">
                                    <button className="flex items-center gap-0.5 px-2 sm:px-2 py-0.5 border border-[#F8F9FA] rounded-[25px] transition-colors whitespace-nowrap text-white hover:bg-selectedSidebarBg hover:bg-opacity-10 text-selectedSidebarBg">
                                      <span className="font-bold text-[10px] leading-[1.5em] text-center text-white">
                                        LIVE
                                      </span>
                                    </button>
                                    <button className="flex items-center gap-0.5 px-2 sm:px-2 py-0.5 border border-[#F8F9FA] rounded-[25px] transition-colors whitespace-nowrap text-white hover:bg-selectedSidebarBg hover:bg-opacity-10 text-selectedSidebarBg">
                                      <span className="font-bold text-[10px] leading-[1.5em] text-center text-white">
                                        VIRTUAL
                                      </span>
                                    </button>
                                    <button className="flex items-center gap-0.5 px-2 sm:px-2 py-0.5 border border-[#F8F9FA] rounded-[25px] transition-colors whitespace-nowrap text-white hover:bg-selectedSidebarBg hover:bg-opacity-10 text-selectedSidebarBg">
                                      <span className="font-bold text-[10px] leading-[1.5em] text-center text-white">
                                        PREMIUM
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden lg:flex col-span-2 lg:col-span-1 items-center justify-center">
                                1
                              </div>
                              <div className="hidden lg:flex col-span-2 lg:col-span-1 items-center justify-center">
                                x
                              </div>
                              <div className="hidden lg:flex col-span-2 lg:col-span-1 items-center justify-center">
                                2
                              </div>
                              <img
                                src="data:image/svg+xml,%3csvg%20width='12'%20height='7'%20viewBox='0%200%2012%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.36942%200.191923C6.24638%200.0690286%206.07958%200%205.90567%200C5.73177%200%205.56497%200.0690286%205.44192%200.191923L0.191922%205.44192C0.0690282%205.56497%200%205.73177%200%205.90567C0%206.07958%200.0690282%206.24638%200.191922%206.36942H11.6194C11.7423%206.24638%2011.8113%206.07958%2011.8113%205.90567C11.8113%205.73177%2011.7423%205.56497%2011.6194%205.44192L6.36942%200.191923Z'%20fill='white'/%3e%3c/svg%3e"
                                alt="-"
                                className="absolute top-1.5 lg:top-2.5 end-2 w-3 py-2 hover:w-3.5 cursor-pointer transition-transform"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              {groupedData?.map(([key, value]) => {
                                return (
                                  <div
                                    key={key}
                                    onClick={() =>
                                      navigateGameList(value?.eventTypeId, key)
                                    }
                                    className="flex flex-col gap-0.5"
                                  >
                                    <div className="grid grid-cols-6 lg:grid-cols-11 p-2 bg-eventRowBg rounded-[4px] hover:bg-eventRowHoverBg/50">
                                      <div className="col-span-6 lg:col-span-8 flex gap-2 items-center lg:pe-2">
                                        <div className="flex flex-1 items-center gap-4">
                                          {value?.inPlay === 1 && (
                                            <div className="time-badge hidden lg:flex items-center justify-center text-[10px] font-semibold h-[42px] p-2 rounded-[5px] bg-inplayLabelBg">
                                              <div className="relative z-[1] flex flex-col items-center justify-center leading-[1.1] text-center min-w-[54px]">
                                                <div className="flex flex-col gap-1 text-[8px] font-normal items-center fall-in">
                                                  <span>
                                                    {value?.date?.split(" ")[0]}
                                                  </span>
                                                  <span>
                                                    {value?.date?.split(" ")[1]}
                                                  </span>
                                                </div>
                                              </div>
                                              <svg
                                                className="time-badge__runner"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                aria-hidden="true"
                                              >
                                                <rect
                                                  x={2}
                                                  y={2}
                                                  width={96}
                                                  height={96}
                                                  rx={12}
                                                  ry={12}
                                                  pathLength={100}
                                                />
                                                <rect
                                                  x={2}
                                                  y={2}
                                                  width={96}
                                                  height={96}
                                                  rx={12}
                                                  ry={12}
                                                  pathLength={100}
                                                />
                                              </svg>
                                            </div>
                                          )}
                                          {value?.inPlay === 1 && (
                                            <div className="flex lg:hidden items-center justify-center gap-1 text-[10px] font-semibold">
                                              <svg
                                                width={14}
                                                height={10}
                                                viewBox="0 0 14 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-[10px] live-blink icon-svg-class-primarySvgColor"
                                                aria-label="live"
                                              >
                                                <path
                                                  d="M2.89617 0.195371C2.95815 0.257286 3.00732 0.330812 3.04087 0.411744C3.07442 0.492676 3.09169 0.579427 3.09169 0.667038C3.09169 0.754648 3.07442 0.841399 3.04087 0.922331C3.00732 1.00326 2.95815 1.07679 2.89617 1.1387C1.89579 2.13925 1.3338 3.49617 1.3338 4.91104C1.3338 6.3259 1.89579 7.68283 2.89617 8.68337C2.95984 8.74487 3.01063 8.81843 3.04557 8.89977C3.08051 8.9811 3.0989 9.06858 3.09967 9.1571C3.10044 9.24562 3.08357 9.33341 3.05005 9.41534C3.01653 9.49727 2.96703 9.57171 2.90443 9.6343C2.84183 9.6969 2.7674 9.7464 2.68547 9.77992C2.60354 9.81344 2.51575 9.83031 2.42723 9.82954C2.33871 9.82877 2.25123 9.81038 2.1699 9.77544C2.08856 9.7405 2.015 9.68971 1.9535 9.62604C-0.651167 7.02204 -0.651167 2.79937 1.9535 0.195371C2.07852 0.0703903 2.24806 0.000179927 2.42483 0.000179927C2.60161 0.000179927 2.77115 0.0703903 2.89617 0.195371ZM11.3842 0.195371C13.9882 2.80004 13.9882 7.02204 11.3842 9.62604C11.2592 9.75113 11.0896 9.82144 10.9127 9.82151C10.7359 9.82157 10.5663 9.75138 10.4412 9.62637C10.3161 9.50136 10.2458 9.33179 10.2457 9.15494C10.2456 8.97809 10.3158 8.80846 10.4408 8.68337C11.4412 7.68283 12.0032 6.3259 12.0032 4.91104C12.0032 3.49617 11.4412 2.13925 10.4408 1.1387C10.3157 1.01361 10.2455 0.843947 10.2455 0.667038C10.2455 0.490128 10.3157 0.320465 10.4408 0.195371C10.5659 0.0702772 10.7356 3.4873e-09 10.9125 0C11.0894 -3.48731e-09 11.2591 0.0702772 11.3842 0.195371ZM4.87417 2.11137C4.99915 2.23639 5.06936 2.40593 5.06936 2.5827C5.06936 2.75948 4.99915 2.92902 4.87417 3.05404C4.63147 3.29671 4.43895 3.58481 4.3076 3.9019C4.17625 4.21898 4.10864 4.55883 4.10864 4.90204C4.10864 5.24525 4.17625 5.5851 4.3076 5.90218C4.43895 6.21926 4.63147 6.50736 4.87417 6.75004C4.93606 6.81198 4.98515 6.8855 5.01863 6.96641C5.05212 7.04733 5.06933 7.13404 5.0693 7.22161C5.06927 7.30917 5.05199 7.39587 5.01845 7.47676C4.98492 7.55765 4.93577 7.63114 4.87383 7.69304C4.81189 7.75493 4.73837 7.80402 4.65746 7.8375C4.57654 7.87099 4.48983 7.8882 4.40226 7.88817C4.3147 7.88814 4.228 7.87086 4.14711 7.83732C4.06622 7.80379 3.99273 7.75464 3.93083 7.6927C3.19072 6.95256 2.77493 5.94873 2.77493 4.90204C2.77493 3.85534 3.19072 2.85151 3.93083 2.11137C3.99275 2.04939 4.06627 2.00021 4.14721 1.96666C4.22814 1.93311 4.31489 1.91585 4.4025 1.91585C4.49011 1.91585 4.57686 1.93311 4.65779 1.96666C4.73873 2.00021 4.81225 2.04939 4.87417 2.11137ZM9.51283 2.11137C10.2529 2.85151 10.6687 3.85534 10.6687 4.90204C10.6687 5.94873 10.2529 6.95256 9.51283 7.6927C9.3871 7.81414 9.2187 7.88134 9.0439 7.87982C8.8691 7.8783 8.70189 7.80819 8.57829 7.68458C8.45468 7.56098 8.38457 7.39377 8.38305 7.21897C8.38153 7.04417 8.44873 6.87577 8.57017 6.75004C8.81287 6.50736 9.00539 6.21926 9.13673 5.90218C9.26808 5.5851 9.33569 5.24525 9.33569 4.90204C9.33569 4.55883 9.26808 4.21898 9.13673 3.9019C9.00539 3.58481 8.81287 3.29671 8.57017 3.05404C8.44873 2.9283 8.38153 2.7599 8.38305 2.5851C8.38457 2.41031 8.45468 2.2431 8.57829 2.11949C8.70189 1.99589 8.8691 1.92577 9.0439 1.92425C9.2187 1.92274 9.3871 1.98993 9.51283 2.11137ZM6.72217 3.95804C6.98738 3.95804 7.24174 4.06339 7.42927 4.25093C7.61681 4.43847 7.72217 4.69282 7.72217 4.95804C7.72217 5.22325 7.61681 5.47761 7.42927 5.66514C7.24174 5.85268 6.98738 5.95804 6.72217 5.95804C6.45695 5.95804 6.2026 5.85268 6.01506 5.66514C5.82752 5.47761 5.72217 5.22325 5.72217 4.95804C5.72217 4.69282 5.82752 4.43847 6.01506 4.25093C6.2026 4.06339 6.45695 3.95804 6.72217 3.95804Z"
                                                  fill="#00B181"
                                                />
                                              </svg>
                                              <span className="text-inplayLabelBg live-blink">
                                                LIVE
                                              </span>
                                              <div className="flex items-center gap-0.5 text-eventTimeText">
                                                <span>
                                                  {value?.date?.split(" ")[0]}
                                                </span>{" "}
                                                |{" "}
                                                <span>
                                                  {value?.date?.split(" ")[1]}
                                                </span>
                                              </div>
                                            </div>
                                          )}

                                          <div className="hidden lg:flex flex-col gap-1 text-xs font-semibold">
                                            <div className="flex gap-1 text-white font-bold text-xs leading-[1.2em] hover:underline cursor-pointer truncate">
                                              <span>{value?.player1}</span>
                                              <svg
                                                width={20}
                                                height={20}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 icon-svg-class-vsIcon"
                                              >
                                                <g clipPath="url(#clip0_367_8037)">
                                                  <rect
                                                    width="19.8"
                                                    height="19.8"
                                                    fill="url(#paint0_radial_367_8037)"
                                                  />
                                                  <path
                                                    d="M9.86932 18.0526C7.98176 18.0514 6.15263 17.3978 4.69178 16.2025C3.23093 15.0072 2.22818 13.3436 1.85339 11.4936C1.4786 9.64365 1.75482 7.72099 2.63525 6.05134C3.51569 4.38169 4.9462 3.06771 6.68448 2.33198C8.68294 1.49253 10.9328 1.4802 12.9403 2.29769C14.9479 3.11517 16.5491 4.69571 17.3927 6.69244C18.2362 8.68918 18.2532 10.939 17.4398 12.9482C16.6264 14.9574 15.0492 16.5619 13.0542 17.4096C12.0466 17.836 10.9634 18.0547 9.86932 18.0526ZM11.5211 11.3486L10.3542 11.598C10.4215 11.8699 10.544 12.1251 10.7141 12.3476C10.8841 12.5702 11.0981 12.7555 11.3427 12.892C11.8761 13.1771 12.474 13.3201 13.0787 13.3071C13.7624 13.3367 14.4364 13.1384 14.9951 12.7432C15.2343 12.5647 15.4266 12.3308 15.5555 12.0616C15.6844 11.7924 15.746 11.496 15.7351 11.1977C15.7369 10.7987 15.6144 10.409 15.3845 10.0829C15.1511 9.74774 14.6875 9.49047 14.0027 9.31865L12.8693 9.03441C12.2539 8.88289 11.9417 8.61259 11.9417 8.2335C11.9404 8.11791 11.9665 8.00366 12.0179 7.9001C12.0692 7.79655 12.1444 7.70664 12.2372 7.63774C12.4886 7.46593 12.7903 7.38344 13.0942 7.4035C13.7357 7.4035 14.1496 7.65804 14.3248 8.16107L15.4672 7.87774C15.4052 7.65025 15.2966 7.43813 15.1482 7.25487C14.9998 7.0716 14.815 6.9212 14.6054 6.81319C14.1342 6.55821 13.6053 6.42881 13.0696 6.43744C12.4576 6.41303 11.8564 6.60389 11.3705 6.97683C11.1559 7.14757 10.9842 7.36606 10.8689 7.6149C10.7536 7.86374 10.6981 8.13606 10.7066 8.41016C10.7053 8.70218 10.7695 8.99077 10.8945 9.25471C11.0046 9.49928 11.1772 9.71059 11.3948 9.86744C11.6933 10.0496 12.0201 10.1808 12.3617 10.2556L13.6363 10.589C13.8947 10.6289 14.1313 10.7575 14.3054 10.9526C14.4075 11.1013 14.4621 11.2776 14.4617 11.458C14.4606 11.5832 14.4285 11.7062 14.3685 11.816C14.3084 11.9258 14.2222 12.0192 14.1175 12.0877C13.8246 12.2742 13.4801 12.363 13.1336 12.3417C12.7501 12.361 12.3686 12.2753 12.0302 12.0938C11.8976 12.0125 11.7837 11.9041 11.696 11.7757C11.6082 11.6473 11.5487 11.5017 11.5211 11.3486ZM4.43448 6.53926L6.48993 13.2041H7.71054L9.79569 6.53926H8.79569L7.23296 11.6465L5.70387 6.53926H4.43448Z"
                                                    fill="#FFC21D"
                                                  />
                                                  <path
                                                    d="M16.5874 3.85547L15.7877 3.1091L18.6583 0.249105C18.6583 0.249105 19.1211 -0.276349 19.5802 0.196985C19.6416 0.251592 19.6897 0.319597 19.7207 0.395747C19.7517 0.471896 19.7647 0.554154 19.7589 0.63616C19.753 0.718167 19.7284 0.797724 19.6869 0.868695C19.6454 0.939667 19.5881 1.00015 19.5195 1.04547L16.5874 3.85547Z"
                                                    fill="#FFC21D"
                                                  />
                                                  <path
                                                    d="M3.2119 15.9453L4.01159 16.6917L1.14098 19.5517C1.14098 19.5517 0.678257 20.0771 0.219166 19.6038C0.157706 19.5492 0.109631 19.4812 0.0786371 19.405C0.0476438 19.3289 0.0345678 19.2466 0.0404254 19.1646C0.046283 19.0826 0.0709079 19.0031 0.11241 18.9321C0.153912 18.8611 0.211178 18.8006 0.279776 18.7553L3.2119 15.9453Z"
                                                    fill="#FFC21D"
                                                  />
                                                </g>
                                                <defs>
                                                  <radialGradient
                                                    id="paint0_radial_367_8037"
                                                    cx={0}
                                                    cy={0}
                                                    r={1}
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(9.9 9.9) scale(14.0007)"
                                                  >
                                                    <stop />
                                                    <stop offset="0.166667" />
                                                    <stop offset="0.333333" />
                                                    <stop
                                                      offset="0.5"
                                                      stopOpacity="0.55"
                                                    />
                                                    <stop
                                                      offset="0.666667"
                                                      stopOpacity={0}
                                                    />
                                                    <stop
                                                      offset="0.833333"
                                                      stopOpacity={0}
                                                    />
                                                    <stop
                                                      offset={1}
                                                      stopOpacity={0}
                                                    />
                                                  </radialGradient>
                                                  <clipPath id="clip0_367_8037">
                                                    <rect
                                                      width="19.8"
                                                      height="19.8"
                                                      fill="white"
                                                    />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                              <span>{value?.player2}</span>
                                            </div>
                                            <span>{value?.timeStatus}</span>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                          {value?.isTv === 1 && (
                                            <svg
                                              width={15}
                                              height={14}
                                              viewBox="0 0 15 14"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="h-4 icon-svg-class-primarySvgColor"
                                              aria-label="TV"
                                            >
                                              <path
                                                d="M13.3438 9.3125V1.3125H1.34375V9.3125H13.3438ZM13.3438 0C13.6979 0 14.0104 0.135417 14.2812 0.40625C14.5521 0.65625 14.6875 0.958333 14.6875 1.3125V9.3125C14.6875 9.66667 14.5521 9.97917 14.2812 10.25C14.0104 10.5208 13.6979 10.6562 13.3438 10.6562H8.6875V12H10V13.3125H4.6875V12H6V10.6562H1.34375C0.989583 10.6562 0.677083 10.5208 0.40625 10.25C0.135417 9.97917 0 9.66667 0 9.3125V1.3125C0 0.958333 0.135417 0.65625 0.40625 0.40625C0.677083 0.135417 0.989583 0 1.34375 0H13.3438Z"
                                                fill="#ECB024"
                                              />
                                            </svg>
                                          )}

                                          {value?.isBookmaker === 1 && (
                                            <div className="flex items-center justify-center h-5 w-5 text-white text-[8px] font-black px-2 py-1 rounded-[2px] bg-dashboardGamesTabsBg">
                                              BM
                                            </div>
                                          )}
                                          {value?.isFancy === 1 && (
                                            <div className="flex items-center justify-center h-5 w-5 text-white text-[8px] font-black px-2 py-1 rounded-[2px] bg-dashboardGamesTabsBg">
                                              F
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex lg:hidden flex-col items-center col-span-6 pb-2 w-full gap-1 text-xs font-semibold">
                                        <div className="flex gap-1 text-white font-bold text-xs leading-[1.2em] hover:underline cursor-pointer truncate text-wrap">
                                          <span>{value?.player1}</span>
                                          <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 icon-svg-class-vsIcon"
                                          >
                                            <g clipPath="url(#clip0_367_8037)">
                                              <rect
                                                width="19.8"
                                                height="19.8"
                                                fill="url(#paint0_radial_367_8037)"
                                              />
                                              <path
                                                d="M9.86932 18.0526C7.98176 18.0514 6.15263 17.3978 4.69178 16.2025C3.23093 15.0072 2.22818 13.3436 1.85339 11.4936C1.4786 9.64365 1.75482 7.72099 2.63525 6.05134C3.51569 4.38169 4.9462 3.06771 6.68448 2.33198C8.68294 1.49253 10.9328 1.4802 12.9403 2.29769C14.9479 3.11517 16.5491 4.69571 17.3927 6.69244C18.2362 8.68918 18.2532 10.939 17.4398 12.9482C16.6264 14.9574 15.0492 16.5619 13.0542 17.4096C12.0466 17.836 10.9634 18.0547 9.86932 18.0526ZM11.5211 11.3486L10.3542 11.598C10.4215 11.8699 10.544 12.1251 10.7141 12.3476C10.8841 12.5702 11.0981 12.7555 11.3427 12.892C11.8761 13.1771 12.474 13.3201 13.0787 13.3071C13.7624 13.3367 14.4364 13.1384 14.9951 12.7432C15.2343 12.5647 15.4266 12.3308 15.5555 12.0616C15.6844 11.7924 15.746 11.496 15.7351 11.1977C15.7369 10.7987 15.6144 10.409 15.3845 10.0829C15.1511 9.74774 14.6875 9.49047 14.0027 9.31865L12.8693 9.03441C12.2539 8.88289 11.9417 8.61259 11.9417 8.2335C11.9404 8.11791 11.9665 8.00366 12.0179 7.9001C12.0692 7.79655 12.1444 7.70664 12.2372 7.63774C12.4886 7.46593 12.7903 7.38344 13.0942 7.4035C13.7357 7.4035 14.1496 7.65804 14.3248 8.16107L15.4672 7.87774C15.4052 7.65025 15.2966 7.43813 15.1482 7.25487C14.9998 7.0716 14.815 6.9212 14.6054 6.81319C14.1342 6.55821 13.6053 6.42881 13.0696 6.43744C12.4576 6.41303 11.8564 6.60389 11.3705 6.97683C11.1559 7.14757 10.9842 7.36606 10.8689 7.6149C10.7536 7.86374 10.6981 8.13606 10.7066 8.41016C10.7053 8.70218 10.7695 8.99077 10.8945 9.25471C11.0046 9.49928 11.1772 9.71059 11.3948 9.86744C11.6933 10.0496 12.0201 10.1808 12.3617 10.2556L13.6363 10.589C13.8947 10.6289 14.1313 10.7575 14.3054 10.9526C14.4075 11.1013 14.4621 11.2776 14.4617 11.458C14.4606 11.5832 14.4285 11.7062 14.3685 11.816C14.3084 11.9258 14.2222 12.0192 14.1175 12.0877C13.8246 12.2742 13.4801 12.363 13.1336 12.3417C12.7501 12.361 12.3686 12.2753 12.0302 12.0938C11.8976 12.0125 11.7837 11.9041 11.696 11.7757C11.6082 11.6473 11.5487 11.5017 11.5211 11.3486ZM4.43448 6.53926L6.48993 13.2041H7.71054L9.79569 6.53926H8.79569L7.23296 11.6465L5.70387 6.53926H4.43448Z"
                                                fill="#FFC21D"
                                              />
                                              <path
                                                d="M16.5874 3.85547L15.7877 3.1091L18.6583 0.249105C18.6583 0.249105 19.1211 -0.276349 19.5802 0.196985C19.6416 0.251592 19.6897 0.319597 19.7207 0.395747C19.7517 0.471896 19.7647 0.554154 19.7589 0.63616C19.753 0.718167 19.7284 0.797724 19.6869 0.868695C19.6454 0.939667 19.5881 1.00015 19.5195 1.04547L16.5874 3.85547Z"
                                                fill="#FFC21D"
                                              />
                                              <path
                                                d="M3.2119 15.9453L4.01159 16.6917L1.14098 19.5517C1.14098 19.5517 0.678257 20.0771 0.219166 19.6038C0.157706 19.5492 0.109631 19.4812 0.0786371 19.405C0.0476438 19.3289 0.0345678 19.2466 0.0404254 19.1646C0.046283 19.0826 0.0709079 19.0031 0.11241 18.9321C0.153912 18.8611 0.211178 18.8006 0.279776 18.7553L3.2119 15.9453Z"
                                                fill="#FFC21D"
                                              />
                                            </g>
                                            <defs>
                                              <radialGradient
                                                id="paint0_radial_367_8037"
                                                cx={0}
                                                cy={0}
                                                r={1}
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(9.9 9.9) scale(14.0007)"
                                              >
                                                <stop />
                                                <stop offset="0.166667" />
                                                <stop offset="0.333333" />
                                                <stop
                                                  offset="0.5"
                                                  stopOpacity="0.55"
                                                />
                                                <stop
                                                  offset="0.666667"
                                                  stopOpacity={0}
                                                />
                                                <stop
                                                  offset="0.833333"
                                                  stopOpacity={0}
                                                />
                                                <stop
                                                  offset={1}
                                                  stopOpacity={0}
                                                />
                                              </radialGradient>
                                              <clipPath id="clip0_367_8037">
                                                <rect
                                                  width="19.8"
                                                  height="19.8"
                                                  fill="white"
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                          <span>{value?.player2}</span>
                                        </div>
                                        <span>{value?.timeStatus}</span>
                                      </div>
                                      <div className="col-span-6 lg:col-span-3 flex items-center justify-center gap-2">
                                        <div className="w-full h-[40px] bg-[#43CEED] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                                          <div className="flex flex-col items-center justify-center py-[15px]">
                                            <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                              {value?.[0]?.ex
                                                ?.availableToBack?.[0]?.price ||
                                                "-"}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="w-full h-[40px] bg-[#F796FF] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                                          <div className="flex flex-col items-center justify-center py-[15px]">
                                            <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                              {value?.[0]?.ex
                                                ?.availableToLay?.[0]?.price ||
                                                "-"}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="flex items-center justify-center w-full h-[40px] bg-[#43CEED] rounded-md">
                                          <span className="text-black text-xs font-semibold leading-[1.1000000146719127em] text-center">
                                            {value?.[2]?.ex
                                              ?.availableToBack?.[0]?.price ||
                                              "-"}
                                          </span>
                                        </div>
                                        <div className="flex items-center justify-center w-full h-[40px] bg-[#F796FF] rounded-md">
                                          <span className="text-black text-xs font-semibold leading-[1.1000000146719127em] text-center">
                                            {value?.[2]?.ex?.availableToLay?.[0]
                                              ?.price || "-"}
                                          </span>
                                        </div>
                                        <div className="w-full h-[40px] bg-[#43CEED] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                                          <div className="flex flex-col items-center justify-center py-[15px]">
                                            <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                              {value?.[1]?.ex
                                                ?.availableToBack?.[0]?.price ||
                                                "-"}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="w-full h-[40px] bg-[#F796FF] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                                          <div className="flex flex-col items-center justify-center py-[15px]">
                                            <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                                              {value?.[1]?.ex
                                                ?.availableToLay?.[0]?.price ||
                                                "-"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[2px] bg-eventRowRadialGradient" />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {(eventTypeId === "7" || eventTypeId === "4339") &&
                    data?.length > 0 && (
                      <HorseGreyhound data={data} eventTypeId={eventTypeId} />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPlay;
