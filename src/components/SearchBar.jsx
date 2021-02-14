import React from "react";

export default ({onSearchHandler}) => {
    let username  = "";
    
    return <div className = "flex-center">
        <p>Search Gists: </p>
        <input className = "search-input" type="text" placeholder="Search Gist Username" onChange={(e)=> {username = e.target.value}} onKeyUp={(e) => {
            e.keyCode == 13 && onSearchHandler(e.target.value)
        }}></input>
        <input className = "search-button" type="button" name = "Search" value="Search" onClick={() => { onSearchHandler(username)}}></input>
    </div>
}