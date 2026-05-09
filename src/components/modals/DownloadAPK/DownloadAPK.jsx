import { useRef } from "react";
import { useDispatch } from "react-redux";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { setShowAPKModal } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";

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
      <div className="m-auto fixed overflow-y-scroll z-[100] inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-transparent rounded-lg max-w-[90%] lg:max-w-[450px]  w-full mx-auto relative max-h-[90vh] overflow-y-auto scroll ">
          <div ref={modalRef} className="relative overflow-y-auto h-fit w-full">
            <img
              onClick={handleDownload}
              src={"/icon/banner__3f59d2cf-7f12-4fa1-aadf-9b06ccff7c35.webp"}
              className="max-h-[66vh] w-full"
            />
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closeModal}
                className=" active:opacity-70 text-lg text-white cursor-pointer hover:bg-gray-100/30 rounded-md"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAPK;
