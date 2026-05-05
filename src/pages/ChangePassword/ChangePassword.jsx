import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [handleChangePassword] = useChangePasswordMutation();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      nonce: crypto.randomUUID(),
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      localStorage.removeItem("changePassword");
      toast.success(res?.result?.message);
      navigate("/");
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };
  return (
    <div className="flex-1 flex white bg-gray1">
      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            <div className="w-full">
              <div className=" ">
                <div className="flex flex-col mt-1 bg-white  h-full sm:border rounded-[4px] text-[15px]">
                  <div className="py-[2px] flex bg-black1 text-[14px] font-[700] flex-row justify-between items-center  w-full text-white px-2 ">
                    <div>
                      <p className="text-[14px]">Change Password</p>
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col p-3 gap-2 h-full w-full"
                  >
                    <div>
                      <div className="flex flex-col max-w-[400px]">
                        <div className="text-[#6c757d] text-[14px]">
                          Old Password
                        </div>
                        <input
                          {...register("password", { required: true })}
                          className="mb-2 p-2 border border-gray-300 rounded placeholder:text-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                          type="password"
                          placeholder="Enter Old Password"
                        />
                      </div>
                      <div className="flex flex-col max-w-[400px]">
                        <div className="text-[#6c757d] text-[14px]">
                          New Password
                        </div>
                        <input
                          className="mb-2 p-2 border border-gray-300 rounded placeholder:text-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                          type="password"
                          placeholder="Enter New Password"
                          {...register("newPassword", {
                            required: true,
                          })}
                        />
                      </div>
                      <div className="flex flex-col max-w-[400px]">
                        <div className="text-[#6c757d] text-[14px]">
                          Confirm Password
                        </div>
                        <input
                          className="mb-2 p-2 border border-gray-300 rounded placeholder:text-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                          type="password"
                          placeholder="Enter Confirm Password"
                          {...register("newPasswordConfirm", {
                            required: true,
                          })}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className=" active:opacity-70  bg-black1  p-3 text-white w-fit px-4 py-1.5 rounded-[4px] active:bg-blue1 placeholder:text-xs undefined"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
