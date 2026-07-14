import { PaymentMethod } from "../model/types";

export const getOrderDetails = (
  values: Record<string, FormDataEntryValue>,
  paymentMethod: PaymentMethod,
) => {
  return {
    customerName: values.customerName,
    phone: values.phone,
    email: values.email,
    shippingAddress: values.shippingAddress,
    projectNotes: values.projectNotes || undefined,
    payment: getPaymentDetails(values, paymentMethod),
  };
};

const getPaymentDetails = (
  values: Record<string, FormDataEntryValue>,
  paymentMethod: PaymentMethod,
) => {
  switch (paymentMethod) {
    case "card":
      return {
        method: "card",
        cardNumber: values.cardNumber,
        expiration: values.expiration,
        cvv: values.cvv,
      };

    case "paypal":
      return {
        method: "paypal",
        paypalEmail: values.paypalEmail,
      };

    case "apple-pay":
      return {
        method: "apple-pay",
        applePayContact: values.applePayContact,
      };

    case "bank-transfer":
      return {
        method: "bank-transfer",
        accountHolder: values.accountHolder,
        bankName: values.bankName,
        iban: values.iban,
      };
  }
};