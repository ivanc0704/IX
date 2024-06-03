import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import BlogsPage from "./Pages/Blogs";
import BlogPage from "./Pages/Blog";
import CategoriesPage from "./Pages/Categories";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/blogs/:categoryId?",
    element: <BlogsPage />,
  },
  {
    path: "/blog/:blogId",
    element: <BlogPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
