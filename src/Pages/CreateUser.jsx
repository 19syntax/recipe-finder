import { useNavigate } from "react-router-dom";
import { useRecipe } from "../Context";

function CreateUser() {
  const navigate = useNavigate();
  const { state, dispatch } = useRecipe();
  const { username } = state;

  function handleSubmit(e) {
    e.preventDefault();
    if (username) return navigate("/menu");
    console.log(username);
  }

  function handleChange(e) {
    dispatch({ type: "userData", payload: e.target.value });
  }
  return (
    <div className="w-4/5 mx-auto text-center flex flex-col items-center justify-center h-screen">
      <h1 className="sm:text-2xl text-base">
        Kick-start your cooking journey with your own recipe
      </h1>
      <p className="sm:text-lg text-sm mt-3">
        Welcome!👋 Please start by telling us your name
      </p>
      <form className="flex flex-col gap-5">
        <input
          className="border mt-5 w-80 py-2 px-2 rounded-lg"
          placeholder="Enter your name"
          value={username}
          onChange={handleChange}
          type="text"
        />

        <button
          onClick={handleSubmit}
          className={
            username ? `bg-headerBg py-2 rounded-full text-white` : "hidden"
          }
        >
          Start creating your own style
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
