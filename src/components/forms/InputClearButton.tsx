interface Props { onClick: () => void; }
export function InputClearButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute inset-y-0 right-2 my-auto rounded p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Clear input"
      title="Clear"
    >
      ×
    </button>
  );
}
