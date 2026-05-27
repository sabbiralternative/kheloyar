import { Outlet, useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Settings } from "../api";
import Header from "../components/UI/Header/Header";
import MobileFooter from "../components/UI/MobileFooter/MobileFooter";
import DesktopLeftSidebar from "../components/UI/LeftSidebar/DesktopLeftSidebar";
import Login from "../components/modals/Login/Login";

const MainLayout = () => {
  const [, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const { group, showLoginModal } = useSelector((state) => state.global);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  return (
    <div className="h-full font-poppinsFont">
      {showLoginModal && <Login />}
      <div className="relative flex xl:gap-4 h-full w-full md:pt-4 app-bg ">
        <DesktopLeftSidebar />
        <div className="flex flex-col h-full w-full overflow-auto scrollbar-hide">
          <Header />
          <Outlet />
        </div>
        <MobileFooter />
        <div />
      </div>
    </div>
  );
};

export default MainLayout;
