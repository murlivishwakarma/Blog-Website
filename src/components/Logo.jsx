import React from "react";
import logo from ".../public/Logo.jpeg";
function Logo({ width = "150px" }) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ width, height: "auto" }}
    >
      <img
        src={logo} // Replace with your image path
        alt="Logo"
        className="object-contain w-full  rounded-full h-auto"
        style={{ maxWidth: width }}
      />
    </div>
  );
}

export default Logo;
