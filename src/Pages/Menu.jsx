import saveIcon from "../assets/images/outline.svg";
import ErrMsg from "../component/ErrMsg";
import Loader from "../component/Loader";
import { useRecipe } from "../Context";
import RecipeDetails from "./RecipeDetails";

function Menu() {
  const { state, handClicked, handleDetails, dispatch } = useRecipe();
  const { input, meals, error, isLoading, detail } = state;
  return (
    <div className="w-full absolute mt-24">
      <div className="flex text-xs mb-4 gap-2 justify-center mx-auto">
        <input
          className="sm:w-200 border-2 pl-2 pr-10 py-2 sm:p-2"
          type="text"
          placeholder="Enter your favourite food"
          value={input}
          onChange={(e) =>
            dispatch({ type: "inputData", payload: e.target.value })
          }
        />
        <button
          onClick={handClicked}
          className="bg-headerBg px-4 sm:py-2 sm:px-8 text-white font-semibold rounded-md"
        >
          Search Now
        </button>
      </div>

      <div className="sm:flex sm:items-start sm:justify-center">
        <div>
          {isLoading && <Loader />}

          {!isLoading && !error && detail ? (
            <RecipeDetails />
          ) : (
            meals.map((item) => (
              <div
                key={item.idMeal}
                className="sm:mx-20 text-xs sm:mt-2 sm:w-700 w-11/12 mx-auto sm:text-base sm:py-2 sm:pl-2 sm:pr-8 border py-1 px-2 my-4 flex items-center justify-between"
              >
                <div className="flex gap-4">
                  <img
                    className="sm:w-32 w-14 rounded-md"
                    src={item.strMealThumb}
                    alt=""
                  />
                  <div>
                    <p className="text- font-semibold mb-4">{item.strMeal}</p>
                    <p className="text-headerBg">
                      <span>{item.strArea}</span>
                      <span className="ml-4">{item.strCategory}</span>
                    </p>
                  </div>
                </div>
                <div className="flex sm:gap-8 gap-2 items-center">
                  <button
                    className="px-6 py-1 bg-headerBg rounded-md text-white"
                    onClick={() => handleDetails(item)}
                  >
                    View
                  </button>
                  <img className="w-5" src={saveIcon} alt={saveIcon} />
                </div>
              </div>
              // <li >{item.strMeal}</li>
            ))
          )}
          {error && <ErrMsg message={error} />}
        </div>
      </div>
    </div>
  );
}

export default Menu;
