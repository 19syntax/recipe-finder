import Sidebar from "../component/Sidebar";

function MyRecipe() {
  return (
    <>
      <Sidebar />
      <div className="w-70 sm:w-3/4 float-right mr-0 sm:mr-16 mt-24">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </>
  );
}

export default MyRecipe;
