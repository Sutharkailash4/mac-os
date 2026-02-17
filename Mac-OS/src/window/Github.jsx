import React from "react";
import Window from "./Window";
import data from '../../public/jsonData/Data.json';

const Github = ({ name, pass, setPass }) => {
    return (
        <Window heading={"- Github"} name={name} pass={pass} setPass={setPass}>
            <div className="all_cards">
                {data.map((element, idx) => {
                    return (
                        <div key={idx} className="card">
                            <div className="card_img_box">
                                <img src={element.image} alt="iamge not found" />
                            </div>
                            <div className="card_title_box">
                                <h2>{element.title}</h2>
                                <p>{element.description}</p>
                            </div>
                            <div className="card_tag_box">
                                {element.tags.map((elem) => {
                                    return (
                                        <button>{elem}</button>
                                    )
                                })}
                            </div>
                            <div className="card_links_box">
                                <a href={element.repoLink}>Repo Link</a>
                                <a href={element.demoLink}>Demo Link</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Window>
    )
}

export default Github;