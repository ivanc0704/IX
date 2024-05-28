import React,{useEffect, useState} from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";
import blogService from "../../services/blogService";




export default function HomePage() {

  const [blogs, setBlogs] = useState();


  useEffect(() => {

    const fetchBlogs = async () =>{
      try{
        const blogsRes = await blogService.getBlogs();
  
        setBlogs(blogsRes)
    
      } catch(err){
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs} />
        <CategoryList categories={[]}/>
        <Footer />
      </div>
    </>
  );
}
