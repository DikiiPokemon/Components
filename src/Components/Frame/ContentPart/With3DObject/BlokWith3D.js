import React from "react";
import "./BlockWith3D.css"


const BlockWith3D = () => {



    return(
        <div className="BlockWith3DWrapper">
            <div class="cube-wrapper">
                <div style={{"--i":"0"}} className="side top"></div>
                <div style={{"--i":"0"}} className="side front"></div>
                <div style={{"--i":"1"}} className="side right"></div>
                <div style={{"--i":"2"}} className="side back"></div>
                <div style={{"--i":"3"}} className="side left"></div>
            </div>
        </div>
    )
}

export default BlockWith3D