import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <code className="py-4 text-lg text-center block border-t">&copy; All Rights Reserved || Faysal Joy</code>
    </div>
  );
}

export default App;
