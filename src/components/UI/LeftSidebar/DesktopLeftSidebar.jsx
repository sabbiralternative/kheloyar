import { useNavigate } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import SidebarContent from "./SidebarContent";

const DesktopLeftSidebar = () => {
  const navigate = useNavigate();
  const { logo } = useLogo();

  return (
    <div className="hidden xl:block w-full max-w-[224px] h-full">
      <div className="flex flex-col h-full w-full bg-sidebarBg overflow-auto">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-1 cursor-pointer flex-col p-4"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-[31px] object-contain"
            style={{ filter: "invert(var(--invert))" }}
          />
        </div>
        <SidebarContent />
      </div>
    </div>
  );
};

export default DesktopLeftSidebar;
