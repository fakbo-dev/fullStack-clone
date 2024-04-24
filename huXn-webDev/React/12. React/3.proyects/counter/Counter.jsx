import { useState } from "react"
import "../style.css"

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <>
            <div className="container">
                <h1 className="number">{count}</h1>
            </div>

            <section className="btns-container">
                <button className="increment btn" onClick={increment}>+</button>
                <button className="decrement btn" onClick={decrement}>-</button>
                <button className="reset btn" onClick={reset}>Reset</button>
            </section>
        </>
    )
}

export default Counter