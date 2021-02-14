import React, {useState} from "react";
import {v4} from "uuid";

export default ({content}) => {
    
    return <pre className = "content">
            {content}         
           </pre>
}