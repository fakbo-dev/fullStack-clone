import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function handleIncrement() {

        setCount((c) => c + 1);
    }

    function handleDecrement() {
        setCount((c) => c - 1);
    }

    function handleReset() {
        setCount((c) => c = 0);
    }

    return (
        <>
            <main className="b-wrapper">
                <section className="b-container">

                    <div className="b-title">
                        <h1 className="b-title__dev">Fakbo WebDev</h1>
                        <h2 className="b-title__program">Counter Program 🔄</h2>
                    </div>

                    <div className="b-display">
                        <p className="b-display__count">{count}</p>
                    </div>

                    <div className="b-buttons">
                        <button className="b-buttons__plus button" onClick={handleIncrement}>+</button>
                        <button className="b-buttons__minus button" onClick={handleDecrement}>-</button>
                        <button className="b-buttons__reset button" onClick={handleReset}>Reset</button>
                    </div>
                    <div className="b-change">
                        <input type="number" /><br />

                        <button className="button b-change__inital">Set the initial value</button>
                    </div>
                </section>


            </main>
        </>
    );
}

export default Counter;