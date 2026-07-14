import { FormField } from "@/shared/ui/form-field";
import { FormErrors } from "@/shared/types";

type Props = {
  errors: FormErrors;
};

export const BankTransferFields = ({ errors }: Props) => {
  return (
    <div className="grid gap-3">
      <FormField
        label="Account holder"
        name="accountHolder"
        type="text"
        autoComplete="name"
        error={errors.accountHolder}
        withBorder
      />

      <FormField
        label="Bank name"
        name="bankName"
        type="text"
        autoComplete="organization"
        error={errors.bankName}
        withBorder
      />

      <FormField
        label="IBAN / account number"
        name="iban"
        type="text"
        autoCapitalize="characters"
        autoComplete="off"
        error={errors.iban}
        withBorder
      />
    </div>
  );
};