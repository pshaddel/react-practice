import { PropsWithChildren, useState } from "react"

export function Cat({ children }: PropsWithChildren) {
    console.log('Render Cat...');
    const [catStatus, setCatStatus] = useState(false);
    const handler = () => {
        setCatStatus(!catStatus)
    }
    return <div>
        Cat
        <button onClick={handler}>Change Cat Status</button>
        <p>Cat Status = {catStatus ? 'Good' : 'Bad'}</p>
        {children}
    </div>
}

export function CatChild() {
    console.log('cat child...')
    return <p>Child</p>
}