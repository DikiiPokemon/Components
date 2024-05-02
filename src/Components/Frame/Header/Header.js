import React, { useState } from "react";
import {ReactComponent as Logo} from "./images/logo.svg"
import "./Header.css"


const Header = () => {

    const[openBurgerMenu, setOpenBurgerMenu] = useState(false)
    
    
    return(
        <div className="HeaderWrapper">
            <div className="LeftPartHeader">
                <a><Logo style={{width: "100%", height: "100%"}}/></a>
            </div>
            <div className="MiddlePartHeader">
                <a href="#Example1" className="LinkToContent">Example1</a>
                <a href="#Example2" className="LinkToContent">Example2</a>
                <a className="LinkToContent">Example3</a>
                <a className="LinkToContent">Example4</a>
            </div>
            <div className={`RightPartHeader ${openBurgerMenu ? "Active" : ""}`} onClick={() => setOpenBurgerMenu(!openBurgerMenu)}>
                <span></span>
            </div>
        </div>
    )
}

export default Header