import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const FormField = ({
  label,
  error,
  id,
  name,
  ...inputProps
}: Props) => {
  const inputId = id ?? name;
  const errorId = `${inputId}-error`;

  return (
    <div>
      <div className="flex items-end gap-2">
        <label
          htmlFor={inputId}
          className="heading shrink-0 text-lg"
        >
          {label}:
        </label>

        <input
          {...inputProps}
          id={inputId}
          name={name}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="min-w-0 flex-1 border-0 border-b-2 border-text bg-transparent px-1 outline-none"
        />
      </div>

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red">
          {error}
        </p>
      )}
    </div>
  );
};