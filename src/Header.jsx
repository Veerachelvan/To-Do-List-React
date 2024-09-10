import React from "react";
import checklist from "./checklist.png"

function Header() {
    return (
        <header className="head">
            <h1>To Do List 
                <img src={checklist} alt="emoji" ></img>
        </h1>
        </header >
    )
}

export default Header