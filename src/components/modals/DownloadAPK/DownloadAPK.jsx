import { useRef } from "react";
import { useDispatch } from "react-redux";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { setShowAPKModal } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import images from "../../../assets/images";
import { GrAndroid } from "react-icons/gr";
const DownloadAPK = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  useCloseModalClickOutside(modalRef, () => {
    closeModal();
  });

  const closeModal = () => {
    sessionStorage.setItem("apk_modal_shown", true);
    dispatch(setShowAPKModal(false));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    closeModal();
  };

  return (
    <div>
      <div className="m-auto fixed overflow-y-scroll z-[100] inset-0 /50 flex items-center justify-center">
        <div className="bg-transparent rounded-lg max-w-[90%] lg:max-w-[450px]  w-full mx-auto relative max-h-[90vh] overflow-y-auto scroll ">
          <div ref={modalRef} className="relative overflow-y-auto h-fit w-full">
            {/* <img
              onClick={handleDownload}
              src={"/icon/banner__3f59d2cf-7f12-4fa1-aadf-9b06ccff7c35.webp"}
              className="max-h-[66vh] w-full"
            /> */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closeModal}
                className=" active:opacity-70 text-lg  cursor-pointer hover:bg-gray-100/30 rounded-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="black"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div
                className="w-full  flex flex-col justify-center items-center  gap-y-6"
                id="loginRegLayOut"
              >
                {Settings?.apk_banner ? (
                  <img
                    onClick={handleDownload}
                    style={{ borderRadius: "12px" }}
                    src={Settings.apk_banner}
                    alt="apk_banner"
                  />
                ) : (
                  <div className="promo-card font-lato">
                    <header className="promo-header">
                      <div className="header-content">
                        <img
                          src={images.install_android}
                          alt="install_android"
                        />

                        <h1 className="main-title">
                          Download APK for Premium Gaming Experience
                        </h1>
                      </div>
                    </header>

                    <main className="promo-body">
                      <p className="intro-text">
                        Kabhi-kabhi website slow ho sakti hai ya link update ho
                        jata hai, lekin hamara Official App aapko hamesha
                        connected rakhega 🚀
                      </p>

                      <h2 className="benefits-title">
                        App ke saath aapko milega:
                      </h2>

                      <ul className="benefits-list">
                        <li>
                          <strong>24×7 Instant Access</strong> – Har waqt khelo
                          bina rukawat
                        </li>
                        <li>
                          <strong>2X Faster Speed</strong> – Website se bhi
                          double fast loading
                        </li>
                        <li>
                          <strong>Secure Login</strong> – Aapka data hamesha
                          safe & protected
                        </li>
                        <li>
                          <strong>Non-Stop Gaming</strong> – No waiting, no
                          interruptions
                        </li>
                      </ul>

                      <p className="closing-text">
                        Yehi wajah hai ki sabse zyada serious players App prefer
                        karte hain. Aap bhi join karo unme aur pao ek premium
                        lifestyle experience 💎
                      </p>

                      <a
                        onClick={handleDownload}
                        className="download-button text-primary"
                      >
                        <GrAndroid className="android-icon" />
                        <span>Download Official App Now ↓</span>
                      </a>
                    </main>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAPK;
