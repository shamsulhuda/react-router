import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Shop.css";

export default function Shop() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="products">
        <h2>Products: {products.length}</h2>
      </div>
    </div>
  );
}
