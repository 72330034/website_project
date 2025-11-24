import React from "react";
import { ItemsList } from "../data/ItemsList";
import Item from "../components/Item";
import "../styles/Category.css";

const Category = () => {
  return (
    <div className="category">
      <h1 className="categoryTitle">Our Category</h1>
      <div className="categoryList">
        {ItemsList.map((item, key) => {
          return (
            <Item
              key={key}
              image={item.image}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Category;