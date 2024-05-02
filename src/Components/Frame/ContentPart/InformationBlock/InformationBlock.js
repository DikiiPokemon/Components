import React from "react";
import "./InformationBlock.css"


const InfoBlock =() => {



    return(
        <div className="InfoBlockWrapper">
            <p className="informationBlockHeader">Header iformation Block</p>
            <div className="ContentInformation">
                <div className="WrappForImage">
                    <img src="https://e22u.short.gy/KTU286" alt=""></img>
                </div>
                <div className="WrappForContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
    )
}

export default InfoBlock