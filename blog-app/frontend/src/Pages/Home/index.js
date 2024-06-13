import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, reset as resetBlog } from "../../features/blogsSlice";
import {
  fetchCategories,
  reset as resetCategory,
} from "../../features/categoriesSlice";

import { Toast, ToastContainer } from "react-bootstrap";

import "../../App.css";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoriesList";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loading from "../../components/Loading";


export default function HomePage() {
  const dispatch = useDispatch();

  const {
    blogs,
    isError: isBlogsError,
    isSuccess: isBlogsSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);

  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchBlogs());
        dispatch(fetchCategories());
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);


  if (isLoadingCategories || isLoadingBlogs) {
    return <Loading />;
  }
  console.log(blogs)

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
      <SuccessToast
        show={isBlogsSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
    </>
  );
}
