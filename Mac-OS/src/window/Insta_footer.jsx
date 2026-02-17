import React from "react";
import { Link } from "react-router-dom";

const Insta_Footer = () => {
    return (
        <div className="insta_footer">
            <Link className="insta_navigation" to="/"><i class="ri-home-7-line"></i></Link>
            <Link className="insta_navigation" to="insta_explore"><i class="ri-search-line"></i></Link>
            <Link className="insta_navigation" to="insta_reel"><i class="ri-youtube-line"></i></Link>
            <Link className="insta_navigation" to="insta_profile"><i class="ri-user-3-line"></i></Link>
        </div>
    )
}

export default Insta_Footer;