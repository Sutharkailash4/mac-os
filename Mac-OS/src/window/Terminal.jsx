import React from "react";
import Window from "./Window";
import Terminal from 'react-console-emulator';

const commands = {
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
    }
}

const Terminal_Clone = ({ name, pass, setPass }) => {
    return (
        <Window heading={"- Terminal"} name={name} pass={pass} setPass={setPass}>
            <div className="terminal_box">
                <Terminal className="terminal"
                    commands={commands}
                    welcomeMessage={'Welcome to the React terminal!'}
                    promptLabel={'me@React:~$'}
                />
            </div>
        </Window>
    )
}

export default Terminal_Clone;