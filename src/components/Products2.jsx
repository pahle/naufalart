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
    dots: false,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <section className="section xl:gap-20 gap-10 w-full">
      <div className="sectionInfo xl:w-1/3 w-full">
        <div className="flex mb-8">
          <h1 className="text-7xl pr-2">Our Products</h1>
          <p className="text-secondary text-xl">(03)</p>
        </div>
        <p className="2xl:text-xl text-lg text-justify">
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
              <h1 className="my-4 text-lg text-center">{product.name}</h1>
            </div>
          ))}
        </Slider>
        <hr className="border-t-2 2xl:w-[72%] xl:w-[68%] border-secondary/70 rounded-full -xl:hidden" />
      </div>
    </section>
  );
};

export default Products2;
