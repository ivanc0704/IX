import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CategoryList({ categories }) {
  const navigate = useNavigate();

  return (
    <div className="category-list">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            onClick={() => {
              navigate("/blogs/" + category.id);
            }}
          >
          </div> 
        );
      })}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};
