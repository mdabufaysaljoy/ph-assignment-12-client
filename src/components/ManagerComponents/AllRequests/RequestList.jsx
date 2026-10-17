const assetRequests = [
  {
    assetName: "Dell Latitude 5420",
    assetType: "Laptop",
    emailOfRequester: "faysal@example.com",
    nameOfRequester: "Md Abu Faysal Joy",
    requestDate: "2026-06-01",
    additionalNote: "Required for web development projects.",
    status: "Pending",
  },
  {
    assetName: "HP LaserJet Pro",
    assetType: "Printer",
    emailOfRequester: "rahim@example.com",
    nameOfRequester: "Abdur Rahim",
    requestDate: "2026-05-30",
    additionalNote: "Needed for office document printing.",
    status: "Approved",
  },
  {
    assetName: "Logitech MX Master 3",
    assetType: "Mouse",
    emailOfRequester: "karim@example.com",
    nameOfRequester: "Abdul Karim",
    requestDate: "2026-05-28",
    additionalNote: "Current mouse is malfunctioning.",
    status: "Pending",
  },
  {
    assetName: "Samsung 24-inch Monitor",
    assetType: "Monitor",
    emailOfRequester: "sadia@example.com",
    nameOfRequester: "Sadia Islam",
    requestDate: "2026-05-25",
    additionalNote: "Required for dual-monitor setup.",
    status: "Approved",
  },
  {
    assetName: "Office Chair",
    assetType: "Furniture",
    emailOfRequester: "tamim@example.com",
    nameOfRequester: "Tamim Hasan",
    requestDate: "2026-05-22",
    additionalNote: "Current chair is damaged.",
    status: "Rejected",
  },
  {
    assetName: "Mechanical Keyboard",
    assetType: "Keyboard",
    emailOfRequester: "nusrat@example.com",
    nameOfRequester: "Nusrat Jahan",
    requestDate: "2026-05-20",
    additionalNote: "Needed for programming work.",
    status: "Pending",
  },
  {
    assetName: "External SSD 1TB",
    assetType: "Storage",
    emailOfRequester: "shuvo@example.com",
    nameOfRequester: "Shuvo Ahmed",
    requestDate: "2026-05-18",
    additionalNote: "For project backup and storage.",
    status: "Approved",
  },
  {
    assetName: "Projector",
    assetType: "Presentation Equipment",
    emailOfRequester: "mim@example.com",
    nameOfRequester: "Mim Akter",
    requestDate: "2026-05-15",
    additionalNote: "Required for client presentation.",
    status: "Pending",
  },
  {
    assetName: "Notebook Pack",
    assetType: "Stationery",
    emailOfRequester: "sakib@example.com",
    nameOfRequester: "Sakib Hossain",
    requestDate: "2026-05-12",
    additionalNote: "For meeting notes and planning.",
    status: "Approved",
  },
  {
    assetName: "USB Flash Drive 64GB",
    assetType: "Storage",
    emailOfRequester: "farzana@example.com",
    nameOfRequester: "Farzana Rahman",
    requestDate: "2026-05-10",
    additionalNote: "Need to transfer project files.",
    status: "Rejected",
  },
];
const RequestList = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Request List</h2>
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
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Email of Requester</th>
              <th>Name of Requester</th>
              <th>Request Date</th>
              <th>Aditional Note</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {assetRequests.map((request, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{request.assetName}</td>
                <td>{request.assetType}</td>
                <td>{request.emailOfRequester}</td>
                <td>{request.nameOfRequester}</td>
                <td>{request.requestDate}</td>
                <td>{request.additionalNote}</td>
                <td>{request.status}</td>
                <td>
                  <button
                    disabled={request.status !== "Pending" && request.status !== "Rejected"}
                    className="btn btn-info"
                  >
                    {request.status === "Approved" ? "Approved" : "Approve"}
                  </button>
                </td>
                <td>
                  <button
                    disabled={request.status !== "Pending" && request.status !== "Approved"}
                    className="btn btn-error"
                  >
                   {request.status === "Rejected" ? "Rejected" : "Reject"}
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

export default RequestList;
