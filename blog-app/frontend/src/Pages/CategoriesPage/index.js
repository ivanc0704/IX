import React from 'react';

import Heading from '../../components/Heading';
import Navbar from '../../components/Navbar';

import CategoriesList from '../../components/CategoryList';

const data = require("../../dummy-data.json");
const categories = data.categories;

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        </div>
        <CategoriesList
            categories={categories}
            ></CategoriesList>
    </>
  )
}
