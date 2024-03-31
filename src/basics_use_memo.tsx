import { useMemo } from "react";

const names = ['poorshad', 'marisa'];

export function BasicMemo({ search, count }: { search: { text: string }, count: number }) {
  const sortedArray = useMemo(() => {
    console.log('searching...')
    const filterd = names.filter(elem => elem === search.text);
    return filterd;
  }, [search.text]);

  return <p> {count} /n { sortedArray.join(',')} </p>
}