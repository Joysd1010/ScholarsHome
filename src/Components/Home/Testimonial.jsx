import React from "react";

const Testimonial = () => {
  return (
    <div className=" py-5">
    <h1 className="font-extrabold text-2xl py-3 px-20">
       What people say about
        <span className="border-b-4 rounded-r-3xl pr-3  border-yellow-500">
          Scholars Home
        </span>
    </h1>

        <div className=" px-20 gap-20 py-5 grid grid-cols-3">
            <div className="bg-yellow-100 rounded-xl p-5 text-center">
                <h1 className=" text-lg font-bold text-[#0170DC]">Best Tutor Support</h1>
                <p className=" text-xl font-thin">Very Experienced Teachers, they actually know what they need. Their instructors must be apriciated</p>
                <hr className="border-2 my-2 border-blue-500 opacity-40 rounded-full"/>
                <div className="font-bold py-3 flex items-center gap-3 hover:text-[#0170DC] ease-out duration-500">
                    <img src="https://b2606367.smushcdn.com/2606367/wp-content/uploads/2021/08/TWelsh_500px.png?lossy=1&strip=1&webp=1"  className="w-16 rounded-full border-4 border-x-[#0170DC] p-1" />
                    <h1>David Conway</h1>
                </div>
            </div>
            <div className="bg-yellow-100 rounded-xl p-5 text-center">
                <h1 className=" text-lg font-bold text-[#0170DC]">Best Tutor Support</h1>
                <p className=" text-xl font-thin">Very Experienced Teachers, they actually know what they need. Their instructors must be apriciated</p>
                <hr className="border-2 my-2 border-blue-500 opacity-40 rounded-full"/>
                <div className="font-bold py-3 flex items-center gap-3 hover:text-[#0170DC] ease-out duration-500">
                <img src="https://lookinwards.com/wp-content/uploads/2023/08/Untitled-500-%C3%97-750-px-500-%C3%97-500-px.png"  className="w-16 rounded-full border-4 border-x-[#0170DC] p-1" />
                    <h1>Shafiquzzaman Khan</h1>
                </div>
            </div>
            <div className="bg-yellow-100 rounded-xl p-5 text-center">
                <h1 className=" text-lg font-bold text-[#0170DC]">Proper Guideline</h1>
                <p className=" text-xl font-thin">I wanted to Place a review since they Proved their guidence proficiency. They provide the best career care to go more further.</p>
                <hr className="border-2 my-2 border-blue-500 opacity-40 rounded-full"/>
                <div className="font-bold py-3 flex items-center gap-3 hover:text-[#0170DC] ease-out duration-500">
                <img src="https://freepngimg.com/thumb/man/148155-standing-smiling-business-man-png-download-free-thumb.png"  className="w-16 rounded-full border-4 border-x-[#0170DC] p-1" />
                    <h1>Peter HandsComb</h1>
                </div>
            </div>
        </div>


    </div>
  );
};

export default Testimonial;
