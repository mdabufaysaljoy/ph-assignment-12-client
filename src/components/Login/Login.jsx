import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { state } = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { googleLoginAndSignup, loading, user, handleEmailPasswordLogin } =
    useAuth();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="loading loading-xl"></div>
      </div>
    );
  }
  if (user) {
    return <Navigate to={state || "/"} />;
  }
  const onFormSubmit = (data) => {
    handleEmailPasswordLogin(data);
    console.log(data);
  };
  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <fieldset className="fieldset bg-base-300 border-base-400 rounded-box w-xs border p-4">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <legend className="fieldset-legend text-xl font-bold">Login</legend>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              className="input border-none outline-none"
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
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              className="input border-none outline-none"
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
          <button className="btn btn-neutral mt-4 w-full">Signup</button>
        </form>
        <div className="divider">or</div>
        <button onClick={googleLoginAndSignup} className="btn btn-primary">
          <FaGoogle />
          Google
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
