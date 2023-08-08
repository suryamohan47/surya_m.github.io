import React, { useState } from 'react';

import "./Navbarstyle.css";

import { Link } from 'react-router-dom';
import {FaBars,  FaFish, FaTimes} from "react-icons/fa";


const Navbar = () => {

    const[click, setclick] = useState(false);
    const handleclick = () =>{ setclick(!click)};
    const [color, setcolor] = useState(false);
    const changecolor = () =>{
        if(window.scrollY >=100){
            setcolor(true);

        }else{
            setcolor(false);
 }
 };
 window.addEventListener("scroll", changecolor);


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1><FaFish size={35} style={{color:"yellow",marginRight:"0"}}/></h1>
        
        </Link>
        <ul className={click ? "navmenu active" : "navmenu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>



        </ul>
        <div className='hamburger' onClick={handleclick}>
            {click ?(<FaTimes size={20} style={{color:"yellow"}}/>):
            (<FaBars size={20} style={{color:"white"}}/>)}



        </div>



    </div>
  );
};

export default Navbar;