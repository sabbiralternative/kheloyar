import { useDispatch, useSelector } from "react-redux";
import { API, Settings } from "../../../api";
import useBalance from "../../../hooks/balance";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";

const Menu = ({ setShowMenu }) => {
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { data } = useBalance();

  const handleNavigate = (link) => {
    navigate(link);
    setShowMenu(false);
  };

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

  const handleOpenSocialLink = () => {
    if (Settings?.branchWhatsapplink) {
      window.open(Settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings?.whatsapplink, "_blank");
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-50">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="flex flex-col h-full">
        <div className="flex flex-col flex-1 gap-2 p-2 overflow-auto">
          <div>
            <img
              src="/icon/mobile-menu-image-4x-A-2pJ.webp"
              alt="mobile-menu-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <div className="flex flex-col gap-1 p-1.5 border border-mobileMenuGridBorder rounded-md">
              <div className="grid grid-cols-4 gap-1">
                <div
                  onClick={() => handleNavigate("/")}
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2021H11C10.4477%2021%2010%2021.4477%2010%2022V30C10%2030.5523%2010.4477%2031%2011%2031H21C21.5523%2031%2022%2030.5523%2022%2030V22C22%2021.4477%2021.5523%2021%2021%2021Z'%20fill='url(%23paint0_linear_522_39)'/%3e%3cpath%20d='M26.7698%2028.08L25.6998%2026.08C25.5208%2025.7514%2025.2562%2025.4775%2024.9339%2025.2873C24.6117%2025.0971%2024.2439%2024.9979%2023.8698%2025H8.12976C7.7556%2024.9979%207.38784%2025.0971%207.06561%2025.2873C6.74337%2025.4775%206.47871%2025.7514%206.29976%2026.08L5.22976%2028.08C5.06318%2028.3726%204.97559%2028.7034%204.97559%2029.04C4.97559%2029.3767%205.06318%2029.7075%205.22976%2030C5.41011%2030.3127%205.67172%2030.5708%205.98687%2030.7469C6.30201%2030.9229%206.65893%2031.0104%207.01976%2031H24.9298C25.2906%2031.0104%2025.6475%2030.9229%2025.9627%2030.7469C26.2778%2030.5708%2026.5394%2030.3127%2026.7198%2030C26.894%2029.7119%2026.9903%2029.3833%2026.999%2029.0467C27.0078%2028.71%2026.9288%2028.3769%2026.7698%2028.08Z'%20fill='url(%23paint1_linear_522_39)'/%3e%3cpath%20d='M29%201H3C1.89543%201%201%201.89543%201%203V21C1%2022.1046%201.89543%2023%203%2023H29C30.1046%2023%2031%2022.1046%2031%2021V3C31%201.89543%2030.1046%201%2029%201Z'%20fill='url(%23paint2_linear_522_39)'/%3e%3cpath%20d='M20%2011H12C11.7348%2011%2011.4804%2011.1054%2011.2929%2011.2929C11.1054%2011.4804%2011%2011.7348%2011%2012V16C11%2016.5304%2011.2107%2017.0391%2011.5858%2017.4142C11.9609%2017.7893%2012.4696%2018%2013%2018H19C19.5304%2018%2020.0391%2017.7893%2020.4142%2017.4142C20.7893%2017.0391%2021%2016.5304%2021%2016V12C21%2011.7348%2020.8946%2011.4804%2020.7071%2011.2929C20.5196%2011.1054%2020.2652%2011%2020%2011Z'%20fill='url(%23paint3_linear_522_39)'/%3e%3cpath%20d='M21.3296%209.77984L17.2696%206.43984C16.9118%206.14568%2016.4629%205.98486%2015.9996%205.98486C15.5364%205.98486%2015.0875%206.14568%2014.7296%206.43984L10.6696%209.77984C10.3719%2010.0074%2010.1557%2010.325%2010.053%2010.6853C9.95026%2011.0457%209.96663%2011.4295%2010.0996%2011.7798C10.2566%2012.1509%2010.522%2012.4659%2010.861%2012.6836C11.2%2012.9013%2011.5969%2013.0115%2011.9996%2012.9998H19.9996C20.4132%2013.0138%2020.8209%2012.8992%2021.1666%2012.6717C21.5122%2012.4442%2021.7788%2012.1152%2021.9296%2011.7298C22.0476%2011.383%2022.0532%2011.0078%2021.9454%2010.6577C21.8377%2010.3075%2021.6222%2010.0003%2021.3296%209.77984Z'%20fill='url(%23paint4_linear_522_39)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_522_39'%20x1='10'%20y1='26'%20x2='22'%20y2='26'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EFF4FE'/%3e%3cstop%20offset='1'%20stop-color='%23A5C5FC'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_522_39'%20x1='4.99976'%20y1='28'%20x2='26.9998'%20y2='28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%234770E3'/%3e%3cstop%20offset='1'%20stop-color='%23223E7C'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_522_39'%20x1='1'%20y1='12'%20x2='31'%20y2='12'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EFF4FE'/%3e%3cstop%20offset='1'%20stop-color='%23BFD7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_522_39'%20x1='11'%20y1='14.5'%20x2='21'%20y2='14.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%234770E3'/%3e%3cstop%20offset='1'%20stop-color='%23223E7C'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_522_39'%20x1='9.99963'%20y1='9.49984'%20x2='21.9996'%20y2='9.49984'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF7570'/%3e%3cstop%20offset='1'%20stop-color='%23BF1C06'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    alt="home"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">Home</div>
                </div>
                <div
                  onClick={() => handleNavigate("/deposit")}
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/quick-deposit-icon-74e1Txh9.svg"
                    alt="deposit"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Deposit{" "}
                  </div>
                </div>
                <div
                  onClick={() => handleNavigate("/withdraw")}
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/quick-withdraw-icon-COHcH8xe.svg"
                    alt="withdraw"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Withdraw
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleNavigateToIFrame("EvolutionGaming", "200296")
                  }
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/aviator-icon-DdEmCmXD.svg"
                    alt="aviator"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Aviator
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1.5 border border-mobileMenuGridBorder rounded-md">
              <div className="text-signupHereText font-bold">Sports</div>
              <div className="grid grid-cols-4 gap-1">
                <div
                  onClick={() =>
                    handleNavigate("/exchange_sports/in-play?eventTypeId=0")
                  }
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/inplay-icon-CduFEzzM.svg"
                    alt="inPlay"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    In Play
                  </div>
                </div>
                <div
                  onClick={() => handleNavigate("/")}
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_522_253)'%3e%3cpath%20d='M9.375%2032H22.625C27.8027%2032%2032%2027.8027%2032%2022.625V9.375C32%204.19733%2027.8027%200%2022.625%200H9.375C4.19733%200%200%204.19733%200%209.375V22.625C0%2027.8027%204.19733%2032%209.375%2032Z'%20fill='%232492FF'/%3e%3cpath%20d='M20.3116%209.1249L16.1384%2010.1105L12.6622%206.63428L7.83594%209.0999L10.4528%2016.9505L14.5566%2021.0543L11.6897%2022.8749L20.8147%2031.9999H22.6259C27.8034%2031.9999%2032.0009%2027.8024%2032.0009%2022.6249V20.8137L20.3122%209.1249H20.3116Z'%20fill='url(%23paint0_linear_522_253)'/%3e%3cpath%20d='M20.311%209.12494H10.1704L12.6616%206.63432L10.4516%204.42432L4.18848%2010.6874L10.4516%2016.9506L12.6616%2014.7406L10.1704%2012.2499H20.311V9.12494Z'%20fill='white'/%3e%3cpath%20d='M11.6885%2022.8749H21.8291L19.3379%2025.3656L21.5479%2027.5756L27.811%2021.3124L21.5479%2015.0493L19.3379%2017.2593L21.8291%2019.7499H11.6885V22.8749Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_522_253'%20x1='8.46781'%20y1='8.4674'%20x2='29.2547'%20y2='29.2543'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-opacity='0.5'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_522_253'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="exchange"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Exchange
                  </div>
                </div>
                <div
                  onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/sportsbook-icon-CVjw6c32.svg"
                    alt="sportsbook"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Sports Book
                  </div>
                </div>

                <div
                  onClick={() =>
                    handleNavigate("exchange_sports/in-play/?eventTypeId=4")
                  }
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/cricket-icon-CX-zUwWn.svg"
                    alt="cricket"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Cricket
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleNavigate("exchange_sports/in-play/?eventTypeId=1")
                  }
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/football-icon-C8AaZxqt.svg"
                    alt="soccer"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Soccer
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleNavigate("exchange_sports/in-play/?eventTypeId=2")
                  }
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_522_415)'%3e%3cpath%20d='M15.9984%2031.9969C24.8341%2031.9969%2031.9969%2024.8341%2031.9969%2015.9984C31.9969%207.16274%2024.8341%200%2015.9984%200C7.16274%200%200%207.16274%200%2015.9984C0%2024.8341%207.16274%2031.9969%2015.9984%2031.9969Z'%20fill='%2394E061'/%3e%3cpath%20d='M11.4734%2031.3426C10.4638%2031.0458%209.48366%2030.6491%208.54869%2030.1578C9.6408%2026.9987%209.79794%2023.1261%207.69292%2019.7487C5.88093%2016.842%202.92146%2015.1292%200.0810547%2014.3777C0.182815%2013.3912%200.375333%2012.4176%200.655423%2011.4697C4.57949%2012.0441%208.42631%2014.7151%2010.6987%2018.9006C12.9647%2023.0746%2013.1141%2027.7424%2011.4734%2031.3426Z'%20fill='%23E9EFF4'/%3e%3cpath%20d='M23.6311%2030.0585C16.4932%2033.9337%207.70937%2031.8152%203.06348%2025.4158C7.95795%2029.7713%2015.2459%2030.8274%2021.3355%2027.5215C29.1006%2023.3057%2031.9777%2013.5934%2027.7619%205.82824C27.4213%205.20106%2027.0452%204.60606%2026.6363%204.04395C27.9828%205.24162%2029.1483%206.68983%2030.0582%208.36537C34.274%2016.1304%2031.3962%2025.8428%2023.6311%2030.0585Z'%20fill='%2370CF3D'/%3e%3cpath%20d='M12.161%2029.3867C11.9865%2030.0654%2011.7567%2030.7196%2011.4726%2031.3423C11.4095%2031.3236%2011.3464%2031.305%2011.284%2031.2857C10.7594%2031.1234%2010.2426%2030.9353%209.7364%2030.7207C9.64933%2030.6838%208.5386%2030.1846%208.54791%2030.1575C8.7063%2029.699%208.84538%2029.2251%208.96001%2028.7402C10.0007%2029.0635%2011.0735%2029.2804%2012.161%2029.3867Z'%20fill='%23D3DCE2'/%3e%3cpath%20d='M31.9249%2017.5212C31.8321%2018.489%2031.6512%2019.4446%2031.3853%2020.3757C27.55%2019.7253%2023.8185%2017.0801%2021.595%2012.9841C19.3657%208.87779%2019.1841%204.29434%2020.7418%200.719238C21.6826%201.01158%2022.5963%201.38955%2023.4707%201.8506C22.5538%204.61624%2022.3658%207.98851%2023.7728%2011.0703C25.4161%2014.6718%2028.7046%2016.6783%2031.9249%2017.5212Z'%20fill='%23E9EFF4'/%3e%3cpath%20d='M31.9249%2017.5213C31.889%2017.8957%2031.8407%2018.254%2031.7806%2018.6243C31.758%2018.7637%2031.4127%2020.3805%2031.3852%2020.3758C30.4142%2020.211%2029.4496%2019.9186%2028.5146%2019.5065C28.8971%2018.5676%2029.1902%2017.5947%2029.3897%2016.6011C30.2184%2016.9946%2031.0742%2017.2985%2031.9249%2017.5213Z'%20fill='%23D3DCE2'/%3e%3cpath%20d='M31.9249%2017.5212C31.9133%2017.6422%2031.9004%2017.7626%2031.8863%2017.8831C31.8792%2017.9436%2031.8715%2018.0035%2031.8637%2018.064C31.8553%2018.1239%2031.8476%2018.1844%2031.8386%2018.2443C31.8315%2018.2958%2031.8238%2018.3473%2031.8161%2018.3989C31.8052%2018.4742%2031.7929%2018.5489%2031.7807%2018.6243C31.7678%2018.6983%2031.7549%2018.773%2031.7414%2018.847C31.7375%2018.8683%2031.7336%2018.8895%2031.7298%2018.9108C31.7156%2018.9874%2031.7008%2019.0641%2031.6853%2019.1407C31.6853%2019.1413%2031.6853%2019.142%2031.6847%2019.1426C31.6686%2019.2238%2031.6519%2019.3043%2031.6338%2019.3848C31.6235%2019.435%2031.612%2019.4852%2031.6003%2019.5355C31.59%2019.5812%2031.5797%2019.6269%2031.5688%2019.6726C31.5553%2019.7319%2031.5404%2019.7911%2031.5256%2019.8497C31.5108%2019.9083%2031.496%2019.9669%2031.4806%2020.0255C31.4503%2020.1427%2031.4187%2020.2593%2031.3852%2020.3758C30.4142%2020.211%2029.4496%2019.9186%2028.5146%2019.5065C28.8971%2018.5676%2029.1902%2017.5947%2029.3897%2016.6011C30.2185%2016.9944%2031.0743%2017.2983%2031.9249%2017.5212Z'%20fill='%23D3DCE2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_522_415'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="tennis"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Tennis
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1.5 border border-mobileMenuGridBorder rounded-md">
              <div className="text-signupHereText font-bold">Casino</div>
              <div className="grid grid-cols-4 gap-1">
                <div className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer">
                  <img
                    src="/icon/int-casino-icon-BiRIVtKP.svg"
                    alt="internationalCasino"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    International Casino
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer">
                  <img
                    src="/icon/indian-casino-icon-DSCWX6mv.svg"
                    alt="indian_casino"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Indian Casino
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer">
                  <img
                    src="/icon/crash-games-icon-CKbhLlP3.svg"
                    alt="crash_games"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Crash Games
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.5%2027.5H1.5V14.5C1.5%207.32031%207.32031%201.5%2014.5%201.5C21.6797%201.5%2027.5%207.32031%2027.5%2014.5V27.5Z'%20fill='%23EB423F'/%3e%3cpath%20d='M3.5%2017H9.5V25H3.5V17Z'%20fill='%23E9EEF2'/%3e%3cpath%20d='M11.5%2017H17.5V25H11.5V17Z'%20fill='%23C3C6C7'/%3e%3cpath%20d='M19.5%2017H25.5V25H19.5V17Z'%20fill='%23E9EEF2'/%3e%3cpath%20d='M1.5%2027.5H27.5V30.5H1.5V27.5Z'%20fill='%23C7312E'/%3e%3cpath%20d='M14.5%203.5C8.42487%203.5%203.5%208.42487%203.5%2014.5V15H25.5V14.5C25.5%208.42487%2020.5751%203.5%2014.5%203.5Z'%20fill='%23FFB632'/%3e%3cpath%20d='M14.5%206L14%208L12%208.5L14%209L14.5%2011L15%209L17%208.5L15%208L14.5%206Z'%20fill='%23FFD33A'/%3e%3cpath%20d='M8.5%2010L9%209L9.5%2010L10.5%2010.5L9.5%2011L9%2012L8.5%2011L7.5%2010.5L8.5%2010Z'%20fill='%23FFD33A'/%3e%3cpath%20d='M19%2010L19.5%209L20%2010L21%2010.5L20%2011L19.5%2012L19%2011L18%2010.5L19%2010Z'%20fill='%23FFD33A'/%3e%3cpath%20d='M6%2023.5C5.72387%2023.5%205.5%2023.2761%205.5%2023V22.5C5.5%2021.5698%206.13831%2020.7859%207%2020.5632V19.5H5.5C5.22387%2019.5%205%2019.2761%205%2019C5%2018.7239%205.22387%2018.5%205.5%2018.5H7.5C7.77613%2018.5%208%2018.7239%208%2019V21C8%2021.2761%207.77613%2021.5%207.5%2021.5C6.94863%2021.5%206.5%2021.9486%206.5%2022.5V23C6.5%2023.2761%206.27613%2023.5%206%2023.5Z'%20fill='%23395A8D'/%3e%3cpath%20d='M11.5%2019H17.5V25H11.5V19Z'%20fill='%23E9EEF2'/%3e%3cpath%20d='M27.5%203.5H29.5V18H27.5V3.5Z'%20fill='%239AA3A8'/%3e%3cpath%20d='M16%2021V23C16%2023.2763%2015.7763%2023.5%2015.5%2023.5C14.9488%2023.5%2014.5%2023.9488%2014.5%2024.5V25H13.5V24.5C13.5%2023.57%2014.1381%2022.7856%2015%2022.5631V21.5H13.5C13.2237%2021.5%2013%2021.2763%2013%2021C13%2020.7237%2013.2237%2020.5%2013.5%2020.5H15.5C15.7763%2020.5%2016%2020.7237%2016%2021Z'%20fill='%23395A8D'/%3e%3cpath%20d='M22%2023.5C21.7239%2023.5%2021.5%2023.2761%2021.5%2023V22.5C21.5%2021.5698%2022.1384%2020.7859%2023%2020.5632V19.5H21.5C21.2239%2019.5%2021%2019.2761%2021%2019C21%2018.7239%2021.2239%2018.5%2021.5%2018.5H23.5C23.7761%2018.5%2024%2018.7239%2024%2019V21C24%2021.2761%2023.7761%2021.5%2023.5%2021.5C22.9486%2021.5%2022.5%2021.9486%2022.5%2022.5V23C22.5%2023.2761%2022.2761%2023.5%2022%2023.5Z'%20fill='%23395A8D'/%3e%3cpath%20d='M27.5%2018H30.5V25H27.5V18Z'%20fill='%23FFB632'/%3e%3cpath%20d='M28.5%205.5C29.6046%205.5%2030.5%204.60457%2030.5%203.5C30.5%202.39543%2029.6046%201.5%2028.5%201.5C27.3954%201.5%2026.5%202.39543%2026.5%203.5C26.5%204.60457%2027.3954%205.5%2028.5%205.5Z'%20fill='%23395A8D'/%3e%3c/svg%3e"
                    alt="slot_games"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Slot games
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 p-1.5 border border-mobileMenuGridBorder rounded-md">
              <div className="text-signupHereText font-bold">Accessibility</div>
              <div className="grid grid-cols-4 gap-1">
                <div
                  onClick={() => handleNavigate("/promotions")}
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                >
                  <img
                    src="/icon/promotions-icon-5HMz-PYQ.svg"
                    alt="promotions"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    Promotions
                  </div>
                </div>
                <div
                  onClick={() => handleNavigate("/stake-settings")}
                  className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md  "
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_522_909)'%3e%3cpath%20d='M30.6168%2019.568L30.6115%2019.5627L28.5608%2017.6787C28.6302%2017.1107%2028.6662%2016.548%2028.6662%2016C28.6662%2015.452%2028.6302%2014.8893%2028.5608%2014.3213L30.6168%2012.432C31.2955%2011.7933%2031.4502%2010.78%2030.9902%209.95867L28.7275%206.04667C28.2742%205.24%2027.2888%204.856%2026.3862%205.13733L23.7248%205.97733C22.8222%205.27467%2021.8488%204.70933%2020.8248%204.29333L20.2102%201.56133C20.0088%200.657333%2019.1915%200%2018.2662%200H13.7328C12.8075%200%2011.9902%200.657333%2011.7888%201.56L11.1742%204.29333C10.1502%204.70933%209.17685%205.27467%208.27418%205.97733L5.61018%205.13733C4.71285%204.85867%203.72485%205.23867%203.27685%206.03867L1.00485%209.96667C0.548847%2010.78%200.703514%2011.7933%201.38885%2012.4373L3.43951%2014.3213C3.36885%2014.8893%203.33285%2015.452%203.33285%2016C3.33285%2016.548%203.36885%2017.1107%203.43818%2017.6787L1.38218%2019.568C0.703513%2020.2067%200.547513%2021.22%201.00885%2022.04L3.27151%2025.952C3.72485%2026.76%204.70885%2027.1427%205.61285%2026.8627L8.27418%2026.0227C9.17685%2026.7253%2010.1502%2027.2907%2011.1742%2027.7067L11.7888%2030.4373C11.9902%2031.3427%2012.8075%2032%2013.7328%2032H18.2662C19.1915%2032%2020.0088%2031.3427%2020.2088%2030.44L20.8235%2027.7067C21.8475%2027.2907%2022.8208%2026.7267%2023.7235%2026.0227L26.3875%2026.8627C27.2875%2027.144%2028.2728%2026.76%2028.7222%2025.96L30.9942%2022.032C31.4502%2021.22%2031.2955%2020.2067%2030.6168%2019.568ZM15.9995%2022.6667C12.3235%2022.6667%209.33285%2019.676%209.33285%2016C9.33285%2012.324%2012.3235%209.33333%2015.9995%209.33333C19.6755%209.33333%2022.6662%2012.324%2022.6662%2016C22.6662%2019.676%2019.6755%2022.6667%2015.9995%2022.6667Z'%20fill='%2300BCD4'/%3e%3cpath%20d='M15.9995%200H13.7328C12.8075%200%2011.9902%200.657333%2011.7888%201.56L11.1742%204.29333C10.1502%204.70933%209.17685%205.27467%208.27418%205.97733L5.61018%205.13733C5.41285%205.076%205.21018%205.04667%205.01151%205.04667C4.30351%205.04667%203.62618%205.416%203.27551%206.04L1.00485%209.96667C0.548847%2010.78%200.703514%2011.7933%201.38885%2012.4373L3.43951%2014.3213C3.36885%2014.8893%203.33285%2015.452%203.33285%2016C3.33285%2016.548%203.36885%2017.1107%203.43818%2017.6787L1.38218%2019.568C0.703513%2020.2067%200.547513%2021.22%201.00885%2022.04L3.27151%2025.952C3.62485%2026.5827%204.30085%2026.9533%205.01018%2026.9533C5.21018%2026.9533%205.41418%2026.924%205.61285%2026.8613L8.27418%2026.0213C9.17685%2026.724%2010.1502%2027.2893%2011.1742%2027.7053L11.7888%2030.436C11.9902%2031.3427%2012.8075%2032%2013.7328%2032H15.9995V22.6667C12.3235%2022.6667%209.33285%2019.676%209.33285%2016C9.33285%2012.324%2012.3235%209.33333%2015.9995%209.33333V0Z'%20fill='%2300A4B9'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_522_909'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="settings"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="text-[10px] text-center capitalize">
                    settings
                  </div>
                </div>
                {Settings.apk_link && (
                  <div
                    onClick={handleDownload}
                    className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                  >
                    <img
                      src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.7333%2016.0001C30.7333%2016.4534%2030.7333%2016.9068%2030.7199%2017.3734C30.7066%2018.3068%2030.6933%2019.2534%2030.6533%2020.1868C30.6133%2021.7068%2030.5333%2023.1868%2030.4399%2024.6401C30.3599%2025.7334%2029.9733%2026.7468%2029.4266%2027.6001C28.6799%2028.7334%2027.5733%2029.6001%2026.2933%2030.0801C25.7733%2030.2668%2025.2133%2030.3868%2024.6266%2030.4268C22.9333%2030.5468%2021.2266%2030.6401%2019.5199%2030.6934C18.2133%2030.7334%2016.8933%2030.7468%2015.5733%2030.7468C15.3599%2030.7468%2015.1333%2030.7468%2014.9199%2030.7334C12.3333%2030.7201%209.81327%2030.6134%207.35994%2030.4268C4.27994%2030.2001%201.79993%2027.7201%201.57327%2024.6401C1.35993%2021.8534%201.2666%2018.9601%201.2666%2016.0001C1.2666%2013.0934%201.35993%2010.2534%201.55993%207.52008C1.7866%204.32008%204.3066%201.78675%207.51994%201.56008C10.2666%201.36008%2013.1066%201.25342%2016.0133%201.25342C18.9599%201.25342%2021.8533%201.36008%2024.6266%201.57342C27.7199%201.80008%2030.1866%204.28008%2030.4399%207.36008C30.6266%2010.1468%2030.7333%2013.0401%2030.7333%2016.0001Z'%20fill='url(%23paint0_linear_522_854)'/%3e%3cpath%20d='M30.7202%2017.3734C30.7069%2018.3068%2030.6935%2019.2534%2030.6535%2020.1868C30.6135%2021.7068%2030.5335%2023.1868%2030.4402%2024.6401C30.3602%2025.7334%2029.9735%2026.7468%2029.4269%2027.6001C28.6802%2028.7334%2027.5735%2029.6001%2026.2935%2030.0801C25.7735%2030.2668%2025.2135%2030.3868%2024.6269%2030.4268C22.9335%2030.5468%2021.2269%2030.6401%2019.5202%2030.6934C18.2135%2030.7334%2016.8935%2030.7468%2015.5735%2030.7468C15.3602%2030.7468%2015.1335%2030.7468%2014.9202%2030.7334L8.2002%2022.9334L14.6135%2023.1068L21.5469%2020.5468L23.8802%209.42676L30.7202%2017.3734Z'%20fill='url(%23paint1_linear_522_854)'/%3e%3cpath%20d='M6.42379%2018.3413C6.56246%2022.2693%209.73712%2025.4453%2013.6665%2025.584C14.4251%2025.6107%2015.1931%2025.624%2015.9705%2025.624C16.7478%2025.624%2017.5158%2025.6107%2018.2745%2025.584C22.2038%2025.4453%2025.3785%2022.2707%2025.5171%2018.3413C25.5438%2017.5827%2025.5571%2016.8147%2025.5571%2016.0373C25.5571%2015.26%2025.5438%2014.492%2025.5171%2013.7334C25.3785%209.80402%2022.2038%206.62935%2018.2745%206.49068C17.5158%206.46402%2016.7478%206.45068%2015.9705%206.45068C15.1931%206.45068%2014.4251%206.46402%2013.6665%206.49068C9.73846%206.62935%206.56246%209.80402%206.42379%2013.7334C6.39712%2014.492%206.38379%2015.26%206.38379%2016.0373C6.38379%2016.8147%206.39712%2017.5827%206.42379%2018.3413ZM11.3811%2016.6533C11.5625%2016.4467%2011.8145%2016.3427%2012.0678%2016.3427C12.2825%2016.3427%2012.4971%2016.4174%2012.6718%2016.5707L15.0558%2018.668V11.464C15.0558%2010.9587%2015.4651%2010.5494%2015.9705%2010.5494C16.4758%2010.5494%2016.8851%2010.9587%2016.8851%2011.464V18.6693L19.2678%2016.5707C19.4411%2016.4174%2019.6571%2016.3427%2019.8718%2016.3427C20.1251%2016.3427%2020.3785%2016.448%2020.5585%2016.6533C20.8918%2017.032%2020.8545%2017.6107%2020.4745%2017.944L16.7438%2021.2253C16.5705%2021.404%2016.2798%2021.5267%2015.9678%2021.5267C15.6558%2021.5267%2015.3638%2021.404%2015.1451%2021.1813L11.4611%2017.944C11.0811%2017.6107%2011.0438%2017.032%2011.3771%2016.6533H11.3811Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_522_854'%20x1='-0.590732'%20y1='-0.587915'%20x2='31.9879'%20y2='31.9908'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230ACFFE'/%3e%3cstop%20offset='0.422'%20stop-color='%2323A0FE'/%3e%3cstop%20offset='1'%20stop-color='%23495AFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_522_854'%20x1='4.16419'%20y1='4.84409'%20x2='30.5922'%20y2='31.2721'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%233A49E6'%20stop-opacity='0'/%3e%3cstop%20offset='0.166'%20stop-color='%233B4AE2'%20stop-opacity='0.138'/%3e%3cstop%20offset='0.525'%20stop-color='%233F4CD9'%20stop-opacity='0.492'/%3e%3cstop%20offset='1'%20stop-color='%234551CC'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                      alt="download"
                      className="w-[30px] h-[30px]"
                    />
                    <div className="text-[10px] text-center capitalize">
                      Download Apk
                    </div>
                  </div>
                )}
                {(Settings.branchWhatsapplink || Settings.whatsapplink) && (
                  <div
                    onClick={handleOpenSocialLink}
                    className="flex flex-col gap-1.5 items-center justify-center min-h-[72px] p-1 bg-mobileMenuGridBg border border-mobileMenuGridBorder rounded-md cursor-pointer"
                  >
                    <img
                      src="/icon/customer-support-icon-DU1QUr0V.svg"
                      alt="customer_support_txt"
                      className="w-[30px] h-[30px]"
                    />
                    <div className="text-[10px] text-center capitalize">
                      24x7 Customer Support
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 h-[70px] p-2 bg-black">
          {token && (
            <div className="flex items-center gap-2 text-[10px] text-white font-medium">
              <img
                src={`${API.assets}/${Settings.site}/favicon.png`}
                alt="logo"
                className="h-[45px]"
              />
              <div className="flex flex-col bg-modalBg p-2 rounded-[4px]">
                <span>
                  Bal: <span>{data?.availBalance}</span>
                </span>
                <span>
                  Exp:{" "}
                  <span className="text-exposureText">
                    {data?.deductedExposure}
                  </span>
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <div
              onClick={() => setShowMenu(false)}
              className="flex items-center justify-center h-[40px] w-[40px] rounded-full bg-modalBg cursor-pointer"
            >
              <img
                src="data:image/svg+xml,%3csvg%20width='18'%20height='16'%20viewBox='0%200%2018%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.5625%2014.75L1.8125%208L8.5625%201.25M2.75%208H16.4375'%20stroke='white'%20stroke-width='2.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                alt="back"
                className="h-[20px]"
              />
            </div>
            <div
              onClick={() => setShowMenu(false)}
              className="flex items-center justify-center h-[40px] w-[40px] rounded-full bg-modalBg cursor-pointer"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[15px] w-[15px] icon-svg-class-buttonGradient"
              >
                <path
                  d="M9.70615 1.70664C10.0968 1.31602 10.0968 0.681641 9.70615 0.291016C9.31553 -0.0996094 8.68115 -0.0996094 8.29053 0.291016L4.9999 3.58477L1.70615 0.294141C1.31553 -0.0964844 0.681152 -0.0964844 0.290527 0.294141C-0.100098 0.684766 -0.100098 1.31914 0.290527 1.70977L3.58428 5.00039L0.293652 8.29414C-0.0969726 8.68476 -0.0969726 9.31914 0.293652 9.70977C0.684277 10.1004 1.31865 10.1004 1.70928 9.70977L4.9999 6.41602L8.29365 9.70664C8.68428 10.0973 9.31865 10.0973 9.70928 9.70664C10.0999 9.31602 10.0999 8.68164 9.70928 8.29102L6.41553 5.00039L9.70615 1.70664Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
