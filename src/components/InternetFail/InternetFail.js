import React from "react";

import failPic from '../../assets/Images/pic20.gif';

const internetFail = () =>{
    return(
        <div>
            <h5>Instagram Clone Posts can't be loaded!</h5>
            <img src={failPic} alt="pic" style={{width: '80%', height: '400px'}}/>
        </div>
    )
}

export default internetFail;