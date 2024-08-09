// import spark from "../assets/images/spark.jpg";
import { useRecipe } from "../Context";
function RecipeDetails() {
  const { state } = useRecipe();
  // const { meals } = state;
  function handled() {
    setDetail((detail) => !detail);
  }
  console.log(state.detail);
  return (
    <>
      <div className="w-70 sm:w-3/4 float-right mr-0 sm:mr-16 mt-24 border">
        <div className="flex gap-20">
          <img
            className="w-full sm:h-400 bg-center lg:w-65 object-cover bg-cover mb-8 border"
            src={state.detail.strMealThumb}
            alt=""
          />
          <div className="hidden lg:block">
            <p className="font-semibold text-headerBg pt-10 py?-2">
              INGREDIENT
            </p>
            <ul className="pr-10 list-disc">
              <li>
                <span>{state?.detail?.strIngredient1}</span>
                <span className="ml-5">
                  {state.detail.strMeasure1 === "Dash"
                    ? ""
                    : state.detail.strMeasure1}
                </span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient2}</span>
                <span className="ml-5">{state.detail.strMeasure2}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient3}</span>
                <span className="ml-5">{state.detail.strMeasure3}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient4}</span>
                <span className="ml-5">{state.detail.strMeasure4}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient5}</span>
                <span className="ml-5">
                  {state.detail.strMeasure5 === "Dash"
                    ? ""
                    : state.detail.strMeasure5}
                </span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient6}</span>
                <span className="ml-5">{state.detail.strMeasure6}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient7}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient8}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient9}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient10}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient11}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient12}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>

              <li>
                <span>{state?.detail?.strIngredient13}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              {/*
              <li>
                <span>{state?.detail?.strIngredient14}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient15}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient16}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient17}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient18}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient19}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient20}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li> */}
            </ul>
            <p className="mt-4 text-headerBg font-bold">Sushi</p>
          </div>
        </div>
        <div className="pl-2">
          <h1 className="text-4xl pb-8 font-extrabold">Sushi</h1>

          {/* <div className="block lg:hidden">
            <p className="font-semibold text-head?erBg py?-2">INGREDIENT</p>
            <ul className="pl-5">
              <li>
                <span>{state?.detail?.strIngredient1}</span>
                <span className="ml-5">{state.detail.strMeasure1}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient2}</span>
                <span className="ml-5">{state.detail.strMeasure2}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient3}</span>
                <span className="ml-5">{state.detail.strMeasure3}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient4}</span>
                <span className="ml-5">{state.detail.strMeasure4}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient5}</span>
                <span className="ml-5">{state.detail.strMeasure5}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient6}</span>
                <span className="ml-5">{state.detail.strMeasure6}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient7}</span>
                <span className="ml-5">{state.detail.strMeasure7}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient8}</span>
                <span className="ml-5">{state.detail.strMeasure8}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient9}</span>
                <span className="ml-5">{state.detail.strMeasure9}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient10}</span>
                <span className="ml-5">{state.detail.strMeasure10}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient11}</span>
                <span className="ml-5">{state.detail.strMeasure11}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient12}</span>
                <span className="ml-5">{state.detail.strMeasure12}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient13}</span>
                <span className="ml-5">{state.detail.strMeasure13}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient14}</span>
                <span className="ml-5">{state.detail.strMeasure14}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient15}</span>
                <span className="ml-5">{state.detail.strMeasure15}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient16}</span>
                <span className="ml-5">{state.detail.strMeasure16}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient17}</span>
                <span className="ml-5">{state.detail.strMeasure17}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient18}</span>
                <span className="ml-5">{state.detail.strMeasure18}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient19}</span>
                <span className="ml-5">{state.detail.strMeasure19}</span>
              </li>
              <li>
                <span>{state?.detail?.strIngredient20}</span>
                <span className="ml-5">{state.detail.strMeasure20}</span>
              </li>
            </ul>
            <p className="mt-4 text-headerBg font-bold">
              {state.detail.strTags}
            </p>
          </div> */}
          <div className="mt-10 sm:p-4">
            <p className="font-semibold text-headerBg pb-2">INSTRUCTIONS</p>
            <p className="pl-4">{state.detail.strInstructions}</p>
          </div>
          <p className="font-bold text-neutral-700 mt-10">
            SOURCE:
            <span className="text-headerBg w-full pl-3">
              {state.detail.strSource}
            </span>
          </p>
          <p className="font-bold text-neutral-700 mt-6">
            YOUTUBE:
            <span className="text-headerBg pl-3">
              {state.detail.strYoutube}
            </span>
          </p>
          <div className="flex justify-end mr-8">
            <button
              onClick={handled}
              className="px-10 py-2 my-10 bg-headerBg rounded-md text-white"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
