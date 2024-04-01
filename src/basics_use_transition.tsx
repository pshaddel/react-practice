import { useState, useTransition } from "react";

export function BasicTransition() {
    const [input, setInput] = useState("");
    const [list, setList] = useState<string[]>([]);
    const [isPening, startTransition] = useTransition();

    const SIZE = 20 * 1000;

    function handleChange(e: any) {
        setInput(e.target.value);
        startTransition(() => {
            const l: string[] = [];
            for (let i = 0; i < SIZE; i++) {
                l.push(e.target.value as string);
            }
            setList(l);
        });
    }

    return (
        <>
        <p>Creates {SIZE} elements here if you write something!</p>
        <input type="text" value={input} onChange={handleChange} />
        {
            isPening ? 'loading long list..' : list.map((item, index) => {
                return <div key={index}>{item}</div>
            })
        }
        </>
    )
}