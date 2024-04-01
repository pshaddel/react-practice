import { useEffect, useRef, useState } from "react";

export function BasicUseRef() {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef(null);
    const prevName = useRef('');
    useEffect(() => {
        renderCount.current++
    })

    useEffect(() => {
        prevName.current = name;
    }, [name])

    return (
        <>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name} - previous name: {prevName.current}</div>
        <div>Number of Rerenders {renderCount.current}</div>
        <button onClick={() => {
            if (!inputRef) return;
            (inputRef.current as any).focus();
        }}>Focus on Input using useRef</button>
        </>
    )
} 