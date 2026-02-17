import React from "react";

const Insat_Profile = () => {
    return (
        <div className="insta_profile_main_box">
            <div className="insta_profile_header">
                <div className="insta_profile_img_box">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500" alt="iamge not found" />
                </div>
                <div className="insta_profile_details_box">
                    <h2>Ksuthar0072</h2>
                    <h3>Kailash Suthar</h3>
                    <div className="profile_detail_inner_box">
                        <div className="insta_profile_post_box">
                            <p>0</p>
                            <h4>Posts</h4>
                        </div>
                        <div className="insta_profile_follower_b">
                            <p>300</p>
                            <h4>followers</h4>
                        </div>
                        <div className="insta_profile_following_box">
                            <p>450</p>
                            <h4>following</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="insta_profile_btns_box">
                <button>Edit Profile</button>
                <button>View Archive</button>
            </div>
        </div>
    )
}

export default Insat_Profile;