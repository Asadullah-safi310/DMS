import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex gap-5 items-start font-medium">
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

      <div>
        {token ? (
          <div  className="flex items-center gap-2 group cursor-pointer relative">
            <img className="rounded-full w-10" src={assets.profile_pic} alt="" />
            <img src={assets.dropdown_icon} alt="" />
            <div className="absolute  top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
                <div className="min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-2">
                    <p onClick={()=> navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={()=> navigate('/my-appointment')} className="hover:text-black cursor-pointer"> My Appointments</p>
                    <p onClick={()=> setToken(false)} className="hover:text-black cursor-pointer"> Logout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
