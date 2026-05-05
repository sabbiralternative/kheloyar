import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Status, EVENT_NAMES, EVENT_SORT_ORDER } from "../../../const";
import Notification from "../../UI/Header/Notification";
import { useGroupQuery } from "../../../hooks/group";

export const GroupSports = () => {
  const navigate = useNavigate();
  const [isInPlay, setIsInPlay] = useState(true);
  const [categories, setCategories] = useState([]);
  const [groupedData, setGroupedData] = useState({});
  const { eventTypeId } = useParams();

  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) });

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

      const grouped = {};
      sortedCategories.forEach((category) => {
        grouped[category] = Object.entries(data)
          .filter(
            ([, value]) =>
              value.eventTypeId === category && value.visible === true,
          )
          .reduce(
            (acc, [key, value]) => {
              if (value.inPlay === 1) {
                acc.inPlay[key] = value;
              } else {
                acc.upcoming[key] = value;
              }
              return acc;
            },
            { inPlay: {}, upcoming: {} },
          );
      });
      setGroupedData(grouped);
    }
  }, [data]);

  const navigateGameList = (eventTypeId, keys) => {
    navigate(`/event-details/${eventTypeId}/${keys}`);
  };

  const OddBox = ({ status, price, type }) => {
    if (status === Status.OPEN) {
      return (
        <div className="h-[34px]">
          <div
            className={`w-full h-full exch-odd-button cursor-pointer flex justify-center items-center text-white ${
              type === "back" ? "bg-blue13" : "bg-pink1"
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="text-[11px] text-black font-[700]">{price}</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center h-[34px]">
        <div
          className={`w-full h-full flex justify-center items-center disabled opacity-60 exch-odd-button ${
            type === "back" ? "bg-blue13" : "bg-pink1"
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 md:h-4 md:w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
      <div className="w-full router-ctn max-md:pb-9">
        <main className="flex w-full">
          <div className="w-full">
            <div>
              <Notification />

              <div className="flex items-center text-sm font-medium my-2 justify-center w-[50%] border border-[#243a48] rounded-md">
                <div
                  onClick={() => setIsInPlay(true)}
                  className={`cursor-pointer flex-1 py-[2px] font-[600] font-sans text-center text-[13px] rounded-sm ${
                    isInPlay ? "bg-gray-700 text-white" : "bg-white text-black"
                  }`}
                >
                  In-play
                </div>
                <div
                  onClick={() => setIsInPlay(false)}
                  className={`cursor-pointer flex-1 py-[2px] font-[600] font-sans text-center text-[13px] rounded-sm ${
                    !isInPlay ? "bg-gray-700 text-white" : "bg-white text-black"
                  }`}
                >
                  UPCOMING
                </div>
              </div>

              {categories?.map((category) => {
                const categoryData = groupedData[category];
                const finalData = isInPlay
                  ? categoryData.inPlay
                  : categoryData.upcoming;

                if (
                  Object.keys(finalData).length === 0 &&
                  eventTypeId !== "0"
                ) {
                  return (
                    <div
                      key={category}
                      className="flex flex-col h-full md:gap-[1px]"
                    >
                      <p className="text-center text-gray-500 py-10">
                        No {isInPlay ? "In-Play" : "Upcoming"} events available
                        for {EVENT_NAMES[category]}
                      </p>
                    </div>
                  );
                }
                if (Object.keys(finalData).length === 0 && eventTypeId === "0")
                  return null;

                return (
                  <div
                    key={category}
                    className="flex flex-col h-full md:gap-[1px]"
                  >
                    <div className="flex flex-col flex-0 md:gap-[1px]">
                      <div className="flex flex-col md:gap-[1px] overflow-hidden" />

                      <div className="flex items-center gap-3 md:mt-0 mt-[2px] py-1 text-xs text-white px-2 justify-between max-md:bg-section-gradient md:bg-goldenYellow md:text-black">
                        <div className="font-bold flex gap-1 items-center">
                          <img
                            src={`/src/assets/img/${category}.svg`}
                            alt={EVENT_NAMES[category]}
                            className="w-5 h-5 object-contain max-md:invert"
                          />
                          {EVENT_NAMES[category]}
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
                              <button className="active:opacity-70 flex justify-center hover:underline items-center gap-1 w-full px-1 py-1 rounded-[2px] text-xs capitalize md:border md:rounded-2xl md:border-black">
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
                    </div>

                    <div className="flex flex-1 overflow-auto">
                      <div className="w-full h-full overflow-auto hide-scrollbar md:pb-1 bg-white">
                        <table className="w-full border-collapse border-b-2 border-gray-800">
                          <thead>
                            <tr className="text-xs text-center border-y bg-gray10 hidden md:table-row">
                              <th className="text-left w-[80%] md:w-[50%] py-1 pl-3" />
                              <th
                                className="w-[14%] hidden md:table-cell font-light"
                                colSpan={2}
                              >
                                1
                              </th>
                              <th
                                className="w-[14%] hidden md:table-cell font-light"
                                colSpan={2}
                              >
                                X
                              </th>
                              <th
                                className="w-[14%] hidden md:table-cell font-light"
                                colSpan={2}
                              >
                                2
                              </th>
                              <th className="w-[20%] md:w-[8%]" />
                            </tr>
                          </thead>
                          <tbody className="bg-white">
                            {Object.entries(finalData).map(([key, value]) => {
                              return (
                                <tr
                                  onClick={() =>
                                    navigateGameList(value?.eventTypeId, key)
                                  }
                                  key={key}
                                  className="border-b border-gray11 text-xs text-center"
                                >
                                  <td className="pl-2 py-1 text-left w-[80%] md:w-[40%] max-md:w-full">
                                    <div className="flex items-center justify-between">
                                      <div className="flex flex-col-reverse md:flex-col gap-0.5">
                                        <div className="flex items-center gap-1.5">
                                          {value?.inPlay === 1 && (
                                            <div className="flex flex-0 h-2 w-2 bg-green1 border border-green2 rounded-full" />
                                          )}

                                          <span className="flex flex-1 text-[12.6px] font-[700] text-[#2789ce] cursor-pointer hover:underline">
                                            {value?.eventName}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-0.5">
                                          <div className="flex gap-1 items-center">
                                            {value?.inPlay === 1 && (
                                              <div className="text-[#508d0e] font-[700]">
                                                In-Play
                                              </div>
                                            )}

                                            {value?.isTv === 1 && (
                                              <img
                                                src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4_15390)'%3e%3crect%20x='0.549805'%20y='0.400391'%20width='18'%20height='18'%20rx='3'%20fill='%231876B2'/%3e%3cg%20clip-path='url(%23clip1_4_15390)'%3e%3cpath%20d='M9.5498%2016.4004C13.4158%2016.4004%2016.5498%2013.2664%2016.5498%209.40039C16.5498%205.5344%2013.4158%202.40039%209.5498%202.40039C5.68381%202.40039%202.5498%205.5344%202.5498%209.40039C2.5498%2013.2664%205.68381%2016.4004%209.5498%2016.4004Z'%20fill='%234AA2DB'/%3e%3cpath%20opacity='0.605'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.5498%202.40039C11.4063%202.40039%2013.1868%203.13789%2014.4996%204.45064C15.8123%205.7634%2016.5498%207.54388%2016.5498%209.40039C16.5498%2011.2569%2015.8123%2013.0374%2014.4996%2014.3501C13.1868%2015.6629%2011.4063%2016.4004%209.5498%2016.4004C7.69329%2016.4004%205.91281%2015.6629%204.60006%2014.3501C3.2873%2013.0374%202.5498%2011.2569%202.5498%209.40039C2.5498%207.54388%203.2873%205.7634%204.60006%204.45064C5.91281%203.13789%207.69329%202.40039%209.5498%202.40039ZM9.5498%203.56706C8.00271%203.56706%206.51898%204.18164%205.42501%205.2756C4.33105%206.36956%203.71647%207.85329%203.71647%209.40039C3.71647%2010.9475%204.33105%2012.4312%205.42501%2013.5252C6.51898%2014.6191%208.00271%2015.2337%209.5498%2015.2337C11.0969%2015.2337%2012.5806%2014.6191%2013.6746%2013.5252C14.7686%2012.4312%2015.3831%2010.9475%2015.3831%209.40039C15.3831%207.85329%2014.7686%206.36956%2013.6746%205.2756C12.5806%204.18164%2011.0969%203.56706%209.5498%203.56706Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.21631%205.90039V12.9004L13.0496%209.40039L7.21631%205.90039Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4_15390'%3e%3crect%20x='0.549805'%20y='0.400391'%20width='18'%20height='18'%20rx='3'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_4_15390'%3e%3crect%20width='14'%20height='14'%20fill='white'%20transform='translate(2.5498%202.40039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                                                alt="in-play-icon"
                                                className="h-[18px] w-[18px]"
                                              />
                                            )}
                                          </div>

                                          {value?.isBookmaker === 1 && (
                                            <div className="flex">
                                              <img
                                                src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.549805%200.400391H16.549805A2%202%200%200%201%2018.549805%202.400391V16.400391A2%202%200%200%201%2016.549805%2018.400391H0.549805V0.400391Z'%20fill='%23226BC3'/%3e%3cg%20clip-path='url(%23clip0_4_15372)'%3e%3cg%20clip-path='url(%23clip1_4_15372)'%3e%3cpath%20d='M11.638%2014.6504C12.149%2014.6504%2012.5958%2014.5005%2012.9796%2014.2012C13.3623%2013.902%2013.6126%2013.5041%2013.7298%2013.0071L14.305%2010.3897C14.3581%2010.1867%2014.3341%209.99364%2014.2332%209.81106C14.1405%209.63713%2013.9987%209.49432%2013.8255%209.40039C14.0384%209.31872%2014.2332%209.18747%2014.4088%209.00489C14.5838%208.82231%2014.6987%208.62922%2014.7518%208.42622L15.327%205.79364C15.4436%205.29664%2015.3777%204.89881%2015.1275%204.59956C14.8766%204.30031%2014.4916%204.15039%2013.9696%204.15039H6.04789L3.71631%2014.6504H11.638ZM10.9986%208.74589H8.69914L9.43414%205.47456H11.7336L10.9986%208.74589ZM9.97664%2013.342H7.67714L8.41214%2010.0549H10.7116L9.97664%2013.342Z'%20fill='%23CAFCFF'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4_15372'%3e%3crect%20width='14'%20height='14'%20fill='white'%20transform='translate(2.5498%202.40039)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_4_15372'%3e%3crect%20width='14'%20height='14'%20fill='white'%20transform='translate(2.5498%202.40039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                                                alt="bookmaker-icon"
                                                className="h-[18px] w-[18px]"
                                              />
                                            </div>
                                          )}
                                          {value?.isFancy === 1 && (
                                            <div className="flex">
                                              <img
                                                src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.549805%200.400391H16.549805A2%202%200%200%201%2018.549805%202.400391V16.400391A2%202%200%200%201%2016.549805%2018.400391H0.549805V0.400391Z'%20fill='%230A92A5'/%3e%3cg%20clip-path='url(%23clip0_4_15397)'%3e%3cg%20clip-path='url(%23clip1_4_15397)'%3e%3cpath%20d='M8.05647%2014.8364L9.1018%209.90374H12.3848L12.6788%208.49907H9.3958L10.1471%204.98741H14.3775L14.6715%203.56641H8.44847C7.9258%203.56641%207.46847%203.72682%207.07647%204.04824C6.68447%204.36907%206.42897%204.79666%206.3088%205.33041L4.2998%2014.8364H8.05647Z'%20fill='%23C5F6EE'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4_15397'%3e%3crect%20width='14'%20height='14'%20fill='white'%20transform='translate(2.5498%202.40039)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_4_15397'%3e%3crect%20width='14'%20height='14'%20fill='white'%20transform='translate(2.5498%202.40039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                                                alt="fancy-icon"
                                                className="h-[18px] w-[18px]"
                                              />
                                            </div>
                                          )}

                                          <span className="text-[11px] text-[#ff0000] md:text-gray5">
                                            {value?.date}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="multi-market-container pr-1 md:hidden">
                                        <div
                                          title="Add To Multi Markets"
                                          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray6 bg-white"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 16 16"
                                            className="h-4 w-4 text-gray-400 md:h-4 md:w-4"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    colSpan={1}
                                    className="md:w-[5%] hidden md:table-cell"
                                  >
                                    <OddBox
                                      status={value?.status}
                                      price={
                                        value?.[0]?.ex?.availableToBack?.[0]
                                          ?.price
                                      }
                                      type="back"
                                    />
                                  </td>
                                  <td
                                    colSpan={1}
                                    className="md:w-[5%] hidden md:table-cell"
                                  >
                                    <OddBox
                                      status={value?.status}
                                      price={
                                        value?.[0]?.ex?.availableToLay?.[0]
                                          ?.price
                                      }
                                      type="lay"
                                    />
                                  </td>
                                  <td className="md:w-[5%] hidden md:table-cell">
                                    <OddBox
                                      status={value?.status}
                                      price={
                                        value?.[2]?.ex?.availableToBack?.[0]
                                          ?.price
                                      }
                                      type="back"
                                    />
                                  </td>
                                  <td className="md:w-[5%] hidden md:table-cell">
                                    <OddBox
                                      status={value?.status}
                                      price={
                                        value?.[2]?.ex?.availableToLay?.[0]
                                          ?.price
                                      }
                                      type="lay"
                                    />
                                  </td>
                                  <td
                                    colSpan={1}
                                    className="md:w-[5%] hidden md:table-cell"
                                  >
                                    <OddBox
                                      status={value?.status}
                                      price={
                                        value?.[1]?.ex?.availableToBack?.[0]
                                          ?.price
                                      }
                                      type="back"
                                    />
                                  </td>
                                  <td
                                    colSpan={1}
                                    className="md:w-[5%] hidden md:table-cell"
                                  >
                                    <OddBox
                                      status={value?.status}
                                      price={
                                        value?.[1]?.ex?.availableToLay?.[0]
                                          ?.price
                                      }
                                      type="lay"
                                    />
                                  </td>
                                  <td className="flex justify-end items-center py-2">
                                    <div className="multi-market-container pr-1 max-md:hidden">
                                      <div
                                        title="Add To Multi Markets"
                                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray6 bg-white"
                                      >
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          strokeWidth={0}
                                          viewBox="0 0 16 16"
                                          className="h-4 w-4 text-gray-400 md:h-4 md:w-4"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354" />
                                        </svg>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}

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
