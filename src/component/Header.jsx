import userIcon from "../assets/images/userIcon.svg";
import menu from "../assets/images/menu.svg";
import home from "../assets/images/home.svg";
import favourite from "../assets/images/favourite.svg";
import { useState } from "react";
import { useRecipe } from "../Context";

function Header() {
  const { state } = useRecipe();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="bg-headerBg text-white fixed w-full py-4 px-8 sm:px-20 flex justify-between items-center z-10">
        <h3 className="font-bold">CUISINE CRAZE</h3>
        <ul className="hidden gap-14 sm:flex">
          <li>Home</li>
          <li>Favourites</li>
        </ul>
        <p className="hidden w-5 bg-cover bg-center sm:block">
          {state.username}
        </p>
        <img
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          src={menu}
          alt="menu"
        />
      </div>

      <div className={`input ${isOpen ? "hidden" : "block"}`}>
        <button className="value">
          <img src={home} />
          <p>Home</p>
        </button>
        <button className="value">
          <img src={favourite} />
          <p>Favourite</p>
        </button>
        <p className="value">
          <img src={userIcon} />
          <p>{state.username}</p>
        </p>
      </div>
    </>
  );
}

export default Header;
