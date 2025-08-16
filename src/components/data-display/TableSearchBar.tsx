interface SearchBarProps {
  query: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export function TableSearchBar({ query, onChange, placeholder = 'Search...' }: SearchBarProps) {
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mb-2 w-full rounded border px-2 py-1 text-sm dark:border-gray-800 dark:bg-gray-900 dark:text-white"
      aria-label="Search table"
    />
  );
}
