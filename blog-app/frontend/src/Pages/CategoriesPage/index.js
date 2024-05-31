import React,{useEffect, useState} from 'react';

import Heading from '../../components/Heading';
import Navbar from '../../components/Navbar';

import categoryService from '../../services/categoryService';
import CategoryList from '../../components/CategoryList';


export default function CategoriesPage() {
  const [categories, setCategories] = useState();


  useEffect(() => {

    const fetchCategories = async () =>{
      try{
        const categoriesRes = await categoryService.getCategories();
  
        setCategories(categoriesRes)
    
      } catch(err){
        console.log(err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        </div>
        <CategoryList categories={categories}/>
    </>
  )
}
