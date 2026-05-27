import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ setShowDropdown }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
  };

  const handleNavigate = (link) => {
    navigate(link);
    setShowDropdown(false);
  };
  return (
    <div
      className="absolute z-50 origin-top-right rounded-md right-0 h-auto w-44 bg-sidebarBg"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 4px 0px" }}
    >
      <div className="flex flex-col pb-2 max-h-[450px] overflow-auto">
        <div className="flex flex-col items-center justify-center h-[50px] p-2 text-sm text-black font-bold bg-primarySvgColor">
          {user}
          {/* <div className="flex text-[10px]">Bonus:0.00</div> */}
        </div>
        <div className="flex flex-col overflow-auto">
          <div
            onClick={() => handleNavigate("/deposit-report")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="black" />
                </clipPath>
              </defs>
            </svg>
            Deposit Report
          </div>
          <div
            onClick={() => handleNavigate("/withdraw-report")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Withdraw Report
          </div>
          <div
            onClick={() => handleNavigate("/open-bets")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Open Bets
          </div>
          <div
            onClick={() => handleNavigate("/betting-profit-loss")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Betting Profit Loss
          </div>
          <div
            onClick={() => handleNavigate("/my-bank-details")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            My Bank Details
          </div>
          <div
            onClick={() => handleNavigate("/affiliate")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Affiliate
          </div>
          <div
            onClick={() => handleNavigate("/promotions")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Promotions
          </div>
          <div
            onClick={() => handleNavigate("/bonus-statement")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Bonus Statement
          </div>
          <div
            onClick={() => handleNavigate("/lossback-bonus")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer "
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19008)">
                <path
                  d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19008">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Lossback Bonus
          </div>
        </div>
        <div
          onClick={handleLogout}
          className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-black bg-primarySvgColor"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon-svg-class-black"
          >
            <g clipPath="url(#clip0_254_19135)">
              <path
                d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_254_19135">
                <rect width={24} height={24} fill="white" />
              </clipPath>
            </defs>
          </svg>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
