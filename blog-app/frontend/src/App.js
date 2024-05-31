import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Pages/Home";
import BlogsPage from "./Pages/Blogs";
import CategoriesPage from "./Pages/CategoriesPage";
import BlogPage from "./Pages/Blog";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const routes = [
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/home",
    element: <Home />,
  },
  { path:"/categories",
    element:<CategoriesPage />,
  },
  { path:"/categories/:categoryId",
  element:<CategoriesPage />,
},
{
  path: "/blogs/:categoryId?",
  element: <BlogsPage />,
},
{
  path: "/blog/:blogId",
  element: <BlogPage />,
},
];

const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />;

};

export default App;