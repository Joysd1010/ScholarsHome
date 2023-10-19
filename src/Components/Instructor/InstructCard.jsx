import React, { useState } from 'react';
import useCourse from '../hooks/useCourse';
import { BsJournalBookmark } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";


const InstructCard = ({tutor}) => {
    const {teacherId,image,teacherName,degree,enrolled, course}=tutor
   
    const [mouse, setMouse] = useState(false);
    const enter = () => {
      setMouse(true);
    };
    const leave = () => {
      setMouse(false);
    };


    return (
        <div>
            <div onMouseEnter={enter} onMouseLeave={leave} className=' rounded-2xl shadow-xl shadow-blue-200 overflow-hidden p-5 text-center flex flex-col gap-4'>
                <div className=' overflow-hidden w-52 mx-auto rounded-full border-2 border-blue-600 '>
                    <img src={image} className={`${mouse ? "scale-110" : ""} p-2 duration-500 rounded-full`}/>
                </div>
                
                <h1 className='font-bold text-xl'>{teacherName}</h1>
                <h1 className='font-thin text-[#0170DC] text-md'>{degree}</h1>
                <div className=' flex items-center justify-between'>
                    <div className='flex gap-1 items-center'>
                        <BsJournalBookmark/>
                        <p>Total Courses : {course}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <BiSolidUser/>
                        <p>Total enrolled: {enrolled}</p>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default InstructCard;