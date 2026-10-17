import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import useAuth from "../useAuth";

const useUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: User, isPending: userPending } = useQuery({
    queryKey: ["User", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(`/api/user/${user?.email}`);
        if (response.data?.success) {
          return response.data?.user;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return [User, userPending];
};

export default useUser;
