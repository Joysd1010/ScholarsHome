import React, { useEffect, useState } from 'react';

const useCourse = () => {

    const [CourseData, setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/course')
    .then(res=>res.json())
    .then(data=>setData(data))

          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
      
    // console.log(Product)

    return [CourseData];
};

export default useCourse;