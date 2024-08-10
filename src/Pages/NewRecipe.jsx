import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function NewRecipe() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="w-70 sm:w-3/4 float-right mr-0 sm:mr-16 mt-24 border">
        <input type="text" placeholder="Enter your new recipe name" />
        <input type="file" name="img" id="" />
        <textarea name="" placeholder="Describe the steps" id=""></textarea>
      </div>
    </>
  );
}

export default NewRecipe;
