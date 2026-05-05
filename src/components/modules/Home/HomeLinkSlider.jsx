const HomeLinkSlider = () => {
  return (
    <div className="flex items-center gap-2 overflow-auto hide-scrollbar">
      <div className="flex items-center justify-between gap-2 h-[40px] min-w-[150px] md:min-w-[280px] text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer bg-sportsbookQuickLinkBg">
        <span>Sportsbook</span>
        <img
          loading="lazy"
          src="/icon/sportsbook-image-CkNGaIEW.webp"
          alt="sports_book"
          className="h-[25px] w-[25px]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 h-[40px] min-w-[150px] md:min-w-[280px] text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer bg-casinoLobbyQuickLinkBg">
        <span>Casino Lobby</span>
        <img
          loading="lazy"
          src="/icon/casino-lobby-image-D40c7l9U.webp"
          alt="casino_lobby"
          className="h-[25px] w-[25px]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 h-[40px] min-w-[150px] md:min-w-[280px] text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer bg-indianCasinoQuickLinkBg">
        <span>Indian Casino</span>
        <img
          loading="lazy"
          src="/icon/indian-casino-icon-D2C69UK4.svg"
          alt="indian_casino"
          className="h-[25px] w-[25px]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 h-[40px] min-w-[150px] md:min-w-[280px] text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer bg-virtualsQuickLinkBg">
        <span>Virtuals</span>
        <img
          loading="lazy"
          src="/icon/virtuals-image-CtFgGPLw.webp"
          alt="virtuals"
          className="h-[25px] w-[25px]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 h-[40px] min-w-[150px] md:min-w-[280px] text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer bg-liveCasinoQuickLinkBg">
        <span>Live Casino</span>
        <img
          loading="lazy"
          src="/icon/live-casino-image-D1C_HT8f.webp"
          alt="live_casino"
          className="h-[25px] w-[25px]"
        />
      </div>
    </div>
  );
};

export default HomeLinkSlider;
