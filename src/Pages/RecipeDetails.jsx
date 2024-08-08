// import spark from "../assets/images/spark.jpg";
import { useRecipe } from "../Context";
function RecipeDetails() {
  const { state } = useRecipe();
  // function handled() {
  //   setDetail((detail) => !detail);
  // }
  console.log(state.detail);
  return;
  // <div>{state.detail.strMeal}</div>
  // <div className="sm:w-300 m-2 text-xs sm:text-base w-11/12 border my-8 mx-auto">
  //   <img
  //     className="sm:w-full sm:h-400 bg-center bg-cover mb-8 border"
  //     src={item.strMealThumb}
  //     alt=""
  //   />
  //   <div className="pl-2">
  //     <h1 className="text-4xl pb-8 font-extrabold">{item.strMeal} </h1>
  //     <p className="font-semibold text-headerBg pb-2">INGREDIENT</p>
  //     <ul className="pl-5">
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient1}</p>
  //         <p>{item.strMeasure1 === "Dash" ? "" : item.strMeasure1}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient2}</p>
  //         <p>{item.strMeasure2}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient3}</p>
  //         <p>{item.strMeasure3}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient4}</p>
  //         <p>{item.strMeasure4}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient5}</p>
  //         <p>{item.strMeasure5 === "Dash" ? "" : item.strMeasure5}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient6}</p>
  //         <p>{item.strMeasure6}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient7}</p>
  //         <p>{item.strMeasure7}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient8}</p>
  //         <p>{item.strMeasure8}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient9}</p>
  //         <p>{item.strMeasure9}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient10}</p>
  //         <p>{item.strMeasure10}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient11}</p>
  //         <p>{item.strMeasure11}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient12}</p>
  //         <p>{item.strMeasure12}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient13}</p>
  //         <p>{item.strMeasure13}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient14}</p>
  //         <p>{item.strMeasure14}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient15}</p>
  //         <p>{item.strMeasure15}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient16}</p>
  //         <p>{item.strMeasure16}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient17}</p>
  //         <p>{item.strMeasure17}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient18}</p>
  //         <p>{item.strMeasure18}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient19}</p>
  //         <p>{item.strMeasure19}</p>
  //       </li>
  //       <li className="flex gap-8">
  //         <p>{item.strIngredient20}</p>
  //         <p>{item.strMeasure20}</p>
  //       </li>
  //     </ul>
  //     <p className="mt-4 text-headerBg font-bold">{item.strTags}</p>

  //     <div className="mt-10 sm:p-4">
  //       <p className="font-semibold text-headerBg pb-2">INSTRUCTIONS</p>
  //       <p className="pl-4">{item.strInstructions}</p>
  //     </div>
  //     <p className="font-bold text-neutral-700 mt-10">
  //       SOURCE:
  //       <span className="text-headerBg w-full pl-3">{item.strSource}</span>
  //     </p>
  //     <p className="font-bold text-neutral-700 mt-6">
  //       YOUTUBE:
  //       <span className="text-headerBg pl-3">{item.strYoutube}</span>
  //     </p>
  //     <div className="flex justify-end mr-8">
  //       <button
  //         onClick={handled}
  //         className="px-10 py-2 my-10 bg-headerBg rounded-md text-white"
  //       >
  //         Back
  //       </button>
  //     </div>
  //   </div>
  // </div>
  // );
}

export default RecipeDetails;
