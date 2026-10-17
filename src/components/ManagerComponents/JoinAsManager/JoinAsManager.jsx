import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const JoinAsManager = () => {
  const axiosPublic = useAxiosPublic();
  const { handleEmailPassowrdSignup, user, loading, googleLoginAndSignup } =
    useAuth();
  const api_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_upload_url = `https://api.imgbb.com/1/upload?key=${api_key}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="loading loading-xl"></div>
      </div>
    );
  }
  if (user) {
    return <Navigate to="/" />;
  }
  const onSubmit = async (data) => {
    const {
      companyLogo,
      companyName,
      name,
      email,
      password,
      dateOfBirth,
      packages,
    } = data;
    // console.log(companyLogo);
    const image_file = new FormData();
    image_file.append("image", companyLogo[0]);
    try {
      if (companyLogo.length) {
        const imgRes = await axiosPublic.post(image_upload_url, image_file, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const photoURL = imgRes.data.success && imgRes.data.data.display_url;
        const uploadDoc = {
          name,
          email,
          password,
          companyName,
          companyLogo: photoURL,
          dateOfBirth,
          packages,
          role: "manager",
        };

        handleEmailPassowrdSignup(uploadDoc);
      }
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "Failed",
        icon: "error",
        message: error.message,
        timer: 1500,
      });
    }
  };
  const handleGoogleLogin = () => {
    const uploadDoc = {
      companyLogo: "",
      companyName: "",
      dateOfBirth: "",
      packages: "",
      role: "manager",
    };
    googleLoginAndSignup(uploadDoc);
  };
  const onError = (errors) => {
    console.log("FORM ERRORS:", errors);
  };
  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <div className="fieldset bg-base-300 border-base-400 rounded-box w-1/2 border p-4">
        <legend className="fieldset-legend text-xl font-bold">
          Register as HR Manager
        </legend>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
          <div className="flex flex-col">
            <label className="label">Full Name*</label>
            <input
              type="text"
              className="input border-none outline-none w-full"
              placeholder="Full Name"
              {...register("name", {
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                required: "Name is required",
                maxLength: {
                  value: 100,
                  message: "Name couldn't be more than 100 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="flex flex-col flex-1">
              <label className="label">Company Name*</label>
              <input
                type="text"
                className="input border-none outline-none w-full"
                placeholder="Company Name"
                {...register("companyName", {
                  minLength: {
                    value: 3,
                    message: "Company Name must be at least 3 character",
                  },
                  maxLength: {
                    value: 500,
                    message:
                      "Company Name cannot be greater than 500 character",
                  },
                  required: "Company Name is required",
                })}
              />
              {errors.companyName && (
                <p className="text-red-500 mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <label className="label">Company Logo*</label>
              <input
                type="file"
                className="file-input border-none outline-none w-full"
                placeholder="Company Name"
                {...register("companyLogo", {
                  required: "Company Logo is required",
                })}
              />
              {errors.companyLogo && (
                <p className="text-red-500 mt-1">
                  {errors.companyLogo.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="flex flex-col flex-1">
              <label className="label">Email*</label>
              <input
                type="email"
                className="input border-none outline-none w-full"
                placeholder="Email"
                {...register("email", {
                  minLength: {
                    value: 5,
                    message: "Email must be at least 5 charactar",
                  },
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <label className="label">Password*</label>
              <input
                type="password"
                className="input border-none outline-none w-full"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message:
                      "Password must contain 1 uppercase, 1 lowercase, 1 number and be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="label">Date of birth*</label>
            <input
              type="date"
              className="input border-none outline-none w-full"
              placeholder="Date of birth"
              {...register("dateOfBirth", {
                required: "Date of Birth is required",
              })}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 mt-1">{errors.dateOfBirth.message}</p>
            )}
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
          <input type="submit" className="btn btn-neutral mt-4 w-full" />
          {/* Signup
          </input> */}
        </form>
        <div className="divider">or</div>
        <button onClick={handleGoogleLogin} className="btn btn-primary">
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default JoinAsManager;
