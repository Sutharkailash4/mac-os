import React, { useState } from "react";

const Intsa_Reel = () => {

    const [reelsData, setReelsData] = useState([
        {
            id: 1,
            profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
            username: "john_doe",
            reelVideo: "https://www.pexels.com/download/video/36079899/",
            isLiked: false,
            isFollow: true,
            likeCount: 1240,
            commentCount: 210,
            description: "Morning vibes 🌅 #reels #travel..."
        },
        {
            id: 2,
            profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            username: "emma_w",
            reelVideo: "https://www.pexels.com/download/video/36027137/",
            isLiked: true,
            isFollow: false,
            likeCount: 9823,
            commentCount: 654,
            description: "Weekend mood on 🔥..."
        },
        {
            id: 3,
            profileImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
            username: "alex_99",
            reelVideo: "https://www.pexels.com/download/video/35626331/",
            isLiked: false,
            isFollow: true,
            likeCount: 432,
            commentCount: 76,
            description: "Simple life, happy me ❤️..."
        },
        {
            id: 4,
            profileImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
            username: "sara_k",
            reelVideo: "https://www.pexels.com/download/video/27894295/",
            isLiked: true,
            isFollow: false,
            likeCount: 15670,
            commentCount: 1290,
            description: "Dance till you drop 💃..."
        },
        {
            id: 5,
            profileImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
            username: "rohit_dev",
            reelVideo: "https://www.pexels.com/download/video/35828339/",
            isLiked: false,
            isFollow: false,
            likeCount: 879,
            commentCount: 98,
            description: "Code. Eat. Sleep. Repeat 💻..."
        }
    ]);

    let btn_toggle = (id) => {
        setReelsData((previus) => {
            return previus.map((elem) => {
                return elem.id === id
                    ? { ...elem, isFollow: !elem.isFollow }
                    : elem;
            })
        })
    }


    let like_toggle = (id) => {
        setReelsData((previus) => {
            return previus.map((elem) => {
                return elem.id === id
                    ? { ...elem, isLiked: !elem.isLiked, likeCount: elem.isLiked ? elem.likeCount - 1 : elem.likeCount + 1 }
                    : elem;
            })
        })
    }

    let like_function = () => {
        setLikePop('translate(-50%,-50%) rotate(0deg) scale(1)');
        setTimeout(()=>{
            setOpa('0');
        },800);
        setTimeout(()=>{
            setLikePop('translate(-50%,-50%) rotate(-45deg) scale(0)');
        },1000);
        setTimeout(()=>{
            setOpa('1');
        },1200);
    }

    const [likePop, setLikePop] = useState('translate(-50%,-50%) rotate(-45deg) scale(0)');
    const [opa, setOpa] = useState('1');

    return (
        <div className="reel_main_box">
            {reelsData.map((elem, idx) => {
                return (
                    <div key={elem.id} className="reel_box" onDoubleClick={()=>{
                        like_function();
                        elem.isLiked ? '' : like_toggle(elem.id);
                    }}>
                        <i style={{ transform: `${likePop}` , opacity:`${opa}` }} class="ri-heart-fill reel_like"></i>
                        <video autoPlay loop muted src={elem.reelVideo}></video>
                        <div className="reel_bottom">
                            <div className="reel_profile_box">
                                <img src={elem.profileImg} alt="image not found" />
                                <h3>{elem.username}</h3>
                                <button onClick={() => {
                                    btn_toggle(elem.id);
                                }} className="reel_btn">{elem.isFollow ? 'Unfollow' : 'Follow'}</button>
                            </div>
                            <div className="reel_description_box">
                                <h3>{elem.description}</h3>
                            </div>
                        </div>
                        <div className="reel_left">
                            <div className="like_box">
                                <p onClick={() => {
                                    like_toggle(elem.id);
                                }}>{elem.isLiked ? <i class="ri-heart-fill"></i> : <i class="ri-heart-line"></i>}</p>
                                <h4>{elem.likeCount}</h4>
                            </div>
                            <div className="com_box">
                                <p><i class="ri-chat-1-line"></i></p>
                                <h4>{elem.commentCount}</h4>
                            </div>
                            <div className="share_box">
                                <h4><i class="ri-share-forward-fill"></i></h4>
                            </div>
                            <div className="menu_b">
                                <h4><i class="ri-menu-line"></i></h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Intsa_Reel;