import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { useMutation } from "@tanstack/react-query";

function NewRecipe() {
  const mutation = useMutation((newPost) =>
    fetch("http://localhost:5000/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
  );

  const [formData, setFormData] = useState({
    recipeName: "",
    recipeDescription: "",
    ingredientList: [],
  });
  const [ingredient, setIngredient] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    const newObj = { ...formData, [event.target.name]: event.target.value };
    setFormData(newObj);
  }

  function handleAdd(e) {
    e.preventDefault();
    setIngredient([...ingredient, input]);
    setInput("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFormData((item) => ({
      ...item,
      ingredientList: [...item.ingredientList, ...ingredient],
    }));
    // mutation.mutate(formData);
    if (formData.ingredientList.length) console.log(formData);
  }
  return (
    <>
      <Header />
      <Sidebar />
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-70 sm:w-3/4 py-8 px-4 float-right mr-0 sm:mr-16 mt-16 md:mt-24 shadow-lg"
      >
        <h1 className="text-center font-bold text-2xl text-headerBg pb-3">
          Create a New Meal
        </h1>
        <div className="flex flex-col md:flex-row gap-3 py-3 md:items-center">
          <label>Name of the recipe: </label>
          <input
            className="w-full border p-2 md:w-1/2 outline-headerBg"
            type="text"
            name="recipeName"
            placeholder="Enter your new recipe name"
            value={formData.recipeName}
            onChange={handleChange}
          />
        </div>

        <div className="py-3">
          <label>Choose a new image file: </label>
          <input type="file" name="img" id="" />
        </div>
        <div className="flex flex-col md:flex-row gap-3 py-3">
          <label>Enter your recipe description: </label>
          <textarea
            className="border w-full md:w-200 h-72 p-2 outline-headerBg"
            name="recipeDescription"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the steps"
            id=""
          ></textarea>
        </div>
        <div className="py-3">
          <label>List out your ingredient:</label>
          <div className="flex gap-4">
            <input
              className="border px-2 py-1 outline-headerBg"
              type="text"
              placeholder="Enter your ingredients"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name=""
              id=""
            />

            <button
              disabled={!input}
              className="bg-headerBg py-1 px-6 rounded-md hover:opacity-85 text-white"
              onClick={handleAdd}
            >
              Enter
            </button>
          </div>
          <ul className="py-3 list-disc ml-5">
            {ingredient.map((item) => (
              <li key={item.id}>{item}</li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-headerBg py-3 rounded-md text-white font-bold hover:opacity-80">
          Add Meal
        </button>
      </form>
    </>
  );
}

export default NewRecipe;
