import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function NotFound() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-11/12 sm:w-900 flex ml-28 items-center justify-center h-screen">
        NotFound
      </div>
    </div>
  );
}

export default NotFound;
