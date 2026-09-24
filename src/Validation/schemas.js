import { z } from "zod";

const phoneRegex = /^(?:\+2519|\+2517|09|07)\d{8}$/;

export const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Enter a valid email."),
    phone: z.string().regex(phoneRegex, "Enter a valid Ethiopian phone number."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
});

export const loginSchema = z.object({
    email: z.string().email("Enter a valid email.").optional().or(z.literal("")),
    phone: z.string().regex(phoneRegex, "Enter a valid Ethiopian phone number.").optional().or(z.literal("")),
    password: z.string().min(6, "Password must be at least 6 characters.")
}).refine((data) => data.email || data.phone, {
    message: "Enter your email or phone number.",
    path: ["email"]
});

export const checkoutSchema = z.object({
    recipientName: z.string().min(2, "Enter recipient name."),
    phone: z.string().regex(phoneRegex, "Enter a valid Ethiopian phone number."),
    email: z.string().email("Enter a valid email."),
    subCity: z.string().min(2, "Enter your sub-city."),
    streetAddress: z.string().min(2, "Enter your street address."),
    landmark: z.string().optional(),
    dispatchTiming: z.string().min(1, "Select dispatch timing."),
    dinnerTime: z.string().optional(),
    paymentMethod: z.string().min(1, "Select payment method."),
    telebirrPhone: z.string().optional()
});