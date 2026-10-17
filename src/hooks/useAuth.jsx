import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosPublic from "./useAxiosPublic";
import auth from "../../firebase.config";
// import useAxiosSecure from "./useAxiosSecure";
const useAuth = () => {
  const axiosPublic = useAxiosPublic();
  // const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();

  //? email signup function
  const handleEmailPassowrdSignup = async ({
    companyLogo = "",
    companyName = "",
    name,
    email,
    password,
    dateOfBirth,
    packages = "",
    role = "employee",
  }) => {
    try {
      const gRes = await createUserWithEmailAndPassword(auth, email, password);
      if (gRes.user) {
        try {
          const res = await axiosPublic.post("/api/user/register", {
            companyLogo,
            companyName,
            name,
            email,
            dateOfBirth,
            packages,
            role,
          });
         
          if (res.data.success) {
            // console.log(res.data.data);
            Swal.fire({
              title: "Success",
              icon: "success",
              timer: 3000,
            });
          }
        } catch (error) {
          console.log(error.message);
          Swal.fire({
            title: "error when create user in db",
            icon: "error",
         
            timer: 3000,
          });
        }
      }
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "error when createuser in google",
     
        icon: "error",
        timer: 3000,
      });
    }
  };

  //? google login / signup
  const googleLoginAndSignup = async ({
    companyLogo = "",
    companyName = "",
    dateOfBirth = "",
    packages = "",
    role = "employee",
  }) => {
    try {
      const res = await signInWithPopup(auth, GoogleProvider);
      if (res.user) {
        const uploadDoc = {
          companyLogo,
          companyName,
          name: res.user.displayName,
          email: res.user.email,
          dateOfBirth,
          packages,
          role,
        };
        const response = await axiosPublic.post("/api/user", uploadDoc);
        if (response.data.success) {
          Swal.fire({
            title: "Google Login success",
            icon: "success",
            timer: 1000,
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: error.message,
        timer: 1000,
        icon: "error",
      });
      console.log(error);
    }
  };

  //? email login funciton
  const handleEmailPasswordLogin = async ({ email, password }) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
      try {
          const response = await axiosPublic.post(`/api/user/login`,{email});
        if (response.data.success) {
          console.log(response.data);
          Swal.fire({
            title: "Login Success",
            icon: "success",
            timer: 3000,
          });
        }
      } catch (error) {
        console.log(error.message);
         Swal.fire({
        title: "error while database login",
     
        icon: "error",
        timer: 3000,
      });
      }
      }
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "error while google login",
        icon: "error",
        timer: 3000,
      });
    }
  };

  //? logout function
  const logout = () => {
    signOut(auth);
  };
  //? observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setLoading(true);
        if (currentUser) {
          const res = await axiosPublic.post("/jwt", {
            email: currentUser.email,
          });
          // console.log(res.data?.token);
          if (res.data?.token) {
            localStorage.setItem("access-token", res.data.token);
          }

          setUser(currentUser);
          setLoading(false);
        } else {
          setUser(null);
          localStorage.removeItem("access-token");
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [axiosPublic]);

  return {
    user,
    loading,
    logout,
    handleEmailPassowrdSignup,
    googleLoginAndSignup,
    handleEmailPasswordLogin,
  };
};

export default useAuth;
