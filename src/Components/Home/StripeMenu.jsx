import React from 'react';
import { PiCertificateLight } from "react-icons/pi";
import { FaHeadSideVirus } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { GiTeamIdea } from "react-icons/gi";


const StripeMenu = () => {
    return (
        <div className=' px-20 my-4 py-5 bg-[#0170DC]'>
            <div className='grid grid-cols-4  gap-8'>
                <div className='flex gap-3 items-center'>
                    <FaHeadSideVirus className='  font-semibold text-white' size={60}/>
                    <h1 className=' text-xl font-semibold text-white'>Learn The Essential Skills</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <PiCertificateLight className='  font-semibold text-white' size={60}/>
                    <h1 className=' text-xl font-semibold text-white'>Earn Certificates And Degrees</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <IoSchoolSharp className='  font-semibold text-white' size={60}/>
                    <h1 className=' text-xl font-semibold text-white'>Get Ready for The Next Career</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <GiTeamIdea className='  font-semibold text-white' size={60}/>
                    <h1 className=' text-xl font-semibold text-white'>Master at Different Areas</h1>
                </div>
                

            </div>
            
        </div>
    );
};

export default StripeMenu;