import { useIndexQuery } from "../../../hooks";
import CasinoThumbnailsSection from "./CasinoThumbnailsSection";

const CasinoSections = () => {
  const { data } = useIndexQuery({
    type: "kheloyar_homepage",
  });

  const filterGamesByTag = (data, tag) => {
    if (!data) return [];
    return data?.filter((game) => game?.tag === tag);
  };

  const new_launch = filterGamesByTag(data, "new_launch");
  const recommended_games = filterGamesByTag(data, "recommended_games");
  const live_casino_games = filterGamesByTag(data, "live_casino_games");
  const slot = filterGamesByTag(data, "slot");

  return (
    <div className="flex flex-col gap-3">
      <CasinoThumbnailsSection data={new_launch} title="New Launch" />
      <CasinoThumbnailsSection
        data={recommended_games}
        title="Recommended Games"
      />

      <CasinoThumbnailsSection
        data={live_casino_games}
        title="Live Casino Games"
      />

      <CasinoThumbnailsSection data={slot} title="Slots" />
    </div>
  );
};

export default CasinoSections;
