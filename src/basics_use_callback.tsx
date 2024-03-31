import { PropsWithChildren, memo, useCallback, useState } from "react";

export function BasicUseCallback() {
  return <MemoiedParent />
}

const MemoiedParent = memo(Parent);
function Parent({ children }: PropsWithChildren) {
  console.log('parent...')
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((previousState) => {
      return previousState + 1
    })
  }, [])
  return <div>
    UseCallBack
    {children}
    Count: {count}
    <MemoizedChild increment={increment} />
  </div>
}

function Child({ increment }: { increment: Function }) {
  console.log('child render...')
  return <button onClick={() => increment()}>Increment Counter</button>
}

const MemoizedChild = memo(Child);