import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Tab = ({ categories, selectedCategory }) => {
  const navigate = useNavigate();
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedCategory, categories]);
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="inline-flex gap-2">
        <div
          onClick={() => {
            navigate(`/casino?product=All&category=All`);
          }}
          ref={selectedCategory === "All" ? activeRef : null}
          tabIndex={0}
          role="button"
          aria-pressed="true"
          className={`flex items-center h-[32px] px-2 py-1 min-w-fit whitespace-nowrap transition-colors cursor-pointer rounded-[8px]  ${selectedCategory === "All" ? "bg-buttonGradient text-reportsTableHeaderText" : "bg-reportsTableHeaderText"}`}
        >
          <div
            className="casino-filter-text text-xs font-medium px-2"
            style={{ textTransform: "uppercase" }}
          >
            All
          </div>
        </div>
        {categories?.map((category) => {
          return (
            <div
              onClick={() => {
                navigate(`/casino?product=${category}&category=All`);
              }}
              key={category}
              ref={category === selectedCategory ? activeRef : null}
              tabIndex={0}
              role="button"
              aria-pressed="false"
              className={`flex items-center h-[32px] px-2 py-1 min-w-fit whitespace-nowrap transition-colors cursor-pointer rounded-[8px]  ${selectedCategory === category ? "bg-buttonGradient text-reportsTableHeaderText" : "bg-reportsTableHeaderText"}`}
            >
              <div
                className="casino-filter-text text-xs font-medium px-2"
                style={{ textTransform: "uppercase" }}
              >
                {category}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
