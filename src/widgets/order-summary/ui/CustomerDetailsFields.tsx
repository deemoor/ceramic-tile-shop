import { FormField } from "@/shared/ui/form-field";
import { FormErrors } from "@/shared/types";

type Props = {
  errors: FormErrors;
};

export const CustomerDetailsFields = ({ errors }: Props) => {
  return (
    <fieldset className="grid gap-3">
      <legend className="sr-only">
        Customer details
      </legend>

      <FormField
        label="Customer name"
        name="customerName"
        autoComplete="name"
        error={errors.customerName}
      />

      <div className="grid grid-cols-2 gap-3 max-xs:grid-cols-1">
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          error={errors.phone}
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <FormField
        label="Shipping address"
        name="shippingAddress"
        autoComplete="street-address"
        error={errors.shippingAddress}
      />

      <FormField
        label="Project notes"
        name="projectNotes"
        autoComplete="off"
        error={errors.projectNotes}
      />
    </fieldset>
  );
};