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
      className={`absolute z-20 xl:-bottom-3 -bottom-4 xl:right-48 right-[51%] w-6 h-6 cursor-pointer opacity-70`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const Products2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
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
          dots: true,
          nextArrow: "",
          prevArrow: "",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          nextArrow: "",
          prevArrow: "",
        },
      },
    ],
  };
  return (
    <section id="products" className="section mb-8 xl:gap-20 gap-10 w-full relative">
      {/* <div className="absolute opacity-10 2xl:-left-[340px] 2xl:-bottom-[149px] -left-24 -bottom-32">
        <h1 className="2xl:text-[280px] text-[200px]">
          Naufal Art
        </h1>
      </div> */}
      <div className="sectionInfo xl:w-1/3 w-full">
          <h1 className="text-7xl pr-2 mb-8">Our Products</h1>
        <p className="md:text-lg text-md text-justify text-secondary font-poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aliquam amet eos nostrum repudiandae tenetur
          est id vitae ducimus optio nihil.
        </p>
      </div>
      <div className="2xl:w-3/4 xl:w-2/3 w-full h-full 2xl:-mr-[420px] xl:-mr-48 relative pb-4">
        <Slider {...settings} className="relative">
          {products.map((product, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={product.image}
                alt="product"
                className="w-full xl:h-[350px] h-[250px] object-cover rounded-lg"
              />
              <h1 className="my-4 text-lg text-center text-secondary font-poppins">
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

export default Products2;
