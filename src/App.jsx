import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import AppLayout from "./Pages/AppLayout";
import { ContextProvider } from "./Context";
import Menu from "./Pages/Menu";
import CreateRecipe from "./Pages/CreateRecipe";
import NotFound from "./Pages/NotFound";
import NewRecipe from "./Pages/NewRecipe";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyRecipe from "./Pages/MyRecipe";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
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
        path: "/new",
        element: <NewRecipe />,
      },
      {
        path: "/create",
        element: <CreateRecipe />,
      },
      {
        path: "myrecipe",
        element: <MyRecipe />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
