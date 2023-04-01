import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/Testimonials.module.css";
import img1 from "../../assets/testimonial-1.jpg";
import img2 from "../../assets/testimonial-2.jpeg";
import img3 from "../../assets/testimonial-3.jpeg";
import { FaQuoteLeft } from "react-icons/fa";
import { Zoom } from "react-reveal";

function Testimonials() {
  const data = [
    {
      _id: 1,
      author: "Adv Shamiul Islam",
      review:
        "I recently hired Saleh Ahmed for web development services and he exceeded my expectations. He was professional, efficient, and attentive to my needs. The end result was a beautiful and functional website that has helped me a lot.",
      img: img1,
      date: "05 December 2022",
    },
    {
      _id: 2,
      author: "Sabbir Ahmed",
      review:
        "I am extremely pleased with the web development services provided by Saleh Ahmed. He was professional, responsive, and delivered a stunning website that met all my business needs. I would highly recommend him to anyone looking for top-quality web development services.",
      img: img2,
      date: "15 January 2023",
    },
    {
      _id: 3,
      author: "Salman Farsi",
      review:
        "My expectations were surpassed by Saleh Ahemd's web building service. He created a great website that has aided in the expansion of my firm and was competent and responsive. I would strongly advise using his services if you require high-caliber web development.",
      img: img3,
      date: "05 August 2022",
    },
  ];
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div>
      <h3 className="font-bold text-2xl">Client Reviews</h3>
      <div className="flex w-[260px]">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <div className="my-10">
        <Zoom>
          <div ref={sliderRef} className="keen-slider">
            {data.map((d) => (
              <div>
                <div key={d._id} className="keen-slider__slide pt-7 pl-20">
                  <div className="border-2 border-[#444444] bg-[#282828] lg:p-5 rounded-md">
                    <img
                      className="w-20 rounded-full mt-[-20px] lg:mt-[-50px] ml-[-70px] z-40"
                      src={d.img}
                      alt=""
                    />
                    <div className="p-5">
                      <h4 className="text-sm italic text-[#D5D5D5]">
                        {d.review}
                      </h4>
                      <div className="flex mt-3">
                        <FaQuoteLeft className="text-[#454545]" />
                        <div className="ml-5">
                          <p className="font-bold text-sm text-[#E5E5E5]">
                            {d.author}
                          </p>
                          <p className="text-xs text-[#969696]">
                            Date: {d.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Testimonials;
