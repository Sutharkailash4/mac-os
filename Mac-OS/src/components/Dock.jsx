import React from "react";
import github from '../icons/github.svg';
import instagram from '../icons/instagram.svg';
import link from '../icons/link.svg';
import mail from '../icons/mail.svg';
import notes from '../icons/notes.svg';
import pdf from '../icons/pdf.svg';
import spotify from '../icons/spotify.svg';
import terminal from '../icons/terminal.svg'

const Dock = ({ pass , setPass}) => {
        return (
        <footer>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , github : !old.github}
                })
            }} className="icon github"><img src={github} alt="Image not found" /></div>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , instagram : !old.instagram}
                })
            }} className="icon instagram"><img src={instagram} alt="Image not found" /></div>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , link : !old.link}
                })
            }} className="icon link"><img src={link} alt="Image not found" /></div>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , mail : !old.mail}
                })
            }} className="icon mail"><img src={mail} alt="Image not found" /></div>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , notes : !old.notes}
                })
            }} className="icon notes"><img src={notes} alt="Image not found" /></div>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , resume : !old.resume}
                })
            }} className="icon pdf"><img src={pdf} alt="Image not found" /></div>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , spotify : !old.spotify}
                })
            }} className="icon spotify"><img src={spotify} alt="Image not found" /></div>
            <div onClick={()=>{
                setPass((old)=>{
                    return {...old , terminal : !old.terminal}
                })
            }} className="icon terminal"><img src={terminal} alt="Image not found" /></div>
        </footer>
    )
}

export default Dock;