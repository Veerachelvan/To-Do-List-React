import React from "react";
import checklist from "./checklist.png"

function Header() {
    return (
        <header>
            <h1>To Do List 
                <img src={checklist} alt="emoji" style={
                    {
                        width: '1em',
                        height: '1em',
                        verticalAlign: 'middle',
                        paddingLeft: '20px',
                        paddingBottom: '20px'
                    }}></img>
        </h1>
        </header >
    )
}

export default Header