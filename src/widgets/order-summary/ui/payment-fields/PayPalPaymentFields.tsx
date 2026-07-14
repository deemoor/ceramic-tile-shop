import { FormField } from "@/shared/ui/form-field";
import { FormErrors } from "@/shared/types";

type Props = {
  errors: FormErrors;
};

export const PayPalPaymentFields = ({ errors }: Props) => {
  return (
    <div>
      <FormField
        label="PayPal"
        name="paypalEmail"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Email"
        error={errors.paypalEmail}
        withBorder
      />
    </div>
  );
};