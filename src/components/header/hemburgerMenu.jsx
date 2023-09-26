import React, { useCallback, useState } from "react";
import {Link} from 'react-scroll'
import styled from "styled-components";


function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const lockScroll = useCallback((l) => {
    if (l === true){
        document.body.style.overflow = ""
    }else{
        document.body.style.overflow = "hidden"
    }
        
    }, [])
  return (
    <>
        <div className={`hamburger_menu ${click === true ? 'open' : ''}`} onClick={()=>{setClick(prev => !prev); lockScroll(click)}}>
            <div className="menu_img">
            
            </div>
        </div>
        <div className={`menu_content ${click === true ? 'open' : ''}`}>
            <ul>
                <li ><Link to="about" spy={true} smooth={true} duration = {1000} onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Обо мне</Link></li>
                <li><Link to="carier" spy={true} smooth={true} duration = {1000} onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Карьера</Link></li>
                <li><Link to="carusel_two" spy={true} smooth={true} duration = {1000} onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Награды</Link></li>
                <li><Link to="obraz" spy={true} smooth={true} duration = {1000} onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Образование</Link></li>
                <li><Link to="images_two" spy={true} smooth={true} duration = {1000} onClick={() => {setClick(prev => !prev); lockScroll(click)}}>Деятельность</Link></li>
            </ul>
        </div>
    </>
  );
}

export default HamburgerMenu;