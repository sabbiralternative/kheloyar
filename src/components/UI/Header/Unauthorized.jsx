import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setShowBanner,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";

const Unauthorized = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { closePopupForForever } = useSelector((state) => state.global);
  const [handleLogin] = useLoginMutation();
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
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {/* <div className="hidden lg:block">
          <div className="relative">
            <img
              src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.3438%2012H17.7188C17.9062%2011.125%2018%2010.4531%2018%209.98438C18%209.51562%2017.9062%208.84375%2017.7188%207.96875H14.3438C14.4375%208.625%2014.4844%209.29688%2014.4844%209.98438C14.4844%2010.6719%2014.4375%2011.3438%2014.3438%2012ZM12.5625%2017.5312C13.3438%2017.2812%2014.1562%2016.8125%2015%2016.125C15.8438%2015.4062%2016.4844%2014.6875%2016.9219%2013.9688H13.9688C13.6562%2015.2188%2013.1875%2016.4062%2012.5625%2017.5312ZM12.3281%2012C12.4219%2011.3438%2012.4688%2010.6719%2012.4688%209.98438C12.4688%209.29688%2012.4219%208.625%2012.3281%207.96875H7.64062C7.54688%208.625%207.5%209.29688%207.5%209.98438C7.5%2010.6719%207.54688%2011.3438%207.64062%2012H12.3281ZM9.98438%2017.9531C10.8594%2016.6719%2011.5%2015.3438%2011.9062%2013.9688H8.0625C8.46875%2015.3438%209.10938%2016.6719%209.98438%2017.9531ZM6%206C6.375%204.65625%206.84375%203.46875%207.40625%202.4375C6.625%202.6875%205.79688%203.17188%204.92188%203.89062C4.07812%204.57813%203.45312%205.28125%203.04688%206H6ZM3.04688%2013.9688C3.45312%2014.6875%204.07812%2015.4062%204.92188%2016.125C5.79688%2016.8125%206.625%2017.2812%207.40625%2017.5312C6.78125%2016.4062%206.3125%2015.2188%206%2013.9688H3.04688ZM2.25%2012H5.625C5.53125%2011.3438%205.48438%2010.6719%205.48438%209.98438C5.48438%209.29688%205.53125%208.625%205.625%207.96875H2.25C2.0625%208.84375%201.96875%209.51562%201.96875%209.98438C1.96875%2010.4531%202.0625%2011.125%202.25%2012ZM9.98438%202.01562C9.10938%203.29687%208.46875%204.625%208.0625%206H11.9062C11.5%204.625%2010.8594%203.29687%209.98438%202.01562ZM16.9219%206C16.4844%205.28125%2015.8438%204.57813%2015%203.89062C14.1562%203.17188%2013.3438%202.6875%2012.5625%202.4375C13.125%203.46875%2013.5938%204.65625%2013.9688%206H16.9219ZM2.90625%202.95312C4.875%200.984375%207.23438%200%209.98438%200C12.7344%200%2015.0781%200.984375%2017.0156%202.95312C18.9844%204.89062%2019.9688%207.23438%2019.9688%209.98438C19.9688%2012.7344%2018.9844%2015.0938%2017.0156%2017.0625C15.0781%2019%2012.7344%2019.9688%209.98438%2019.9688C7.23438%2019.9688%204.875%2019%202.90625%2017.0625C0.96875%2015.0938%200%2012.7344%200%209.98438C0%207.23438%200.96875%204.89062%202.90625%202.95312Z'%20fill='%237B7B7B'/%3e%3c/svg%3e"
              alt="globe-icon"
              className="absolute z-10 start-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
            />
            <select
              id="languageSelection"
              className="w-[100px] text-xs text-languageDropdownBorder font-bold rounded-md bg-black border border-languageDropdownBorder focus:outline-none h-[42px] ps-8"
            >
              <option className="capitalize" value="en">
                EN
              </option>
              <option className="capitalize" value="hin">
                HIN
              </option>
              <option className="capitalize" value="tel">
                TEL
              </option>
              <option className="capitalize" value="guj">
                GUJ
              </option>
              <option className="capitalize" value="tam">
                TAM
              </option>
              <option className="capitalize" value="kan">
                KAN
              </option>
              <option className="capitalize" value="ben">
                BEN
              </option>
              <option className="capitalize" value="mal">
                MAL
              </option>
              <option className="capitalize" value="mar">
                MAR
              </option>
              <option className="capitalize" value="pun">
                PUN
              </option>
              <option className="capitalize" value="odia">
                ODIA
              </option>
              <option className="capitalize" value="assm">
                ASSM
              </option>
            </select>
          </div>
        </div> */}
        <button
          onClick={loginWithDemo}
          className="active:opacity-70 lg:hidden text-center h-[36px] w-[44px] text-[9px] text-black font-bold rounded-[4px] bg-buttonGradient"
        >
          Demo
        </button>
        <div className="flex rounded-md border border-signupHereText">
          <a
            aria-current="page"
            className="flex flex-col items-center gap-1 h-[34px] lg:h-[40px] w-[45px] py-[6px] text-white text-[8px] font-bold rounded-s-[5px] active"
            onClick={() => dispatch(setShowLoginModal(true))}
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[11px] md:h-[14px] icon-svg-class-primarySvgColor"
              aria-label="login"
            >
              <g clipPath="url(#clip0_9_283)">
                <g clipPath="url(#clip1_9_283)">
                  <g clipPath="url(#clip2_9_283)">
                    <path
                      d="M0 7.49844C0 7.73208 0.186916 7.919 0.420561 7.919H10.5794L8.40187 10.0966C8.23676 10.2617 8.23676 10.5265 8.40187 10.6916C8.48287 10.7726 8.5919 10.8162 8.69782 10.8162C8.80374 10.8162 8.91277 10.7757 8.99377 10.6916L11.891 7.79439C12.0561 7.62928 12.0561 7.36448 11.891 7.19937L8.99377 4.30218C8.82866 4.13707 8.56386 4.13707 8.39875 4.30218C8.23365 4.46729 8.23365 4.73208 8.39875 4.89719L10.5763 7.07476H0.420561C0.186916 7.07788 0 7.26479 0 7.49844Z"
                      fill="#FFDF02"
                    />
                    <path
                      d="M11.9128 0H3.08411C1.38318 0 0 1.38318 0 3.08411V4.8972C0 5.13084 0.186916 5.31776 0.420561 5.31776C0.654206 5.31776 0.841121 5.13084 0.841121 4.8972V3.08411C0.841121 1.84735 1.84735 0.841121 3.08411 0.841121H11.9159C13.1526 0.841121 14.1589 1.84735 14.1589 3.08411V11.9159C14.1589 13.1526 13.1526 14.1589 11.9159 14.1589H3.08411C1.84735 14.1589 0.841121 13.1526 0.841121 11.9159V10.1246C0.841121 9.89097 0.654206 9.70405 0.420561 9.70405C0.186916 9.70405 0 9.89097 0 10.1246V11.9159C0 13.6168 1.38318 15 3.08411 15H11.9159C13.6168 15 15 13.6168 15 11.9159V3.08411C14.9969 1.38318 13.6137 0 11.9128 0Z"
                      fill="#FFDF02"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_9_283">
                  <rect width={15} height={15} fill="white" />
                </clipPath>
                <clipPath id="clip1_9_283">
                  <rect width={15} height={15} fill="white" />
                </clipPath>
                <clipPath id="clip2_9_283">
                  <rect width={15} height={15} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Login
          </a>
          <a
            className="flex flex-col items-center gap-1 h-[34px] lg:h-[40px] w-[45px] py-[6px] text-black text-[8px] font-bold bg-buttonGradient rounded-e-[5px]"
            onClick={() => navigate("/register")}
          >
            <img
              loading="lazy"
              src="data:image/svg+xml,%3csvg%20width='15'%20height='16'%20viewBox='0%200%2015%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_309)'%3e%3cg%20clip-path='url(%23clip1_9_309)'%3e%3cg%20clip-path='url(%23clip2_9_309)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.07058%2014.4726H0.7668C0.109573%2014.4222%20-0.0492455%2013.9496%200.0114415%2013.4034C0.371689%2010.1857%203.98063%2011.1167%205.43066%209.81128C6.15373%2011.9392%209.17646%2012.018%209.85435%209.81128C10.0106%209.95202%2010.2275%2010.0708%2010.4819%2010.1754C10.2482%2010.3174%2010.0274%2010.4892%209.82594%2010.6906C8.8033%2011.7119%208.55151%2013.2136%209.07058%2014.4726ZM14.2031%2011.2252C15.2645%2012.2865%2015.2645%2014.0064%2014.2031%2015.0678C13.1418%2016.1292%2011.4219%2016.1292%2010.3605%2015.0678C9.29912%2014.0064%209.29912%2012.2865%2010.3605%2011.2252C11.4219%2010.1638%2013.1431%2010.1638%2014.2031%2011.2252ZM12.0042%2011.6383H12.5594C12.6356%2011.6383%2012.6976%2011.7003%2012.6976%2011.7765V12.7294H13.6505C13.7267%2012.7294%2013.7887%2012.7914%2013.7887%2012.8676V13.4228C13.7887%2013.499%2013.7267%2013.561%2013.6505%2013.561H12.6976V14.5139C12.6976%2014.5901%2012.6356%2014.652%2012.5594%2014.652H12.0042C11.928%2014.652%2011.8661%2014.5901%2011.8661%2014.5139V13.561H10.9131C10.837%2013.561%2010.775%2013.499%2010.775%2013.4228V12.8676C10.775%2012.7914%2010.837%2012.7294%2010.9131%2012.7294H11.8661V11.7765C11.8661%2011.7016%2011.928%2011.6383%2012.0042%2011.6383ZM5.41129%207.67691C5.68632%208.11204%205.97296%208.55751%206.32934%208.88548C6.6728%209.19924%207.08986%209.41229%207.63992%209.41358C8.23775%209.41488%208.67289%209.19408%209.02797%208.86224C9.39726%208.51748%209.68649%208.0449%209.97443%207.57232L10.7453%206.30306C10.8886%205.9738%2010.9415%205.75558%2010.908%205.62646C10.8873%205.55028%2010.8034%205.51284%2010.6601%205.50638C10.6304%205.50509%2010.5981%205.50509%2010.5671%205.50509C10.5335%205.50638%2010.4974%205.50896%2010.4586%205.51154C10.4367%205.51284%2010.4186%205.51154%2010.3992%205.50767C10.3321%205.51154%2010.2598%205.50638%2010.1888%205.49605L10.4522%204.3275C8.49341%204.6361%207.02917%203.1822%204.96065%204.03698L5.11044%205.41341C5.02909%205.41858%204.94903%205.4147%204.87543%205.40437C3.68752%205.44311%205.17758%207.30375%205.41129%207.67691ZM10.9261%205.15646C11.1159%205.21457%2011.2372%205.33465%2011.2876%205.52962C11.3431%205.74525%2011.2824%206.04869%2011.0991%206.46446C11.0952%206.47221%2011.0926%206.47995%2011.0875%206.48641L10.3089%207.76987C10.008%208.26441%209.70457%208.76152%209.29654%209.14114C8.87561%209.53625%208.35525%209.79837%207.64508%209.79578C6.98269%209.79449%206.4817%209.54141%206.07239%209.16567C5.57785%208.71117%203.29757%205.85759%204.31634%205.16937C4.3667%205.13709%204.42222%205.10739%204.48161%205.08544C4.43642%204.49536%204.42093%203.75162%204.44933%203.12926C4.46483%202.98206%204.49324%202.83486%204.53326%202.68637C4.70758%202.06143%205.14659%201.55785%205.6889%201.2131C5.98846%201.022%206.31643%200.878678%206.65731%200.783128C6.87423%200.72115%206.47266%200.0264784%206.69604%200.00581897C7.78066%20-0.106516%209.53929%200.885134%2010.2972%201.70634C10.6756%202.11695%2010.9157%202.66184%2010.9674%203.38234L10.9261%205.15646Z'%20fill='%23020C1B'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9_309'%3e%3crect%20width='15'%20height='15.86'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_9_309'%3e%3crect%20width='15'%20height='15.86'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_9_309'%3e%3crect%20width='15'%20height='15.8664'%20fill='white'%20transform='translate(0%20-0.00320435)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="signup"
              className="h-[11px] md:h-[14px]"
            />
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
