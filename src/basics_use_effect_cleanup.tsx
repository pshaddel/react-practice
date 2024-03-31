import { useEffect, useState } from 'react';

export function BasicUseEffectCleanUp() {
  const [date, setDate] = useState<number>(Date.now());
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDate(date + 1000);
    }, 1000)
    return () => {
      clearTimeout(timeoutId);
    }
  });

  return (
    <div>
      UseEffect Clean Up
      <p> {new Date(date).toISOString()} </p>
    </div>
  );
}
