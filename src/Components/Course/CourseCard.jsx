import React, { useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { BsFillBasketFill } from "react-icons/bs";
import { BiExpand } from "react-icons/bi";

const CourseCard = ({ course }) => {
  const [mouse, setMouse] = useState(false);
  const enter = () => {
    setMouse(true);
  };
  const leave = () => {
    setMouse(false);
  };

  const {
    price,
    courseName,
    teacherName,
    language,
    category,
    rating,
    reviews,
    lectureNumber,
    enrolled,
    image,
  } = course;

  function calculateAverageRating(rating) {
    let sum = 0;
    let count = 0;

    rating.forEach((ratingObj) => {
      for (const key in ratingObj) {
        const value = ratingObj[key];
        sum += parseInt(key) * value;
        count += value;
      }
    });

    if (count === 0) {
      return 0;
    }

    const average = sum / count;

    return average;
  }

  const averageRating = calculateAverageRating(rating);

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      className=" overflow-hidden rounded-xl bg-blue-50 shadow-xl max-h-96"
    >
      <div className=" overflow-hidden">
<img src={image} className={`${mouse ? "scale-110" : ""} duration-500`} />
      </div>
      
      <div className="py-2 ">
        <div className=" flex items-center px-5 text-gray-500 text-center justify-between">
          {" "}
          <h1 className="p-2 rounded-xl bg-blue-100 text-sm font-thin w-auto">
            {category}
          </h1>
          <h1 className="p-2 rounded-xl bg-blue-100 text-sm w-auto">
            {language}
          </h1>
        </div>
        <h1 className="px-5 py-2 font-bold text-xl ">{courseName}</h1>

        <div className="flex justify-between items-center">
          <div>
            <div>
              <h1 className="px-5  text-sm text-[#0170DC] ">{teacherName}</h1>
              <h1 className="px-5 text-lg font-bold ">$ {price}</h1>
            </div>

            <div className="px-5 flex gap-3 items-center">
              <Rating
                className="text-2xl"
                placeholderRating={averageRating}
                readonly
                emptySymbol={<FaRegStar color="E57C23" />}
                placeholderSymbol={<FaStar color="E57C23" />}
                fullSymbol={<FaStarHalf color="E57C23" />}
              />
              <p>({reviews.length})</p>
            </div>
          </div>
          <div className="px-5 flex flex-col gap-5">
            <BsFillBasketFill size={25} className="hover:scale-125 hover:text-[#0170DC]  duration-700" />
            <BiExpand size={25} className="hover:scale-125 duration-700 hover:text-[#0170DC]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
