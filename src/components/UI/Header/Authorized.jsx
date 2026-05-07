import { useState } from "react";
import Dropdown from "./Dropdown";
import useBalance from "../../../hooks/balance";
import { useNavigate } from "react-router-dom";

const Authorized = () => {
  const navigate = useNavigate();
  const { data } = useBalance();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <div className="justify-center hidden md:flex gap-2">
        <button
          onClick={() => navigate("/deposit")}
          className=" active:opacity-70 text-center h-[36px] w-[58px] text-[9px] text-black font-bold rounded-[4px] bg-buttonGradient"
        >
          <span className="my-auto uppercase">Deposit </span>
        </button>
        <button
          onClick={() => navigate("/withdraw")}
          className=" active:opacity-70 text-center h-[36px] w-[58px] text-[9px] text-black font-bold rounded-[4px] bg-buttonGradient"
        >
          <span className="my-auto uppercase">Withdraw</span>
        </button>
        <button
          onClick={() => navigate("/promotions")}
          className=" active:opacity-70 text-center h-[36px] w-[58px] text-[9px] text-white font-bold rounded-[4px] color-blinking-button"
        >
          Check Bonuses
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1 justify-between text-sm md:text-[16px]">
          <div className="flex items-center gap-0.5">
            <div className="md:flex flex-col justify-center gap-1 md:h-[30px] text-center leading-none text-[11px] text-white font-bold bg-balanceAndExposureBg px-1 md:px-2 rounded-md md:uppercase">
              Balance:{" "}
              <span className="text-signupHereText">{data?.availBalance}</span>
            </div>
            <div className="inline-block">
              <div className="cursor-pointer">
                <img
                  src="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='white'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='Warning%20/%20Info'%3e%3cpath%20id='Vector'%20d='M12%2011V16M12%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012C21%2016.9706%2016.9706%2021%2012%2021ZM12.0498%208V8.1L11.9502%208.1002V8H12.0498Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt="info-btn"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-0.5">
            <div className="md:flex flex-col justify-center gap-1 md:h-[30px] text-center leading-none text-[11px] text-white font-bold bg-balanceAndExposureBg px-1 md:px-2 rounded-md cursor-pointer md:uppercase">
              Exposure:{" "}
              <span className="text-signupHereText">
                {data?.deductedExposure}
              </span>
            </div>
          </div>
        </div>
        <div onMouseLeave={() => setShowDropdown(false)}>
          <button
            onMouseEnter={() => setShowDropdown(true)}
            className=" active:opacity-70 flex justify-center items-center gap-2 w-full"
          >
            <div className="flex justify-center items-center gap-1 underline">
              <img
                src="data:image/svg+xml,%3csvg%20width='35'%20height='35'%20viewBox='0%200%2035%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_47_30633)'%3e%3cg%20clip-path='url(%23clip1_47_30633)'%3e%3cg%20clip-path='url(%23clip2_47_30633)'%3e%3cmask%20id='mask0_47_30633'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='35'%20height='35'%3e%3cpath%20d='M35%200H0V35H35V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_47_30633)'%3e%3cpath%20d='M17.5%200.000732422C7.83603%200.000732422%200%207.83522%200%2017.4999C0%2027.1647%207.83526%2034.9991%2017.5%2034.9991C27.1654%2034.9991%2035%2027.1647%2035%2017.4999C35%207.83522%2027.1654%200.000732422%2017.5%200.000732422ZM17.5%205.2332C20.6977%205.2332%2023.289%207.82523%2023.289%2011.0214C23.289%2014.2185%2020.6977%2016.8096%2017.5%2016.8096C14.3037%2016.8096%2011.7125%2014.2185%2011.7125%2011.0214C11.7125%207.82523%2014.3037%205.2332%2017.5%205.2332ZM17.4961%2030.424C14.3068%2030.424%2011.3858%2029.2625%209.13281%2027.34C8.58396%2026.8719%208.26726%2026.1854%208.26726%2025.4651C8.26726%2022.2236%2010.8908%2019.6292%2014.1331%2019.6292H20.8684C24.1115%2019.6292%2026.7251%2022.2236%2026.7251%2025.4651C26.7251%2026.1861%2026.4098%2026.8711%2025.8603%2027.3392C23.608%2029.2625%2020.6862%2030.424%2017.4961%2030.424Z'%20fill='%23FFFDFD'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_47_30633'%3e%3crect%20width='35'%20height='35'%20rx='4'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_47_30633'%3e%3crect%20width='35'%20height='35'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_47_30633'%3e%3crect%20width='35'%20height='35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                className="w-[35px] h-[35px]"
              />
            </div>
          </button>
          {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
        </div>
      </div>
    </div>
  );
};

export default Authorized;
