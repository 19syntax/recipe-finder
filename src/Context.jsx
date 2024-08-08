import { createContext, useContext, useEffect, useReducer } from "react";

const Context = createContext();

const initialState = {
  input: "",
  username: "",
  meals: [],
  error: "",
  isLoading: false,
  detail: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "inputData":
      return {
        ...state,
        input: action.payload,
      };
    case "userData":
      return {
        ...state,
        username: action.payload,
      };
    case "mealData":
      return {
        ...state,
        meals: action.payload,
      };
    case "errorData":
      return {
        ...state,
        error: action.payload,
      };
    case "initialErrorData":
      return {
        ...state,
        error: initialState.error,
      };
    case "loadingData":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "detailData":
      return {
        ...state,
        detail: action.payload,
      };
    default:
      throw new Error("Action unknown");
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handClicked(e) {
    e.preventDefault();
    dispatch({ type: "loadingData" });
  }

  function handleDetails(item) {
    dispatch({ type: "detailData", payload: item });
  }
  useEffect(() => {
    async function fetchMeals() {
      try {
        dispatch({ type: "initialErrorData" });
        const res = await fetch(
          `https://themealdb.com/api/json/v1/1/search.php?s=${state.input}`
        );
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        const mealsArray = data.meals ? Object.values(data.meals) : [];
        dispatch({ type: "mealData", payload: mealsArray });
      } catch (err) {
        dispatch({ type: "errorData", payload: err.message });
      } finally {
        dispatch({ type: "loadingData" });
      }
    }
    fetchMeals();
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        handClicked,
        handleDetails,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useRecipe() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useRecipe must be used within a ContextProvider");
  }
  return context;
}

export { ContextProvider, useRecipe };
