import React from "react";

import previewPic from '../../assets/Images/pic10.gif';
import Aux from "../../hoc/Auxiliary/Auxiliary";
import './Preview.css';


const preview = ( props ) => {
    return (
        <Aux>
            <div className="Preview">
            <h5>Instagram Clone</h5>
            <h6>This is just a demo project with React</h6>
            <img src={previewPic} alt='pic'/>
            </div> 
        </Aux>
    )
}

export default preview;