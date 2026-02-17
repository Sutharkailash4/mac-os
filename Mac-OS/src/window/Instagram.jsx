import React from "react";
import Window from "./Window";
import { Routes, Route } from "react-router-dom";
import Not_Found from "../pages/Not_Found";
import Insta_Home from "../pages/Insta_home_page";
import Insta_Explore from "../pages/Insta_explore_page";
import Intsa_Reel from "../pages/Insta_reel_page";
import Insat_Profile from "../pages/Insta_profile_page";
import Insta_Footer from "./Insta_footer";

const Instagram = ({ name, pass, setPass }) => {
    return (
        <Window heading={"- Instagram"} name={name} pass={pass} setPass={setPass}>
            <div className="main_insta">
                <Routes>
                    <Route path="/" element={<Insta_Home />} />
                    <Route path="insta_explore" element={<Insta_Explore />} />
                    <Route path="insta_profile" element={<Insat_Profile />} />
                    <Route path="insta_reel" element={<Intsa_Reel />} />
                    <Route path="/*" element={<Not_Found />} />
                </Routes>
                <Insta_Footer />
            </div>
        </Window>
    )
}

export default Instagram;