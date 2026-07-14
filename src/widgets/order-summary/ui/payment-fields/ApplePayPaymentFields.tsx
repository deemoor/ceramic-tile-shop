import { FormField } from "@/shared/ui/form-field";
import { FormErrors } from "@/shared/types";

type Props = {
  errors: FormErrors;
};

export const ApplePayPaymentFields = ({ errors }: Props) => {
  return (
    <div className="grid gap-3">
      <FormField
        label="Apple Pay"
        name="applePayContact"
        type="text"
        autoComplete="email"
        placeholder="Email or phone number"
        error={errors.applePayContact}
        withBorder
      />
    </div>
  );
};