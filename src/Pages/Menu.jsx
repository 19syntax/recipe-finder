import { Link } from "react-router-dom";
import saveIcon from "../assets/images/outline.svg";
import ErrMsg from "../component/ErrMsg";
import Loader from "../component/Loader";
import Sidebar from "../component/Sidebar";
import { useRecipe } from "../Context";
import New from "../component/New";
function Menu() {
  const { state, handleDetails } = useRecipe();
  const { meals, error, isLoading } = state;
  return (
    <>
      <Sidebar />
      <Link to="/new">
        <New />
      </Link>
      <div className="w-70 sm:w-3/4 float-right mr-0 sm:mr-16 mt-24">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <Loader />
          ) : (
            meals.map((item, id) => (
              <div key={id} className="border rounded p-4">
                <div className="">
                  <img className="rounded-md" src={item.strMealThumb} alt="" />
                  <div className="pt-3">
                    <p className=" font-semibold mb-1">{item.strMeal}</p>
                    <p className="text-headerBg mb-4">
                      <span>{item.strArea}</span>
                      <span className="ml-4">{item.strCategory}</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link to={item.idMeal}>
                    <button
                      className="px-12 py-1 bg-headerBg border-2 rounded-md hover:bg-white 
                    hover:border-2 hover:text-headerBg text-white"
                      onClick={() => handleDetails(item)}
                    >
                      View
                    </button>
                  </Link>
                  <img className="w-5" src={saveIcon} alt={saveIcon} />
                </div>
              </div>
              // <li >{item.strMeal}</li>
            ))
          )}
          {error && <ErrMsg message={error} />}
        </div>
      </div>
    </>
  );
}

export default Menu;
