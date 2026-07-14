import { FormErrors } from "@/shared/types";
import { ApplePayPaymentFields } from "../ui/payment-fields/ApplePayPaymentFields";
import { BankTransferFields } from "../ui/payment-fields/BankTransferFields";
import { CardPaymentFields } from "../ui/payment-fields/CardPaymentFields";
import { PayPalPaymentFields } from "../ui/payment-fields/PayPalPaymentFields";
import { PaymentMethod } from "./types";

export const paymentMethods: Array<{
  value: PaymentMethod;
  label: string;
  icon?: string;
}> = [
  {
    value: "card",
    label: "Credit/Debit Card",
    icon: "/icons/credit-card.svg"
  },
  {
    value: "paypal",
    label: "PayPal",
    icon: "/icons/paypal.svg"
  },
  {
    value: "apple-pay",
    label: "Apple Pay",
    icon: "/icons/apple-pay.svg"
  },
  {
    value: "bank-transfer",
    label: "Bank Transfer",
    icon: "/icons/bank.svg"
  },
];

export const paymentFieldsMap = {
  card: CardPaymentFields,
  paypal: PayPalPaymentFields,
  "apple-pay": ApplePayPaymentFields,
  "bank-transfer": BankTransferFields,
} satisfies Record<
  PaymentMethod,
  React.ComponentType<{
    errors: FormErrors;
  }>
>;