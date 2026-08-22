import { useForm } from "react-hook-form";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const StakeSettings = () => {
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

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
      navigate("/");
    }
  };
  return (
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1  pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex flex-col sm:rounded-[4px] h-full">
              <div className="flex items-center h-[35px] w-full  font-bold py-1 pl-2">
                <p>{getLanguage(LanguageKey.CHANGE_BUTTON_VALUES)}</p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 px-2 overflow-auto py-5"
              >
                <div className="flex justify-between max-w-[700px] text-black">
                  <div className="flex flex-col w-1/2 pr-2">
                    <span className="mb-2  font-semibold">
                      {getLanguage(LanguageKey.STAKE_LABEL)}
                    </span>
                    {stakes?.map((stake, i) => {
                      return (
                        <input
                          {...register(`buttonGameValues.${i}.label`)}
                          key={i}
                          className="mb-2 p-2  bg-loginInputGray rounded placeholder:text-xs"
                          type="text"
                          placeholder="Enter Label"
                          defaultValue={stake?.label}
                        />
                      );
                    })}
                  </div>
                  <div className="flex flex-col w-1/2 pl-2">
                    <span className="mb-2  font-semibold">
                      {getLanguage(LanguageKey.STAKE_VALUE)}
                    </span>
                    {stakes?.map((stake, i) => {
                      return (
                        <input
                          {...register(`buttonGameValues.${i}.value`)}
                          key={i}
                          className="mb-2 p-2  bg-loginInputGray rounded placeholder:text-xs"
                          type="number"
                          defaultValue={stake?.value}
                        />
                      );
                    })}
                  </div>
                </div>
                <button
                  type="submit"
                  className=" active:opacity-70 bg-signupHereText mb-[20px] text-black flex justify-center   px-4 py-1.5 rounded-[4px] active:bg-secondary placeholder:text-xs w-full sm:w-[165px] "
                >
                  {getLanguage(LanguageKey.UPDATE)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeSettings;
