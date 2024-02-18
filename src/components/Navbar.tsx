import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between m-5 text-2xl">
      <div>{"{ sudhanshu }"}</div>
      <div className="flex">
        <div className="logo">
          <MdAlternateEmail />
        </div>
        <div className="logo">
          <FaGithub />
        </div>
        <div className="logo">
          <FaLinkedin />
        </div>
        <div className="logo">
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
