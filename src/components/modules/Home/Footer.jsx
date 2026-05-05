const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        loading="lazy"
        src="/icon/download-app-image-RZUUcU2P.webp"
        alt="Download App"
        className="md:hidden w-full h-full"
      />
      <div className="flex items-center justify-between gap-8 w-full md:max-w-[400px] p-4 rounded-[5px] bg-sidebarBg">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-white font-bold">
            Customer Support
          </span>
          <span className="text-[11px] text-languageDropdownBorder font-bold">
            If you have any questions?
          </span>
        </div>
        <button className="active:opacity-70 h-[40px] text-[11px] font-bold px-[13px] py-[7px] text-black rounded-md bg-buttonGradient">
          Get Answer
        </button>
      </div>
      <div className="relative">
        <img
          src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.3438%2012H17.7188C17.9062%2011.125%2018%2010.4531%2018%209.98438C18%209.51562%2017.9062%208.84375%2017.7188%207.96875H14.3438C14.4375%208.625%2014.4844%209.29688%2014.4844%209.98438C14.4844%2010.6719%2014.4375%2011.3438%2014.3438%2012ZM12.5625%2017.5312C13.3438%2017.2812%2014.1562%2016.8125%2015%2016.125C15.8438%2015.4062%2016.4844%2014.6875%2016.9219%2013.9688H13.9688C13.6562%2015.2188%2013.1875%2016.4062%2012.5625%2017.5312ZM12.3281%2012C12.4219%2011.3438%2012.4688%2010.6719%2012.4688%209.98438C12.4688%209.29688%2012.4219%208.625%2012.3281%207.96875H7.64062C7.54688%208.625%207.5%209.29688%207.5%209.98438C7.5%2010.6719%207.54688%2011.3438%207.64062%2012H12.3281ZM9.98438%2017.9531C10.8594%2016.6719%2011.5%2015.3438%2011.9062%2013.9688H8.0625C8.46875%2015.3438%209.10938%2016.6719%209.98438%2017.9531ZM6%206C6.375%204.65625%206.84375%203.46875%207.40625%202.4375C6.625%202.6875%205.79688%203.17188%204.92188%203.89062C4.07812%204.57813%203.45312%205.28125%203.04688%206H6ZM3.04688%2013.9688C3.45312%2014.6875%204.07812%2015.4062%204.92188%2016.125C5.79688%2016.8125%206.625%2017.2812%207.40625%2017.5312C6.78125%2016.4062%206.3125%2015.2188%206%2013.9688H3.04688ZM2.25%2012H5.625C5.53125%2011.3438%205.48438%2010.6719%205.48438%209.98438C5.48438%209.29688%205.53125%208.625%205.625%207.96875H2.25C2.0625%208.84375%201.96875%209.51562%201.96875%209.98438C1.96875%2010.4531%202.0625%2011.125%202.25%2012ZM9.98438%202.01562C9.10938%203.29687%208.46875%204.625%208.0625%206H11.9062C11.5%204.625%2010.8594%203.29687%209.98438%202.01562ZM16.9219%206C16.4844%205.28125%2015.8438%204.57813%2015%203.89062C14.1562%203.17188%2013.3438%202.6875%2012.5625%202.4375C13.125%203.46875%2013.5938%204.65625%2013.9688%206H16.9219ZM2.90625%202.95312C4.875%200.984375%207.23438%200%209.98438%200C12.7344%200%2015.0781%200.984375%2017.0156%202.95312C18.9844%204.89062%2019.9688%207.23438%2019.9688%209.98438C19.9688%2012.7344%2018.9844%2015.0938%2017.0156%2017.0625C15.0781%2019%2012.7344%2019.9688%209.98438%2019.9688C7.23438%2019.9688%204.875%2019%202.90625%2017.0625C0.96875%2015.0938%200%2012.7344%200%209.98438C0%207.23438%200.96875%204.89062%202.90625%202.95312Z'%20fill='%237B7B7B'/%3e%3c/svg%3e"
          alt="globe-icon"
          className="absolute z-10 start-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
        />
        <select
          id="languageSelection"
          className="w-[100px] text-xs text-languageDropdownBorder font-bold rounded-md bg-black border border-languageDropdownBorder focus:outline-none h-[42px] ps-8"
        >
          <option className="capitalize" value="en">
            EN
          </option>
          <option className="capitalize" value="hin">
            HIN
          </option>
          <option className="capitalize" value="tel">
            TEL
          </option>
          <option className="capitalize" value="guj">
            GUJ
          </option>
          <option className="capitalize" value="tam">
            TAM
          </option>
          <option className="capitalize" value="kan">
            KAN
          </option>
          <option className="capitalize" value="ben">
            BEN
          </option>
          <option className="capitalize" value="mal">
            MAL
          </option>
          <option className="capitalize" value="mar">
            MAR
          </option>
          <option className="capitalize" value="pun">
            PUN
          </option>
          <option className="capitalize" value="odia">
            ODIA
          </option>
          <option className="capitalize" value="assm">
            ASSM
          </option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="flex items-center justify-center gap-1 cursor-pointer flex-row undefined">
          <img
            src="/icon/title.png"
            alt="Logo"
            className="h-[31px] object-contain"
          />
        </div>
        <button className="active:opacity-70 flex items-center gap-2 h-[40px] px-4 py-1 rounded-md bg-primarySvgColor">
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
      </div>
      <div className="flex items-center gap-5 text-[11px] text-languageDropdownBorder font-bold cursor-pointer hover:underline">
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
      <span className="text-[13px] text-white font-bold">Follow Us</span>
      <div className="flex items-center gap-2" />
      <span className="text-[11px] text-languageDropdownBorder font-bold">
        © 2023 Kheloyaar. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
