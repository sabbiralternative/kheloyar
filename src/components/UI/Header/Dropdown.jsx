import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ setShowDropdown }) => {
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
          Demo User<div className="flex text-[10px]">Bonus:0.00</div>
        </div>
        <div className="flex flex-col overflow-auto">
          <div
            onClick={() => handleNavigate("/deposit-report")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            Deposit Report
          </div>
          <div
            onClick={() => handleNavigate("/withdraw-report")}
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
            className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white"
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
          <div className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white">
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
            My Bets
          </div>
          <div className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_227_18964)">
                <path
                  d="M14.9062 13.0781C15.2188 13.3594 15.5781 13.5 15.9844 13.5C16.3906 13.5 16.7344 13.3594 17.0156 13.0781C17.3281 12.7969 17.4844 12.4375 17.4844 12C17.4844 11.5625 17.3281 11.2031 17.0156 10.9219C16.7344 10.6406 16.3906 10.5 15.9844 10.5C15.5781 10.5 15.2188 10.6406 14.9062 10.9219C14.625 11.2031 14.4844 11.5625 14.4844 12C14.4844 12.4375 14.625 12.7969 14.9062 13.0781ZM12 15.9844V8.01562H21.9844V15.9844H12ZM21 18V18.9844C21 19.5156 20.7969 19.9844 20.3906 20.3906C19.9844 20.7969 19.5156 21 18.9844 21H5.01562C4.45312 21 3.96875 20.8125 3.5625 20.4375C3.1875 20.0312 3 19.5469 3 18.9844V5.01562C3 4.45312 3.1875 3.98438 3.5625 3.60938C3.96875 3.20312 4.45312 3 5.01562 3H18.9844C19.5156 3 19.9844 3.20312 20.3906 3.60938C20.7969 4.01563 21 4.48438 21 5.01562V6H12C11.4375 6 10.9531 6.20312 10.5469 6.60938C10.1719 6.98438 9.98438 7.45312 9.98438 8.01562V15.9844C9.98438 16.5469 10.1719 17.0312 10.5469 17.4375C10.9531 17.8125 11.4375 18 12 18H21Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_227_18964">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            My wallet
          </div>
          <div className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_227_18926)">
                <path
                  d="M17.4844 15H15V11.0156H12.9844V15H10.5L14.0156 18.5156L17.4844 15ZM6.51562 9H9V12.9844H11.0156V9H13.5L9.98438 5.48438L6.51562 9ZM4.92188 4.96875C6.89062 3 9.25 2.01562 12 2.01562C14.75 2.01562 17.0938 3 19.0312 4.96875C21 6.90625 21.9844 9.25 21.9844 12C21.9844 14.75 21 17.1094 19.0312 19.0781C17.0938 21.0156 14.75 21.9844 12 21.9844C9.25 21.9844 6.89062 21.0156 4.92188 19.0781C2.98438 17.1094 2.01562 14.75 2.01562 12C2.01562 9.25 2.98438 6.90625 4.92188 4.96875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_227_18926">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Betting Profit &amp; Loss
          </div>
          <div className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_19011)">
                <path
                  d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19011">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Account Statement
          </div>
          <div className="group flex items-center gap-2 min-h-[48px] text-xs px-2 cursor-pointer text-white">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 icon-svg-class-white group-hover-icon-svg-class-shortcutHeaderLinksText"
            >
              <g clipPath="url(#clip0_229_18985)">
                <path
                  d="M5.01562 18H18.9844V20.0156H5.01562V18ZM18.9844 9L12 15.9844L5.01562 9H9V3H15V9H18.9844Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_18985">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Deposit Turnover
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
