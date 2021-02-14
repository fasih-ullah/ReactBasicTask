import React, {useEffect, useState} from "react";
import {v4} from "uuid";
import ListElement from './ListElement';


export default ({gistData, setIsContentShown, setRawFileURL}) => {
    return <div className="parent-element">
                {gistData && gistData.length?gistData.map((item) => {
                        return <ListElement gistItem = {item} key = {v4()}  setIsContentShown= {setIsContentShown} setRawFileURL = {setRawFileURL}/>
                    }): <p style ={{fontSize:'12px'}}> No Data</p>}  
                     
           </div>
}