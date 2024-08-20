import {useReducer} from "react";

type Action = { type: 'PLUS',size: number} | { type: 'MINUS', size:number }

let reducer = (state: number, action: Action) => {
    switch (action.type) {
        case 'PLUS':
            return state + action.size
        case 'MINUS':
            return state - action.size
        default:
            throw new Error('등록 하고 다시와')

    }
}

let Reducer = () => {
    let [number,dispatch] = useReducer(reducer,0)
    let onPlus = () => dispatch({type: 'PLUS', size:4})
    let onMinus = () => dispatch({type: 'MINUS', size: 40})
    return (
        <div>
            <button onClick={onPlus}>+</button>
            <h1>{number}</h1>
            <button onClick={onMinus}>-</button>
        </div>
    )
}

export default Reducer