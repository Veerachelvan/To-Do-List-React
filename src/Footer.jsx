import React from 'react'

const Footer = ({ length }) => {
    return (
        <footer>{length} {length == 1 ? "Task " : "Tasks"} Left</footer>
    )
}

export default Footer