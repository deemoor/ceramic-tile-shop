import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";

type Props = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  onEmpty?: () => void;
};

export const InputNumber = ({
  id,
  label,
  value,
  onChange,
  onEmpty,
}: Props) => {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value.replace(/\D/g, "");

    setInputValue(nextValue);
  };

  const applyValue = () => {
    if (inputValue === "" || inputValue === "0") {
      if (onEmpty) {
        onEmpty();
        return;
      }

      setInputValue(String(1));
      onChange(1);
      return;
    }

    const nextValue = Math.max(1, Number(inputValue));

    if (nextValue !== value) {
      onChange(nextValue);
    }

    setInputValue(String(nextValue));
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <span aria-hidden>[</span>

      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        id={id}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={inputValue}
        onChange={handleChange}
        onBlur={applyValue}
        onKeyDown={handleKeyDown}
        className="h-7 w-12 bg-transparent text-center outline-none"
      />

      <span aria-hidden>]</span>
    </div>
  );
};