import { useEffect, useRef, useState } from "react";

export function BasicUseRef() {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current++
    })

    return (
        <>
        <input value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>Number of Rerenders {renderCount.current}</div>
        </>
    )
}