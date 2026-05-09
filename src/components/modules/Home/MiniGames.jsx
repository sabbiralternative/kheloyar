import { useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { API, Settings } from "../../../api";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import toast from "react-hot-toast";

const MiniGames = ({ setShowMiniGames }) => {
  const ref = useRef();
  useCloseModalClickOutside(ref, () => setShowMiniGames(false));
  const [iFrame, setIFrame] = useState("");
  const token = useSelector(userToken);

  useEffect(() => {
    const getCasinoVideo = async () => {
      const payload = {
        gameId: 150899,
        isHome: false,
        mobileOnly: true,
        casinoCurrency: Settings.casino_currency,
      };

      try {
        const res = await AxiosSecure.post(API.liveCasinoIFrame, payload);
        const data = res?.data;
        setIFrame(data?.gameUrl);
      } catch (error) {
        toast.error(error?.message);
      }
    };
    getCasinoVideo();
  }, [token]);

  return (
    <div
      ref={ref}
      className="bg-[#132225] fixed bottom-[36px]  w-full h-fit z-50 yuvi-lobby-ctn pb-[20px]"
    >
      <div className="mx-auto h-[245px] w-[98%]">
        <div
          className="top-2 right-3 absolute"
          onClick={() => setShowMiniGames(false)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            className="text-[#ae7526]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
          </svg>
        </div>
        <div className="w-full h-full">
          <iframe
            src={iFrame}
            allowFullScreen
            className="w-full h-full rounded-t-[10px]"
            sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniGames;
