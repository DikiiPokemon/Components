import React from "react";
import "./Footer.css"
import {ReactComponent as Logo} from "./images/logo.svg"


const  Footer = () => {



    return(
        <div className="FooterWrapper">
            <div className="ContentWrappFooter">
                <div className="ContentLogo">
                    <Logo/>
                </div>
                <div className="ContentExample">+7(999) 999 99 99</div>
                <div className="ContentExample">Name</div>
                <div className="ContentExample">© 2013 - 2023 Все права защищены</div>
            </div>
            <div className="ContentWrappFooter">
                <a className="FooterLink">Example1</a>
                <a className="FooterLink">Example2</a>
                <a className="FooterLink">Example3</a>
                <a className="FooterLink">Example4</a>
            </div>
            <div className="ContentWrappFooter">
                <div className="ContentExample">+7(999) 999 99 99</div>
                <div className="ContentExample">Name</div>
            </div>
        </div>
    )
}

export default Footer