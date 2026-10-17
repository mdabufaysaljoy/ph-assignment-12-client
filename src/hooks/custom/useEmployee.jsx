import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useAxiosSecure from "./../useAxiosSecure";

const useEmployee = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isEmployee, isPending } = useQuery({
    queryKey: ["isEmployee", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/api/user/isEmployee/${user?.email}`);
        // console.log(res.data);

        return res.data?.employee;
      } catch (error) {
        console.log(error);
        // console.log(error.response?.data);
        // console.log(error.response?.status);
        return false;
      }
    },
  });

  return [isEmployee, !!user?.email && isPending];
};

export default useEmployee;
