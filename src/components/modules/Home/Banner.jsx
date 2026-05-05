import useBannerImage from "../../../hooks/banner.hook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const { data } = useBannerImage();

  return (
    <div
      className="relative w-full h-[210px] sm:h-[350px] md:h-[375px] lg:h-[325px] xl:h-[350px] 2xl:h-[500px] p-2"
      style={{ overflow: "visible" }}
    >
      <div className="relative w-full h-full" style={{ overflow: "visible" }}>
        <img
          loading="lazy"
          src="/icon/horse-racing-desktop-CCtIUVSJ.webp"
          alt="Horse Racing Banner"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-500 rounded-[15px]"
          style={{
            width: "calc(100% + 0px)",
            height: "calc(100% - 60px)",
            zIndex: 4,
            opacity: "0.7",
          }}
        />
        <img
          loading="lazy"
          src="/icon/jili-desktop-1V8Mh0AX.webp"
          alt="Jili Banner"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-500 rounded-[15px]"
          style={{
            width: "calc(100% - 45px)",
            height: "calc(100% - 30px)",
            zIndex: 5,
            opacity: "0.8",
          }}
        />
        <img
          loading="eager"
          src="/icon/turbo-mines-desktop-DnN-WG_W.webp"
          alt="Turbo Mines Banner"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-500 rounded-[15px]"
          style={{
            width: "calc(100% - 90px)",
            height: "100%",
            zIndex: 7,
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
