import { FormField } from "@/shared/ui/form-field";
import { FormErrors } from "@/shared/types";

type Props = {
  errors: FormErrors;
};

export const CardPaymentFields = ({ errors }: Props) => {
  return (
    <div className="grid gap-3">
      <FormField
        label="Card number"
        name="cardNumber"
        type="text"
        inputMode="numeric"
        autoComplete="cc-number"
        placeholder="1234 4567 8901 2345"
        error={errors.cardNumber}
        withBorder
        labelPosition="top"
      />

      <div className="grid grid-cols-2 gap-3">
        <FormField
          name="expiration"
          type="text"
          inputMode="numeric"
          autoComplete="cc-exp"
          placeholder="MM/YY"
          error={errors.expiration}
          withBorder
        />

        <FormField
          name="cvv"
          type="password"
          inputMode="numeric"
          autoComplete="cc-csc"
          placeholder="123"
          maxLength={4}
          error={errors.cvv}
          withBorder
        />
      </div>
    </div>
  );
};