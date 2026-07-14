import { z } from "zod";

const cardPaymentSchema = z.object({
  method: z.literal("card"),

  cardNumber: z
    .string()
    .trim()
    .regex(/^\d{13,19}$/, "Enter a valid card number"),

  expiration: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"),

  cvv: z
    .string()
    .trim()
    .regex(/^\d{3,4}$/, "Enter a valid CVV"),
});

const paypalPaymentSchema = z.object({
  method: z.literal("paypal"),

  paypalEmail: z
    .string()
    .trim()
    .email("Enter a valid PayPal email"),
});

const applePayPaymentSchema = z.object({
  method: z.literal("apple-pay"),

  applePayContact: z
    .string()
    .trim()
    .min(5, "Enter your Apple Pay email or phone"),
});

const bankTransferPaymentSchema = z.object({
  method: z.literal("bank-transfer"),

  accountHolder: z
    .string()
    .trim()
    .min(2, "Enter the account holder name"),

  bankName: z
    .string()
    .trim()
    .min(2, "Enter the bank name"),

  iban: z
    .string()
    .trim()
    .min(8, "Enter a valid IBAN or account number")
    .max(34, "Account number is too long"),
});

const paymentSchema = z.discriminatedUnion("method", [
  cardPaymentSchema,
  paypalPaymentSchema,
  applePayPaymentSchema,
  bankTransferPaymentSchema,
]);

export const orderDetailsSchema = z.object({
  customerName: z
    .string()
    .trim()
    .min(2, "Enter your name")
    .max(100, "Name is too long"),

  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(30, "Phone number is too long"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email"),

  shippingAddress: z
    .string()
    .trim()
    .min(5, "Enter a shipping address")
    .max(300, "Address is too long"),

  projectNotes: z
    .string()
    .trim()
    .max(1000, "Notes are too long")
    .optional(),

  payment: paymentSchema,
});