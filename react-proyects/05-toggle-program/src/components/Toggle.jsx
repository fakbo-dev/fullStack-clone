import { useState } from "react";

function Toggle() {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    function handleClick() {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "white" ? "#ffa31a" : "white");
        setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
    }

    return (
        <>
            <section style={{ backgroundColor, color: textColor }}>
                <button
                    onClick={handleClick}
                    style={{
                        backgroundColor: buttonStyle,
                        color: textColor,
                        border: `2px solid ${textColor}`,
                    }}
                >
                    {backgroundColor === "1b1b1b" ? "Black Theme" : "White Theme"}
                </button>

                <section className="content">
                    <h1>Welcome to a <br /> new world</h1>
                </section>
            </section>
        </>
    );
}

export default Toggle;
