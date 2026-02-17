import React, { useEffect, useState } from "react";
import Window from "./Window";
import ReactMarkdown from 'react-markdown';

const Notes = ({ name, pass, setPass }) => {

    const [notes, setNotes] = useState("");

    let call = () => {
        let response = fetch('/note.txt');
        response.then((data) => {
            return data.text();
        }).then((data2) => {
            setNotes(data2);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        call();
    }, []);



    return (
        <Window heading={"- Notes"} name={name} pass={pass} setPass={setPass}>
            <div className="note_window">
                <ReactMarkdown>
                    {notes}
                </ReactMarkdown>
            </div>
        </Window>
    )
}

export default Notes;