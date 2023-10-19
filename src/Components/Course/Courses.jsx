import React, { useEffect, useState } from "react";

import CourseCard from "./CourseCard";
import { FaHandPointRight, FaUserCircle } from "react-icons/fa";
import useCourse from "../hooks/useCourse";

const Courses = () => {
    const [courseData, setData] = useState([]);
    const [instruct, setInstructData] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:5000/course")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setSelectCourse(data);
        });
    }, []);
    useEffect(() => {
      fetch("http://localhost:5000/teach")
        .then((res) => res.json())
        .then((data) => {
          setInstructData(data);
          
        });
    }, []);

    const filterTeacher = (id) => {
        
        setSelectCourse(courseData.filter((object) => object.teacherId === id));
      };

  
    const filterCategory = (parameter) => {
      setCurrentCategory(parameter);
      setSelectCourse(courseData.filter((object) => object.category === parameter));

    };
    console.log(selectCourse);
  

  return (
    <div className=" px-20 py-28 bg-white">
      <h1 className="font-extrabold border-b-4 rounded-l-3xl  rounded-r-3xl px-3 w-1/3 mx-auto border-yellow-500 text-2xl py-3 my-5 text-center">
        Enroll to your Desired Arena
      </h1>
      <div className=" gap-5 flex">
        <div className=" w-96 shadow-xl shadow-blue-100 p-5 rounded-xl">
          <h1 className=" text-2xl font-medium">Find By Category</h1>
          <hr className="border-1 border-slate-300 rounded-full mt-3 mb-5 " />
          {/* -----------------searching categories----------------------------------------- */}
          <div
            
            className="flex flex-col gap-2"
          >
            <div onClick={() => filterCategory("Sales")} className=" hover:border-b-2 hover:scale-105 duration-300 rounded-xl px-3 py-1 hover:border-[#0170DC] flex gap-2 items-center text-xl">
              <FaHandPointRight />
              <h1>Sales</h1>
            </div>
            <div onClick={() => filterCategory("Finance")} className=" hover:border-b-2 hover:scale-105 duration-300 rounded-xl px-3 py-1 hover:border-[#0170DC] flex gap-2 items-center text-xl">
              <FaHandPointRight />
              <h1>Finance</h1>
            </div>
            <div onClick={() => filterCategory("Market analysis")} className=" hover:border-b-2 hover:scale-105 duration-300 rounded-xl px-3 py-1 hover:border-[#0170DC] flex gap-2 items-center text-xl">
              <FaHandPointRight />
              <h1>Market analysis</h1>
            </div>
            <div  onClick={() => filterCategory("Marketing")}className=" hover:border-b-2 hover:scale-105 duration-300 rounded-xl px-3 py-1 hover:border-[#0170DC] flex gap-2 items-center text-xl">
              <FaHandPointRight />
              <h1>Marketing</h1>
            </div>
            <div onClick={() => filterCategory("Business management")} className=" hover:border-b-2 hover:scale-105 duration-300 rounded-xl px-3 py-1 hover:border-[#0170DC] flex gap-2 items-center text-xl">
              <FaHandPointRight />
              <h1>Business management</h1>
            </div>
          </div>
          <h1 className=" text-2xl font-medium pt-5 pb-2">Find By Instructor</h1>
          <hr className="border-1 border-slate-300 rounded-full mt-1 mb-5 " />
            <div className="flex flex-col gap-2">
                {
                    instruct.map((tutor)=><div onClick={()=>filterTeacher(tutor.teacherId)} key={tutor._id} className="hover:border-b-2 hover:scale-105 duration-300 rounded-xl px-3 py-1 hover:border-[#0170DC] flex gap-2 items-center text-xl">
                            <img src={tutor.image}  className="w-10 rounded-full"/> <h1>{tutor.teacherName}</h1>
                    </div>)
                }
            </div>
        </div>
        {
            selectCourse.length>0?<div className=" w-11/12 grid grid-cols-3 gap-10 ">
          {selectCourse.map((tutor) => (
            <CourseCard key={tutor._id} course={tutor} />
          ))}
        </div>:<h1 className="text-3xl font-semibold text-center mx-auto my-10">Sorry No Course Found</h1>
        }
        
       
      </div>
    </div>
  );
};

export default Courses;
