import React from "react";
import "./style.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillHome, AiOutlineBell, AiOutlineShop } from "react-icons/ai";
import {MdOutlineSmartDisplay} from 'react-icons/md';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import {IoIosSettings} from 'react-icons/io';
import {BiSearch} from 'react-icons/bi';



const Header = () => {
  return (
    <div className="header">

      <div className="left">
        <BsFacebook size={50}/>
        <div className="all-input">
          <BiSearch className='icon' size={24}/>
          <input className="left-input" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="center">
         <AiFillHome className='active-icon' color="#1c7ed6"/>
         <AiOutlineBell className='active-icon'/>
         <MdOutlineSmartDisplay className='active-icon'/>
         <img className='my-photo' src="https://avatars.githubusercontent.com/u/96732484?v=4"/>
         <AiOutlineShop className='active-icon'/>
         <HiOutlineUserGroup className='active-icon'/>
         <RiMessengerLine className='active-icon'/>
      </div>

      <div className="right">
      <IoIosSettings/>
      </div>
    </div>
  );
};

export default Header;
