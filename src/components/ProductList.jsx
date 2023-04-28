import { useState, useEffect } from "react";
import { productlist } from "../constants";

const ProductList = () => {
  const [query, setQuery] = useState("");

  return (
    <section
      id="benefits"
      className="paddingY flexCenter flex-col"
    >
      <div className="flex flex-col items-center justify-center gap-5 md:mb-14 mb-8 w-full">
        <h1 className="2xl:text-7xl text-6xl">Products</h1>
        <div className="flex flex-row gap-5 w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-[#F2F2F2] rounded-lg px-4 py-2 w-full"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="min-h-screen">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-20 sm:gap-15 gap-10 ">
          {productlist
            .filter((product) =>
              product.name
                .toLowerCase()
                .includes(query.toLowerCase())
            )
            .map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl">
                      {product.name}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
