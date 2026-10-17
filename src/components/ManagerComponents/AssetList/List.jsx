import Swal from "sweetalert2";
import useAssetList from "../../../hooks/custom/useAssetList";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const List = () => {
  const [assetList,isAssetLoading,refetch] = useAssetList();
  const axiosSecure = useAxiosSecure();
  const handleDelete = async(id)=>{
    // console.log(id);
    Swal.fire({
  title: "Do you want to Delete the Asset?",
  showDenyButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `No`
}).then(async(result) => {
  /* Read more about isConfirmed, isDenied below */
  try {
  if (result.isConfirmed){
      const res = await axiosSecure.delete(`/api/asset/delete/${id}`);
      // console.log(res.data);
      if(res.data?.success){
        Swal.fire({
          title: res.data.message,
          icon: "success",
          timer: 3000
        })
        refetch();
      }
    } else if (result.isDenied) Swal.fire("Not Deleted", "", "info");
  } catch (error) {
    console.log(error.message);
  }
 
});
  }
  // console.log(assetList,isAssetLoading);
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
            {
              isAssetLoading? <tr className="loading loading-xl"></tr> :
              assetList.map((asset,idx)=>(
                    <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{asset.name}</td>
                <td>{asset.type}</td>
                <td>{asset.quantity}</td>
                <td>{asset.date}</td>
                <td>
                    <button className="btn btn-info">Update</button>
                </td>
                <td>
                    <button onClick={()=>handleDelete(asset._id)} className="btn btn-error">Delete</button>
                </td>
                
              </tr>
              ))
            }
            {/* {products.map((product, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productType}</td>
                <td>{product.productQuantity}</td>
                <td>{product.dateAdded}</td>
                <td>
                    <button className="btn btn-info">Update</button>
                </td>
                <td>
                    <button className="btn btn-error">Delete</button>
                </td>
                
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
