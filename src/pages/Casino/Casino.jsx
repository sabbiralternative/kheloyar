import { useDispatch, useSelector } from "react-redux";

import { useIndexQuery } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Tab from "./Tab";
import Tab2 from "./Tab2";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";

const Casino = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { data } = useIndexQuery({
    type: "99_all_casino",
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = params.get("product");
  const category = params.get("category");

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const allTables = data?.data?.allTables;
  // const tables = data?.data?.tables?.[100000];

  const handleNavigateToIFrame = (casino) => {
    if (!token) {
      dispatch(setShowLoginModal(true));
    } else {
      navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
    }
  };

  // const allGames =
  //   allTables &&
  //   Object.values(allTables).flatMap((provider) =>
  //     Object.values(provider).flat(),
  //   );
  const allGames = useMemo(() => {
    if (!allTables) return [];
    return Object.values(allTables).flatMap((provider) =>
      Object.values(provider).flat(),
    );
  }, [allTables]);
  // const tablesGames =
  //   tables &&
  //   Object.values(tables).flatMap((provider) => Object.values(provider).flat());

  const categories =
    allGames && Array.from(new Set(allGames?.map((game) => game?.product)));

  // const a =
  //   allGames && allGames?.find((game) => game.product === "BIKINI GAMES");

  const subCategories = useMemo(() => {
    if (allGames && categories && product === "All") {
      return Array.from(new Set(allGames?.map((game) => game?.category)));
    }
    if (allGames && categories && product !== "All") {
      const allCategory = allGames?.filter((game) => game?.product === product);
      return Array.from(new Set(allCategory?.map((game) => game?.category)));
    }
  }, [categories, allGames, product]);

  const filteredData = useMemo(() => {
    if (allGames && categories && subCategories) {
      if (search) {
        return allGames?.filter((game) => game?.category?.includes(search));
      }
      if (!search) {
        if (product === "All" && category === "All") {
          return allGames;
        }
        if (product === "All" && category !== "All") {
          return allGames?.filter((game) => game?.category === category);
        }
        if (product !== "All" && category === "All") {
          return allGames?.filter((game) => game?.product === product);
        }
        if (product !== "All" && category !== "All") {
          return allGames?.filter(
            (game) => game?.product === product && game?.category === category,
          );
        }
      }
    }
  }, [allGames, categories, category, subCategories, product, search]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setSearch("");
  }, [location.search]);

  return (
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1 bg-black pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-center bg-sportsTitleBg ps-4 pe-2 py-1.5 h-[45px]">
                <div className="flex items-center gap-2 text-lg text-white font-black uppercase relative">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_256_274)'%3e%3cpath%20d='M17.1875%2017.1875H0.9375V9.0625C0.9375%204.5752%204.5752%200.9375%209.0625%200.9375C13.5498%200.9375%2017.1875%204.5752%2017.1875%209.0625V17.1875Z'%20fill='%23EB423F'/%3e%3cpath%20d='M2.1875%2010.625H5.9375V15.625H2.1875V10.625Z'%20fill='%23E9EEF2'/%3e%3cpath%20d='M7.1875%2010.625H10.9375V15.625H7.1875V10.625Z'%20fill='%23C3C6C7'/%3e%3cpath%20d='M12.1875%2010.625H15.9375V15.625H12.1875V10.625Z'%20fill='%23E9EEF2'/%3e%3cpath%20d='M0.9375%2017.1875H17.1875V19.0625H0.9375V17.1875Z'%20fill='%23C7312E'/%3e%3cpath%20d='M9.0625%202.1875C5.26555%202.1875%202.1875%205.26555%202.1875%209.0625V9.375H15.9375V9.0625C15.9375%205.26555%2012.8595%202.1875%209.0625%202.1875Z'%20fill='%23FFB632'/%3e%3cpath%20d='M9.0625%203.75L8.75%205L7.5%205.3125L8.75%205.625L9.0625%206.875L9.375%205.625L10.625%205.3125L9.375%205L9.0625%203.75Z'%20fill='%23FFD33A'/%3e%3cpath%20d='M5.3125%206.25L5.625%205.625L5.9375%206.25L6.5625%206.5625L5.9375%206.875L5.625%207.5L5.3125%206.875L4.6875%206.5625L5.3125%206.25Z'%20fill='%23FFD33A'/%3e%3cpath%20d='M11.875%206.25L12.1875%205.625L12.5%206.25L13.125%206.5625L12.5%206.875L12.1875%207.5L11.875%206.875L11.25%206.5625L11.875%206.25Z'%20fill='%23FFD33A'/%3e%3cpath%20d='M3.75%2014.6875C3.57742%2014.6875%203.4375%2014.5476%203.4375%2014.375V14.0625C3.4375%2013.4811%203.83645%2012.9912%204.375%2012.852V12.1875H3.4375C3.26492%2012.1875%203.125%2012.0476%203.125%2011.875C3.125%2011.7024%203.26492%2011.5625%203.4375%2011.5625H4.6875C4.86008%2011.5625%205%2011.7024%205%2011.875V13.125C5%2013.2976%204.86008%2013.4375%204.6875%2013.4375C4.34289%2013.4375%204.0625%2013.7179%204.0625%2014.0625V14.375C4.0625%2014.5476%203.92258%2014.6875%203.75%2014.6875Z'%20fill='%23395A8D'/%3e%3cpath%20d='M7.1875%2011.875H10.9375V15.625H7.1875V11.875Z'%20fill='%23E9EEF2'/%3e%3cpath%20d='M17.1875%202.1875H18.4375V11.25H17.1875V2.1875Z'%20fill='%239AA3A8'/%3e%3cpath%20d='M10%2013.125V14.375C10%2014.5477%209.86016%2014.6875%209.6875%2014.6875C9.34297%2014.6875%209.0625%2014.968%209.0625%2015.3125V15.625H8.4375V15.3125C8.4375%2014.7312%208.83633%2014.241%209.375%2014.102V13.4375H8.4375C8.26484%2013.4375%208.125%2013.2977%208.125%2013.125C8.125%2012.9523%208.26484%2012.8125%208.4375%2012.8125H9.6875C9.86016%2012.8125%2010%2012.9523%2010%2013.125Z'%20fill='%23395A8D'/%3e%3cpath%20d='M13.75%2014.6875C13.5774%2014.6875%2013.4375%2014.5476%2013.4375%2014.375V14.0625C13.4375%2013.4811%2013.8365%2012.9912%2014.375%2012.852V12.1875H13.4375C13.2649%2012.1875%2013.125%2012.0476%2013.125%2011.875C13.125%2011.7024%2013.2649%2011.5625%2013.4375%2011.5625H14.6875C14.8601%2011.5625%2015%2011.7024%2015%2011.875V13.125C15%2013.2976%2014.8601%2013.4375%2014.6875%2013.4375C14.3429%2013.4375%2014.0625%2013.7179%2014.0625%2014.0625V14.375C14.0625%2014.5476%2013.9226%2014.6875%2013.75%2014.6875Z'%20fill='%23395A8D'/%3e%3cpath%20d='M17.1875%2011.25H19.0625V15.625H17.1875V11.25Z'%20fill='%23FFB632'/%3e%3cpath%20d='M17.8125%203.4375C18.5029%203.4375%2019.0625%202.87786%2019.0625%202.1875C19.0625%201.49714%2018.5029%200.9375%2017.8125%200.9375C17.1221%200.9375%2016.5625%201.49714%2016.5625%202.1875C16.5625%202.87786%2017.1221%203.4375%2017.8125%203.4375Z'%20fill='%23395A8D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_256_274'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="casino-icon"
                    className="h-4 w-4"
                  />
                  <div className="text-sm font-bold">CASINO</div>
                </div>
                <div className="flex items-center w-[200px] md:w-[250px] md:rounded text-xs">
                  <div className="flex flex-col w-full whitespace-nowrap rounded mb-2 text-white">
                    <label htmlFor className="self-start" />
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      type="text"
                      className="flex shrink-0 mt-2 rounded-l bg-loginInputGray outline-none border-solid h-[32px] pl-1 text-[14px] font-sans font-semibold"
                      placeholder="Search Game..."
                    />
                  </div>
                  <div className="flex justify-center align-middle rounded-r p-[7px] w-10 h-[32px] bg-secondaryBg">
                    <img
                      src="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M16.6725%2016.6412L21%2021M19%2011C19%2015.4183%2015.4183%2019%2011%2019C6.58172%2019%203%2015.4183%203%2011C3%206.58172%206.58172%203%2011%203C15.4183%203%2019%206.58172%2019%2011Z'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e"
                      alt="search-icon"
                      className="h-5 w-5"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 overflow-auto">
                <Tab categories={categories} selectedCategory={product} />
                <Tab2
                  product={product}
                  selectedSubCategory={category}
                  subCategories={subCategories}
                />
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 mb-4 px-0.5 md:px-2 sm:px-0">
                  {filteredData?.map((casino, i) => {
                    return (
                      <div
                        onClick={() => handleNavigateToIFrame(casino)}
                        key={`${casino?.id}-${casino?.category}-${casino?.product}-${i}`}
                        className="w-full"
                      >
                        <div className="flex flex-col cursor-pointer">
                          <img
                            loading="lazy"
                            alt="Dragon Tiger"
                            className=" h-[76px] sm:h-[135px] object-fill"
                            src={casino?.url_thumb}
                            title={casino?.name}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
