import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg text-slate-300">
        React is working — this counter is a client component.
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="rounded-lg bg-sky-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-sky-400 active:scale-95"
      >
        Count is {count}
      </button>
    </div>
  );
}
