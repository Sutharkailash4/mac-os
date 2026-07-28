import React, { useState } from "react";

const Insta_Explore = () => {

    const images = [
        {
            img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500    "
        },
        {
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
        },
        {
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
        }
    ];

    let clear = () => {
        setInput("");
    }

    const [input, setInput] = useState("");

    return (
        <div className="explore_main_box">
            <div className="explore_search_box">
                <input type="text" placeholder="Search" value={input} onChange={(text) => {
                    setInput(text.target.value);
                }} />
                {input && <i className="ri-close-line" onClick={clear}></i>}
            </div>
            <div className="explore_posts_box">
                {images.map((elem, idx) => {
                    return (
                        <div key={idx} className="explore_box">
                            <img src={elem.img} alt="image not found" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Insta_Explore;