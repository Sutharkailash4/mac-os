import React from "react";
import Window from "./Window";
import resume from '../assets/resume.pdf';

const Resume = ({ name, pass, setPass }) => {
    return (
        <Window heading={"- Resume"} name={name} pass={pass} setPass={setPass}>
            <embed src={resume} frameborder="0"></embed>
        </Window>
    )
}

export default Resume; 