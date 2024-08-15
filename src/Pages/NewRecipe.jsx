import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function NewRecipe() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="w-70 sm:w-3/4 float-right mr-0 sm:mr-16 mt-24 border">
        <div>
          <label>Name of Recipe</label>
          <input
            className="border rounded-md p-2"
            type="text"
            placeholder="Enter your new recipe name"
          />
        </div>
        <input className="my-4" type="file" name="img" id="" />

        <div>
          <label>Enter your ingredient</label>
          <input type="text" placeholder="Enter all the ingredient" />
        </div>
        <button type="submit">S</button>
      </div>
    </>
  );
}

export default NewRecipe;
