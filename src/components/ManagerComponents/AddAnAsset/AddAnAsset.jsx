import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddAnAsset = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const handleFormSubmit = async(data) => {
    data.date = new Date().toLocaleDateString();
  try {
      const response = await axiosSecure.post("/api/asset/create",data);
    // console.log(response.data);
    if(response.data.success){
      Swal.fire({
        title: "Aseet Created",
        icon: "success",
        timer: 3000
      });
      reset();
    }
  } catch (error) {
    console.log(error.message);
  }
    // console.log(data);
  };
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="flex flex-col justify-center items-center w-full px-4">
        <h3 className="text-3xl font-bold text-center my-2">Add an Asset</h3>
        <form
          className="bg-base-300 p-4 rounded-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 "
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex flex-col w-full">
            <label className="label">Product Name </label>
            <input
              type="text"
              name="productName"
              className="input outline-none w-full"
              {...register("productName", {
                required: { value: true, message: "product name is required" },
                minLength: { value: 3, message: "minimum length 3" },
                maxLength: { value: 100, message: "maximum length 100" },
              })}
            />
            {errors?.productName && (
              <span className="text-red-500 text-xs">
                {errors.productName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label className="label">Product Type </label>
            <select
              defaultValue="Product Type"
              className="select w-full outline-none"
              name="productType"
              {...register("productType",{
                required:{value: true, message: "product type is required"}
              })}
            >
              <option disabled={true}>Product Type</option>
              <option>Returnable</option>
              <option>Non-Returnable</option>
            </select>
              {errors?.productType && (
              <span className="text-red-500 text-xs">
                {errors.productType.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label className="label">Product Quantity </label>
            <input
              type="number"
              name="quantity"
              className="input outline-none w-full"
              {...register("quantity",{
                required: {value:true,message:"product quantity is required"}
              })}
            />
               {errors?.quantity && (
              <span className="text-red-500 text-xs">
                {errors.quantity.message}
              </span>
            )}
          </div>
          <button className="btn btn-info w-full mt-2">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddAnAsset;
