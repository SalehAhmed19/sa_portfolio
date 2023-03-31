import React from "react";
import { MdOutlinePhonelinkRing, MdOutlineShareLocation } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };
  return (
    <div className="mb-10">
      <div className="p-14 bg-[#252525] border-t-2 border-b-2 border-[#333333] px-5 lg:px-14">
        <h2 className="text-4xl font-bold">Contact</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14503.577679225504!2d89.4227511253109!3d24.661762246915785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb30161406029%3A0xcfc7e623847244c6!2sBogra%2C%20Sherpur!5e0!3m2!1sen!2sbd!4v1680275582392!5m2!1sen!2sbd"
        width="100%"
        style={{ border: 0 }}
        className="mb-10"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="px-5 lg:px-14 flex flex-col lg:flex-row">
        <div>
          <div className="flex my-8">
            <MdOutlinePhonelinkRing className="text-3xl text-[#007CED]" />
            <div className="ml-5">
              <h4 className="font-bold">(+880) 1745 880048</h4>
              <p className="text-sm text-[#D5D5D5]">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
                Voluptas, repellendus.
              </p>
            </div>
          </div>
          <div className="flex my-8">
            <MdOutlineShareLocation className="text-3xl text-[#007CED]" />
            <div className="ml-5">
              <h4 className="font-bold">Bogra, Bangladesh</h4>
              <p className="text-sm text-[#D5D5D5]">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
                Voluptas, repellendus.
              </p>
            </div>
          </div>
          <div className="flex my-8">
            <SiMinutemailer className="text-3xl text-[#007CED]" />
            <div className="ml-5">
              <h4 className="font-bold">saleh.ahmed.mahin@gmail.com</h4>
              <p className="text-sm text-[#D5D5D5]">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
                Voluptas, repellendus.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-10 w-full">
          <h3 className="font-bold text-2xl">How can I help you?</h3>
          <div className="flex w-[270px] mb-5">
            <div className="h-[2px] bg-[#007CED] w-[20%] rounded-l-xl"></div>
            <div className="h-[2px] bg-[#353535] w-[80%] rounded-r-xl"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row w-full">
              <div className="lg:w-1/2 flex flex-col">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent p-2 border-2 border-[#555555] rounded-md w-full"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent p-2 border-2 border-[#555555] rounded-md my-3 w-full"
                />
                <input
                  required
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent p-2 border-2 border-[#555555] rounded-md block w-full"
                />
              </div>
              <div className="lg:ml-5 lg:w-1/2 lg:my-0 my-5">
                <textarea
                  placeholder="Your Message"
                  className="bg-transparent p-2 border-2 border-[#555555] rounded-md w-full h-full"
                  type="text"
                />
              </div>
            </div>
            <button
              type="submit"
              className="border-2 border-[#007CED] rounded-full py-2 px-6 my-5 shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
