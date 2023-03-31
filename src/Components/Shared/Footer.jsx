import React from "react";

function Footer() {
  return (
    <div className="bg-[#282828] p-5 border-t-2 border-[#444444] flex justify-between">
      <div className="flex text-sm text-[#8E8E8E]">
        <a href="https://www.linkedin.com/in/salehahmedmahin/" className="mx-5">
          Linked In
        </a>
        <a href="https://www.facebook.com/saleh.ahmed.mahin/" className="mx-5">
          Facebook
        </a>
        <a href="https://github.com/SalehAhmed19" className="mx-5">
          GitHub
        </a>
      </div>
      <div>
        <p className="text-[#8E8E8E]">&copy; 2023 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
