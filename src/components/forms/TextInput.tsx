import { useId, useState, useMemo } from 'react';
import { cn } from '../../utils/classNames';
import { InputValidationMessage } from '../forms/InputValidationMessage';
import { InputClearButton } from '../forms/InputClearButton';
import { InputPasswordToggle } from '../forms/InputPasswordToggle';

export type InputVariant = 'filled' | 'outlined' | 'ghost';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputFieldConfig {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  type?: 'text' | 'password' | 'email' | 'number' | 'search';
  clearable?: boolean;
  passwordToggle?: boolean;
  validate?: (val: string) => string | null;
  name?: string;
  id?: string;
}

export function TextInput({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  clearable = false,
  passwordToggle = false,
  validate,
  name,
  id,
}: InputFieldConfig) {
  const autoId = useId();
  const inputId = id ?? `input-${autoId}`;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  const [internal, setInternal] = useState('');
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value! : internal;

  const validationMessage = validate ? validate(currentValue) : null;
  const isInvalid = !!invalid || !!errorMessage || !!validationMessage;

  const sizeClasses = useMemo(() => {
    switch (size) {
      case 'sm': return 'text-sm h-9 px-3';
      case 'lg': return 'text-base h-12 px-4';
      default: return 'text-sm h-10 px-4';
    }
  }, [size]);

  const variantClasses = useMemo(() => {
    switch (variant) {
      case 'filled':
        return 'bg-gray-100 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-900';
      case 'ghost':
        return 'bg-transparent border-transparent focus:border-gray-300 dark:focus:border-gray-600';
      default:
        return 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-300';
    }
  }, [variant]);

  const ringClasses = isInvalid
    ? 'ring-1 ring-red-500 focus:ring-2 focus:ring-red-500'
    : 'focus:ring-2 focus:ring-blue-500';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isControlled) onChange?.(e);
    else setInternal(e.target.value);
  };

  const clear = () => {
    if (disabled) return;
    if (isControlled) {
    const event = {
      target: { value: '' } as HTMLInputElement,
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(event);
  } else {
        setInternal('');
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={isInvalid || undefined}
          aria-describedby={isInvalid ? errorId : helperText ? hintId : undefined}
          value={currentValue}
          onChange={handleChange}
          className={cn(
            'block w-full rounded-md border outline-none transition',
            'placeholder:text-gray-400 disabled:opacity-60 disabled:cursor-not-allowed',
            sizeClasses,
            variantClasses,
            ringClasses
          )}
        />

        {loading && (
          <span aria-hidden className="pointer-events-none absolute inset-y-0 right-9 my-auto h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}

        {clearable && currentValue && !disabled && (
          <InputClearButton onClick={clear} />
        )}

        {type === 'password' && passwordToggle && (
          <InputPasswordToggle inputId={inputId} />
        )}
      </div>

      <InputValidationMessage
        helperText={helperText}
        errorMessage={errorMessage}
        validationMessage={validationMessage}
        isInvalid={isInvalid}
        hintId={hintId}
        errorId={errorId}
      />
    </div>
  );
}
