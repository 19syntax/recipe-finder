// import { useRecipe } from "../Context";
import CreateUser from "./CreateUser";
// import { data } from "autoprefixer";

function Home() {
  // const { state } = useRecipe();
  // const { username } = state;

  return (
    <>
      {/* {username === "" ? */}
      <CreateUser />
      {/* : <button>Continue {username}</button>} */}
    </>
  );
}
export default Home;
