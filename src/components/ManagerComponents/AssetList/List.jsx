const products = [
  {
    productName: "Dell Laptop",
    productType: "Electronics",
    productQuantity: 15,
    dateAdded: "2026-05-01",
  },
  {
    productName: "Office Chair",
    productType: "Furniture",
    productQuantity: 25,
    dateAdded: "2026-05-03",
  },
  {
    productName: "Wireless Mouse",
    productType: "Accessories",
    productQuantity: 50,
    dateAdded: "2026-05-05",
  },
  {
    productName: "Mechanical Keyboard",
    productType: "Accessories",
    productQuantity: 30,
    dateAdded: "2026-05-07",
  },
  {
    productName: "HP Monitor",
    productType: "Electronics",
    productQuantity: 12,
    dateAdded: "2026-05-10",
  },
  {
    productName: "Printer Paper",
    productType: "Stationery",
    productQuantity: 200,
    dateAdded: "2026-05-12",
  },
  {
    productName: "USB Flash Drive",
    productType: "Storage",
    productQuantity: 75,
    dateAdded: "2026-05-15",
  },
  {
    productName: "Projector",
    productType: "Electronics",
    productQuantity: 5,
    dateAdded: "2026-05-18",
  },
  {
    productName: "Notebook",
    productType: "Stationery",
    productQuantity: 100,
    dateAdded: "2026-05-20",
  },
  {
    productName: "Desk Lamp",
    productType: "Furniture",
    productQuantity: 20,
    dateAdded: "2026-05-22",
  },
];
const List = () => {
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
            {products.map((product, idx) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
