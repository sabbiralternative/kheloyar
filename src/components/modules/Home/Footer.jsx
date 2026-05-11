import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";

const Footer = () => {
  const { logo } = useLogo();

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const handleOpenSocialLink = () => {
    if (Settings?.branchWhatsapplink) {
      window.open(Settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(Settings?.whatsapplink, "_blank");
    }
  };
  return (
    <div className="flex flex-col items-center gap-3">
      {Settings.apk_link && (
        <img
          onClick={handleDownload}
          loading="lazy"
          src="/icon/download-app-image-RZUUcU2P.webp"
          alt="Download App"
          className="md:hidden w-full h-full"
        />
      )}

      {(Settings.branchWhatsapplink || Settings.whatsapplink) && (
        <div className="flex items-center justify-between gap-8 w-full md:max-w-[400px] p-4 rounded-[5px] bg-sidebarBg">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-white font-bold">
              Customer Support
            </span>
            <span className="text-[11px] text-languageDropdownBorder font-bold">
              If you have any questions?
            </span>
          </div>
          <button
            onClick={handleOpenSocialLink}
            className="active:opacity-70 h-[40px] text-[11px] font-bold px-[13px] py-[7px] text-black rounded-md bg-buttonGradient"
          >
            Get Answer
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="flex items-center justify-center gap-1 cursor-pointer flex-row undefined">
          <img src={logo} alt="Logo" className="h-[31px] object-contain" />
        </div>
        {Settings.apk_link && (
          <button
            onClick={handleDownload}
            className="active:opacity-70 flex items-center gap-2 h-[40px] px-4 py-1 rounded-md bg-primarySvgColor"
          >
            <img
              src="data:image/svg+xml,%3csvg%20width='19'%20height='23'%20viewBox='0%200%2019%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.247%2019.6154H0.910931C0.425101%2019.6154%200%2020.0405%200%2020.5263V21.7409C0%2022.2267%200.425101%2022.6518%200.910931%2022.6518H17.247C17.7328%2022.6518%2018.1579%2022.2267%2018.1579%2021.7409V20.5263C18.1579%2019.9798%2017.7328%2019.6154%2017.247%2019.6154Z'%20fill='%231A1A1A'/%3e%3cpath%20d='M8.44129%2017.9757C8.62348%2018.1579%208.86639%2018.2186%209.04858%2018.2186C9.2915%2018.2186%209.53441%2018.1579%209.65587%2017.9757L15.8502%2011.7814C16.2146%2011.417%2016.2146%2010.8704%2015.8502%2010.5061L15%209.65587C14.6356%209.2915%2014.0891%209.2915%2013.7247%209.65587L10.5668%2012.8138V0.910931C10.5668%200.425101%2010.1417%200%209.65587%200H8.44129C7.95546%200%207.53036%200.425101%207.53036%200.910931V12.8745L4.37247%209.7166C4.0081%209.35223%203.46154%209.35223%203.09716%209.7166L2.24696%2010.5668C1.88259%2010.9312%201.88259%2011.4777%202.24696%2011.8421L8.44129%2017.9757Z'%20fill='%231A1A1A'/%3e%3c/svg%3e"
              alt="download-icon"
              className="h-[22px]"
            />
            <div className="flex flex-col leading-3 text-sidebarBg">
              <span className="text-sm font-bold">Download</span>
              <span className="text-xs">App Now</span>
            </div>
          </button>
        )}
      </div>
      <div className="flex items-center gap-5 text-[11px] text-languageDropdownBorder font-bold cursor-pointer hover:underline">
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
      <span className="text-[13px] text-white font-bold">Follow Us</span>
      <div className="flex items-center gap-2" />
      <span className="text-[11px] text-languageDropdownBorder font-bold">
        © {new Date().getFullYear()} {Settings.site_name}. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
