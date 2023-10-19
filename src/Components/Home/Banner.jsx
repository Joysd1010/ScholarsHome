import React from "react";
import Slider from "./Slider";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
 
  const [text] = useTypewriter({
    words: [
      "Transform Your Sales and Marketing Expertise with Our Comprehensive Teaching Platform!",
      "Master Sales and Marketing with Our All-Inclusive Learning Hub!",
      "Discover Success through Our Extensive Sales and Marketing Training.",
      "Your Journey to Sales and Marketing Excellence Starts Here!",
      "Achieve Sales and Marketing Mastery with Our Dedicated Educational Resource.",
      "Join the Ranks of Sales and Marketing Titans with Our Premium Learning Experience.",
      "Your Gateway to Sales and Marketing Brilliance: Enroll Today.",
      "Harness the Power of Our Sales and Marketing Learning Ecosystem.",
    ],
    loop: {},
    
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  return (
    <div className="bg-white grid grid-cols-2  px-3 md:px-20 items-center bg-cover bg-[url('https://i.postimg.cc/28gWG4sW/Untitled-design-3.png')]" >
      <div>
        <h1 className=" font-bold text-3xl text-[#0170DC] py-3">
          Give an Extra boost to your Career
        </h1>
        <h1 className="font-extrabold text-5xl py-3">
          Unlock Your{" "}
          <span className="border-b-4 rounded-r-3xl pr-5 text-3xl  border-yellow-500">Full Potential</span>
        </h1>

        <h1 className="py-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-[#08315a]">
          {text}
          <span>
            <Cursor cursorStyle="." />
          </span>
        </h1>
      <Link to={'/course'}><button  className="my-3 hover:text-white   btn border-2 border-[#0170DC] hover:bg-[#0170DC]">
          Exprlore Courses
        </button></Link>
        
      </div>
      <Slider />
    </div>
  );
};

export default Banner;
