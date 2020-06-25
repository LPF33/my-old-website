import React from "react";
import "./MobileOrientation.css";

export default function MobileOrientation(){

    return(
        <div id="mobile-orientation">
            <div>
                <div id="device-outer" className="flex">
                    <div id="device-inner">
                        <div id="device-touch">                            
                        </div>
                    </div>
                </div>
            </div>
            <h1>Welcome to my Website!</h1>
            <h2>Please, change the orientation of your device!</h2>          
        </div>        
    )
}