// import spark from "../assets/images/spark.jpg";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { useRecipe } from "../Context";
function RecipeDetails() {
  const { state } = useRecipe();
  const { meals } = state;
  const { id } = useParams();
  const recipeDetail = meals.find((p) => p.idMeal === id);
  return (
    <>
      <Sidebar />
      <div className="md:w-70 w-full  sm:w-3/4 float-right mt-24 border">
        <div className="flex gap-20">
          <img
            className="w-full sm:h-400 bg-center lg:w-65 object-cover bg-cover mb-8 border"
            src={recipeDetail.strMealThumb}
            alt=""
          />
          <div className="hidden lg:block">
            <p className="font-semibold text-headerBg pt-10 py?-2">
              INGREDIENT
            </p>
            <ul className="pr-10">
              <li>
                <span>{recipeDetail.strIngredient1}</span>
                <span className="ml-5">{recipeDetail.strMeasure1}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient2}</span>
                <span className="ml-5">{recipeDetail.strMeasure2}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient3}</span>
                <span className="ml-5">{recipeDetail.strMeasure3}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient4}</span>
                <span className="ml-5">{recipeDetail.strMeasure4}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient5}</span>
                <span className="ml-5">{recipeDetail.strMeasure5}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient6}</span>
                <span className="ml-5">{recipeDetail.strMeasure6}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient7}</span>
                <span className="ml-5">{recipeDetail.strMeasure7}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient8}</span>
                <span className="ml-5">{recipeDetail.strMeasure8}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient9}</span>
                <span className="ml-5">{recipeDetail.strMeasure9}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient10}</span>
                <span className="ml-5">{recipeDetail.strMeasure10}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient11}</span>
                <span className="ml-5">{recipeDetail.strMeasure11}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient12}</span>
                <span className="ml-5">{recipeDetail.strMeasure12}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient13}</span>
                <span className="ml-5">{recipeDetail.strMeasure13}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient14}</span>
                <span className="ml-5">{recipeDetail.strMeasure14}</span>
              </li>
              {/*
              <li>
                <span>{recipeDetail.strIngredient15}</span>
                <span className="ml-5">{recipeDetail.strMeasure15}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient16}</span>
                <span className="ml-5">{recipeDetail.strMeasure16}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient17}</span>
                <span className="ml-5">{recipeDetail.strMeasure17}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient18}</span>
                <span className="ml-5">{recipeDetail.strMeasure18}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient19}</span>
                <span className="ml-5">{recipeDetail.strMeasure19}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient20}</span>
                <span className="ml-5">{recipeDetail.strMeasure20}</span>
              </li> */}
            </ul>
            <p className="mt-4 text-headerBg font-bold">
              {recipeDetail.strMeal}
            </p>
          </div>
        </div>
        <div className="pl-2">
          <h1 className="text-4xl pb-8 font-extrabold">
            {recipeDetail.strMeal}
          </h1>

          <div className="block lg:hidden">
            <p className="font-semibold text-head?erBg py?-2">INGREDIENT</p>
            <ul className="pl-5">
              <li>
                <span>{recipeDetail.strIngredient1}</span>
                <span className="ml-5">{recipeDetail.strMeasure1}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient2}</span>
                <span className="ml-5">{recipeDetail.strMeasure2}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient3}</span>
                <span className="ml-5">{recipeDetail.strMeasure3}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient4}</span>
                <span className="ml-5">{recipeDetail.strMeasure4}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient5}</span>
                <span className="ml-5">{recipeDetail.strMeasure5}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient6}</span>
                <span className="ml-5">{recipeDetail.strMeasure6}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient7}</span>
                <span className="ml-5">{recipeDetail.strMeasure7}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient8}</span>
                <span className="ml-5">{recipeDetail.strMeasure8}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient9}</span>
                <span className="ml-5">{recipeDetail.strMeasure9}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient10}</span>
                <span className="ml-5">{recipeDetail.strMeasure10}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient11}</span>
                <span className="ml-5">{recipeDetail.strMeasure11}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient12}</span>
                <span className="ml-5">{recipeDetail.strMeasure12}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient13}</span>
                <span className="ml-5">{recipeDetail.strMeasure13}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient14}</span>
                <span className="ml-5">{recipeDetail.strMeasure14}</span>
              </li>
              {/*
              <li>
                <span>{recipeDetail.strIngredient15}</span>
                <span className="ml-5">{recipeDetail.strMeasure15}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient16}</span>
                <span className="ml-5">{recipeDetail.strMeasure16}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient17}</span>
                <span className="ml-5">{recipeDetail.strMeasure17}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient18}</span>
                <span className="ml-5">{recipeDetail.strMeasure18}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient19}</span>
                <span className="ml-5">{recipeDetail.strMeasure19}</span>
              </li>
              <li>
                <span>{recipeDetail.strIngredient20}</span>
                <span className="ml-5">{recipeDetail.strMeasure20}</span>
              </li> */}
            </ul>
            <p className="mt-4 text-headerBg font-bold">
              {recipeDetail.strTags}
            </p>
          </div>
          <div className="mt-10 sm:p-4">
            <p className="font-semibold text-headerBg pb-2">INSTRUCTIONS</p>
            <p className="pl-4">{recipeDetail.strInstructions}</p>
          </div>
          <p className="font-bold md:block hidden text-neutral-700 mt-10 w-1/2">
            SOURCE:
            <span className="text-headerBg w-full pl-3">
              {recipeDetail.strSource}
            </span>
          </p>
          <p className="font-bold text-neutral-700 mt-6">
            YOUTUBE:
            <span className="text-headerBg pl-3">
              {recipeDetail.strYoutube}
            </span>
          </p>
          <div className="flex justify-end mr-8">
            <Link to="/menu">
              <button className="px-10 py-2 my-10 bg-headerBg rounded-md text-white">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
