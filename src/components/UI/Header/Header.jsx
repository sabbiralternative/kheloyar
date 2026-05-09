import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { useLocation, useNavigate } from "react-router-dom";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import { Fragment, useEffect, useState } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import QuickDesktopLink from "./QuickDesktopLink";
import QuickMobileLink from "./QuickMobileLink";
import Unauthorized from "./Unauthorized";
import Authorized from "./Authorized";
import Notification from "./Notification";
import MobileLeftSidebar from "../LeftSidebar/MobileLeftSidebar";

const Header = () => {
  const [showMobileLeftSidebar, setShowMobileLeftSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, showAPKModal, closePopupForForever } =
    useSelector((state) => state?.global);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <Fragment>
      <Notification />
      {Settings.apk_link && showAppPopUp && windowWidth < 1040 && <AppPopup />}
      {Settings.apk_link && showAPKModal && <DownloadAPK />}
      <div className="flex flex-col ">
        <div className="hidden md:block" />
        <div className="flex flex-col">
          <div className="flex justify-between items-center gap-3 bg-sidebarBg h-[52px] md:h-[74px] p-2 md:p-4 lg:rounded-[5px]">
            <div className="flex items-center gap-2">
              <img
                onClick={() => setShowMobileLeftSidebar(true)}
                loading="lazy"
                src="data:image/svg+xml,%3csvg%20width='18'%20height='12'%20viewBox='0%200%2018%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%200H18V2.01562H0V0ZM0%206.98438V5.01562H18V6.98438H0ZM0%2012V9.98438H18V12H0Z'%20fill='white'/%3e%3c/svg%3e"
                alt="Hamburger-Icon"
                className="h-[10px] cursor-pointer block xl:hidden"
              />
              <img
                onClick={() => navigate("/")}
                loading="lazy"
                src={logo}
                alt="Brand-Logo"
                className="object-contain shrink-0 gap-2 w-titleMobWidth md:w-titleWidth cursor-pointer block lg:hidden"
              />
              <QuickDesktopLink />
            </div>
            {token ? <Authorized /> : <Unauthorized />}
          </div>
          <QuickMobileLink />
        </div>
      </div>
      {showMobileLeftSidebar && (
        <MobileLeftSidebar
          setShowMobileLeftSidebar={setShowMobileLeftSidebar}
        />
      )}
    </Fragment>
  );
};

export default Header;
