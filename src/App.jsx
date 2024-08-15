import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import AppLayout from "./Pages/AppLayout";
import { ContextProvider } from "./Context";
import Menu from "./Pages/Menu";
import CreateRecipe from "./Pages/CreateRecipe";
import NotFound from "./Pages/NotFound";
import NewRecipe from "./Pages/NewRecipe";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "menu/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/",
        element: <NewRecipe />,
      },
      {
        path: "/create",
        element: <CreateRecipe />,
      },
      {
        path: "*",
        element: <NotFound />,
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
