import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Pages/Home";
import BlogsPage from "./Pages/Blogs";


export default function App() {
  const HomePage = () => {
    return (
      <>
      <Home />
      </>
    );
  };
  return (
    <div>
      <HomePage />
      <BlogsPage />

    </div>
  );
}