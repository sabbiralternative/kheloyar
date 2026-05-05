import { useEditButtonValuesMutation } from "../../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useRef } from "react";

const EditStake = ({ setShowEditStakeModal }) => {
  const ref = useRef(null);
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });
  useCloseModalClickOutside(ref, () => setShowEditStakeModal(false));

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.label),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      setShowEditStakeModal(false);
    }
  };

  return (
    <div className="m-auto fixed overflow-y-scroll z-[100] inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center pt-2">
      <div
        ref={ref}
        className="bg-white rounded-lg z-[101] shadow-lg  max-w-[90%] mx-auto px-4 py-3 relative max-h-[90vh] overflow-y-auto scroll"
      >
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-black text-xl font-medium">Edit Stake</h2>
          <button
            onClick={() => setShowEditStakeModal(false)}
            className=" active:opacity-70 text-lg text-black"
          >
            <svg
              className="w-5 h-5"
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
        <div className="overflow-y-scroll h-fit">
          <div className="flex flex-col sm:border sm:rounded-[4px] h-full">
            <div className="py-1 flex text-[14px] font-[700] flex-row justify-between items-center  w-full text-white px-2 bg-black1">
              <div>
                <p className="text-[14px]">Change Button Values</p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 px-2 overflow-auto py-5"
            >
              <div className="flex justify-between max-w-[700px]">
                <div className="flex flex-col w-1/2 pr-2">
                  <span className="mb-2 font-medium">Price Label</span>
                  {stakes?.map((stake, i) => {
                    return (
                      <input
                        {...register(`buttonGameValues.${i}.label`)}
                        key={i}
                        className="mb-2 p-2 border border-gray-300 rounded placeholder:text-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                        type="text"
                        placeholder="Enter Label"
                        defaultValue={stake?.label}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col w-1/2 pl-2">
                  <span className="mb-2 font-medium">Price Value</span>
                  {stakes?.map((stake, i) => {
                    return (
                      <input
                        {...register(`buttonGameValues.${i}.value`)}
                        key={i}
                        className="mb-2 p-2 border border-gray-300 rounded placeholder:text-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                        type="number"
                        placeholder="Enter Value"
                        defaultValue={stake?.value}
                      />
                    );
                  })}
                </div>
              </div>
              <button
                type="submit"
                className=" active:opacity-70  bg-black1  p-3 text-white  px-4 py-1.5 rounded-[4px] active:bg-blue1 placeholder:text-xs w-full sm:w-fit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStake;
