import { useEffect, useState } from 'react';

export function ThemeToggleButton() {
    const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));

    useEffect(() => {
    const el = document.documentElement;
    if (dark) el.classList.add('dark');
    else el.classList.remove('dark');
    }, [dark]);

    return (
    <button
      onClick={() => setDark((d) => !d)}
      className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
      aria-pressed={dark}
      title="Toggle theme">
      {dark ? ' Dark' : ' Light'}
    </button>
  );
}
