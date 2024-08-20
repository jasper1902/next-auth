import { UserRole } from "@prisma/client";
import * as z from "zod";

// Base schema for email
const EmailSchema = z.string().email({ message: "Email is required" });

// Base schema for password
const PasswordSchema = z.string().min(6, { message: "Minimum 6 characters required" });

// Base schema for optional string
const OptionalStringSchema = z.string().optional();

// Base schema for optional boolean
const OptionalBooleanSchema = z.boolean().optional();

// Login schema
export const LoginSchema = z.object({
  email: EmailSchema,
  password: z.string().min(1, { message: "Password is required" }),
  code: z.string().optional(),
});

// Registration schema
export const RegisterSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
  name: z.string().min(1, { message: "Name is required" }),
});

// Reset password schema
export const ResetSchema = z.object({
  email: EmailSchema,
});

// New password schema
export const NewPasswordSchema = z.object({
  password: PasswordSchema,
});

// Settings schema with refined validations
export const SettingsSchema = z.object({
  name: OptionalStringSchema,
  isTwoFactorEnabled: OptionalBooleanSchema,
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: OptionalStringSchema.refine(val => val === undefined || EmailSchema.safeParse(val).success, {
    message: "Invalid email format",
  }),
  password: OptionalStringSchema.refine(val => val === undefined || PasswordSchema.safeParse(val).success, {
    message: "Password is too short",
  }),
  newPassword: OptionalStringSchema.refine(val => val === undefined || PasswordSchema.safeParse(val).success, {
    message: "New password is too short",
  }),
})
.refine(data => !data.password || data.newPassword, {
  message: "New password is required when changing password!",
  path: ["newPassword"],
})
.refine(data => !data.newPassword || data.password, {
  message: "Current password is required when setting a new password!",
  path: ["password"],
});

// Type exports
export type SettingsForm = z.infer<typeof SettingsSchema>;
export type LoginForm = z.infer<typeof LoginSchema>;
export type NewPassword = z.infer<typeof NewPasswordSchema>;
export type RegisterForm = z.infer<typeof RegisterSchema>;
export type ResetForm = z.infer<typeof ResetSchema>;
