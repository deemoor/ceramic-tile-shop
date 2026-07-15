"use client";

import { ReactNode, SubmitEventHandler, useState } from "react";

import type { FormErrors } from "@/shared/types";

import { orderDetailsSchema } from "../model/schema";
import type { PaymentMethod } from "../model/types";

import { CustomerDetailsFields } from "./CustomerDetailsFields";
import { PaymentMethodFields } from "./PaymentMethodFields";
import { getOrderDetails } from "../lib/getOrderDetails";
import { getFormErrors } from "@/shared/lib";

type Props = {
  children: ReactNode;
}

export const OrderSummary = ({ children }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData);

    const result = orderDetailsSchema.safeParse(
      getOrderDetails(values, paymentMethod),
    );

    if (!result.success) {
      setErrors(getFormErrors(result.error));
      return;
    }

    setErrors({});
    console.log(result.data);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <CustomerDetailsFields errors={errors} />

      <div className="mt-8">
        {children}
      </div>

      <div className="mt-8">
        <PaymentMethodFields
          paymentMethod={paymentMethod}
          onPaymentMethodChange={(value) => setPaymentMethod(value)}
          errors={errors}
        />
      </div>

      <button
        type="submit"
        className="button-primary mt-4 w-full p-3"
      >
        Place secure order
      </button>
    </form>
  );
};