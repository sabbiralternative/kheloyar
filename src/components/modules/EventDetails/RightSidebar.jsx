const RightSidebar = () => {
  return (
    <div className="relative md:col-span-2">
      <div className="flex flex-col px-1 pb-2 rounded-lg bg-betsInfoBg sticky top-4">
        <div className="border-b-[2px] border-b-sportsTitleBorder" />
        <div className="p-2 text-white border-b-[2px] border-b-sportsTitleBorder">
          <div className="w-fit">
            <label className="flex items-center gap-2 cursor-pointer ">
              <input
                type="checkbox"
                className="accent-blue-500 h-5 w-5 cursor-pointer"
              />
              <span className="text-sm">1 Click Betting Enabled</span>
            </label>
          </div>
        </div>
        <div className="w-full border-b-[2px] border-b-sportsTitleBorder">
          <div className="h-fit text-nowrap rounded px-2 py-1 text-white">
            Place Bet
          </div>
        </div>
        <div className="w-full border-b-[2px] border-b-sportsTitleBorder">
          <div className="h-fit text-nowrap rounded px-2 py-1 text-white">
            My Bets (0)
          </div>
          <div className="flex items-center justify-center text-[14px] text-[#757575] bg-neutral-200 h-full pt-7 pb-6 ">
            Place bet to see it here
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
