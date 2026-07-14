"use client";

import { FormEvent, useState } from "react";
import { OrderDetailsErrors } from "../model/types";
import { orderDetailsSchema } from "../model/schema";
import { FormField } from "./FormField";

export const OrderDetailsForm = () => {
  const [errors, setErrors] = useState<OrderDetailsErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const result = orderDetailsSchema.safeParse({
      customerName: formData.get("customerName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      shippingAddress: formData.get("shippingAddress"),
      projectNotes: formData.get("projectNotes") || undefined,
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        customerName: fieldErrors.customerName?.[0],
        phone: fieldErrors.phone?.[0],
        email: fieldErrors.email?.[0],
        shippingAddress: fieldErrors.shippingAddress?.[0],
        projectNotes: fieldErrors.projectNotes?.[0],
      });

      return;
    }

    setErrors({});

    console.log(result.data);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-3">
        <FormField
          label="Customer name"
          name="customerName"
          autoComplete="name"
          error={errors.customerName}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            error={errors.phone}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
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
          error={errors.projectNotes}
        />
      </div>

      <button type="submit" className="button-primary mt-5">
        Submit order
      </button>
    </form>
  );
};