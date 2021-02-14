import React, { useState } from "react";
import useGistFork from "../hooks/useGistFork";
import { v4 } from "uuid";
import ForkUserAvatar from "./ForkUserAvatar";

export default function({gistItem}) {
    const forkObj = useGistFork(gistItem.forks_url);

    return <div className = "list-element" onClick = {()=>{
            const win = window.open(resolveRawFileURL(gistItem.files), '_blank');
                if (win != null) {
                    win.focus();
                }
        }}>
                <div style={{display:'flex', justifyContent:"space-between", cursor: 'pointer', flexWrap:'wrap'}}>
                    <p className = "text-overflow-ellipse" style={{fontSize:'12px'}}>URL: {gistItem.url}</p>
                    <div>
                        <p style={{fontSize:"9px", color:"grey"}}>File Type</p>
                        <div className ="file-type-badge">{resolveFileType(gistItem.files)}</div>
                    </div>
                </div>
                <div className = "flex-start flex-wrap">
                    {(forkObj.data.length)?
                    forkObj.data.splice(0,3).map(item => <ForkUserAvatar forkUser = {item} key ={v4()}/>):
                     <p style={{fontSize:'12px'}}>No fork user record</p>}
                </div>
            </div>
}

function resolveFileType(fileObj) {
    let key = Object.keys(fileObj)[0]
    return fileObj[key].language
}

function resolveRawFileURL(fileObj) {
    let key = Object.keys(fileObj)[0]
    return fileObj[key].raw_url
}






