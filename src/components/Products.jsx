import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="./icons/arrowright.svg"
      alt="arrowright"
      className={`absolute z-20 xl:-bottom-3 -bottom-4 xl:right-40 right-[42%] w-6 h-6 cursor-pointer opacity-70`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="./icons/arrowleft.svg"
      alt="arrowleft"
      className={`absolute z-20 xl:-bottom-3 -bottom-4 xl:right-48 right-[51%] w-6 h-6 cursor-pointer opacity-70`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          extArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <section
      id="products"
      className="section mb-8 xl:gap-20 gap-10 w-full relative"
    >
      <div className="sectionInfo xl:w-1/3 w-full">
        <h1 className="text-7xl pr-2 mb-8">Our Products</h1>
        <p className="md:text-lg text-md text-justify text-secondary">
          Terdapat berbagai macam produk yang kami tawarkan,
          mulai dari meja, kursi, cermin, dan lain-lain.
          Kami juga menerima pesanan custom sesuai dengan
          keinginan anda.
        </p>
      </div>
      <div className="2xl:w-3/4 xl:w-2/3 w-full h-full 2xl:-mr-[420px] xl:-mr-48 relative pb-4">
        <Slider {...settings} className="relative">
          {products.map((product, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full xl:h-[350px] h-[250px] object-cover rounded-lg"
              />
              <h1 className="my-4 text-lg text-center text-secondary">
                {product.name}
              </h1>
            </div>
          ))}
        </Slider>
        <div className="flex">
          <hr className="border-t-2 2xl:w-[36%] xl:w-[34%] border-secondary/100 rounded-full -xl:hidden" />
          <hr className="border-t-2 2xl:w-[36%] xl:w-[34%] border-secondary/70 rounded-full -xl:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Products;
