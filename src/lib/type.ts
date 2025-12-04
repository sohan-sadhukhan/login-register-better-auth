import { ReactNode } from "react";
import z from "zod";
import {
	changePasswordSchema,
	deleteAccountSchema,
	editUserDetailsSchema,
	loginSchema,
	registerSchema,
} from "./zodSchema";

// Layout Props

export type PageLayoutProps = Readonly<{
	children: ReactNode;
}>;

// Form Data Types

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
export type EditUserDetailsType = z.infer<typeof editUserDetailsSchema>;
export type ChangePasswordType = z.infer<typeof changePasswordSchema>;
export type DeleteAccountType = z.infer<typeof deleteAccountSchema>;
