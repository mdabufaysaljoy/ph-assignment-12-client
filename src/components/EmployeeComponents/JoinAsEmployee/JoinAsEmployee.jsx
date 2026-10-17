import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const JoinAsEmployee = () => {
  const { handleEmailPassowrdSignup, user, loading, googleLoginAndSignup } =
    useAuth();
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
    try {
      handleEmailPassowrdSignup({
        companyLogo,
        companyName,
        name,
        email,
        password,
        packages,
        dateOfBirth,
        role: "employee"
      });
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
      dateOfBirth: "",
      packages: "",
      role: "employee",
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
          Register as an Employee
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

export default JoinAsEmployee;
