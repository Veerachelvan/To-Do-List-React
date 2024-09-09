import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";

const Footer = ({ length }) => {
    return (
        <footer>
            {length} {length == 1 ? "Task " : "Tasks"} Left
            <div>
                <a href="https://github.com/Veerachelvan"><FaGithub /></a>
                <a href="kveerachelvan@gmail.com"><MdAlternateEmail /></a>
                <a href="#"><MdPhoneIphone /></a>
            </div>
        </footer>
    )
}

export default Footer