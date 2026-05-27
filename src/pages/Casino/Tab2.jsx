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
      <div className="inline-flex gap-2">
        <div
          ref={selectedSubCategory === "All" ? activeRef : null}
          onClick={() => {
            navigate(`/casino?product=${product}&category=All`);
          }}
          className={`flex flex-col justify-center items-center h-[52.5px] px-2 py-1 min-w-fit whitespace-nowrap transition-colors cursor-pointer rounded-[8px]   ${
            selectedSubCategory === "All"
              ? "bg-buttonGradient text-reportsTableHeaderText "
              : "bg-reportsTableHeaderText"
          }`}
        >
          <img className="h-5 w-5 " src="/icon/all.svg" alt="cat-icon" />
          <div className="text-[13px] w-fit text-center uppercase">All</div>
        </div>

        {subCategories?.map((category) => {
          return (
            <div
              key={category}
              ref={category === selectedSubCategory ? activeRef : null}
              onClick={() => {
                navigate(`/casino?product=${product}&category=${category}`);
              }}
              className={`flex flex-col justify-center items-center h-[52.5px] px-2 py-1 min-w-fit whitespace-nowrap transition-colors cursor-pointer rounded-[8px] ${
                selectedSubCategory === category
                  ? "bg-buttonGradient text-reportsTableHeaderText "
                  : "bg-reportsTableHeaderText"
              }`}
            >
              <img
                style={{ filter: "invert(0)" }}
                className="h-5 w-5 selected-category"
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
                alt="cat-icon"
              />
              <div className="text-[13px] w-fit text-center uppercase">
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
