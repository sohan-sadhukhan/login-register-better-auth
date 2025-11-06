import { ReactNode } from "react";
import z from "zod";
import { loginSchema, registerSchema } from "./zodSchema";

export type PageLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
