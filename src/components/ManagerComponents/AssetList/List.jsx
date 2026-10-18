
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const List = ({ assetList, isAssetLoading, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const [assetObj, setAssetObj] = useState(null);
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [assetQuantity, setAssetQuantity] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Open update modal with selected asset values
  const handleUpdateAsset = (asset) => {
    setAssetObj(asset);
    setAssetName(asset.name);
    setAssetType(asset.type);
    setAssetQuantity(String(asset.quantity));

    document.getElementById("my_modal_5")?.showModal();
  };

  // Delete asset
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Do you want to delete this asset?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(
        `/api/asset/delete/${id}`
      );

      if (res.data?.success) {
        await Swal.fire({
          title: "Asset deleted successfully",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        refetch();
      } else {
        Swal.fire({
          title: "Delete failed",
          text: res.data?.message || "Could not delete asset.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Delete failed",
        text:
          error.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  // Update asset
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    if (!assetObj) return;

    setIsUpdating(true);

    const updatedAsset = {
      productName: assetName.trim(),
      productType: assetType,
      quantity: Number(assetQuantity),
      date: assetObj.date,
    };

    try {
      const res = await axiosSecure.put(
        `/api/asset/update/${assetObj._id}`,
        updatedAsset
      );

      if (res.data?.success) {
        document.getElementById("my_modal_5")?.close();

        await Swal.fire({
          title: "Asset updated successfully",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        refetch();
      } else {
        Swal.fire({
          title: "Update failed",
          text: res.data?.message || "Could not update asset.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Update failed",
        text:
          error.response?.data?.message || error.message,
        icon: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <h2 className="mt-8 text-center text-3xl font-bold">
        Asset List
      </h2>

      <div className="divider m-0" />

      {/* Update modal */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="text-lg font-bold">Update Asset</h3>

          <form
            className="mt-6 flex w-full flex-col gap-4"
            onSubmit={handleSubmitUpdate}
          >
            {/* Product name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="productName">Product Name:</label>

              <input
                type="text"
                className="input w-full"
                name="productName"
                id="productName"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                required
              />
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <label htmlFor="assetQuantity">Quantity:</label>

              <input
                type="number"
                className="input w-full"
                name="assetQuantity"
                id="assetQuantity"
                value={assetQuantity}
                onChange={(e) =>
                  setAssetQuantity(e.target.value)
                }
                min="0"
                step="1"
                required
              />
            </div>

            {/* Asset type */}
            <div className="flex flex-col gap-2">
              <label htmlFor="productType">Asset Type:</label>

              <select
                name="productType"
                id="productType"
                className="select w-full"
                value={assetType}
                onChange={(e) => setAssetType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Return Type
                </option>
                <option value="Returnable">
                  Returnable
                </option>
                <option value="Non-Returnable">
                  Non-Returnable
                </option>
              </select>
            </div>

            {/* Modal actions */}
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                disabled={isUpdating}
                onClick={() =>
                  document.getElementById("my_modal_5")?.close()
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-success"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Assets table */}
      <div className="mt-10 h-screen overflow-auto rounded-box border border-base-content/10 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Product Quantity</th>
              <th>Date Added</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {isAssetLoading ? (
              <tr>
                <td colSpan={7} className="py-10 text-center">
                  <span className="loading loading-spinner loading-lg" />
                </td>
              </tr>
            ) : assetList.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-10 text-center">
                  No assets found.
                </td>
              </tr>
            ) : (
              assetList.map((asset, idx) => (
                <tr key={asset._id}>
                  <td>{idx + 1}</td>
                  <td>{asset.name}</td>
                  <td>{asset.type}</td>
                  <td>{asset.quantity}</td>
                  <td>{asset.date}</td>

                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleUpdateAsset(asset)}
                    >
                      Update
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(asset._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
