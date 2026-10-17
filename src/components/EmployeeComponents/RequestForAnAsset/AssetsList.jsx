const assets = [
  {
    assetName: "Laptop",
    assetType: "returnable",
    availability: "available",
    quantity: 12,
  },
  {
    assetName: "Keyboard",
    assetType: "returnable",
    availability: "out-of-stock",
    quantity: 0,
  },
  {
    assetName: "Mouse",
    assetType: "returnable",
    availability: "available",
    quantity: 25,
  },
  {
    assetName: "Office Chair",
    assetType: "returnable",
    availability: "available",
    quantity: 8,
  },
  {
    assetName: "Desk",
    assetType: "returnable",
    availability: "out-of-stock",
    quantity: 0,
  },
  {
    assetName: "Cell Phone",
    assetType: "returnable",
    availability: "available",
    quantity: 6,
  },
  {
    assetName: "Monitor",
    assetType: "returnable",
    availability: "available",
    quantity: 10,
  },
  {
    assetName: "Pen",
    assetType: "non-returnable",
    availability: "available",
    quantity: 100,
  },
  {
    assetName: "Pencil",
    assetType: "non-returnable",
    availability: "available",
    quantity: 80,
  },
  {
    assetName: "Paper",
    assetType: "non-returnable",
    availability: "out-of-stock",
    quantity: 0,
  },
  {
    assetName: "Diary",
    assetType: "non-returnable",
    availability: "available",
    quantity: 30,
  },
  {
    assetName: "Tissue Paper",
    assetType: "non-returnable",
    availability: "available",
    quantity: 50,
  },
  {
    assetName: "Stapler",
    assetType: "non-returnable",
    availability: "available",
    quantity: 15,
  },
  {
    assetName: "Notebook",
    assetType: "non-returnable",
    availability: "out-of-stock",
    quantity: 0,
  },
];

const AssetsList = () => {
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
      </div>

      <div className="overflow-auto h-screen rounded-box border border-base-content/10 bg-base-100 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, idx) => (
              <tr key={idx} className="capitalize">
                <th>{idx + 1}</th>
                <td>{asset.assetName}</td>
                <td>{asset.assetType}</td>
                <td>{asset.quantity ? "Available" : "Out Of Stock"}</td>
                <td>
                  <button className="btn btn-info" disabled={!asset.quantity}>
                    Request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AssetsList;
