import React from "react";
import Slider from "react-slick";
import { testimonials } from "../constants";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaBeer } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="paddingY">
      <div className="w-full flex justify-center mb-6">
        <h1 className="2xl:text-7xl text-5xl pr-2">
          Testimonials
        </h1>
        <p className="text-secondary text-xl">(05)</p>
      </div>
      <div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-80 shadow-sm bg-transparent rounded-xl p-4">
              <div className="flex flex-col justify-between items-center h-full text-center">
                <p className="text-lg">" {testimonial.description} "</p>
                <div className="text-center">
                  <h1 className="text-xl">{testimonial.name}</h1>
                  <p className="text-secondary">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
