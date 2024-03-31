
export function BasicListRenderProp<T = any>({ items, renderItem }: {
  items: T[],
  renderItem: (item: T) => JSX.Element 
}) {
  return <ol>
    {items.map(element => {
      return renderItem(element)
    })}
  </ol>
}