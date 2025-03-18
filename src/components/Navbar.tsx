import React, { useEffect, useRef, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [token, setToken] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log('menuRef inside the useEffect' , menuRef);
  // },[showProfileMenu])

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node; // 👈 Explicitly cast to Node

    if (menuRef.current && menuRef.current.contains(target)) {
      console.log("Clicked inside menu target shata");
      setShowProfileMenu(true);
    } else {
      console.log("Clicked outside menu");
      setShowProfileMenu(false);
    }
  }

  document.addEventListener("click", handleClickOutside);
  return (
    <div className="flex justify-between items-center text-sm lg:text-lg py-4 mb-5 border-b border-b-gray-400">
      {/* Business logo */}
      {/* <img className="w-44 cursor-pointer" style={{mixBlendMode: "color-burn"}} src={assets.AfgDoclogo} alt="" /> */}
      <p className="text-4xl text-blue-700 font-semibold cursor-pointer">
        <span className="text-black">A</span>
        <span className="text-red-800">F</span>
        <span className="text-green-700">G</span>
        <span>DoC</span>
      </p>
      {/* menus */}
      <ul className="hidden md:flex gap-5  items-start font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none bg-[#5f6FFF] outline-none h-0.5 w-5/6 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 w-5/6 m-auto hidden bg-[#5f6FFF]" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 w-5/6 m-auto hidden bg-[#5f6FFF]" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 w-5/6 m-auto hidden bg-[#5f6FFF] " />
        </NavLink>
      </ul>

      {/* profile image and its menus */}
      <div className=" flex items-center gap-5">
        {token ? (
          <div className=" p-2 flex items-center gap-2 group cursor-pointer relative">
            <div ref={menuRef} className="flex gap-3 p-2">
              <img
                className="rounded-full w-10"
                src={assets.profile_pic}
                alt=""
              />
              <img src={assets.dropdown_icon} alt="" />
            </div>
            {showProfileMenu && (
              <div className=" absolute min-w-45 bg-stone-100 top-15 p-2 right-0 text-base font-medium z-50 text-gray-600 cursor-pointer ">
                {/* <div className="min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-2"> */}
                <p
                  onClick={() => {
                    navigate("/my-profile");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/my-appointment");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  {" "}
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  {" "}
                  Logout
                </p>
                {/* </div> */}
              </div>
            )}
          </div>
        ) : (
          <button
            className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}
          >
            Create account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* Mobile Menu */}
        {showMenu && (
          <div
            className={`${
              showMenu ? "absolute w-full h-screen" : "h-0 w-0"
            } right-0 top-0 bg-white rounded-md shadow-lg z-50`}
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              <img className="w-8 self-end" src={assets.logo} alt="" />
              <img
                onClick={() => setShowMenu(false)}
                className="w-6 self-end"
                src={assets.cross_icon}
                alt=""
              />
            </div>
            <ul className="flex flex-col items-center w-full gap-4 p-4">
              <NavLink
                className="bg-blue-400 hover:bg-blue-200 w-full text-center py-4"
                to="/"
              >
                <li onClick={() => setShowMenu(false)}>HOME</li>
              </NavLink>
              <NavLink
                to="/doctors"
                className={
                  "bg-blue-400 hover:bg-blue-200 w-full text-center py-4"
                }
              >
                <li onClick={() => setShowMenu(false)} className="py-1">
                  ALL DOCTORS
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={
                  "bg-blue-400 hover:bg-blue-200 w-full text-center py-4"
                }
              >
                <li onClick={() => setShowMenu(false)} className="py-1">
                  ABOUT
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={
                  "bg-blue-400 hover:bg-blue-200 w-full text-center py-4"
                }
              >
                <li onClick={() => setShowMenu(false)} className="py-1">
                  CONTACT
                </li>
              </NavLink>
              {!token && (
                <NavLink
                  to="/login"
                  className={
                    "bg-blue-500 hover:bg-blue-200 w-sm font-medium text-2xl text-white rounded-2xl text-center py-2"
                  }
                >
                  <li onClick={() => setShowMenu(false)} className="py-1">
                    Create account
                  </li>
                </NavLink>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
