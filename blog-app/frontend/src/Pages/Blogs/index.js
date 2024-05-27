import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import "../../App.css";
import "./index.css";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const blogPosts = data.blogPosts;
const categories = data.categories;

export default function BlogsPage() {


    const [blogs,setBlogs] = useState(blogPosts);
    const [categoryId, setCategoryId] = useState();



    useEffect(() => {

        setBlogs(blogPosts);

        if (categoryId) {
            const filterBlogs = blogPosts.filter((blog) => {
                return blog.categories.some((category) => category.id === categoryId);
            });
            setBlogs(filterBlogs);
        }
    }, 
    [categoryId]
);


    const CategoriesList = ({categoryId}) => {
        return categories.map((category) => {
            return categoryId === category.id ? (
                <button
                key = {category.id}
                onClick = { () => setCategoryId(category.id)}
                style = {{color:"blue"}}
                >
                    <p key = {category.id}>{category.title}</p>
                </button>
            ) : (
                <button
                key={category.id}
                onClick={() => setCategoryId(category.id)}
                style= {{color:"black"}}
                >
                    <p key = {category.id}>{category.title}</p>
                </button>
            );
        });
    };



  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList 
              categoryId={categoryId}>
  
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
