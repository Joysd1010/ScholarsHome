import axios from "axios";
import React, { useState } from "react";
import { BsBarChartFill } from "react-icons/bs";
import { FcAdvertising ,FcManager,FcCurrencyExchange} from "react-icons/fc";
import { TbFileAnalytics,TbSocial } from "react-icons/tb";

const Categories = () => {
  

  
  

  return (
    <div className=" py-5 px-20">
      <h1 className="font-extrabold text-2xl py-3">
        All top{" "}
        <span className="border-b-4 rounded-r-3xl pr-5  border-yellow-500">
          Categories
        </span>
      </h1>
      <div className="grid grid-cols-3 py-3 gap-10">
        <div  className=" flex items-center gap-3 rounded-md  shadow-xl shadow-blue-300 p-4">
          <FcAdvertising  size={35}/>
          <div>
            <h1 className=" text-xl font-semibold">Marketing</h1>
            <h1>Total Course: 2</h1>
          </div>
        </div>
        <div className=" flex items-center gap-3 rounded-md  shadow-xl shadow-blue-300 p-4">
          <FcManager  size={35}/>
          <div>
            <h1 className=" text-xl font-semibold">Business management</h1>
            <h1>Total Course: 1</h1>
          </div>
        </div>
        <div className=" flex items-center gap-3 rounded-md  shadow-xl shadow-blue-300 p-4">
          <TbFileAnalytics  size={35}/>
          <div>
            <h1 className=" text-xl font-semibold">Market analysis</h1>
            <h1>Total Course: 3</h1>
          </div>
        </div>
        <div className=" flex items-center gap-3 rounded-md  shadow-xl shadow-blue-300 p-4">
          <TbSocial  size={35}/>
          <div>
            <h1 className=" text-xl font-semibold">Digital marketing</h1>
            <h1>Total Course: 4</h1>
          </div>
        </div>
        <div className=" flex items-center gap-3 rounded-md  shadow-xl shadow-blue-300 p-4">
          <FcCurrencyExchange size={35} />
          <div>
            <h1 className=" text-xl font-semibold">Finance</h1>
            <h1>Total Course: 3</h1>
          </div>
        </div>
        <div className=" flex items-center gap-3 rounded-md shadow-xl shadow-blue-300 p-4">
          <BsBarChartFill size={35} />
          <div>
            <h1 className=" text-xl font-semibold">Sales</h1>
            <h1>Total Course: 5</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
