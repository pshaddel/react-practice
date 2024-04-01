import { useCallback, useReducer } from "react";

function counterReducer(state: { count: number }, action: {
    type: 'increment' | 'decrement',
}) {
    console.log('inside reducer...', action, state)
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return {
                count: state.count - 1
            };
        default :
            return { ...state };
    }

}
export function BasicUseReducer() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    const inc = useCallback(() => {
        dispatch({ type: 'increment' })
    }, [])

    const dec = useCallback(() => {
        dispatch({ type: 'decrement' })
    }, [])
    return <div>
        Reducer Usage
        <p>{state.count}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
}
