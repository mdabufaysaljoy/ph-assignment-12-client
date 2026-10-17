import { Link } from "react-router-dom";
import useUser from "../../hooks/custom/useUser";

const Profile = () => {
  const [currentUser] = useUser();
  console.log(currentUser);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2 bg-base-300 rounded-2xl my-20 p-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          {currentUser?.role === "manager" && (
            <>
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
              <h3 className="mt-4 text-3xl font-bold">
                Company Name: {currentUser?.companyName || "N/A"}
              </h3>
            </>
          )}

          <div className="flex flex-col justify-start gap-2 mt-2">
            <h4 className="text-xl font-bold">
              Name: {currentUser?.name}{" "}
              <span className="badge badge-success capitalize">
                {currentUser?.role || "N/A"}
              </span>
            </h4>
            <h4 className="text-xl font-bold">Email: {currentUser?.email}</h4>
            <h4 className="text-xl font-bold">
              Package: {currentUser?.package || "N/A"}
            </h4>
            <h4 className="text-xl font-bold">
              Date Of Birth: {currentUser?.dateOfBirth || "N/A"}
            </h4>
          </div>
          <Link to={"/manager/profile-update"} className="btn btn-primary w-full mt-4">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
