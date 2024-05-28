import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";

export default function BlogPage() {
  const { blogId } = useParams();

  console.log(blogId);

  function printHello(){
    console.log("Hello")
  }

  function printHI(){
    console.log("HI")
    printHello()
  }

  function printThere(){
    setTimeout(() =>{
      console.log("There")
    },0);
  }

  function printIX(){
    console.log("IX")
  }

  printHI()
  printThere()
  printIX()


  return <>
  <Navbar />
  <div>TODO Build the read blog page</div>;
  </>
}
