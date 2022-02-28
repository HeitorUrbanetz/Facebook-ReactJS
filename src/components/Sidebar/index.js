import React from 'react';
import './style.css'
import {FaUserFriends} from 'react-icons/fa';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {AiOutlineShop} from 'react-icons/ai';
import {BsArrowCounterclockwise, BsQuestionCircle,BsChevronDown} from 'react-icons/bs';
import {MdOutlineSmartDisplay} from 'react-icons/md';
import {IoIosSettings} from 'react-icons/io';
import {VscSymbolMisc} from 'react-icons/vsc';


const Sidebar = () => {
    return(
        <div className='container'>
            <div className='first'>
                    <h1 className='first-h1'>Home</h1>
                    <h3 className='first-h3'>Create</h3>  
            </div>

            <div className='content'>

                <div className='item'>
                    <FaUserFriends className='item-color' size={35}/>
                    <h4 className='item-h4'>Friends</h4>
                </div>

                <div className='item'>
                    <HiOutlineUserGroup className='item-color' size={35}/>
                    <h4 className='item-h4'>Groups</h4>
                </div>

                <div className='item'>
                    <AiOutlineShop className='item-color' size={35}/>
                    <h4 className='item-h4'>Marketplace</h4>
                </div>

                <div className='item'>
                    <MdOutlineSmartDisplay className='item-color' size={35}/>
                    <h4 className='item-h4'>Watch</h4>
                </div>

                <div className='item'>
                    <BsArrowCounterclockwise className='item-color' size={35}/>
                    <h4 className='item-h4'>Memories</h4>
                </div>

                <div className='item'>
                    <BsQuestionCircle className='item-color' size={35}/>
                    <h4 className='item-h4'>Help and support</h4>
                </div>

                <div className='item'>
                    <IoIosSettings className='item-color' size={35}/>
                    <h4 className='item-h4'>Setting and Privacy</h4>
                </div>

                <div className='item'>
                    <VscSymbolMisc className='item-color' size={35}/>
                    <div className='info'>
                        <h4 className='item-h4'>See More</h4>
                        <BsChevronDown className='info-down' size={25}/>
                    </div>
                </div>

                <div><h3 className='h3-final'>Feito por Heitor Urbanetz</h3></div>

            </div>
        </div>
    )
}

export default Sidebar;