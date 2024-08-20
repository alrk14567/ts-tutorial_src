import {useState} from "react";

let Counter = () => {
    let [number,setNumber] =useState<number>(0)
    let onPlus=() => setNumber(number+1)
    let onMinus=() => setNumber(number-1)
    return (
        <div>

            <button onClick={onMinus}>-</button>

            <h1>{number}</h1>

            <button onClick={onPlus}>+</button>

        </div>
    )
}

export default Counter