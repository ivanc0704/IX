import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, reset as resetBlog } from "../../features/blogSlice";
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

export default function HomePage() {
  const dispatch = useDispatch();

  const {
    blogs,
    isError: isBlogsError,
    isSuccess: blogsSuccess,
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
    dispatch(fetchCategories());
    dispatch(fetchBlogs());
    return () => {
      dispatch(resetBlog());
      dispatch(resetCategory());
    };
  }, [dispatch]);

  if (isLoadingCategories || isLoadingBlogs) {
    return <div>Loading...</div>;
  }

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
      <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
        <Toast
          bg="danger"
          onClose={() => {}}
          autohide
          show={isCategoriesError || isBlogsError}
          delay={5000}
        >
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body style={{ color: "white" }}>
            {categoriesMessage || blogsMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
