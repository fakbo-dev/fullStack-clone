"use client"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount((prevCount => prevCount + 1));
    }
    const decrement = () => {
        if (count > 0) {
            setCount((prevCount => prevCount - 1));
        }
    }
    const reset = () => {
        setCount((prevCount => prevCount = 0));
    }
    return (
        <section>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </section>
    )
}

export default Counter