import axios from "axios";
import React, { useContext, useState } from "react";
import { GoSearch } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { GiSplitCross } from "react-icons/gi";
import { ImMenu } from "react-icons/im";
import AuthContext from '../../Provider/AuthProvider';
import { BsFillBasketFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Header = () => {

    const { user, logOut } = useAuth
    const logged=false

  const [CourseData, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [mouse, setMouse] = useState(false);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/course");
    setData(response.data);
  };
  fetchData();
  const handlefocus = () => {
    setSearch(true);
  };

  const enter = () => {
    setMouse(true);
  };
  const leave = () => setMouse(false);
  const handleBlur = () => {
    setTimeout(() => {
      setSearch(false);
    }, 200);
  };
  const navigate = useNavigate();

  const navigateToDetail = (_id) => {
    navigate(`/detail/${_id}`);
  };
  const filter = (event) => {
    setData(
      CourseData.filter((object) =>
        object.courseName.toLowerCase().includes(event.target.value)
      )
    );
    setSearch(true);
  };
  const [menu, setMenu] = useState(true);
  const handleMenuOpen = () => {
    setMenu(false);
  };
  const handleMenuClose = () => {
    setMenu(true);
  };

  return (
    <div className=" fixed shadow-sm shadow-blue-900 z-20 w-screen bg-white px-3 md:px-10 py-1 ">
      <div className="flex items-center justify-between">
        {/* -------------------logo-------------------------------- */}
        <div className="flex gap-1 items-center">
          <img
            className="w-20 md:w-24"
            src="https://i.postimg.cc/hG7g2V1b/scholars-HOme.png"
            alt=""
          />
          <NavLink
            to={"/"}
            className="text-black text-lg md:text-2xl font-bold"
          >
            Scholars Home
          </NavLink>
          {/* ----------------------Search Bar--------------------- */}
          <div>
            <div
              onMouseEnter={enter}
              onMouseLeave={leave}
              className={` ml-2 rounded-md bg-white  ${
                search ? "bg-[#0170DC]" : ""
              } hover:bg-[#0170DC]  flex items-center `}
            >
              <input
                className={`border-2 rounded-md ${
                  search ? "border-[#0170DC]" : " shadow-blue-600 shadow-sm"
                }  hover:border-[#0170DC]  w-28 md:w-full  pl-3 md:pr-16 py-2  outline-none`}
                onChange={filter}
                onBlur={handleBlur}
                onFocus={handlefocus}
                type="text"
                placeholder="Search Courses"
              />
              <button className="">
                <GoSearch
                  fontSize={20}
                  size={25}
                  className={`${
                    !mouse || search ? "text-white" : "text-[#0170DC]"
                  } mx-3`}
                />
              </button>
            </div>
            <div className="duration-300 absolute">
              {search &&
                CourseData.slice(0, 10).map((course) => (
                  <div
                    onClick={() => {
                      navigateToDetail(course._id);
                    }}
                    key={course._id}
                    className=" hover:scale-105 duration-500 px-1 md:px-5 flex gap-3 p-2 border-2 border-[#0170DC] bg-white md:ml-5 ml-1 rounded-md"
                  >
                    <img className=" w-6 md:rounded-md" src={course.image} />{" "}
                    <h1 className=" font-medium">{course.courseName}</h1>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* --------------------navigation bar--------------------- */}

        <div>
          <div
            className={`flex md:static absolute  md:flex-row flex-col justify-between items-start md:items-center gap-2 md:gap-4 ${
              !menu
                ? "top-20 right-1 md:px-0 px-5 bg-white py-2 duration-700 "
                : "top-20 -right-40 duration-700"
            }`}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-base md:text-xl px-5 py-2 text-blue-600  ease-out duration-300 hover:-translate-y-3 "
                  : "font-bold text-base md:text-xl px-5 hover:text-blue-600 hover:-translate-y-3 duration-700"
              }
            >
              <p>Home</p>{" "}
            </NavLink>

            <NavLink
              to={"alltoy"}
              className={({ isActive }) =>
                isActive
                  ? " font-bold text-base md:text-xl px-5 py-2 text-blue-600  ease-out duration-300 hover:-translate-y-3 "
                  : " font-bold text-base md:text-xl px-5 hover:text-blue-600 hover:-translate-y-3 duration-700"
              }
            >
              <p>Courses</p>{" "}
            </NavLink>

            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-base md:text-xl px-5 py-2 text-blue-600  ease-out duration-300 hover:-translate-y-3 "
                  : "font-bold text-base md:text-xl px-5 hover:text-blue-600 hover:-translate-y-3 duration-300"
              }
            >
              <p>Instructors</p>{" "}
            </NavLink>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-base md:text-xl px-5 py-2 text-blue-600  ease-out duration-300 hover:-translate-y-3 "
                  : "font-bold text-base md:text-xl px-5 hover:text-blue-600 hover:-translate-y-3 duration-300"
              }
            >
              <p>Blog</p>{" "}
            </NavLink>

            <div className="flex items-center gap-3">
              {logged ? (
                <NavLink
                  
                  to={"Admin"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-base md:text-xl px-5 py-2 text-blue-600  ease-out duration-700 hover:-translate-y-3 "
                      : " font-bold text-base md:text-xl px-5 hover:text-blue-600 hover:-translate-y-3 duration-300"
                  }
                >
                  <p>DashBoard</p>{" "}
                  
                </NavLink>
              ) : (
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? " font-bold text-base md:text-xl px-5 py-2 rounded-md text-blue-400  duration-300 "
                      : " font-bold text-base md:text-xl px-5  duration-300 "
                  }
                >
                  <BsFillBasketFill size={30} />{" "}
                  {/* {cart.length > 0 && (
                    <p className=" text-xs bottom-9 left-4 text-center p-[1px] text-white rounded-full relative bg-pink-600">
                      {cart?.length}
                    </p>
                  )} */}
                </NavLink>
              )}
            </div>

            {user?.photoURL ? (
              <img
                src={user.photoURL}
                className=" w-16 rounded-full p-2 border-2 border-r-slate-800 border-l-slate-800"
              />
            ) : (
              <FaUserAlt className="md:ml-0 ml-5 " />
            )}

            {!user ? (
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-base md:text-xl px-5 text-blue-600 py-2 duration-300"
                    : " font-bold text-base md:text-xl px-5  duration-300"
                }
              >
                Login
              </NavLink>
            ) : (
              <div
                  onClick={logOut}
                className="text-gray-600 font-bold text-base md:text-xl px-5  hover:bg-white hover:text-blue-800 hover:-translate-y-3 rounded-xl py-2 duration-500"
              >
                {" "}
                Sign Out
              </div>
            )}
          </div>
          <div className=" md:hidden ml-5">
            {menu ? (
              <div className="   rounded-lg">
                <ImMenu onClick={handleMenuOpen} size={25} />
              </div>
            ) : (
              <div className=" rotate-90 duration-300  rounded-lg">
                <GiSplitCross onClick={handleMenuClose} size={25} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
