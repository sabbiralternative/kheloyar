import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useLogo } from "../../../context/ApiProvider";

const Ladder = ({ ladderData, setLadderData, marketName }) => {
  const { logo } = useLogo();
  const ladderRef = useRef();
  useCloseModalClickOutside(ladderRef, () => {
    setLadderData([]);
  });
  return (
    <div className="m-auto fixed overflow-auto z-[100] inset-0  bg-opacity-80 flex items-center justify-center pt-2">
      <div
        ref={ladderRef}
        className="flex flex-col bg-modalBg rounded-[20px] shadow-lg  max-w-[95%] mx-auto p-2 md:p-4 relative max-h-[90vh]"
      >
        <div className="flex flex-shrink-0 justify-between items-center pb-3">
          <div className="flex items-center justify-center gap-1 cursor-pointer flex-row undefined">
            <img src={logo} alt="Logo" className="h-[31px] object-contain" />
          </div>
          <button className=" active:opacity-70 text-lg  ">
            <svg
              className="w-6 h-6"
              fill="white"
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
        <div className="flex-1 min-h-0 py-4 overflow-auto">
          <h2 className=" text-center text-xl font-semibold pb-4">
            {marketName}
          </h2>
          <div className="fancy-book-table-ctn p-4 bg-white shadow rounded min-w-[250px] md:min-w-[600px] lg:min-w-[850px]">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-left text-gray-600 font-bold">
                    <th className="py-2 px-4 border-b border-gray-300">
                      Runner Name
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300">
                      Profit/Loss
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ladderData?.map((item, i) => {
                    return (
                      <tr key={i} className="border-b">
                        <td className="text-gray-500 py-2 px-4">
                          {item?.start}-{item?.end}
                        </td>
                        <td
                          className={`py-2 px-4  ${
                            item?.exposure > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {" "}
                          {item?.exposure}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ladder;
