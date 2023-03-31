import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/Testimonials.module.css";
import img1 from "../../assets/testimonial-1.jpg";
import img2 from "../../assets/testimonial-2.jpg";
import img3 from "../../assets/testimonial-3.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { Zoom } from "react-reveal";

function Testimonials() {
  const data = [
    {
      _id: 1,
      author: "Gary Johnson",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus magnam voluptas pariatur ipsa eum ab!",
      img: img1,
    },
    {
      _id: 2,
      author: "Daniel Pringle",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus magnam voluptas pariatur ipsa eum ab!",
      img: img2,
    },
    {
      _id: 3,
      author: "Billy Adam",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus magnam voluptas pariatur ipsa eum ab!",
      img: img3,
    },
  ];
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div>
      <h3 className="font-bold text-2xl">Testimonials</h3>
      <div className="flex w-[180px]">
        <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
        <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
      </div>
      <div className="my-10">
        <div ref={sliderRef} className="keen-slider">
          {data.map((d) => (
            <Zoom>
              <div key={d._id} className="keen-slider__slide pt-7 pl-20">
                <div className="border-2 border-[#444444] bg-[#282828] lg:p-5 rounded-md">
                  <img
                    className="w-20 rounded-full mt-[-50px] ml-[-70px] z-40"
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
                          Date: 31 March 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
