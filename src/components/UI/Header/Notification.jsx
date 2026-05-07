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
      {showNotification && filteredNotification?.length > 0 && (
        <div className="hidden md:block">
          <div className="flex flex-col md:gap-[1px] overflow-hidden">
            <div className="flex items-center px-2 gap-2 text-xs bg-gradient-to-b from-blue10 to-blue11">
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
      )}
    </>
  );
};

export default Notification;
