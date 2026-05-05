import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Marquee from "react-fast-marquee";
// import { RxCross2 } from "react-icons/rx";
import { setShowNotification } from "../../../redux/features/global/globalSlice";
import useGetNotification from "../../../hooks/useGetNotification";

const Notification = () => {
  const { notification, isFetchingNotification, isFetched } =
    useGetNotification();

  const dispatch = useDispatch();
  const [filteredNotification, setFilteredNotification] = useState([]);
  const { showNotification } = useSelector((state) => state?.global);

  useEffect(() => {
    const storedNotificationId =
      JSON.parse(localStorage.getItem("notificationId")) || [];
    if (
      (!storedNotificationId || storedNotificationId?.length === 0) &&
      notification?.length > 0
    ) {
      dispatch(setShowNotification(true));

      setFilteredNotification(notification);
    }
    if (
      notification?.length > 0 &&
      storedNotificationId &&
      storedNotificationId?.length > 0 &&
      !showNotification
    ) {
      const filteredNotifications = notification.filter(
        (notif) => !storedNotificationId.some((nId) => nId.id == notif.id),
      );

      if (filteredNotifications?.length > 0) {
        setFilteredNotification(filteredNotifications);
        dispatch(setShowNotification(true));
      }
    }
  }, [
    notification,
    showNotification,
    isFetched,
    isFetchingNotification,
    dispatch,
  ]);

  // const closeNotification = () => {
  //   const notificationIds =
  //     JSON.parse(localStorage.getItem("notificationId")) || [];

  //   notification?.forEach((item) => {
  //     if (!notificationIds.some((notif) => notif.id === item.id)) {
  //       notificationIds.push({ id: item.id });
  //     }
  //   });

  //   localStorage.setItem("notificationId", JSON.stringify(notificationIds));

  //   dispatch(setShowNotification(false));
  // };

  return (
    <>
      {/* {showNotification && filteredNotification?.length > 0 && (
        <div
          style={{
            padding: "2px 5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            fontSize: "11px",
            backgroundColor: "#353535",
          }}
        >
          <Marquee>
            {filteredNotification?.map((item) => (
              <p key={item?.id} className="mr-[100vw] text-white">
                {item?.text}
              </p>
            ))}
          </Marquee>

          <RxCross2
            color="#fff"
            onClick={closeNotification}
            size={20}
            cursor="pointer"
          />
        </div>
      )} */}
      {/* {showNotification && filteredNotification?.length > 0 && ( */}
      <div className="hidden md:block">
        <div className="flex flex-col md:gap-[1px] overflow-hidden">
          <div className="flex items-center px-2 gap-2 text-xs bg-gradient-to-b from-blue10 to-blue11">
            <div className="flex items-center gap-2 mr-4">
              <img
                src="data:image/svg+xml,%3csvg%20width='12'%20height='17'%20viewBox='0%200%2012%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.4141%207.92969C10.4141%208.73698%2010.2122%209.45964%209.80859%2010.0977C9.40495%2010.7357%208.85807%2011.237%208.16797%2011.6016C7.47786%2011.9661%206.75521%2012.1484%206%2012.1484C5.24479%2012.1484%204.52214%2011.9661%203.83203%2011.6016C3.14193%2011.237%202.59505%2010.7357%202.19141%2010.0977C1.78776%209.45964%201.58594%208.73698%201.58594%207.92969H0.179688C0.179688%208.84115%200.401042%209.70052%200.84375%2010.5078C1.28646%2011.3151%201.89193%2011.9857%202.66016%2012.5195C3.42839%2013.0534%204.26823%2013.3854%205.17969%2013.5156V16.25H6.82031V13.5156C7.73177%2013.3854%208.57161%2013.0534%209.33984%2012.5195C10.1081%2011.9857%2010.7135%2011.3151%2011.1562%2010.5078C11.599%209.70052%2011.8203%208.84115%2011.8203%207.92969H10.4141ZM4.98438%202.85156C4.98438%202.5651%205.08203%202.32422%205.27734%202.12891C5.47266%201.93359%205.71354%201.83594%206%201.83594C6.28646%201.83594%206.52734%201.93359%206.72266%202.12891C6.91797%202.32422%207.01562%202.5651%207.01562%202.85156L6.97656%208.00781C6.97656%208.26823%206.88542%208.49609%206.70312%208.69141C6.52083%208.88672%206.28646%208.98438%206%208.98438C5.71354%208.98438%205.47266%208.88672%205.27734%208.69141C5.08203%208.49609%204.98438%208.26823%204.98438%208.00781V2.85156ZM6%2010.4297C6.70312%2010.4297%207.29557%2010.1823%207.77734%209.6875C8.25911%209.19271%208.5%208.60677%208.5%207.92969V2.92969C8.5%202.22656%208.25911%201.63411%207.77734%201.15234C7.29557%200.670573%206.70312%200.429688%206%200.429688C5.29688%200.429688%204.70443%200.670573%204.22266%201.15234C3.74089%201.63411%203.5%202.22656%203.5%202.92969V7.92969C3.5%208.60677%203.74089%209.19271%204.22266%209.6875C4.70443%2010.1823%205.29688%2010.4297%206%2010.4297Z'%20fill='white'/%3e%3c/svg%3e"
                alt="mic-icon"
                className="h-[15px]"
              />
              <div className="text-white">News</div>
              <img
                src="data:image/svg+xml,%3csvg%20width='11'%20height='26'%20viewBox='0%200%2011%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20x='0.00976562'%20width='11'%20height='26'%20fill='url(%23pattern0_4_9952)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_4_9952'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_4_9952'%20transform='scale(0.0815047%200.0344828)'/%3e%3c/pattern%3e%3cimage%20id='image0_4_9952'%20width='11'%20height='29'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAdCAMAAABL/WaSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAASZQTFRFAAAA////////////////////////////bIORYXmGRVpmdo+eSZKSLD5IcIeXXnSEKz1HSV1qcoqZKjxFKj1Fc4ybXnKBKTpDKTtETWJub4aVKDlCKzxFd4+fW259Jjc/UmZya4GQJTY+JjY+LD1FeZOjVnB5JDQ8JTU8Vmp3Z32MIzM6JDM7Lj1Ge5WkWG57IzI5IjE4W3B8Y3mHITA3OktUeJCfIC41IC82IC81Wm97Y3iGHy0zIC40KjlAe5SkVGp3HiwyU2dzZnqIHSswJDI4eZOiU2lzHCkuTF9paH6LGicsGygtHywxdo6dVmdzGiYrRFVfa4OPGSQpGSYrcYmXVmh2FyMnPU1WboaUFyImbIKRVmp2NERKc4uaSW1tZXyIWG13IkjxFQAAAGJ0Uk5TAD5NEBY4OxP/qf/6B///lf//9////3/////w////aP//6P////5Q////3f////46////0P///f/////Q/////jr//93///5Q///n/////2j///D///9////3//+V//oH/6mNF2txAAAAu0lEQVR4nGNgYGBkYmaAAhYmVhiTgY2JHc5m4OBEsLm4eeBsXj5+OFtAUAjOFhYRFYOxxSUkpWBsaWkZWTkoW15eXkERylZSVlZRVYOw1TU01DW1IGxtHR1tXT19MNvA0NDA0MgYzDYBAVMzMNvcwsLSwsoazLaxtbWxs3cAsx2BwMkZYo6Li4urmzuE7eHh4ekFtdfbx9fPH8oOCAgMgrkzOCQ0DMYOj4iE+ysqOgbOjo2Lh7MTEhkwAQBnWxgu4cF1FwAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e"
                alt="right-icon"
                className="h-full"
              />
            </div>
            <div className="text-white w-full md:w-full">
              <div className="flex w-full text-sm text-blue-400 font-bold overflow-hidden">
                <div className="md:w-[100%] w-full md:overflow-hidden">
                  <div className="flex gap-3 text-sm animate-marquee whitespace-nowrap">
                    {filteredNotification?.map((item) => (
                      <p
                        key={item?.id}
                        className="flex gap-1 font-bold text-xs mr-[100vw] "
                      >
                        {item?.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Notification;
