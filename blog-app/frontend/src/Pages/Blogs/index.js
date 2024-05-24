import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import CategoriesList from "../../components/CategoryList";
import Footer from "../../components/Footer";

import "../../App.css";
import "./index.css";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
let blogPosts = data.blogPosts;
const categories = data.categories;

export default function BlogsPage() {

  const [categoryId, setCategoryId] = useState(undefined);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Week 1: Filter the blogPosts based on the categoryId
    const blogs = blogPosts.filter((x) =>
      categoryId !== undefined
        ? x.categories.find((y) => y.id.toString() === categoryId.toString())
        : true
    );
    setBlogs(() => blogs);
  }, [categoryId]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList 
              categories={categories} 
              categoryId={categoryId}
              setCategoryId={setCategoryId}>
          </CategoriesList>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}
