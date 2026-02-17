import React, { useState } from "react";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Github from "./window/Github";
import Notes from "./window/Notes";
import Resume from "./window/Resume";
import Instagram from "./window/Instagram";
import Spotify from "./window/Spotify";
import Terminal from "./window/Terminal";

const App = () => {

  const [openWindow, setOpenWindow] = useState({
    github: false,
    notes: false,
    resume: false,
    instagram: false,
    spotify: false,
    terminal: false,
  })

  return (
    <div>
      <Navbar />
      {openWindow.github && <Github name="github" pass={openWindow} setPass={setOpenWindow} />}
      {openWindow.notes && <Notes name="notes" pass={openWindow} setPass={setOpenWindow} />}
      {openWindow.resume && <Resume name="resume" pass={openWindow} setPass={setOpenWindow} />}
      {openWindow.instagram && <Instagram name="instagram" pass={openWindow} setPass={setOpenWindow} />}
      {openWindow.spotify && <Spotify name="spotify" pass={openWindow} setPass={setOpenWindow} />}
      {openWindow.terminal && <Terminal name="terminal" pass={openWindow} setPass={setOpenWindow} />}
      <Dock pass={openWindow} setPass={setOpenWindow} />
    </div>
  )
}

export default App;