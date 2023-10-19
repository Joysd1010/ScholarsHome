import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { BiLocationPlus, BiLogoGmail} from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  bg-[#E6E6FA]">
      <div className="px-3 md:px-10 py-2 items-start grid gap-3 md:grid-cols-3">
        {/* -------------------------------------Logo part of footer ------------------------------------ */}
        <div className=" w-64 md:w-96">
          <div className="flex hover:text-[#0170DC] items-center gap-3">
            <img
              className=" w-20"
              src="https://i.postimg.cc/hG7g2V1b/scholars-HOme.png"
              alt="logo"
            />{" "}
            <h1 className=" text-2xl font-semibold">Scholars Home</h1>
          </div>
          <div>
            <p className="text-[#676667] hover:text-[#0170DC]"> Transforming Dreams into Sales and Marketing Success Stories </p>
         
          </div>
          <div className=" py-5 flex gap-1 items-center">
            <BsFacebook className=" p-2 bg-[#0170DC] text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:-translate-y-5  hover:border-2 hover:border-blue-900 " />
            <BsInstagram className=" p-2 bg-[#0170DC] text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:-translate-y-5   hover:border-2 hover:border-blue-900 " />
            <BsTwitter className=" p-2 bg-[#0170DC] text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:-translate-y-5   hover:border-2 hover:border-blue-900 " />
            <BsLinkedin className=" p-2 bg-[#0170DC] text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:-translate-y-5   hover:border-2 hover:border-blue-900 " />
          </div>
        </div>
        {/* -------------------------------------Link part of footer ------------------------------------ */}
        <div className=" md: pt-5">
          <h1 className=" text-2xl font-semibold">Important Links</h1>
          <div className="text-base flex flex-col gap-3 text-[#676667]">
            <NavLink className={`hover:translate-x-2 duration-300 hover:text-[#0170DC]`} to={"/"}>Home </NavLink>
            <NavLink className={`hover:translate-x-2 duration-300 hover:text-[#0170DC]`} to={"toy"}>Courses </NavLink>
            <NavLink className={`hover:translate-x-2 duration-300 hover:text-[#0170DC]`} to={"contact"}>Instructor </NavLink>
            <NavLink className={`hover:translate-x-2 duration-300 hover:text-[#0170DC]`} to={"contact"}>Blog </NavLink>
          </div>
        </div>
        {/* ----------------Contact us part of the footer------------------- */}
        <div className="flex flex-col gap-3 md:pt-5"> 
        <h1 className=" text-2xl font-semibold">GET IN TOUCH</h1>
          <div className=" flex hover:text-[#0170DC] items-center gap-2"><BiLogoGmail  size={25}/>info@scholarshome.com</div>
          <div className=" flex hover:text-[#0170DC] items-center gap-2"><BiLocationPlus  size={25}/>123 Street, City, Country</div>
          <div className=" flex hover:text-[#0170DC] items-center gap-2"><BsFillTelephoneFill size={25}/>123-456-7890</div>
        
        </div>
      </div>
      <h1 className=" text-center text-sm py-2 text-white bg-[#21123c]">
        © 2023 made by Joy Sutradhar ❤️
      </h1>
    </div>
  );
};

export default Footer;
