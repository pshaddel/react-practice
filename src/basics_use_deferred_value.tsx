import { PropsWithChildren, useMemo, useState, useDeferredValue } from "react";

export function BasicDefferedValue({ input }: PropsWithChildren & { input: string }) {

    const SIZE = 20 * 1000;
    const deferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        console.log('new calculation:', deferredInput)
        const l: any[] = [];
        for (let i =0; i < SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }

        return l;
    }, [deferredInput]);

    return list;
}

export function BasicDefferedValueParent() {
    const [text, setText] = useState('');

    function changeHandler(e:any) {
        setText(e.target.value);
    }

    return <>
    <p>useDeferredValue</p>
    <input type="text" value={text} onChange={changeHandler} />
    <BasicDefferedValue input={text}  />
    </> 
}