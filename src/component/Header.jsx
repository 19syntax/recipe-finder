import saveIcon from "../assets/images/outline.svg";
import home from "../assets/images/home.svg";
import favorite from "../assets/images/favorite.svg";
import nnew from "../assets/images/new.svg";
import logout from "../assets/images/logout.svg";
import menu from "../assets/images/menu.svg";

import { useState } from "react";
import { useRecipe } from "../Context";

function Header() {
  const { state, dispatch, handClicked } = useRecipe();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="bg-headerBg text-white fixed w-full py-4 px-8 flex justify-between items-center z-10">
        <h3 className="font-bold text-lg">CUISINE CRAZE</h3>

        <div className="flex gap-3">
          <input
            className="sm:w-200 w-52 border-2 pl-2 pr-10 py-2 text-black outline-none border-none rounded sm:p-2"
            type="text"
            placeholder="Enter your favourite food"
            value={state.input}
            onChange={(e) =>
              dispatch({ type: "inputData", payload: e.target.value })
            }
          />
          <button
            onClick={handClicked}
            className="hover:bg-white hover:text-headerBg border px-4 sm:py-2 sm:px-8 text-white text-sm font-semibold rounded-md transition"
          >
            Search Now
          </button>
        </div>
        <p className="hidden w-5 bg-cover bg-center sm:block pr-20">
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
          <img src={favorite} />
          <p>Favourite</p>
        </button>
        <button className="value">
          <img src={nnew} />
          <p>New</p>
        </button>
        <button className="value">
          <img src={saveIcon} />
          <p>Bookmark</p>
        </button>
        <p className="value">
          <p>{state.username}</p>
        </p>
        <button className="value">
          <img src={logout} />
          <p>Log out</p>
        </button>
      </div>
    </>
  );
}

export default Header;
