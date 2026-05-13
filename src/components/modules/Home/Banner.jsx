import useBannerImage from "../../../hooks/banner.hook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Fragment } from "react";

const Banner = () => {
  const { data } = useBannerImage();

  return (
    <Fragment>
      {data?.banner?.length > 0 && (
        <div className="relative w-full h-full" style={{ overflow: "visible" }}>
          <div className="w-full ">
            <Swiper
              slidesPerView="auto"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <div
                className="w-full px-[6px]"
                style={{
                  aspectRatio: "2.00561 / 1",
                  maxHeight: "350px",
                }}
              >
                <div className="w-full  h-full z-10  flex flex-row rounded-[10px]">
                  {data?.banner?.map((image, i) => {
                    return (
                      <SwiperSlide
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "10px",
                          marginRight: "50px",
                        }}
                        key={i}
                      >
                        <div className="w-full h-full swiper-slide !rounded-[10px]">
                          <img
                            className="!rounded-[10px] object-cover"
                            src={image}
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Banner;
