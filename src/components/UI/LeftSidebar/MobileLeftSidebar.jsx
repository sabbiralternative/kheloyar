import { useLogo } from "../../../context/ApiProvider";
import SidebarContent from "./SidebarContent";

const MobileLeftSidebar = ({ setShowMobileLeftSidebar }) => {
  const { logo } = useLogo();
  return (
    <div className="fixed inset-0 z-50 text-white xl:hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute left-0 top-0 flex gap-0.5 h-full w-[80%] md:w-[30%] lg:w-[20%] shadow-lg">
        <div className="flex flex-col bg-headerBg w-full">
          <div className="flex flex-col h-full w-full bg-sidebarBg overflow-auto">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <img
                  onClick={() => setShowMobileLeftSidebar(false)}
                  src="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.70615%201.70664C10.0968%201.31602%2010.0968%200.681641%209.70615%200.291016C9.31553%20-0.0996094%208.68115%20-0.0996094%208.29053%200.291016L4.9999%203.58477L1.70615%200.294141C1.31553%20-0.0964844%200.681152%20-0.0964844%200.290527%200.294141C-0.100098%200.684766%20-0.100098%201.31914%200.290527%201.70977L3.58428%205.00039L0.293652%208.29414C-0.0969726%208.68476%20-0.0969726%209.31914%200.293652%209.70977C0.684277%2010.1004%201.31865%2010.1004%201.70928%209.70977L4.9999%206.41602L8.29365%209.70664C8.68428%2010.0973%209.31865%2010.0973%209.70928%209.70664C10.0999%209.31602%2010.0999%208.68164%209.70928%208.29102L6.41553%205.00039L9.70615%201.70664Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="cross-icon"
                  className="h-4 w-4 cursor-pointer"
                />
                <img src={logo} alt="logo" className="h-[36px]" />
              </div>
            </div>
            <SidebarContent setSidebar={setShowMobileLeftSidebar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLeftSidebar;
