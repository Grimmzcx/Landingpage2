import React from "react";
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-scroll';

function Navbar(){
    return(
        <>
        <div className="navbar h-28 bg-red-800">
        <div className="flex-1">
        <a href="/" className=" text-xl text-green-500 mx-10"><img src={logo} className='h-12 w-12 rounded-full'/></a>
        <div>
            <h1 className="text-green-600 text-2xl font-bold">JJM</h1>
            <p className="text-black text-sm">Soap and Detergents Manufacturing</p>
        </div>
        </div>
        <div className="font-bold">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="1" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer bg-blue-700">Home</Link></li>
            <li><Link to="2" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">Product</Link></li>
            <li><Link to="3" smooth={true} duration={1000} className="hover:text-gray-300 cursor-pointer">About Us</Link></li>
            
            
            </ul>
        </div>
        </div>
        </>
    )
}
export default Navbar;