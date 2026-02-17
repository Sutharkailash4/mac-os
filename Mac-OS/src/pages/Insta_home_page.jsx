import React, { useState } from "react";

const Insta_Home = () => {
    let story_data = [
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
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500"
        }
    ];

    const posts = [
        {
            profile_img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500",
            username: "user_1",
            post_img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
            isLiked: false,
            likeCount: 120,
            commentCount: 15
        },
        {
            profile_img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500",
            username: "user_2",
            post_img: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800",
            isLiked: true,
            likeCount: 340,
            commentCount: 42
        },
        {
            profile_img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
            username: "user_3",
            post_img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
            isLiked: false,
            likeCount: 89,
            commentCount: 9
        },
        {
            profile_img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
            username: "user_4",
            post_img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
            isLiked: true,
            likeCount: 560,
            commentCount: 78
        },
        {
            profile_img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
            username: "user_5",
            post_img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            isLiked: false,
            likeCount: 45,
            commentCount: 3
        }
    ];

    let like_popup = () => {
        setLike('translate(-50%,-50%) rotate(0deg) scale(1)');
        setTimeout(() => {
            setOpa('0')
        }, 600);
        setTimeout(() => {
            setLike('translate(-50%,-50%) rotate(-45deg) scale(0)');
        }, 800);
        setTimeout(() => {
            setOpa('1');
        }, 1000);
    }

    let story_click = (image) => {
        setView('block');
        setViewImage(image);
        let count = 0;
        let i = setInterval(() => {
            if (count === 100) {
                clearInterval(i);
                setView('none');
                setViewImage('');
                count = 0;
            }
            count++;
            setWidth(count);
        }, 50);
    }

        const [like, setLike] = useState('translate(-50%,-50%) rotate(-45deg) scale(0)');
    const [width, setWidth] = useState('20');
    const [view, setView] = useState('none')
    const [viewImage, setViewImage] = useState('');
    const [opa, setOpa] = useState('1')

    return (
        <div className="insta_home">
            <div style={{ display: `${view}` }} className="story_view">
                <div className="story_line">
                    <div style={{ width: `${width}%   ` }} className="inner_line"></div>
                </div>
                <img src={viewImage} alt="image not found" />
            </div>
            <div className="insta_home_header">
                {story_data.map((elem, idx) => {
                    return (
                        <div key={idx} className="insta_home_header_story_box" onClick={() => {
                            story_click(elem.img);
                        }}>
                            <img src={elem.img} alt="img not found" />
                        </div>
                    )
                })}
            </div>
            <div className="insta_home_main_box">
                {posts.map((elem, idx) => {
                    return (
                        <div key={idx} className="insta_post_box">
                            <div className="insta_post_header">
                                <img src={elem.profile_img} alt="image not found" />
                                <h4>{elem.username}</h4>
                            </div>
                            <div className="insta_post_main_img" onDoubleClick={like_popup}>
                                <i style={{ transform: `${like}`, opacity: `${opa}` }} className="ri-heart-fill like"></i>
                                <img src={elem.post_img} alt="image not found" />
                            </div>
                            <div className="insta_post_footer">
                                <div className="like_box">
                                    <p>{elem.isLiked ? <i className="ri-heart-fill"></i> : <i className="ri-heart-line"></i>}</p>
                                    <h5>{elem.likeCount}</h5>
                                </div>
                                <div className="com_box">
                                    <p><i className="ri-chat-1-line"></i></p>
                                    <h5>{elem.commentCount}</h5>
                                </div>
                                <div className="share_">
                                    <p><i className="ri-share-forward-line"></i></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Insta_Home;