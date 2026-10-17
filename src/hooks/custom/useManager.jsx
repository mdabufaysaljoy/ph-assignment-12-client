import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useAxiosSecure from "../useAxiosSecure";

const useManager = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: isManager, isPending } = useQuery({
    queryKey: ["isManager", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/user/isManager/${user?.email}`);
      return res.data?.manager;
    },
  });

  return [isManager, !!user?.email && isPending];
};

export default useManager;
