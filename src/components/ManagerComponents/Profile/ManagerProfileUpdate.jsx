import useUser from "../../../hooks/custom/useUser";
import { useForm } from "react-hook-form";

const ProfileUpdate = () => {
  const [currentUser] = useUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2 bg-base-300 rounded-2xl my-20 p-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          {currentUser?.role === "manager" && (
            <div className="w-full flex flex-col justify-center items-center">
              <div className="avatar">
                <div className="w-60 rounded-full">
                  <img
                    src={
                      currentUser?.companyLogo ||
                      "https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">
                Company Name:
                <input
                  type="text"
                  className="input outline-none text-black"
                  {...register("companyName", {
                    minLength: {
                      value: 3,
                      message: "Company name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "Company name cannot be more than 100 characters",
                    },
                  })}
                />
              </label>
              {errors.companyName && (
                <p className="text-red-500 mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            <div>
              <label className="label">
                Name:
                <input
                  type="text"
                  className="input outline-none text-black"
                  defaultValue={currentUser?.name}
                  {...register("name", {
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 100,
                      message: "Name cannot be more than 100 characters",
                    },
                  })}
                />
              </label>
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="label">
                Email:
                <input
                  type="email"
                  className="input outline-none text-black"
                value={currentUser?.email}
                  readOnly
                  disabled
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="label mb-2">Select a package</label>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    className="radio"
                    value="5"
                    {...register("packages", {
                      required: "Please select a package",
                    })}
                  />
                  <span>$5 package</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    className="radio"
                    value="10"
                    {...register("packages", {
                      required: "Please select a package",
                    })}
                  />
                  <span>$10 package</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    className="radio"
                    value="15"
                    {...register("packages", {
                      required: "Please select a package",
                    })}
                  />
                  <span>$15 package</span>
                </label>
              </div>
              {errors.package && (
                <p className="text-red-500 mt-1">{errors.package.message}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
