import { useMemo } from "react";

export function BasicMemo({ arr, count }: { arr: number[], count: number }) {
  const arrStr = arr.join(',')
  const sortedArray = useMemo(() => {
    console.log('sorting array... ', arrStr)
    const sorted = arr.sort((a, b) => Number(a) - Number(b));
    return sorted;
  }, [arr]);

  return <p> {count} /n { sortedArray.join(',')} </p>
}