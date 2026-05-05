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
      <div className="inline-flex border border-casinoProvidersBorder">
        <div
          onClick={() => {
            navigate(`/casino?product=All&category=All`);
          }}
          ref={selectedCategory === "All" ? activeRef : null}
          tabIndex={0}
          role="button"
          aria-pressed="true"
          className={`flex items-center h-[32px] px-1 py-1.5 min-w-fit whitespace-nowrap border-r border-casinoProvidersBorder last:border-r-0 transition-colors cursor-pointer  ${selectedCategory === "All" ? "bg-blue4 text-white" : "bg-white"}`}
        >
          <div
            className="casino-filter-text text-[13px] font-[600] px-2"
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
              className={`flex items-center h-[32px] px-1 py-1.5 min-w-fit whitespace-nowrap border-r border-casinoProvidersBorder last:border-r-0 transition-colors cursor-pointer ${selectedCategory === category ? "bg-blue4 text-white" : "bg-white"}`}
            >
              <div
                className="casino-filter-text text-[13px] font-[600] px-2"
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
