import RequestList from "./RequestList";

const AllRequests = () => {
  return (
    <div className="w-full flex justify-center items-center my-20 flex-col">
      <div className="w-full sm:w-1/2 px-4 flex flex-col gap-4">
        <label className="input border outline-none w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="w-full sm:w-11/12 mt-20">
        <RequestList />
      </div>
    </div>
  );
};

export default AllRequests;
