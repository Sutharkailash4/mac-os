import React from "react";
import { Rnd } from 'react-rnd';

const Window = (props) => {
    let { name, pass, setPass } = props;
    return (
        <Rnd default={{
            width: "40vw",
            height: "60vh",
            x: 200,
            y: 200
        }}>
            <div className="window">
                <div className="nav">
                    <div className="dots_box">
                        <div onClick={() => {
                            setPass((old) => {
                                return { ...old, [name]: false }
                            })
                        }} className="red_dot"></div>
                        <div className="yellow_dot"></div>
                        <div className="green_dot"></div>
                    </div>
                    <div className="nav_title">
                        <p>{props.heading}</p>
                    </div>
                </div>
                <div className="main-drag-box">
                    {props.children}
                </div>
            </div>
        </Rnd >
    )
}

export default Window;