import Swal from "sweetalert2";
import useAssetList from "../../../hooks/custom/useAssetList";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const List = () => {
  const [assetList, isAssetLoading, refetch] = useAssetList();
  const axiosSecure = useAxiosSecure();
  const [assetObj,setAssetObj] = useState(null);
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [assetQuantity, setAssetQuantity] = useState("");

  const handleDelete = async (id) => {
    // console.log(id);
    Swal.fire({
      title: "Do you want to Delete the Asset?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      try {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/api/asset/delete/${id}`);
          // console.log(res.data);
          if (res.data?.success) {
            Swal.fire({
              title: res.data.message,
              icon: "success",
              timer: 3000,
            });
            refetch();
          }
        } else if (result.isDenied) Swal.fire("Not Deleted", "", "info");
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  const handleUpdateAsset = (asset) => {
    setAssetObj(asset);
    setAssetName(asset.name);
    setAssetType(asset.type);
    setAssetQuantity(asset.quantity);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center">Asset List</h2>
      <div className="divider m-0"></div>
      <div className="flex justify-between gap-4 mt-6">
        <select defaultValue="Availability" className="select  outline-none">
          <option disabled={true}>Availability</option>
          <option>Available</option>
          <option>Out Of Stock</option>
        </select>
        <select defaultValue="Asset Type" className="select outline-none">
          <option disabled={true}>Asset Type</option>
          <option>Returnable</option>
          <option>Non-Returnable</option>
        </select>
        <select defaultValue="Sort by Quantity" className="select outline-none">
          <option disabled={true}>Sort by Quantity</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Asset</h3>
          <p className="pb-4 text-xs">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action justify-center">
            <form
              method="dialog"
              className="w-full flex flex-col gap-4"
              onSubmit={async(e) => {
                e.preventDefault();
                const updatedAsset = {
                  productName: assetName,
                  quantity: assetQuantity,
                  productType: assetType,
                  date: new Date().toLocaleDateString(),
                };
                // console.log(updatedAsset);

                try {
                  const res = await axiosSecure.put(`/api/asset/update/${assetObj._id}`,updatedAsset);
                  if(res.data?.success){
                    Swal.fire({
                      title: "Asset Update Success",
                      icon: "success",
                      timer:3000
                    })
                  }
                } catch (error) {
                  console.log(error.message);
                }
                refetch();
                document.getElementById("my_modal_5").close();
              }}
            >
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="productName">Name:</label>
                <input
                  type="text"
                  className="input"
                  name="productName"
                  id="productName"
                  value={assetName}
                  onChange={(e) => setAssetName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="assetQuantity">Quantity:</label>
                <input
                  type="Number"
                  className="input"
                  name="assetQuantity"
                  id="assetQuantity"
                  value={assetQuantity}
                  onChange={(e) => setAssetQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="productType">Type:</label>
                <select
                  name="productType"
                  id="productType"
                  value={assetType}
                  className="select"
                  onChange={(e) => setAssetType(e.target.value)}
                  required
                >
                  <option value="Select Return Type" disabled>
                    Select Return Type
                  </option>
                  <option value="Returnable">Returnable</option>
                  <option value="Non-Returnable">Non-Returnable</option>
                </select>
                {/* <input type="text" className="input" name="productType" id="productType" value={assetName} onChange={(e)=>setAssetName(e.target.value)} /> */}
              </div>
              <button className="btn btn-success">Update</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="overflow-auto h-screen rounded-box border border-base-content/10 bg-base-100 mt-10">
        <table className="table">
          {/* head */}
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
              <tr className="loading loading-xl"></tr>
            ) : (
              assetList.map((asset, idx) => (
                <tr key={idx}>
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
                      onClick={() => handleDelete(asset._id)}
                      className="btn btn-error"
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
