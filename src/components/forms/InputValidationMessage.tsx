interface Props {
  helperText?: string;
  errorMessage?: string;
  validationMessage?: string | null;
  isInvalid: boolean;
  hintId: string;
  errorId: string;
}

export function InputValidationMessage({
  helperText,
  errorMessage,
  validationMessage,
  isInvalid,
  hintId,
  errorId,
}: Props) {
  if (isInvalid) {
    return (
      <p id={errorId} role="status" className="mt-1 text-xs text-red-600">
        {errorMessage ?? validationMessage ?? 'Invalid value'}
      </p>
    );
  }
  if (helperText) {
    return (
      <p id={hintId} className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {helperText}
      </p>
    );
  }
  return null;
}
