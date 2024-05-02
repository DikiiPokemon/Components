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
            <Atropos
            className="atropos-banner"
            highlight={false}
            onEnter={() => console.log("enter")}
            >
                <img className="BacgroundParallax" data-atropos-offset="-4.5" src={bg}></img>
                <img data-atropos-offset="0" src={castle}></img>
                <img data-atropos-offset="1" src={text}></img>
            </Atropos>
        </div>
    )
}

export default ParallaxContainer