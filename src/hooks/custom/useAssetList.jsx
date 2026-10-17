import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const useAssetList = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: assetList,
    isPending: isAssetLoading,
    refetch,
  } = useQuery({
    queryKey: ["AssetList"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/api/asset");
        if (res.data?.success) {
          return res.data?.data;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return [assetList, isAssetLoading,refetch];
};

export default useAssetList;
