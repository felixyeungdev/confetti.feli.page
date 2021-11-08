import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const App = () => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const text =
            new URLSearchParams(window?.location?.search).get("text") ?? "";
        setDisplayText(text);
    }, []);

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Confetti />
            <div className="text-4xl md:text-6xl">{displayText}</div>
        </div>
    );
};

export default App;
