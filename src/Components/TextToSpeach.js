import { useEffect, useState } from "react";

function Speak() {
    const [myText, setText] = useState("");
    const msg = new SpeechSynthesisUtterance();
    // msg.text = "Hello";

    const speechHandler = (msg) => {
        msg.text = myText;
        window.speechSynthesis.speak(msg)
    }

    // useEffect(() => {
    //     window.speechSynthesis.speak(msg)
    // }, [msg])
    return(
        <>
            <h1>Text to speach experiment 1</h1>
            <input type='text' value={myText} placeholder='entre the text' onChange={(e) => setText(e.target.value)} />
            <button onClick={() => speechHandler(msg)}>Speak</button>
        </>
    );
}
export default Speak;