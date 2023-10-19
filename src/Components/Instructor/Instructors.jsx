import React, { useEffect, useState } from "react";
import InstructCard from "./InstructCard";
import useCourse from "../hooks/useCourse";

const Instructors = () => {
    const [teachersData ,setTeachers]=useState([])
useEffect(()=>{
fetch('http://localhost:5000/teach')
.then(res=>res.json())
.then(data=>setTeachers(data))
},[])



  return (
    <div className=" pt-28 bg-white">
      <h1 className="font-extrabold border-b-4 rounded-l-3xl  rounded-r-3xl px-3 w-1/3 mx-auto border-yellow-500 text-2xl py-3 my-5 text-center">Our Experienced Teachers</h1>
     
        <div className="grid grid-cols-3 px-20 gap-16 py-10"> 
            {teachersData .map(tutor=><InstructCard key={tutor._id} tutor={tutor}/>)}
        </div>
        <h1 className="font-extrabold border-b-4 rounded-l-3xl  rounded-r-3xl px-3 w-1/3 mx-auto border-yellow-500 text-2xl py-3 my-5 text-center">Lets Go beyond limits</h1>
 <img src="https://clipart-library.com/images_k/business-people-transparent-background/business-people-transparent-background-10.png" className=" mx-auto w-3/4" />
 
    </div>
  );
};

export default Instructors;
