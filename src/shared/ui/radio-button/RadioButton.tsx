import { cn } from "@/features/add-tile-to-cart/ui/AddTilePopover";
import type { ReactNode } from "react";

type Props = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  icon?: ReactNode;
};

export const RadioButton = ({
  name,
  value,
  label,
  checked,
  onChange,
  icon,
}: Props) => {
  return (
    <label
      className={`
        cursor-pointer bg-background transition-opacity hover:opacity-90
        flex gap-2 items-center p-2 border border-black
        ${checked && "bg-surface"}
      `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="size-5 shrink-0 accent-text"
      />
      <div className="flex flex-1 flex-col items-center gap-1">
        {icon && (
          <div className="flex size-12 shrink-0 items-center justify-center">
            {icon}
          </div>
        )}

        <span className="heading text-center">{label}</span>
      </div>

    </label>
  );
};