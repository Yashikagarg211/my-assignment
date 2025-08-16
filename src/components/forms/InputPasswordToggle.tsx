interface Props { inputId: string; }

export function InputPasswordToggle({ inputId }: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        const input = document.getElementById(inputId) as HTMLInputElement | null;
        if (input) input.type = input.type === 'password' ? 'text' : 'password';
      }}
      className="absolute inset-y-0 right-2 my-auto rounded p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle password visibility"
      title="Toggle password"
    >
      👁
    </button>
  );
}
