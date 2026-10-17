const assetRequests = [
  {
    assetName: "Laptop",
    assetType: "returnable",
    requestDate: "2026-04-12",
    approvalDate: "2026-04-13",
    requestStatus: "Approved",
  },
  {
    assetName: "Keyboard",
    assetType: "returnable",
    requestDate: "2026-03-21",
    approvalDate: "",
    requestStatus: "Pending",
  },
  {
    assetName: "Mouse",
    assetType: "returnable",
    requestDate: "2026-02-18",
    approvalDate: "2026-02-19",
    requestStatus: "Approved",
  },
  {
    assetName: "Office Chair",
    assetType: "returnable",
    requestDate: "2026-01-10",
    approvalDate: "",
    requestStatus: "Pending",
  },
  {
    assetName: "Desk",
    assetType: "returnable",
    requestDate: "2025-12-05",
    approvalDate: "2025-12-06",
    requestStatus: "Approved",
  },
  {
    assetName: "Cell Phone",
    assetType: "returnable",
    requestDate: "2026-04-01",
    approvalDate: "2026-04-02",
    requestStatus: "Approved",
  },
  {
    assetName: "Monitor",
    assetType: "returnable",
    requestDate: "2026-03-15",
    approvalDate: "",
    requestStatus: "Pending",
  },
  {
    assetName: "Pen",
    assetType: "non-returnable",
    requestDate: "2026-02-08",
    approvalDate: "2026-02-08",
    requestStatus: "Approved",
  },
  {
    assetName: "Pencil",
    assetType: "non-returnable",
    requestDate: "2026-01-25",
    approvalDate: "",
    requestStatus: "Pending",
  },
  {
    assetName: "Paper",
    assetType: "non-returnable",
    requestDate: "2025-11-30",
    approvalDate: "2025-12-01",
    requestStatus: "Approved",
  },
  {
    assetName: "Diary",
    assetType: "non-returnable",
    requestDate: "2026-03-05",
    approvalDate: "",
    requestStatus: "Pending",
  },
  {
    assetName: "Tissue Paper",
    assetType: "non-returnable",
    requestDate: "2026-04-18",
    approvalDate: "2026-04-19",
    requestStatus: "Approved",
  },
  {
    assetName: "Stapler",
    assetType: "non-returnable",
    requestDate: "2026-02-27",
    approvalDate: "2026-02-28",
    requestStatus: "Approved",
  },
  {
    assetName: "Notebook",
    assetType: "non-returnable",
    requestDate: "2026-01-14",
    approvalDate: "",
    requestStatus: "Pending",
  },
];
const MyAssetsList = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Asset List</h2>
      <div className="divider m-0"></div>
      <div className="flex justify-between gap-4 mt-6">
        <select defaultValue="Request Status" className="select  outline-none">
          <option disabled={true}>Request Status</option>
          <option>Pending</option>
          <option>Approved</option>
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
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Request Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assetRequests.map((request, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{request.assetName}</td>
                <td>{request.assetType}</td>
                <td>{request.requestDate}</td>
                <td>{request.approvalDate}</td>
                <td>{request.requestStatus}</td>
                <td>
                  {request.requestStatus === "Approved" ? (
                  <div className="join">
                      <button className="btn btn-success join-item btn-sm">Print</button>
                      {request.assetType === "returnable" && <button className="btn btn-info join-item btn-sm">Return</button>}
                  </div>
                  ) : (
                    <button className="btn btn-warning btn-sm">Cancel</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyAssetsList;
