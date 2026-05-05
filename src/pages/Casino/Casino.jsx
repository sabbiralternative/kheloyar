import { useSelector } from "react-redux";

import { useIndexQuery } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Tab from "./Tab";
import Tab2 from "./Tab2";

const Casino = () => {
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
    if (!token) return navigate("/login");
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
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
    <div className="flex-1 flex white bg-gray1">
      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            <div className="w-full">
              <div className=" ">
                <div className="flex flex-col gap-0.5">
                  <div className="bg-section-gradient py-1.5 sm:bg-blue4 mb-[0.5px]">
                    <div className="flex items-center justify-between h-[25px]">
                      <div className="flex items-center text-white gap-1 pl-2">
                        <img
                          src="data:image/png;base64,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"
                          alt="Casino icon"
                          className="w-5 h-5 filter invert brightness-200"
                        />
                        <div className="text-[14px]">Casino</div>
                      </div>
                      <div className="flex h-full w-[60%] sm:w-[40%] md:w-[40%] lg:w-[25%]">
                        <input
                          type="text"
                          placeholder="Search Games..."
                          className="border border-[red] px-2 text-sm outline-none rounded-none h-full w-full"
                          onChange={(e) => setSearch(e.target.value)}
                          value={search}
                        />
                        <div className="bg-[red] flex items-center justify-center px-3 text-white h-full">
                          <img
                            src="data:image/svg+xml,%3csvg%20width='11'%20height='11'%20viewBox='0%200%2011%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.05078%207.17578L10.9492%2010.0742L10.0742%2010.9492L7.17578%208.05078V7.58594L7.01172%207.42188C6.30078%208.02344%205.48047%208.32422%204.55078%208.32422C3.85807%208.32422%203.22005%208.1556%202.63672%207.81836C2.05339%207.48112%201.5931%207.02083%201.25586%206.4375C0.91862%205.85417%200.75%205.2207%200.75%204.53711C0.75%203.85352%200.91862%203.22005%201.25586%202.63672C1.5931%202.05339%202.05339%201.5931%202.63672%201.25586C3.22005%200.91862%203.85352%200.75%204.53711%200.75C5.2207%200.75%205.85417%200.91862%206.4375%201.25586C7.02083%201.5931%207.48112%202.05339%207.81836%202.63672C8.1556%203.22005%208.32422%203.85807%208.32422%204.55078C8.32422%205.48047%208.02344%206.30078%207.42188%207.01172L7.58594%207.17578H8.05078ZM4.55078%201.625L4.22266%201.65234C4.00391%202.1263%203.83073%202.60026%203.70312%203.07422H5.37109C5.24349%202.60026%205.07031%202.1263%204.85156%201.65234C4.79688%201.63411%204.69661%201.625%204.55078%201.625ZM7.06641%203.07422C6.70182%202.45443%206.18229%202.02604%205.50781%201.78906C5.70833%202.22656%205.86328%202.65495%205.97266%203.07422H7.06641ZM2.00781%203.07422H3.12891C3.23828%202.65495%203.38411%202.22656%203.56641%201.78906C2.89193%202.02604%202.3724%202.45443%202.00781%203.07422ZM1.625%204.55078C1.625%204.84245%201.67057%205.13411%201.76172%205.42578H3.01953L2.9375%204.55078L3.01953%203.67578H1.76172C1.67057%203.94922%201.625%204.24089%201.625%204.55078ZM7.3125%205.42578C7.40365%205.13411%207.44922%204.83789%207.44922%204.53711C7.44922%204.23633%207.40365%203.94922%207.3125%203.67578H6.08203C6.11849%203.96745%206.13672%204.25911%206.13672%204.55078C6.13672%204.84245%206.11849%205.13411%206.08203%205.42578H7.3125ZM3.59375%203.67578L3.51172%204.55078L3.59375%205.42578H5.48047C5.53516%205.13411%205.5625%204.84245%205.5625%204.55078C5.5625%204.25911%205.53516%203.96745%205.48047%203.67578H3.59375ZM4.55078%207.44922C4.67839%207.44922%204.77865%207.44922%204.85156%207.44922C5.07031%206.97526%205.24349%206.49219%205.37109%206H3.70312C3.83073%206.49219%204.00391%206.97526%204.22266%207.44922H4.55078ZM7.06641%206H5.97266C5.86328%206.4375%205.70833%206.86589%205.50781%207.28516C6.18229%207.06641%206.70182%206.63802%207.06641%206ZM2.00781%206C2.3724%206.63802%202.89193%207.06641%203.56641%207.28516C3.38411%206.86589%203.23828%206.4375%203.12891%206H2.00781Z'%20fill='black'/%3e%3c/svg%3e"
                            className="invert"
                          />
                        </div>
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
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-0.5 mb-4 px-0.5 md:px-2 sm:px-0">
                      {filteredData?.map((casino, i) => {
                        return (
                          <div
                            onClick={() => handleNavigateToIFrame(casino)}
                            key={`${casino?.id}-${casino?.category}-${casino?.product}-${i}`}
                            className="w-full  "
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Casino;
