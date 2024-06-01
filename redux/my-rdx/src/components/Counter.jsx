import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/features/counter/counterSlice";



function Counter() {

    // Read the data from the "store"
    const count = useSelector((state) => state.counter.value);

    // changin the data by sending "Actions" to the store

    const dispatch = useDispatch();
    return (
        <>
            {count}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}

export default Counter