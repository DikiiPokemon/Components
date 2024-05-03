import React from "react";
import "./CompositContainer.css"
import 'atropos/css'
import Atropos from 'atropos/react';
import bg from "./images/cover1-export.png"
import castle from "./images/cover3-export.png"
import text from "./images/cover2-export.png"

const CompositContainer = () => {



    return(
        <div className="CompositWrapper">
            <a id="Example2"></a>
            <div className="CompositItemWrapper">
                <p className="informationBlockHeader">Example2</p>
                <div className="ContentComposit">
                    <div className="WrappForImageComposit">
                        <img src="https://e22u.short.gy/KTU286" alt=""></img>
                    </div>
                    <div className="WrappForContentComposit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
            <div className="CompositItemWrapper">
                <p className="informationBlockHeader">Example2</p>
                <div className="ContentComposit">
                    <div className="WrappForImageComposit">
                        <img src="https://e22u.short.gy/KTU286" alt=""></img>
                    </div>
                    <div className="WrappForContentComposit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
            <div className="CompositItemWrapper">
                <p className="informationBlockHeader">Example2</p>
                <div className="ContentComposit">
                    <div className="WrappForImageComposit">
                        <img src="https://e22u.short.gy/KTU286" alt=""></img>
                    </div>
                    <div className="WrappForContentComposit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
            <div className="CompositItemWrapper">
                <p className="informationBlockHeader">Example2</p>
                <div className="ContentComposit">
                    <div className="WrappForImageComposit">
                        <img src="https://e22u.short.gy/KTU286" alt=""></img>
                    </div>
                    <div className="WrappForContentComposit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
            <div className="CompositItemWrapper">
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
        </div>
    )
}


export default CompositContainer