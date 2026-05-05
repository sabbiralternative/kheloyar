import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import APK from "../pages/APK/APK";
import EventDetails from "../pages/EventDetails/EventDetails";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import Rules from "../pages/Rules/Rules";
import Casino from "../pages/Casino/Casino";
import BonusStatement from "../pages/BonusStatement/BonusStatement";
import Promotions from "../pages/Promotions/Promotions";
import LossbackBonus from "../pages/LossbackBonus/LossbackBonus";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import Affiliate from "../pages/Affiliate/Affiliate";
import AffiliateUserStatement from "../pages/AffiliateUserStatement/AffiliateUserStatement";
import AffiliateUserProfitLoss from "../pages/AffiliateUserProfitLoss/AffiliateUserProfitLoss";
import AppOnlyBonus from "../pages/AppOnlyBonus/AppOnlyBonus";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails";
import DepositReport from "../pages/DepositReport/DepositReport";
import WithdrawReport from "../pages/WithdrawReport/WithdrawReport";
import OpenBets from "../pages/OpenBets/OpenBets";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import IFrame from "../pages/IFrame/IFrame";
import Account from "../pages/Account/Account";
import MultiMarkets from "../pages/MultiMarkets/MultiMarkets";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import InPlay from "../pages/InPlay/InPlay";
import StakeSettings from "../pages/StakeSettings/StakeSettings";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "/apk",
          element: <APK />,
        },

        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/rules",
          element: <Rules />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/lossback-bonus",
          element: <LossbackBonus />,
        },
        {
          path: "/app-only-bonus",
          element: <AppOnlyBonus />,
        },
        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/affiliate/user-profit-loss",
          element: <AffiliateUserProfitLoss />,
        },
        {
          path: "/affiliate/user-statement",
          element: <AffiliateUserStatement />,
        },

        {
          path: "/my-bank-details",
          element: <MyBankDetails />,
        },
        {
          path: "/deposit-report",
          element: <DepositReport />,
        },
        {
          path: "/withdraw-report",
          element: <WithdrawReport />,
        },
        {
          path: "/open-bets",
          element: <OpenBets />,
        },
        {
          path: "/betting-profit-loss",
          element: <BettingProfitLoss />,
        },
        {
          path: "/:route/:name/:gameId",
          element: <IFrame />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/multi-markets",
          element: <MultiMarkets />,
        },
        {
          path: "/exchange_sports/in-play",
          element: <InPlay />,
        },
        {
          path: "/stake-settings",
          element: <StakeSettings />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
