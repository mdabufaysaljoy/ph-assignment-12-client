import List from "./List";

const AssetList = () => {
  return (
    <div className="flex justify-center items-center py-16 flex-col">
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
       <div className="my-16 w-full sm:w-11/12 px-4">
        {/* <AssetsList /> */}
        <List />
      </div>
    </div>
  );
};

export default AssetList;
