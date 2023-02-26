import React from "react";
import { products } from "../constants";

const Products = () => {
  return (
    <section id="products" className="paddingY">
      <div className="w-full flex md:mb-14 mb-8">
        <h1 className="text-7xl">Our Products</h1>
        <p className="text-secondary text-xl">(03)</p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
        {products.map((product, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt="product"
              className=" aspect-square object-cover"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-40 ease-in-out duration-500 bg-black hover:opacity-0">
              <h1
                className="text-white md:text-2xl text-xl text-center absolute
                 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                {product.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
