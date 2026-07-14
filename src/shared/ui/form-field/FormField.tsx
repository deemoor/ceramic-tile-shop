// features/fill-order-details/ui/FormField.tsx

import { cn } from "@/features/add-tile-to-cart/ui/AddTilePopover";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  withBorder?: boolean,
  labelPosition?: "left" | "top";
};

export const FormField = ({
  label,
  error,
  id,
  name,
  withBorder = false,
  labelPosition = "left",
  ...inputProps
}: Props) => {
  const inputId = id ?? name;

  return (
    <div>
      <div className={`flex gap-2 ${labelPosition === "top" && "flex-col"}`}>
        {label &&
          <label
            htmlFor={inputId}
            className="heading shrink-0 text-lg"
          >
            {label}:
          </label>
        }

        <input
          {...inputProps}
          id={inputId}
          name={name}
          className={cn("min-w-0 flex-1 border-b-2 border-black bg-background px-1 outline-none",
            withBorder && "border-2 rounded-1"
          )}
        />
      </div>

      {error && (
        <p className="mt-1 text-sm text-red">
          {error}
        </p>
      )}
    </div>
  );
};