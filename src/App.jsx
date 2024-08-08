import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import AppLayout from "./Pages/AppLayout";
import { ContextProvider } from "./Context";
import Menu from "./Pages/Menu";
import CreateRecipe from "./Pages/CreateRecipe";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/create",
        element: <CreateRecipe />,
      },
    ],
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
