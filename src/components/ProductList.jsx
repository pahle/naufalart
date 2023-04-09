import { useState, useEffect } from "react";
import { productlist } from "../constants";

const ProductList = () => {
  return (
    <section
      id="benefits"
      className="paddingY flexCenter flex-col"
    >
      <div className="w-full flex justify-between items-center md:mb-14 mb-8">
        <h1 className="2xl:text-7xl text-6xl">Products</h1>
        <p>Search bar</p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-20">
        {productlist.map((product) => {
          return (
            <div className="flex flex-col gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg object-cover"
              />
              <div className="flex flex-col gap-2">
              <h1 className="text-xl">
                {product.name}
              </h1>
              <p className="text-md">{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
