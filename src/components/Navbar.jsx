import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap border-red-100 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="Logo" class="fill-current" />
      </div>
    </nav>
  );
};

export default Navbar;
