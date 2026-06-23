import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { setUser } from "../../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowChangePasswordModal,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Login = () => {
  const { valueByLanguage } = useLanguage();
  const [tab, setTab] = useState("username");
  const [showPassword, setShowPassword] = useState(false);
  const { closePopupForForever } = useSelector((state) => state.global);
  const navigate = useNavigate();

  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const closeLogin = () => {
    dispatch(setShowLoginModal(false));
  };
  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        localStorage.setItem("changePassword", true);
        closeLogin();
        dispatch(setShowChangePasswordModal(true));
      }
      if (!result?.result?.changePassword && token && user) {
        closeLogin();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        closeLogin();
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };

  const showForgotPassword = () => {
    closeLogin();
    navigate("/forgot-password");
  };
  const showRegister = () => {
    closeLogin();
    navigate("/register");
  };
  return (
    <div className="m-auto fixed overflow-auto z-[100] inset-0  bg-opacity-80 flex items-center justify-center pt-2">
      <div className="flex flex-col bg-modalBg rounded-[20px] shadow-lg  max-w-[95%] mx-auto p-2 md:p-4 relative max-h-[90vh]">
        <div className="flex flex-shrink-0 justify-between items-center pb-3">
          <div className="flex items-center justify-center gap-1 cursor-pointer flex-row undefined">
            <img
              style={{ filter: "invert(var(--invert))" }}
              src={logo}
              alt="Logo"
              className="h-[31px] object-contain"
            />
          </div>
          <button
            onClick={closeLogin}
            className=" active:opacity-70 text-lg  flex items-center justify-center bg-loginInputGray rounded-full h-[48px] w-[48px]"
          >
            <svg
              className="w-6 h-6"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 min-h-0 py-4 overflow-auto">
          <div className="flex flex-col items-center justify-center w-full min-w-[270px] md:min-w-[500px] ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
              <div className="flex flex-col gap-4 rounded-lg w-full md:px-4">
                <div className="flex gap-1 w-full">
                  <div className="relative w-[35%]">
                    <select
                      onChange={(e) => setTab(e.target.value)}
                      id="usernameOrPhone"
                      className="h-[38px] w-full rounded p-2 pr-6 bg-loginInputGray  text-xs focus:outline-none appearance-none"
                    >
                      <option className="capitalize" value="username">
                        Username
                      </option>
                      <option className="capitalize" value="phone">
                        Phone
                      </option>
                    </select>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="absolute right-1 top-2.5 pointer-events-none "
                      height={20}
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1 w-[65%]">
                    <input
                      {...register("username", { required: true })}
                      type="text"
                      id="username"
                      name="username"
                      placeholder={
                        tab === "username"
                          ? "Enter Username"
                          : "Enter Phone Number"
                      }
                      className="w-full h-[38px] px-3 bg-loginInputGray rounded  placeholder-inputPlaceholderText placeholder:text-xs focus:outline-none focus:border-blue-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="relative">
                    <input
                      {...register("password", { required: true })}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Password"
                      className="w-full h-[38px] px-3 pr-10 bg-loginInputGray rounded  placeholder-inputPlaceholderText placeholder:text-xs focus:outline-none focus:border-blue-300"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-languageDropdownBorder hover:text-languageDropdownBorder focus:outline-none"
                      aria-label="Show password"
                    >
                      {showPassword ? (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 640 512"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
                        </svg>
                      ) : (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <a className=" text-xs" onClick={showForgotPassword}>
                    Forgot password? पासवर्ड भूल गया?
                  </a>
                </div>
                <div className="space-y-3">
                  <button
                    type="submit"
                    className=" active:opacity-70 w-full h-[40px] text-sm text-bold font-bold p-1 rounded-md transition-colors bg-disabledButtonBg border border-signupHereText "
                  >
                    {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                  </button>
                  <button
                    onClick={loginWithDemo}
                    type="button"
                    className=" active:opacity-70 w-full h-[40px] text-sm bg-buttonGradient hover:bg-blue-600 text-black font-bold p-1 rounded-md transition-colors"
                  >
                    Login with Demo ID
                  </button>
                </div>
                <div className="text-center ">
                  <p>
                    <span className="text-xs /60">
                      Don&apos;t have an account?
                    </span>{" "}
                    <span
                      onClick={showRegister}
                      className="text-xs text-signupHereText cursor-pointer"
                    >
                      {languageValue(valueByLanguage, LanguageKey.REGISTER)}
                    </span>
                  </p>
                </div>
                <div className="flex gap-x-3">
                  {Settings?.whatsapplink && Settings.registration_whatsapp && (
                    <button
                      onClick={() => getWhatsAppId(Settings?.whatsapplink)}
                      type="button"
                      className=" active:opacity-70 w-full h-[40px] text-sm text-bold font-bold p-1 rounded-md transition-colors bg-disabledButtonBg border border-signupHereText "
                    >
                      Whatsapp
                    </button>
                  )}
                  {Settings.apk_link && (
                    <button
                      onClick={handleDownload}
                      type="button"
                      className=" active:opacity-70 w-full h-[40px] text-sm text-bold font-bold p-1 rounded-md transition-colors bg-disabledButtonBg border border-signupHereText "
                    >
                      Download .apk
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
