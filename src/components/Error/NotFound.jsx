import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-5xl text-red-500 text-center font-bold">404</h2>
      <p className="text-2xl font-semibold text-center">Page Not Found</p>
      <Link to="/" className="text-sm text-blue-500 underline">back to the home page</Link>
    </div>
  );
};

export default NotFound;
