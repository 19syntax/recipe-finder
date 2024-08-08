import saveIcon from "../assets/images/outline.svg";
import home from "../assets/images/home.svg";
import favorite from "../assets/images/favorite.svg";
import nnew from "../assets/images/new.svg";
import logout from "../assets/images/logout.svg";

function Sidebar() {
  return (
    <div className="shadow-lg text-black w-60 sm:w-2/12 h-screen fixed bottom-0 left-0 top-16 hidden md:block">
      <nav className="flex flex-col">
        <ul className="my-10 mx-6">
          <span className="flex gap-4 cursor-pointer text-lg my-4 p-2 font-medium rounded-md hover:bg-headerBg duration-100 hover:text-white">
            <img src={home} alt="" />
            <li>Home</li>
          </span>

          <span className="flex gap-4 cursor-pointer text-lg my-4 p-2 font-medium rounded-md hover:bg-headerBg duration-100 hover:text-white">
            <img src={favorite} alt="" />
            <li>Favourite</li>
          </span>

          <span className="flex gap-4 cursor-pointer text-lg my-4 p-2 font-medium rounded-md hover:bg-headerBg duration-100 hover:text-white">
            <img src={nnew} alt="" />
            <li>New</li>
          </span>

          <span className="flex gap-4 cursor-pointer text-lg my-4 p-2 font-medium rounded-md hover:bg-headerBg duration-100 hover:text-white">
            <img src={saveIcon} alt="" />
            <li>Bookmark</li>
          </span>
        </ul>

        <span className="flex gap-4 fixed bottom-0 w-2/12 cursor-pointer text-lg my-4 p-2 font-medium rounded-md bg-headerBg duration-100 text-white">
          <img src={logout} alt="" />
          <p>Log out</p>
        </span>
      </nav>
    </div>
  );
}

export default Sidebar;
