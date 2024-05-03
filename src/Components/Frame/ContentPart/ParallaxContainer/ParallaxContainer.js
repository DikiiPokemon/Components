import React from "react";
import "./ParallaxContainer.css"
import 'atropos/css'
import Atropos from 'atropos/react';
import bg from "./images/cover1-export.png"
import castle from "./images/cover3-export.png"
import text from "./images/cover2-export.png"

const ParallaxContainer = () => {


    return(
        <div className="ParallaxWrapper">
            <a id="Example3"></a>
            <p className="informationBlockHeader">Parallax Example3</p>
            <Atropos
            className="atropos-banner"
            highlight={false}
            onEnter={() => console.log("enter")}
            >
                <img className="BacgroundParallax" data-atropos-offset="-5.5" src={bg}></img>
                <img data-atropos-offset="3" src={castle}></img>
                <img data-atropos-offset="9" src={text}></img>
            </Atropos>
        </div>
    )
}

export default ParallaxContainer