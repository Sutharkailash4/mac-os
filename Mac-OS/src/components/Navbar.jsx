import React from "react";
import Time from "./Date_and_Time";

const Navbar = () => {
    let date = new Date();
    console.log(date.toLocaleString());
    return (
        <nav>
            <div className="left_nav">
                <ul>
                    <li><a href="#"><i class="ri-apple-fill"></i></a></li>
                    <li><a href="#">Safari</a></li>
                    <li><a href="#">File</a></li>
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">View</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Bookmarks</a></li>
                    <li><a href="#">Window</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div className="right_nav">
                <ul>
                    <li><i class="ri-mic-2-fill"></i></li>
                    <li><i class="ri-wifi-line"></i></li>
                    <li><i class="ri-battery-fill"></i></li>
                    <li><i class="ri-search-line"></i></li>
                    <li><i class="ri-alert-fill"></i></li>
                    <li><Time /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;