export function CorruptComponent() {
    return <p>
    <button>generate error</button>
    {(() => {throw new Error('XXXX')})()}
  </p>
}