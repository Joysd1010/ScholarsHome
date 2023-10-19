import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";

const Popular = () => {
  const [CourseData, setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/course')
    .then(res=>res.json())
    .then(data=>setData(data))
},[])
  const classdata = CourseData.sort((a, b) => a.enrolled > b.enrolled);
  

  return (
    <div className="py-5 px-20">
      <h1 className="font-extrabold text-2xl py-3">
        All{" "}
        <span className="border-b-4 rounded-r-3xl pr-5  border-yellow-500">
          Popular Classes
        </span>
      </h1>


      <div className=" grid grid-cols-3 gap-8 py-10">
        {
            classdata.slice(0,6).map((course)=><CourseCard key={course._id} course={course} />)
        }
       
      </div>

    </div>
  );
};

export default Popular;
