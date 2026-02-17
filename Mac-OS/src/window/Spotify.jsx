import React from "react";
import Window from "./Window";

const Spotify = ({ name, pass, setPass }) => {
    return (
        <Window heading={"- Spotify"} name={name} pass={pass} setPass={setPass}>
            <div className="spotify_main_box">
                <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/album/0Rkv5iqjF2uenfL0OVB8hg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </Window>
    )
}

export default Spotify;