import { describe, expect, it } from "vitest";
import { getOrderDetails } from "./getOrderDetails";

describe("getOrderDetails", () => {
  const baseValues: Record<string, FormDataEntryValue> = {
    customerName: "John Doe",
    phone: "+123456789",
    email: "john@example.com",
    shippingAddress: "123 Main St",
    projectNotes: "Leave at the front door",
    cardNumber: "4111111111111111",
    expiration: "12/30",
    cvv: "123",
    paypalEmail: "paypal@example.com",
    applePayContact: "john@icloud.com",
    accountHolder: "John Doe",
    bankName: "Bank",
    iban: "DE89370400440532013000",
  };

  it("returns order details for card payment", () => {
    expect(getOrderDetails(baseValues, "card")).toEqual({
      customerName: "John Doe",
      phone: "+123456789",
      email: "john@example.com",
      shippingAddress: "123 Main St",
      projectNotes: "Leave at the front door",
      payment: {
        method: "card",
        cardNumber: "4111111111111111",
        expiration: "12/30",
        cvv: "123",
      },
    });
  });

  it("returns order details for PayPal payment", () => {
    expect(getOrderDetails(baseValues, "paypal")).toEqual({
      customerName: "John Doe",
      phone: "+123456789",
      email: "john@example.com",
      shippingAddress: "123 Main St",
      projectNotes: "Leave at the front door",
      payment: {
        method: "paypal",
        paypalEmail: "paypal@example.com",
      },
    });
  });

  it("returns order details for Apple Pay payment", () => {
    expect(getOrderDetails(baseValues, "apple-pay")).toEqual({
      customerName: "John Doe",
      phone: "+123456789",
      email: "john@example.com",
      shippingAddress: "123 Main St",
      projectNotes: "Leave at the front door",
      payment: {
        method: "apple-pay",
        applePayContact: "john@icloud.com",
      },
    });
  });

  it("returns order details for bank transfer payment", () => {
    expect(getOrderDetails(baseValues, "bank-transfer")).toEqual({
      customerName: "John Doe",
      phone: "+123456789",
      email: "john@example.com",
      shippingAddress: "123 Main St",
      projectNotes: "Leave at the front door",
      payment: {
        method: "bank-transfer",
        accountHolder: "John Doe",
        bankName: "Bank",
        iban: "DE89370400440532013000",
      },
    });
  });

  it("returns undefined when project notes are empty", () => {
    const values = {
      ...baseValues,
      projectNotes: "",
    };

    expect(getOrderDetails(values, "paypal").projectNotes).toBeUndefined();
  });
});