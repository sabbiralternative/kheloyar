import { useEffect, useState } from "react";
import { useLogo } from "../../context/ApiProvider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Settings } from "../../api";
import { setUser } from "../../redux/features/auth/authSlice";
import {
  setShowBanner,
  setShowLoginModal,
} from "../../redux/features/global/globalSlice";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useLanguage } from "../../context/LanguageProvider";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../const";

const Register = () => {
  const { valueByLanguage } = useLanguage();
  const affnook_token = localStorage.getItem("affnook_token");
  const referralCode = localStorage.getItem("referralCode");
  const { logo } = useLogo();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTimer(60);
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
      affnook_token: affnook_token || null,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        navigate("/");
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const showLogin = () => {
    navigate("/");
    dispatch(setShowLoginModal(true));
  };
  return (
    <div className="h-full font-poppinsFont">
      <div
        className="flex items-start justify-center h-screen w-full overflow-auto p-4"
        style={{
          backgroundImage:
            'url("/icon/forgot-password-bg-image-WyTU_-Sx.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="flex flex-col justify-start self-center px-4 py-6 text-sm font-medium   rounded-lg w-full max-w-[430px] text-black-900 overflow-auto max-h-[90vh] bg-primary">
          <button
            onClick={() => navigate(-1)}
            className=" active:opacity-70 flex items-center gap-1.5 text-sm font-medium whitespace-nowrap w-[61px]"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
            </svg>
            <span className="my-auto">Back</span>
          </button>
          <div
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-1 cursor-pointer flex-row undefined"
          >
            <img
              style={{
                height: Settings.logo_height,
                width: Settings.logo_width,
                filter: "invert(var(--invert))",
              }}
              src={logo}
              alt="Logo"
              className="h-[31px] object-contain"
            />
          </div>
          <header className="flex flex-col justify-center self-center mt-2.5 max-w-full text-center w-[254px]">
            <h1 className="text-xl font-semibold">Sign Up</h1>
            <p className="text-xs text-black-900 font-bold">
              Create your account by following these simple steps.
            </p>
          </header>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col py-px w-full text-sm font-medium"
          >
            <div>
              <div className="flex gap-2.5 mt-3 text-black-900 font-bold text-opacity-60">
                <div className="px-3 h-[44px] flex items-center justify-center gap-1 rounded-md bg-loginInputGray">
                  <img src="data:image/webp;base64,UklGRnYBAABXRUJQVlA4TGkBAAAvEYAEEGfiOJJtpRoctp6G5p8MxVa/y70nDTeSJDlRosHl/z42jzpXazEzDBpJUtT3DJJew6t9Xcw44xC2bVFZn+BPZLGEEkEqmXQjePsRvABUPiCwwQGBwF4Pw/P7/XjKeTl42u/3+XxeFqKCp3nK+/2wMAux+KngaSr5/8VTfr+fym63kwrbcVV/N9f1skTq+311W/fA5CNZIITgP1jChRA4IW2E/igUggfJ3C79DySEIChTwxeeENR4FFyIOI8JRd5ydMA8NCuRv1J1/d5+iiVXrrVoTN/JlN1wGNm2mrzg7gR3ojjE3dH+G+JLCxH9nwBAR2GQAGlim6qqqroVYVxNxeoewlGJbQDwVcoAwKDR42dKnZUY5Gg87TPIcg7Rqy8H3SGiwCDZ1n7XYBHYeWe9as5QeUR10q4tKoji94N8bTfvD/L3EKgVONCcAXiJTFIAQJFIJAX++QtGvHKAVe5HWT7dOPgHAA==" />
                  <div>+91</div>
                </div>
                <input
                  onChange={(e) => handleMobileNo(e)}
                  value={mobile}
                  className="flex items-center px-3 py-2 w-full h-[44px] bg-loginInputGray rounded text-black-900 font-bold text-opacity-60 focus:outline-none"
                  placeholder="Enter Phone Number"
                />{" "}
                <div className=" h-[44px] w-[130px] flex items-center justify-center gap-1 rounded-md bg-loginInputGray ">
                  {timer ? (
                    <div className="px-3 w-full h-full  text-base font-semibold text-center rounded-md  bg-buttonGradient  cursor-text">
                      Retry in {timer}
                    </div>
                  ) : (
                    <button
                      disabled={Settings.otp && mobile?.length < 10}
                      onClick={handleOTP}
                      type="button"
                      className="px-3 w-full h-full  text-base font-semibold text-center rounded-md  bg-buttonGradient "
                    >
                      Get OTP
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="username"
                className="self-start text-black-900 font-bold"
              >
                OTP
              </label>
              <input
                type="text"
                placeholder="Enter OTP"
                {...register("otp", { required: true })}
                className="flex items-center px-3 py-2 w-full h-[44px] bg-loginInputGray rounded text-black-900 font-bold text-opacity-60 focus:outline-none"
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="self-start text-black-900 font-bold"
              >
                Password
              </label>
              <div className="flex items-center px-3 py-2 w-full h-[44px] bg-loginInputGray rounded text-black-900 font-bold text-opacity-60 focus:outline-none">
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent border-none focus:outline-none"
                  placeholder="Enter Password"
                />
                <div className="text-languageDropdownBorder cursor-pointer">
                  {showPassword ? (
                    <IoEye onClick={() => setShowPassword(false)} />
                  ) : (
                    <IoMdEyeOff onClick={() => setShowPassword(true)} />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="self-start text-black-900 font-bold"
              >
                Confirm Password
              </label>
              <div className="flex items-center px-3 py-2 w-full h-[44px] bg-loginInputGray rounded text-black-900 font-bold text-opacity-60 focus:outline-none">
                <input
                  {...register("confirmPassword", { required: true })}
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full bg-transparent border-none focus:outline-none"
                  placeholder="Enter Confirm Password"
                />
                <div className="text-languageDropdownBorder cursor-pointer">
                  {showConfirmPassword ? (
                    <IoEye onClick={() => setShowConfirmPassword(false)} />
                  ) : (
                    <IoMdEyeOff onClick={() => setShowPassword(true)} />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="self-start text-black-900 font-bold"
              >
                Referral Code(Optional)
              </label>
              <div className="flex items-center px-3 py-2 w-full h-[44px] bg-loginInputGray rounded text-black-900 font-bold text-opacity-60 focus:outline-none">
                <input
                  type="text"
                  readOnly={referralCode}
                  {...register("referralCode")}
                  className="w-full bg-transparent border-none focus:outline-none"
                  defaultValue={referralCode}
                  placeholder="Enter referral code(Optional)"
                />
              </div>
            </div>
            <button
              disabled={!mobile}
              type="submit"
              className=" active:opacity-70 gap-2.5 self-stretch px-16 py-3 mt-5 text-base font-semibold text-center rounded-lg min-h-[44px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 bg-buttonGradient  cursor-not-allowed"
            >
              {languageValue(valueByLanguage, LanguageKey.REGISTER)}
            </button>
            <div className="self-center mt-6 text-sm text-center ">
              Already have account?{" "}
              <a
                onClick={showLogin}
                className=" text-signupHereText underline font-medium transition-all duration-200"
              >
                {languageValue(valueByLanguage, LanguageKey.LOGIN)}
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
