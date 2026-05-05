import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Tab2 = ({ subCategories, product, selectedSubCategory }) => {
  const activeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedSubCategory, subCategories, product]);
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="inline-flex border border-casinoProvidersBorder">
        <div
          ref={selectedSubCategory === "All" ? activeRef : null}
          onClick={() => {
            navigate(`/casino?product=${product}&category=All`);
          }}
          className={`flex flex-col justify-center items-center h-[52.5px] px-3 py-1.5 min-w-fit whitespace-nowrap border-r border-casinoProvidersBorder last:border-r-0 transition-colors cursor-pointer  ${
            selectedSubCategory === "All" ? "bg-blue4 text-white " : "bg-white"
          }`}
        >
          <img className="size-5" src={`/icon/all.svg`} />
          <div className="text-[13px] w-fit text-center uppercase ">all</div>
        </div>
        {subCategories?.map((category) => {
          return (
            <div
              key={category}
              ref={category === selectedSubCategory ? activeRef : null}
              onClick={() => {
                navigate(`/casino?product=${product}&category=${category}`);
              }}
              className={`flex flex-col justify-center items-center h-[52.5px] px-3 py-1.5 min-w-fit whitespace-nowrap border-r border-casinoProvidersBorder last:border-r-0 transition-colors cursor-pointer ${
                selectedSubCategory === category
                  ? "bg-blue4 text-white "
                  : "bg-white"
              }`}
            >
              <img
                className="size-5"
                src={`/icon/${category?.split(" ").join("").toLowerCase()}.svg`}
                onError={(e) => {
                  if (e.target.src.endsWith(".svg")) {
                    // Try webp only once after svg fails
                    e.target.src = `/icon/${category
                      ?.split(" ")
                      .join("")
                      .toLowerCase()}.webp`;
                  } else if (e.target.src.endsWith(".webp")) {
                    // Try webp only once after svg fails
                    e.target.src = `/icon/${category
                      ?.split(" ")
                      .join("")
                      .toLowerCase()}.png`;
                  } else {
                    // If webp fails, do nothing (leave broken img)
                    // e.target.onerror = null;
                    e.target.src = `/icon/all.svg`;
                  }
                }}
              />
              <div className="text-[13px] w-fit text-center uppercase ">
                {category}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab2;
