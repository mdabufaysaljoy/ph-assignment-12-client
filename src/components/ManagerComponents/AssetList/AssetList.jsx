
import { useCallback, useEffect, useState } from "react";
import List from "./List";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AssetList = () => {
  const axiosSecure = useAxiosSecure();

  const [onSearch, setOnSearch] = useState("");
  const [filterAvailability, setFilterAvailability] = useState("");
  const [filterAssetType, setFilterAssetType] = useState("");
  const [sorting, setSorting] = useState("");

  const [assetList, setAssetList] = useState([]);
  const [isAssetLoading, setIsAssetLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  // Refetch while preserving active filters
  const refetch = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    let isActive = true;

    const fetchData = async () => {
      setIsAssetLoading(true);

      const params = new URLSearchParams();

      if (filterAvailability) {
        params.set("availability", filterAvailability);
      }

      if (filterAssetType) {
        params.set("assetType", filterAssetType);
      }

      if (sorting) {
        params.set("sortbyquantity", sorting);
      }

      if (onSearch.trim()) {
        params.set("search", onSearch.trim());
      }

      try {
        const res = await axiosSecure.get(
          `/api/asset?${params.toString()}`
        );

        if (isActive) {
          setAssetList(res.data.data ?? []);
        }
      } catch (error) {
        console.error(
          "Failed to fetch assets:",
          error.response?.data?.message || error.message
        );

        if (isActive) {
          setAssetList([]);
        }
      } finally {
        if (isActive) {
          setIsAssetLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isActive = false;
    };
  }, [
    axiosSecure,
    filterAvailability,
    filterAssetType,
    sorting,
    onSearch,
    refreshKey,
  ]);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Search */}
      <div className="w-full px-4 sm:w-1/2">
        <label className="input w-full border outline-none">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>

          <input
            type="search"
            placeholder="Search assets by name..."
            value={onSearch}
            onChange={(e) => setOnSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="my-12 w-full px-4 sm:w-11/12">
        {/* Filters */}
        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <select
            className="select outline-none"
            value={filterAvailability}
            onChange={(e) =>
              setFilterAvailability(e.target.value)
            }
          >
            <option value="">All Availability</option>
            <option value="instock">Available</option>
            <option value="outofstock">Out Of Stock</option>
          </select>

          <select
            className="select outline-none"
            value={filterAssetType}
            onChange={(e) =>
              setFilterAssetType(e.target.value)
            }
          >
            <option value="">All Asset Types</option>
            <option value="returnable">Returnable</option>
            <option value="nonreturnable">
              Non-Returnable
            </option>
          </select>

          <select
            className="select outline-none"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="">Default Order</option>
            <option value="asc">Quantity: Low to High</option>
            <option value="desc">Quantity: High to Low</option>
          </select>
        </div>

        {/* Asset list */}
        <List
          assetList={assetList}
          isAssetLoading={isAssetLoading}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default AssetList;
