import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { logout } from "../../../redux/features/auth/authSlice";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const SidebarContent = ({ setSidebar }) => {
  const { valueByLanguage } = useLanguage();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [showSportsLinks, setShowSportsLinks] = useState(false);
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      if (Settings.casino_currency !== "AED") {
        navigate(`/casino/${name}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: name, gameId: id });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  return (
    <div className="flex-1 ">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className>
        <Link
          onClick={() => {
            if (setSidebar) {
              setSidebar(false);
            }
          }}
          className
          to="/"
        >
          <div className="flex items-center gap-2 w-full text-left transition-colors  h-[44px] p-3 false hover:bg-dashboardGamesTabsBg">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-svg-class-signupHereText"
            >
              <g clipPath="url(#clip0_229_18991)">
                <path
                  d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_18991">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs font-semibold ">
              {" "}
              {languageValue(valueByLanguage, LanguageKey.HOME)}
            </span>
          </div>
        </Link>
      </div>
      <div className>
        <div
          onClick={() => setShowSportsLinks(!showSportsLinks)}
          className="flex items-center justify-between w-full p-3 text-left transition-colors h-[44px] cursor-pointer hover:bg-dashboardGamesTabsBg"
        >
          <div className="flex items-center gap-2 flex-1 ">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-svg-class-signupHereText"
            >
              <g clipPath="url(#clip0_433_6)">
                <path
                  d="M9.00125 4.66577C8.37874 4.66577 7.77709 4.7566 7.20794 4.92493C7.28794 5.1591 7.33211 5.40825 7.33211 5.66742C7.33211 6.94741 6.27878 7.99913 4.99954 7.99913C4.50788 7.99913 4.05039 7.8433 3.67288 7.57913C3.16705 8.36579 2.82956 9.26995 2.71289 10.2424L9.33277 16.8605V16.3338C9.33277 15.4747 9.94277 14.7189 10.7944 14.5522C11.2736 14.4589 11.9511 14.3305 12.6669 14.2205V5.83982C12.3786 5.62565 12.0627 5.45565 11.7444 5.29149C11.3852 5.22733 11.0536 5.16566 10.7894 5.114C10.4961 5.0565 10.2344 4.92566 10.0144 4.74817C9.68442 4.69484 9.3461 4.66651 9.0011 4.66651L9.00125 4.66577Z"
                  fill="url(#paint0_linear_433_6)"
                />
                <path
                  d="M2.67198 11.1448C2.69865 12.1615 2.96531 13.1523 3.45448 14.038C3.56781 14.2439 3.53615 14.5789 3.39032 14.7247L0.388748 17.7263C-0.129583 18.2446 -0.129583 19.0929 0.388748 19.6112C0.907078 20.1296 1.75624 20.1296 2.27372 19.6112L5.27529 16.6097C5.42112 16.4638 5.75611 16.4322 5.9611 16.5455C6.84609 17.0347 7.83776 17.3005 8.8543 17.3272L2.67111 11.144L2.67198 11.1448Z"
                  fill="url(#paint1_linear_433_6)"
                />
                <path
                  d="M4.99931 4.00165C4.08265 4.00165 3.3335 4.7508 3.3335 5.66747C3.3335 6.58413 4.08265 7.33328 4.99931 7.33328C5.91598 7.33328 6.66513 6.58413 6.66513 5.66747C6.66513 4.7508 5.91598 4.00165 4.99931 4.00165Z"
                  fill="url(#paint2_linear_433_6)"
                />
                <path
                  d="M13.3354 5.54169V14.1248C13.9188 14.0507 14.5004 13.9982 15.0013 13.9982C15.5021 13.9982 16.0838 14.0499 16.6671 14.124V5.54171C16.0829 5.61587 15.5013 5.66754 15.0013 5.66754C14.5004 5.66754 13.9196 5.61669 13.3354 5.54169Z"
                  fill="url(#paint3_linear_433_6)"
                />
                <path
                  d="M14.9994 0C13.8111 0 11.9244 0.343335 10.9228 0.539152C10.3853 0.644151 9.99951 1.12165 9.99951 1.6658V3.33411C9.99951 3.87661 10.3812 4.35409 10.9178 4.45909C11.9178 4.65492 13.8095 4.99993 15.0004 4.99993C16.1887 4.99993 18.0762 4.65659 19.0778 4.46077C19.6152 4.35577 20.0002 3.87827 20.0002 3.33413V1.66582C20.0002 1.12332 19.6186 0.645838 19.0819 0.540837C18.0819 0.345005 16.1902 0 14.9994 0ZM14.9994 14.6657C13.8111 14.6657 11.9244 15.0115 10.9228 15.2073C10.3853 15.3123 9.99951 15.7898 9.99951 16.334V18.3348C9.99951 18.8773 10.3812 19.3539 10.9178 19.4589C11.9178 19.6548 13.8095 19.9998 15.0004 19.9998C16.1887 19.9998 18.0762 19.6548 19.0778 19.4589C19.6152 19.3539 20.0002 18.8789 20.0002 18.3348V16.334C20.0002 15.7915 19.6186 15.3115 19.0819 15.2073C18.0819 15.0115 16.1902 14.6657 14.9994 14.6657Z"
                  fill="url(#paint4_linear_433_6)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_433_6"
                  x1="2.71289"
                  y1="10.7631"
                  x2="12.6668"
                  y2="10.7631"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_433_6"
                  x1="-0.00000245229"
                  y1="15.572"
                  x2="8.85423"
                  y2="15.572"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_433_6"
                  x1="3.3335"
                  y1="5.66746"
                  x2="6.6651"
                  y2="5.66746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_433_6"
                  x1="13.3354"
                  y1="9.83326"
                  x2="16.6671"
                  y2="9.83326"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_433_6"
                  x1="9.99951"
                  y1="9.99987"
                  x2="20.0002"
                  y2="9.99987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <clipPath id="clip0_433_6">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs font-semibold ">Sports</span>
          </div>
          <img
            src="data:image/svg+xml,%3csvg%20width='10'%20height='8'%20viewBox='0%200%2010%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.46885%207.00937L0.218848%202.75937C-0.0749023%202.46563%20-0.0749023%201.99062%200.218848%201.7L0.925098%200.99375C1.21885%200.7%201.69385%200.7%201.98447%200.99375L4.99697%204.00625L8.00947%200.99375C8.30322%200.7%208.77822%200.7%209.06885%200.99375L9.7751%201.7C10.0688%201.99375%2010.0688%202.46875%209.7751%202.75937L5.5251%207.00937C5.2376%207.30312%204.7626%207.30312%204.46885%207.00937Z'%20fill='white'/%3e%3c/svg%3e"
            alt="chevron"
            style={{ filter: "invert(1)" }}
            className={`h-3 w-3 transition-transform  ${showSportsLinks ? "rotate-180" : ""}`}
          />
        </div>
        {showSportsLinks && (
          <div className="bg-sidebarBg">
            <Link
              onClick={() => {
                if (setSidebar) {
                  setSidebar(false);
                }
              }}
              className
              to="/exchange_sports/in-play/?eventTypeId=4"
            >
              <div className="flex items-center gap-2 w-full pl-10 pr-3 py-2 text-left transition-colors h-[40px] hover:bg-dashboardGamesTabsBg/50">
                <img
                  src="data:image/webp;base64,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"
                  alt="cricket"
                  className="h-4 w-4"
                />
                <span className="text-sm font-medium ">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.CRICKET)}
                </span>
              </div>
            </Link>
            <Link
              onClick={() => {
                if (setSidebar) {
                  setSidebar(false);
                }
              }}
              className
              to="/exchange_sports/in-play/?eventTypeId=1"
            >
              <div className="flex items-center gap-2 w-full pl-10 pr-3 py-2 text-left transition-colors h-[40px] hover:bg-dashboardGamesTabsBg/50">
                <img
                  src="data:image/webp;base64,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"
                  alt="soccer"
                  className="h-4 w-4"
                />
                <span className="text-sm font-medium ">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
                </span>
              </div>
            </Link>
            <Link
              onClick={() => {
                if (setSidebar) {
                  setSidebar(false);
                }
              }}
              className
              to="/exchange_sports/in-play/?eventTypeId=2"
            >
              <div className="flex items-center gap-2 w-full pl-10 pr-3 py-2 text-left transition-colors h-[40px] hover:bg-dashboardGamesTabsBg/50">
                <img
                  src="data:image/webp;base64,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"
                  alt="tennis"
                  className="h-4 w-4"
                />
                <span className="text-sm font-medium ">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.TENNIS)}
                </span>
              </div>
            </Link>
            <Link
              onClick={() => {
                if (setSidebar) {
                  setSidebar(false);
                }
              }}
              className
              to="/exchange_sports/in-play/?eventTypeId=7"
            >
              <div className="flex items-center gap-2 w-full pl-10 pr-3 py-2 text-left transition-colors h-[40px] hover:bg-dashboardGamesTabsBg/50">
                <img src="/icon/7.svg" alt="horse_racing" className="h-4 w-4" />
                <span className="text-sm font-medium ">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.HORSE)}
                </span>
              </div>
            </Link>
            <Link
              onClick={() => {
                if (setSidebar) {
                  setSidebar(false);
                }
              }}
              className
              to="/exchange_sports/in-play/?eventTypeId=4339"
            >
              <div className="flex items-center gap-2 w-full pl-10 pr-3 py-2 text-left transition-colors h-[40px] hover:bg-dashboardGamesTabsBg/50">
                <img src="/icon/4339.svg" alt="greyhound" className="h-4 w-4" />
                <span className="text-sm font-medium ">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
                </span>
              </div>
            </Link>

            <Link
              onClick={() => {
                if (setSidebar) {
                  setSidebar(false);
                }
              }}
              className
              to="/exchange_sports/in-play/?eventTypeId=5"
            >
              <div className="flex items-center gap-2 w-full pl-10 pr-3 py-2 text-left transition-colors h-[40px] hover:bg-dashboardGamesTabsBg/50">
                <img
                  src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_256_520)'%3e%3cpath%20d='M9.27343%200.15625C6.07031%200.386719%203.20702%202.11328%201.46484%204.86328C1.17577%205.32031%200.749994%206.19531%200.554681%206.73828C0.394525%207.17969%200.203118%207.89453%200.0937435%208.47656C0.0117122%208.91406%20-0.0273503%2010.8984%200.0351497%2011.3945C0.16015%2012.3359%200.414056%2013.2695%200.789056%2014.1406C1.26952%2015.2617%201.99999%2016.3359%202.89062%2017.2305C4.20702%2018.5469%205.86327%2019.4766%207.68359%2019.9062C8.07812%2020%208.11327%2020%209.98046%2020C11.8516%2020%2011.8789%2020%2012.2773%2019.9062C14.1094%2019.4727%2015.7227%2018.5664%2017.0703%2017.2266C19.7344%2014.5703%2020.6758%2010.5938%2019.4922%207.00391C18.293%203.36328%2015.0703%200.699219%2011.2891%200.21875C10.6992%200.144531%209.8164%200.117188%209.27343%200.15625ZM9.80468%207.63672V8.00781H7.55859H5.31249V7.66406C5.31249%207.47266%205.32421%207.30469%205.33984%207.29297C5.35156%207.27734%206.36327%207.26562%207.58593%207.26562H9.80468V7.63672ZM14.6406%207.64453L14.6523%208.00781H12.4023H10.1562V7.63672V7.26562L12.3945%207.27344L14.6289%207.28516L14.6406%207.64453ZM5.89843%2010.1562V11.9531H5.60546H5.31249V10.1562V8.35938H5.60546H5.89843V10.1562ZM6.78906%2010.1445L6.77734%2011.9336L6.49609%2011.9453L6.21093%2011.957V10.1562V8.35938H6.5039H6.79687L6.78906%2010.1445ZM9.80468%2010.1562V11.9531H8.45702H7.10937V10.1562V8.35938H8.45702H9.80468V10.1562ZM12.8516%2010.1562V11.9531H11.5039H10.1562V10.1562V8.35938H11.5039H12.8516V10.1562ZM13.75%2010.1562V11.957L13.4687%2011.9453L13.1836%2011.9336L13.1719%2010.1445L13.1641%208.35938H13.457H13.75V10.1562ZM14.6484%2010.1562V11.9531H14.3555H14.0625V10.1562V8.35938H14.3555H14.6484V10.1562ZM9.80468%2012.6367V13.0078H7.55859H5.31249V12.6641C5.31249%2012.4727%205.32421%2012.3047%205.33984%2012.293C5.35156%2012.2773%206.36327%2012.2656%207.58593%2012.2656H9.80468V12.6367ZM14.6406%2012.6445L14.6523%2013.0078H12.4023H10.1562V12.6367V12.2656L12.3945%2012.2734L14.6289%2012.2852L14.6406%2012.6445Z'%20fill='%23FF9800'/%3e%3cpath%20d='M5.35156%207.65625V8.00781H7.57812H9.80469V7.65625V7.30469H7.57812H5.35156V7.65625Z'%20fill='white'/%3e%3cpath%20d='M10.1562%207.65625V8.00781H12.3828H14.6094V7.65625V7.30469H12.3828H10.1562V7.65625Z'%20fill='white'/%3e%3cpath%20d='M5.35156%2010.1562V11.9141H5.60547H5.85938V10.1562V8.39844H5.60547H5.35156V10.1562Z'%20fill='white'/%3e%3cpath%20d='M6.25%2010.1562V11.9141H6.50391H6.75781V10.1562V8.39844H6.50391H6.25V10.1562Z'%20fill='white'/%3e%3cpath%20d='M7.14844%2010.1562V11.9141H8.47656H9.80469V10.1562V8.39844H8.47656H7.14844V10.1562Z'%20fill='white'/%3e%3cpath%20d='M10.1562%2010.1562V11.9141H11.4844H12.8125V10.1562V8.39844H11.4844H10.1562V10.1562Z'%20fill='white'/%3e%3cpath%20d='M13.2031%2010.1562V11.9141H13.457H13.7109V10.1562V8.39844H13.457H13.2031V10.1562Z'%20fill='white'/%3e%3cpath%20d='M14.1016%2010.1562V11.9141H14.3555H14.6094V10.1562V8.39844H14.3555H14.1016V10.1562Z'%20fill='white'/%3e%3cpath%20d='M5.35156%2012.6562V13.0078H7.57812H9.80469V12.6562V12.3047H7.57812H5.35156V12.6562Z'%20fill='white'/%3e%3cpath%20d='M10.1562%2012.6562V13.0078H12.3828H14.6094V12.6562V12.3047H12.3828H10.1562V12.6562Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_256_520'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="kabaddi"
                  className="h-4 w-4"
                />
                <span className="text-sm font-medium ">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.KABADDI)}
                </span>
              </div>
            </Link>

            <Link
              onClick={() => {
                if (setSidebar) {
                  setSidebar(false);
                }
              }}
              className
              to="/exchange_sports/in-play/?eventTypeId=6"
            >
              <div className="flex items-center gap-2 w-full pl-10 pr-3 py-2 text-left transition-colors h-[40px] hover:bg-dashboardGamesTabsBg/50">
                <img
                  src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0233%2018.4649L14.7841%2011.1336C14.8004%2010.9768%2014.7494%2010.8205%2014.6439%2010.7034C14.5384%2010.5863%2014.3881%2010.5195%2014.2305%2010.5195H5.76953C5.61189%2010.5195%205.46167%2010.5864%205.35613%2010.7034C5.25059%2010.8205%205.19961%2010.9768%205.21586%2011.1336L5.97593%2018.4649H14.0233V18.4649Z'%20fill='%2361729B'/%3e%3cpath%20d='M14.6439%2010.7034C14.5383%2010.5864%2014.3881%2010.5195%2014.2305%2010.5195H9.99826V18.4649H14.0233L14.7841%2011.1336C14.8004%2010.9768%2014.7494%2010.8205%2014.6439%2010.7034Z'%20fill='%2347568C'/%3e%3cpath%20d='M14.4311%208.90486C14.3836%207.1916%2012.9761%205.81224%2011.2515%205.81224H8.74845C7.0239%205.81224%205.61642%207.1916%205.56888%208.90486H14.4311Z'%20fill='%239999FF'/%3e%3cpath%20d='M9.99826%208.90486H14.4311C14.3835%207.1916%2012.9761%205.81224%2011.2515%205.81224H9.99826V8.90486Z'%20fill='%236680FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.12095%205.77119H10.8788L11.0946%207.934C11.1064%208.05305%2011.066%208.17139%2010.9837%208.25823L9.99977%209.29662L9.01623%208.25823C8.93399%208.17139%208.89354%208.05312%208.90542%207.93411L9.12095%205.77119Z'%20fill='%23FF405C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.0946%207.934L10.8788%205.77119H9.99826V9.29499L9.99978%209.29659L10.9837%208.25819C11.066%208.17139%2011.1065%208.05305%2011.0946%207.934Z'%20fill='%23DB2155'/%3e%3cpath%20d='M3.91406%209.77734C3.60665%209.77734%203.35742%209.52811%203.35742%209.2207V6.84678C3.35742%206.62256%203.49194%206.42028%203.69864%206.33352L4.85067%205.85002C5.13418%205.73097%205.46037%205.86442%205.57935%206.14786C5.69832%206.43134%205.56498%206.75757%205.28151%206.87654L4.47067%207.21683V9.2207C4.4707%209.52811%204.22148%209.77734%203.91406%209.77734Z'%20fill='%23DFE7F4'/%3e%3cpath%20d='M16.0859%209.77735C15.7785%209.77735%2015.5293%209.52812%2015.5293%209.2207V7.21684L14.7185%206.87654C14.435%206.75757%2014.3016%206.43134%2014.4206%206.14786C14.5395%205.86438%2014.8658%205.73109%2015.1493%205.85002L16.3013%206.33352C16.5081%206.42028%2016.6425%206.6226%2016.6425%206.84678V9.2207C16.6426%209.52812%2016.3933%209.77735%2016.0859%209.77735Z'%20fill='%23DFE7F4'/%3e%3cpath%20d='M14.6387%2019.5H5.36133C5.05391%2019.5%204.80469%2019.2508%204.80469%2018.9434C4.80469%2018.6359%205.05391%2018.3867%205.36133%2018.3867H14.6387C14.9461%2018.3867%2015.1953%2018.6359%2015.1953%2018.9434C15.1953%2019.2508%2014.9461%2019.5%2014.6387%2019.5Z'%20fill='%236E80AA'/%3e%3cpath%20d='M16.0859%208.77933H3.91406C3.60665%208.77933%203.35742%208.94127%203.35742%209.14101V10.7781C3.35742%2010.9778%203.60665%2011.1398%203.91406%2011.1398H16.0859C16.3934%2011.1398%2016.6426%2010.9778%2016.6426%2010.7781V9.14101C16.6426%208.94127%2016.3934%208.77933%2016.0859%208.77933Z'%20fill='%233A477B'/%3e%3cpath%20d='M14.6387%2018.3867H9.99826V19.5H14.6387C14.9461%2019.5%2015.1953%2019.2508%2015.1953%2018.9434C15.1953%2018.6359%2014.9461%2018.3867%2014.6387%2018.3867Z'%20fill='%2347568C'/%3e%3cpath%20d='M16.0859%208.77933H9.99826V11.1398H16.0859C16.3934%2011.1398%2016.6426%2010.9778%2016.6426%2010.7781V9.14101C16.6426%208.94127%2016.3934%208.77933%2016.0859%208.77933Z'%20fill='%2329376D'/%3e%3cpath%20d='M7.09385%203.0116C7.07355%203.15068%207.06261%203.29277%207.06261%203.43739C7.06261%205.05707%208.38032%206.37478%2010%206.37478C11.6197%206.37478%2012.9374%205.05707%2012.9374%203.43739C12.9374%203.29277%2012.9264%203.15068%2012.9061%203.0116H7.09385Z'%20fill='%23FFE1BA'/%3e%3cpath%20d='M7.08421%203.08738H12.9158C12.7422%201.63221%2011.5012%200.5%2010%200.5C8.49881%200.5%207.25788%201.63221%207.08421%203.08738Z'%20fill='%23FFE1BA'/%3e%3cpath%20d='M12.9062%203.0116H9.99826V6.37475H10C11.6197%206.37475%2012.9374%205.05703%2012.9374%203.43735C12.9374%203.29274%2012.9264%203.15068%2012.9062%203.0116Z'%20fill='%23FFBFAB'/%3e%3cpath%20d='M9.99826%203.08738H12.9158C12.7422%201.63221%2011.5012%200.5%2010%200.5C9.99941%200.5%209.99885%200.5%209.99826%200.5V3.08738Z'%20fill='%23FFBFAB'/%3e%3c/svg%3e"
                  alt="politics"
                  className="h-4 w-4"
                />
                <span className="text-sm font-medium ">Politics</span>
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className>
        <Link
          onClick={() => {
            if (setSidebar) {
              setSidebar(false);
            }
          }}
          className
          to="/exchange_sports/in-play?eventTypeId=0"
        >
          <div className="flex items-center gap-2 w-full text-left transition-colors  h-[44px] p-3 false hover:bg-dashboardGamesTabsBg">
            <svg
              width={20}
              height={16}
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-svg-class-signupHereText"
            >
              <g clipPath="url(#clip0_44_26217)">
                <g clipPath="url(#clip1_44_26217)">
                  <g clipPath="url(#clip2_44_26217)">
                    <path
                      d="M9.88262 0.00588551C12.3388 0.00588551 14.795 0.00139114 17.2512 0.00588551C18.5163 0.0103799 19.3478 0.608132 19.6287 1.67555C19.6848 1.89128 19.6871 2.10926 19.6871 2.32725C19.6871 5.25084 19.6894 8.17669 19.6871 11.1003C19.6871 12.5025 18.8197 13.3677 17.4219 13.3744C16.7051 13.3767 15.9882 13.3879 15.2736 13.3699C14.9568 13.3632 14.8489 13.4801 14.8107 13.7924C14.6601 15.0441 14.1455 15.4778 12.8691 15.4778C10.8084 15.4778 8.74552 15.4778 6.68485 15.4778C5.61294 15.4778 4.98146 14.9048 4.92303 13.8351C4.90281 13.4665 4.77699 13.361 4.42643 13.3699C3.65114 13.3901 2.87586 13.3834 2.10283 13.3699C1.02193 13.3519 0.143272 12.5362 0.0713621 11.4553C-0.0499864 9.63062 0.0309213 7.80138 0.0241797 5.97443C0.0174381 4.70252 -0.0432307 3.42836 0.0578929 2.16095C0.168005 0.774425 1.01518 0.0103776 2.42867 0.00363609C4.91407 -0.00535268 7.39945 0.00139024 9.88483 0.00139024L9.88262 0.00588551ZM10.5096 7.72951C10.5096 7.29131 10.5051 6.85309 10.5119 6.41488C10.5119 6.28904 10.4557 6.116 10.5905 6.05534C10.7568 5.97893 10.8377 6.16545 10.941 6.25533C11.0939 6.39016 11.2264 6.54971 11.3814 6.6823C11.6961 6.95193 12.0264 6.95193 12.2848 6.69578C12.5163 6.46657 12.5343 6.04409 12.2803 5.78118C11.6399 5.1205 10.9882 4.47106 10.3275 3.82836C10.0444 3.55421 9.70731 3.54297 9.42421 3.81713C8.75 4.46432 8.0871 5.125 7.43993 5.79916C7.15 6.10027 7.17697 6.43061 7.4489 6.69354C7.71635 6.94972 8.03986 6.95193 8.35228 6.68455C8.51855 6.54073 8.66241 6.37443 8.82421 6.22612C8.91635 6.14297 8.99048 5.97893 9.14104 6.05084C9.28262 6.11825 9.2309 6.28455 9.2309 6.40814C9.23545 7.30027 9.22869 8.19014 9.23993 9.08227C9.24441 9.53172 9.51635 9.81262 9.89159 9.80138C10.2512 9.78793 10.4983 9.51379 10.5073 9.08903C10.5186 8.63738 10.5096 8.18344 10.5096 7.72951ZM9.88035 14.0149C10.8736 14.0149 11.8669 14.0149 12.8601 14.0149C13.0871 14.0149 13.3051 14.0239 13.3163 13.6958C13.3275 13.3474 13.0938 13.3812 12.8736 13.3812C10.8871 13.3812 8.90283 13.3812 6.91634 13.3834C6.71409 13.3834 6.45114 13.307 6.43766 13.6621C6.42418 14.0531 6.69607 14.0171 6.94552 14.0171C7.92303 14.0171 8.90283 14.0171 9.88035 14.0171V14.0149Z"
                      fill="url(#paint0_linear_44_26217)"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_44_26217"
                  x1="1.94121e-8"
                  y1="7.73841"
                  x2="19.6881"
                  y2="7.73841"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <clipPath id="clip0_44_26217">
                  <rect width={20} height={16} fill="white" />
                </clipPath>
                <clipPath id="clip1_44_26217">
                  <rect width={20} height="15.86" fill="white" />
                </clipPath>
                <clipPath id="clip2_44_26217">
                  <rect
                    width={20}
                    height="15.8621"
                    fill="white"
                    transform="translate(0 -0.0010376)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs font-semibold ">Inplay</span>
          </div>
        </Link>
      </div>
      <div className>
        <a
          className
          onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
        >
          <div className="flex items-center gap-2 w-full text-left transition-colors  h-[44px] p-3 false hover:bg-dashboardGamesTabsBg">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-svg-class-signupHereText"
            >
              <g clipPath="url(#clip0_26_3890)">
                <g clipPath="url(#clip1_26_3890)">
                  <g clipPath="url(#clip2_26_3890)">
                    <path
                      d="M14.0965 19.7607C11.6204 19.821 8.93798 17.8127 8.9171 14.5535C8.89862 11.6905 11.2474 9.38337 14.1267 9.35097C16.9897 9.31857 19.3408 11.6975 19.3316 14.6184C19.3246 17.4861 17.0036 19.7631 14.0965 19.7607ZM13.8301 15.911C13.8301 16.1611 13.8255 16.4136 13.8301 16.6638C13.8348 16.9209 13.719 17.0066 13.4781 16.9348C12.9545 16.7819 12.4797 16.5711 12.3593 15.955C12.3222 15.7673 12.2133 15.6608 12.0165 15.6839C11.7964 15.7095 11.7917 15.8831 11.7894 16.0523C11.7894 16.2747 11.8705 16.4692 11.9909 16.6499C12.3314 17.1664 12.8411 17.4189 13.4248 17.5301C13.7213 17.5857 13.8625 17.7062 13.8394 18.0281C13.8209 18.2644 13.7653 18.6119 14.1197 18.6211C14.488 18.6303 14.4185 18.2783 14.4093 18.0467C14.3977 17.7409 14.5089 17.5903 14.8146 17.5394C15.2941 17.4583 15.7249 17.2591 16.0701 16.9047C16.6538 16.3094 16.6399 15.5102 16.033 14.9358C15.6763 14.5975 15.2409 14.403 14.7613 14.3335C14.5112 14.2964 14.4139 14.1783 14.4162 13.9374C14.4209 13.4603 14.4255 12.9831 14.4139 12.5059C14.4069 12.177 14.5621 12.1098 14.8378 12.2001C15.3566 12.3692 15.8199 12.5985 15.9218 13.2193C15.9497 13.3954 16.0677 13.4811 16.2485 13.4487C16.4268 13.4162 16.4986 13.2935 16.4917 13.122C16.4801 12.8209 16.3597 12.5638 16.1674 12.3368C15.8292 11.936 15.3937 11.7021 14.8864 11.6025C14.6061 11.5469 14.3815 11.4728 14.3977 11.1183C14.4046 10.9631 14.305 10.859 14.1359 10.859C13.9784 10.859 13.8371 10.947 13.8487 11.0975C13.8811 11.5052 13.6078 11.5515 13.3159 11.6187C12.8921 11.7137 12.5121 11.9059 12.1994 12.2117C11.6505 12.7468 11.6296 13.539 12.1461 14.1042C12.3801 14.359 12.6743 14.5188 12.9847 14.6647C13.2511 14.7899 13.661 14.6787 13.7838 14.9798C13.8904 15.2392 13.8186 15.5727 13.8278 15.8739C13.8278 15.8855 13.8278 15.8994 13.8278 15.911H13.8301Z"
                      fill="url(#paint0_linear_26_3890)"
                    />
                    <path
                      d="M6.7773 9.3395C7.68995 9.03606 8.29226 9.60126 8.84122 10.4722C9.1817 11.0142 9.39482 11.4104 8.94778 11.9778C8.72074 12.2674 8.63506 12.6589 8.5401 13.0225C8.48682 13.2287 8.36634 13.3283 8.15786 13.3793C7.19195 13.6132 6.22835 13.6433 5.25315 13.4441C5.01919 13.3955 4.87558 13.2982 4.80146 13.0619C4.59299 12.4041 4.37059 11.7532 4.14359 11.1023C4.07409 10.903 4.09263 10.7363 4.22697 10.5788C4.23392 10.5695 4.24089 10.5579 4.24784 10.5486C4.78835 9.74102 5.63148 9.33718 6.7773 9.33718V9.3395Z"
                      fill="url(#paint1_linear_26_3890)"
                    />
                    <path
                      d="M6.27438 3.32153C6.42726 3.8543 6.1354 4.24345 5.59568 4.55848C5.0884 4.85497 4.62046 5.22096 4.14561 5.56841C3.96725 5.69813 3.79586 5.73982 3.58738 5.66338C3.38818 5.59157 3.18434 5.51282 2.97354 5.48502C2.3875 5.4109 2.08173 5.09587 1.96822 4.51446C1.87325 4.03729 1.69258 3.57633 1.54434 3.11074C1.48642 2.93006 1.48642 2.77718 1.62541 2.6243C2.26704 1.92012 3.01058 1.35724 3.88618 0.970407C4.08075 0.884703 4.23595 0.893967 4.40736 1.01905C4.87526 1.35724 5.33854 1.70238 5.82499 2.01045C6.15854 2.22125 6.33461 2.47141 6.2767 2.87216C6.26048 2.98334 6.27438 3.09685 6.27438 3.31921V3.32153Z"
                      fill="url(#paint2_linear_26_3890)"
                    />
                    <path
                      d="M11.6019 2.99483C11.3864 3.68047 11.171 4.41476 10.9185 5.13515C10.8328 5.38069 9.29708 5.78606 9.08164 5.64013C8.38908 5.16527 7.70571 4.67651 7.02007 4.19239C6.90888 4.11363 6.85331 4.0094 6.85563 3.87274C6.85563 3.83567 6.85563 3.79861 6.85563 3.75923C6.83091 2.81415 7.20772 2.07136 7.98602 1.53087C8.12036 1.43822 8.27324 1.36409 8.38444 1.25059C8.77588 0.852177 9.16036 0.877657 9.62132 1.15562C10.2816 1.55172 10.9092 1.98025 11.4212 2.55935C11.6065 2.7655 11.6181 2.8072 11.6019 2.99714V2.99483Z"
                      fill="url(#paint3_linear_26_3890)"
                    />
                    <path
                      d="M2.26019 10.4861C1.93358 10.4861 1.60698 10.4791 1.28269 10.4884C1.0719 10.4953 0.932928 10.4212 0.826376 10.2313C0.388578 9.45527 0.133771 8.62135 0.00868665 7.74345C-0.026059 7.4956 0.0411269 7.31493 0.251917 7.16205C0.770785 6.78911 1.28039 6.40227 1.78767 6.01081C1.96372 5.87414 2.13279 5.88109 2.3459 5.9112C3.35816 6.0525 4.02066 6.5343 4.1388 7.6091C4.14806 7.69481 4.17818 7.78515 4.22218 7.85696C4.88004 8.88311 4.24765 9.61047 3.65002 10.347C3.55042 10.4698 3.41838 10.4837 3.27709 10.4837C2.9389 10.4837 2.6007 10.4837 2.26019 10.4837V10.4861Z"
                      fill="url(#paint4_linear_26_3890)"
                    />
                    <path
                      d="M13.0937 7.66226C13.0774 7.83135 13.0612 7.95412 13.0519 8.07918C13.0056 8.62358 12.7994 8.96174 12.1949 9.12158C11.3517 9.34398 10.6267 9.8443 10.0221 10.4836C9.79974 10.7199 9.67238 10.6805 9.51022 10.4349C9.23918 10.0273 8.95662 9.62886 8.6647 9.23742C8.54662 9.07758 8.5327 8.92934 8.59526 8.74862C8.84078 8.0375 9.08166 7.32638 9.31334 6.61062C9.37814 6.41141 9.4963 6.30254 9.69086 6.23769C10.5757 5.93655 11.3919 6.06627 12.1393 6.62683C12.3686 6.80056 12.5956 6.97892 12.8318 7.14338C13.0334 7.28469 13.177 7.43757 13.0937 7.66226Z"
                      fill="url(#paint5_linear_26_3890)"
                    />
                    <path
                      d="M6.53386 8.75558C6.17019 8.75558 5.8065 8.74862 5.44283 8.7579C5.23435 8.76254 5.11856 8.67222 5.05602 8.4799C4.83133 7.80124 4.60662 7.12486 4.37498 6.44847C4.31244 6.26548 4.35877 6.14503 4.51859 6.03616C5.1278 5.6169 5.7324 5.19068 6.33234 4.75984C6.48754 4.64866 6.61954 4.64866 6.77474 4.75984C7.377 5.18837 7.9816 5.61226 8.59082 6.03384C8.76218 6.15198 8.79466 6.29328 8.72514 6.48786C8.49345 7.15034 8.26649 7.81282 8.04874 8.4799C7.98389 8.67686 7.87041 8.76254 7.66426 8.7579C7.289 8.75094 6.91143 8.7579 6.53618 8.7579L6.53386 8.75558Z"
                      fill="url(#paint6_linear_26_3890)"
                    />
                    <path
                      d="M2.47987 11.0628C3.71681 11.086 3.41566 10.8798 3.82797 12.045C3.916 12.2929 3.99941 12.543 4.08048 12.7931C4.10596 12.8742 4.16387 12.9692 4.07585 13.0364C4.01099 13.085 3.93224 13.0341 3.86506 13.0016C3.008 12.6125 2.2598 12.0728 1.63438 11.3686C1.57879 11.3061 1.4931 11.2412 1.53248 11.1439C1.57417 11.042 1.68072 11.0651 1.76412 11.0628C2.0027 11.0582 2.24128 11.0628 2.47987 11.0628Z"
                      fill="url(#paint7_linear_26_3890)"
                    />
                    <path
                      d="M13.0866 6.18465C13.0866 6.30973 13.1492 6.4186 13.0658 6.4742C12.9592 6.54369 12.8851 6.4325 12.8086 6.37691C12.4566 6.11748 12.1114 5.84878 11.757 5.59398C11.5717 5.45963 11.4999 5.31833 11.5833 5.08437C11.7246 4.68365 11.8381 4.27365 11.9678 3.8706C12.0002 3.76868 11.9956 3.61811 12.1322 3.60885C12.2411 3.60189 12.2782 3.73393 12.3246 3.81732C12.7392 4.57014 13.0078 5.36929 13.0913 6.18465H13.0866Z"
                      fill="url(#paint8_linear_26_3890)"
                    />
                    <path
                      d="M0.00630832 6.25862C0.117494 5.3645 0.381577 4.52134 0.833274 3.7384C0.87033 3.67586 0.905066 3.59478 0.995402 3.60174C1.09038 3.60869 1.09734 3.70134 1.1205 3.76851C1.26411 4.22253 1.40309 4.67885 1.5467 5.13286C1.6023 5.31122 1.56523 5.43862 1.40541 5.55212C1.02784 5.82314 0.661835 6.10806 0.288899 6.3837C0.221724 6.43466 0.149917 6.51805 0.0572618 6.46478C-0.0168621 6.42308 0.00862701 6.33042 0.00862701 6.25862H0.00630832Z"
                      fill="url(#paint9_linear_26_3890)"
                    />
                    <path
                      d="M6.55244 0.426029C7.02036 0.402866 7.4651 0.449194 7.90752 0.551114C8.10212 0.595125 8.15308 0.678514 7.97007 0.808228C7.5508 1.10472 7.13156 1.39659 6.7123 1.69308C6.58953 1.78111 6.48064 1.75331 6.36945 1.67224C5.97104 1.38964 5.57264 1.10936 5.17423 0.826764C5.114 0.785067 5.03756 0.743373 5.05146 0.65535C5.06768 0.562695 5.16264 0.565012 5.22982 0.548798C5.66993 0.435295 6.11699 0.402866 6.55479 0.426029H6.55244Z"
                      fill="url(#paint10_linear_26_3890)"
                    />
                    <path
                      d="M14.4161 15.9226C14.4161 15.6725 14.4138 15.4223 14.4161 15.1698C14.4207 14.959 14.5203 14.871 14.7334 14.9405C14.7682 14.9521 14.8076 14.9567 14.8423 14.966C15.4654 15.1258 15.8847 15.5265 15.8801 15.9597C15.8754 16.3905 15.3936 16.8145 14.7821 16.9442C14.5435 16.9951 14.4161 16.928 14.4161 16.6732C14.4161 16.4229 14.4161 16.1728 14.4161 15.9203V15.9226Z"
                      fill="url(#paint11_linear_26_3890)"
                    />
                    <path
                      d="M13.8283 13.1963C13.8283 13.421 13.8167 13.6481 13.8306 13.8727C13.8491 14.1646 13.7333 14.2688 13.453 14.1785C13.4414 14.1738 13.4275 14.1738 13.416 14.1715C12.8253 14.0233 12.3597 13.5855 12.3643 13.1801C12.3689 12.7539 12.9064 12.2906 13.504 12.1841C13.7241 12.1447 13.8398 12.198 13.8306 12.4458C13.8213 12.696 13.8306 12.9461 13.8306 13.1963H13.8283Z"
                      fill="url(#paint12_linear_26_3890)"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_26_3890"
                  x1="8.91702"
                  y1="14.5563"
                  x2="19.3316"
                  y2="14.5563"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_26_3890"
                  x1="4.104"
                  y1="11.4164"
                  x2="9.20146"
                  y2="11.4164"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_26_3890"
                  x1="1.50782"
                  y1="3.30788"
                  x2="6.31486"
                  y2="3.30788"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_26_3890"
                  x1="6.85449"
                  y1="3.3099"
                  x2="11.6071"
                  y2="3.3099"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_26_3890"
                  x1="9.8517e-9"
                  y1="8.19103"
                  x2="4.50168"
                  y2="8.19103"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_26_3890"
                  x1="8.55854"
                  y1="8.36062"
                  x2="13.1178"
                  y2="8.36062"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_26_3890"
                  x1="4.34814"
                  y1="6.71726"
                  x2="8.7593"
                  y2="6.71726"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_26_3890"
                  x1="1.52246"
                  y1="12.0586"
                  x2="4.12285"
                  y2="12.0586"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_26_3890"
                  x1="11.5488"
                  y1="5.05247"
                  x2="13.1091"
                  y2="5.05247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_26_3890"
                  x1="0.00439452"
                  y1="5.04161"
                  x2="1.57096"
                  y2="5.04161"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_26_3890"
                  x1="5.0498"
                  y1="1.08319"
                  x2="8.08356"
                  y2="1.08319"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_26_3890"
                  x1="14.415"
                  y1="15.9386"
                  x2="15.8801"
                  y2="15.9386"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_26_3890"
                  x1="12.3643"
                  y1="13.1912"
                  x2="13.8325"
                  y2="13.1912"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2D71A" />
                  <stop offset={1} stopColor="#ECB024" />
                </linearGradient>
                <clipPath id="clip0_26_3890">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
                <clipPath id="clip1_26_3890">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
                <clipPath id="clip2_26_3890">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs font-semibold ">Sports Book</span>
          </div>
        </a>
      </div>

      <div className>
        <Link
          onClick={() => {
            if (setSidebar) {
              setSidebar(false);
            }
          }}
          className
          to="/promotions"
        >
          <div className="flex items-center gap-2 w-full text-left transition-colors  h-[44px] p-3 false hover:bg-dashboardGamesTabsBg">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-svg-class-signupHereText"
            >
              <g clipPath="url(#clip0_229_19002)">
                <path
                  d="M18 11V13H22V11H18ZM16 17.61C16.96 18.32 18.21 19.26 19.2 20C19.6 19.47 20 18.93 20.4 18.4C19.41 17.66 18.16 16.72 17.2 16C16.8 16.54 16.4 17.08 16 17.61ZM20.4 5.6C20 5.07 19.6 4.53 19.2 4C18.21 4.74 16.96 5.68 16 6.4C16.4 6.93 16.8 7.47 17.2 8C18.16 7.28 19.41 6.35 20.4 5.6ZM4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19H7V15H8L13 18V6L8 9H4ZM15.5 12C15.5 10.67 14.92 9.47 14 8.65V15.34C14.92 14.53 15.5 13.33 15.5 12Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19002">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs font-semibold ">Promotions</span>
          </div>
        </Link>
      </div>
      <div className>
        <Link
          onClick={() => {
            if (setSidebar) {
              setSidebar(false);
            }
          }}
          className
          to="/stake-settings"
        >
          <div className="flex items-center gap-2 w-full text-left transition-colors  h-[44px] p-3 false hover:bg-dashboardGamesTabsBg">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-svg-class-signupHereText"
            >
              <g clipPath="url(#clip0_229_19014)">
                <path
                  d="M19.1401 12.9399C19.1801 12.6399 19.2001 12.3299 19.2001 11.9999C19.2001 11.6799 19.1801 11.3599 19.1301 11.0599L21.1601 9.4799C21.3401 9.3399 21.3901 9.0699 21.2801 8.8699L19.3601 5.5499C19.2401 5.3299 18.9901 5.2599 18.7701 5.3299L16.3801 6.2899C15.8801 5.9099 15.3501 5.5899 14.7601 5.3499L14.4001 2.8099C14.3601 2.5699 14.1601 2.3999 13.9201 2.3999H10.0801C9.84011 2.3999 9.65011 2.5699 9.61011 2.8099L9.25011 5.3499C8.66011 5.5899 8.12011 5.9199 7.63011 6.2899L5.24011 5.3299C5.02011 5.2499 4.77011 5.3299 4.65011 5.5499L2.74011 8.8699C2.62011 9.0799 2.66011 9.3399 2.86011 9.4799L4.89011 11.0599C4.84011 11.3599 4.80011 11.6899 4.80011 11.9999C4.80011 12.3099 4.82011 12.6399 4.87011 12.9399L2.84011 14.5199C2.66011 14.6599 2.61011 14.9299 2.72011 15.1299L4.64011 18.4499C4.76011 18.6699 5.01011 18.7399 5.23011 18.6699L7.62011 17.7099C8.12011 18.0899 8.65011 18.4099 9.24011 18.6499L9.60011 21.1899C9.65011 21.4299 9.84011 21.5999 10.0801 21.5999H13.9201C14.1601 21.5999 14.3601 21.4299 14.3901 21.1899L14.7501 18.6499C15.3401 18.4099 15.8801 18.0899 16.3701 17.7099L18.7601 18.6699C18.9801 18.7499 19.2301 18.6699 19.3501 18.4499L21.2701 15.1299C21.3901 14.9099 21.3401 14.6599 21.1501 14.5199L19.1401 12.9399ZM12.0001 15.5999C10.0201 15.5999 8.40011 13.9799 8.40011 11.9999C8.40011 10.0199 10.0201 8.3999 12.0001 8.3999C13.9801 8.3999 15.6001 10.0199 15.6001 11.9999C15.6001 13.9799 13.9801 15.5999 12.0001 15.5999Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19014">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs font-semibold ">Stake Settings</span>
          </div>
        </Link>
      </div>
      <div className>
        <Link
          onClick={() => {
            if (setSidebar) {
              setSidebar(false);
            }
          }}
          className="active"
          to="/rules"
          aria-current="page"
        >
          <div className="flex items-center gap-2 w-full text-left transition-colors hover:bg-dashboardGamesTabsBg  h-[44px] p-3 false">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-svg-class-signupHereText"
            >
              <g clipPath="url(#clip0_229_19018)">
                <path
                  d="M21 5L12 1L3 5V11C3 16.55 6.84 21.74 12 23C14.3 22.44 16.33 21.1 17.88 19.29L14.76 16.17C12.82 17.46 10.18 17.24 8.47 15.53C6.52 13.58 6.52 10.41 8.47 8.46C10.42 6.51 13.59 6.51 15.54 8.46C17.25 10.17 17.46 12.81 16.18 14.75L19.08 17.65C20.29 15.69 21 13.38 21 11V5Z"
                  fill="white"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_229_19018">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs font-semibold ">Game Rules</span>
          </div>
        </Link>
      </div>
      {token && (
        <div className>
          <a
            aria-current="page"
            className="active"
            onClick={() => {
              dispatch(logout());
              if (setSidebar) {
                setSidebar(false);
              }
            }}
          >
            <div className="flex items-center gap-2 w-full text-left transition-colors  h-[44px] p-3 false">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 icon-svg-class-signupHereText"
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
              <span className="text-xs font-semibold ">Logout</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
