import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home/Home";
import Form from "./pages/Form/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  { path: "/form", element: <Form /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
