import React from "react";

export default function({forkUser}) {
    return <div className = "fork-user-element">
                <img src = {forkUser.owner.avatar_url} width="60" height="60" />
                <p style={{fontSize:'12px'}}>{forkUser.owner.login}</p>
            </div>
}

