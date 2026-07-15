import { FormErrors } from "@/shared/types";
import { paymentFieldsMap, paymentMethods } from "../model/constants";
import { PaymentMethod } from "../model/types";
import { RadioButton } from "@/shared/ui/radio-button";
import { Icon } from "@/shared/ui/icon";

type Props = {
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  errors?: FormErrors;
};

export const PaymentMethodFields = ({
  paymentMethod,
  onPaymentMethodChange,
  errors = {},
}: Props) => {
  const PaymentFields = paymentFieldsMap[paymentMethod];
  
  return (
    <fieldset className="grid gap-3">
      <legend className="sr-only">Payment method:</legend>
      <h3 className="text-xl">Select Payment Method:</h3>

      <div className="
        grid grid-cols-2 border border-black 
        max-md:grid-cols-4 max-sm:grid-cols-2
      ">
        {paymentMethods.map(({ value, label, icon }) => (
          <RadioButton
            name="paymentMethod"
            value={value}
            label={label}
            checked={paymentMethod === value}
            onChange={() => onPaymentMethodChange(value)}
            icon={icon && <Icon src={icon} alt={value} size={48} />}
            key={value}
          />
        ))}
      </div>

      <div className="rounded-md border-2 border-text bg-surface p-4">
        <PaymentFields errors={errors} />
      </div>
    </fieldset>
  );
};