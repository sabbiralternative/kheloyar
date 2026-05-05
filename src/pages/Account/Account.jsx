import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { Settings } from "../../api";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleDownloadAPK = (e) => {
    e.preventDefault();
    if (Settings.apk_link) {
      const fileUrl = Settings.apk_link;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "site.apk");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };

  const ArrowRightIcon = () => {
    return (
      <img
        src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='23'%20height='23'%20rx='2.5'%20stroke='%23E0E6E6'/%3e%3cpath%20d='M10%206L8.59003%207.41L13.17%2012L8.59003%2016.59L10%2018L16%2012L10%206Z'%20fill='black'/%3e%3c/svg%3e"
        alt="Right Arrow"
        className="w-7 h-7 mr-2"
      />
    );
  };
  return (
    <div className="flex-1 flex white bg-gray1">
      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            <div className="w-full">
              <div className=" ">
                <div className="max-w-md mx-auto bg-gray-200 shadow-lg overflow-hidden">
                  <div className="bg-black5 text-white  flex">
                    <div className="flex p-2 items-center flex-grow">
                      <div className="w-6 h-6 bg-white  rounded-full p-1">
                        <img
                          alt="User Icon"
                          className="w-[14px] h-[14px] ml-[1px]"
                          src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%200C7.92826%200%208.8185%200.368749%209.47487%201.02513C10.1313%201.6815%2010.5%202.57174%2010.5%203.5C10.5%204.42826%2010.1313%205.3185%209.47487%205.97487C8.8185%206.63125%207.92826%207%207%207C6.07174%207%205.1815%206.63125%204.52513%205.97487C3.86875%205.3185%203.5%204.42826%203.5%203.5C3.5%202.57174%203.86875%201.6815%204.52513%201.02513C5.1815%200.368749%206.07174%200%207%200ZM7%2014C7%2014%2014%2014%2014%2012.25C14%2010.15%2010.5875%207.875%207%207.875C3.4125%207.875%200%2010.15%200%2012.25C0%2014%207%2014%207%2014Z'%20fill='%23222222'/%3e%3c/svg%3e"
                        />
                      </div>
                      <span className="text-sm font-medium ml-2">{user}</span>
                    </div>
                    <div className="flex  items-center  mx-4 border-r border-gray-700 h-100" />
                    <span className="text-sm mt-3 mr-4">GMT +06:00</span>
                  </div>
                  <div className="divide-y font-[900]  mt-0 bg-white text-[17.2px] font-helvetica text-[#2789ce]  divide-gray-300">
                    {/*  */}
                    {Settings?.branchWhatsapplink && (
                      <div
                        onClick={() =>
                          handleOpenSocialLink(Settings?.branchWhatsapplink)
                        }
                        className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="ml-4 text-[17px] font-[900] font-sans">
                          Customer Support
                        </span>
                        <ArrowRightIcon />
                      </div>
                    )}
                    <div
                      onClick={() => navigate("/deposit")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Deposit
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/withdraw")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Withdraw
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/deposit-report")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Deposit Report
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/withdraw-report")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Withdraw Report
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/open-bets")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Open Bets
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/betting-profit-loss")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Betting Profit & Loss
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/my-bank-details")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        My Bank Details
                      </span>
                      <ArrowRightIcon />
                    </div>
                    {Settings?.referral && (
                      <div
                        onClick={() => navigate("/affiliate")}
                        className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="ml-4 text-[17px] font-[900] font-sans">
                          Affiliate
                        </span>
                        <ArrowRightIcon />
                      </div>
                    )}
                    <div
                      onClick={() => navigate("/promotions")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Promotions
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/bonus-statement")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Bonus Statement
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/promotions")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Promos & Bonus
                      </span>
                      <ArrowRightIcon />
                    </div>
                    <div
                      onClick={() => navigate("/lossback-bonus")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Lossback Bonus
                      </span>
                      <ArrowRightIcon />
                    </div>
                    {closePopupForForever && (
                      <div
                        onClick={() => navigate("/app-only-bonus")}
                        className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="ml-4 text-[17px] font-[900] font-sans">
                          App Only Bonus
                        </span>
                        <ArrowRightIcon />
                      </div>
                    )}

                    <div
                      onClick={() => navigate("/change-password")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Change Password
                      </span>
                      <ArrowRightIcon />
                    </div>
                    {Settings.apk_link && (
                      <div
                        onClick={handleDownloadAPK}
                        className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="ml-4 text-[17px] font-[900] font-sans">
                          Download APK
                        </span>
                        <ArrowRightIcon />
                      </div>
                    )}
                    <div
                      onClick={() => navigate("/rules")}
                      className="flex items-center justify-between py-2 font-[900] text-[17.2px]  border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="ml-4 text-[17px] font-[900] font-sans">
                        Rules and Regulations
                      </span>
                      <ArrowRightIcon />
                    </div>

                    {/*  */}
                  </div>
                  <div
                    onClick={() => dispatch(logout())}
                    className="bg-gradient-to-b text-[18px] mb-12 font-[600] font-sans from-red9 to-red10 mt-4 text-white p-4 flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors duration-200"
                  >
                    <span className="font-medium mr-2">LOGOUT</span>
                    <img
                      src="data:image/svg+xml,%3csvg%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.58%2012.59L14.17%2010H4.5V8H14.17L11.58%205.41L13%204L18%209L13%2014L11.58%2012.59ZM16.5%200C17.0304%200%2017.5391%200.210714%2017.9142%200.585786C18.2893%200.960859%2018.5%201.46957%2018.5%202V6.67L16.5%204.67V2H2.5V16H16.5V13.33L18.5%2011.33V16C18.5%2016.5304%2018.2893%2017.0391%2017.9142%2017.4142C17.5391%2017.7893%2017.0304%2018%2016.5%2018H2.5C1.96957%2018%201.46086%2017.7893%201.08579%2017.4142C0.710714%2017.0391%200.5%2016.5304%200.5%2016V2C0.5%200.89%201.39%200%202.5%200H16.5Z'%20fill='white'/%3e%3c/svg%3e"
                      alt="Logout Icon"
                      className="w-5 h-5"
                    />
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

export default Account;
