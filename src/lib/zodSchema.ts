import z from "zod";

// Reusable name schema

const nameSchema = z
	.string()
	.min(2, { error: "Name must be minimum 2 characters long" })
	.max(50, { error: "Name must not exceed 50 characters" });

// Reusable email schema

const emailSchema = z
	.email({ error: "Invalid email address" })
	.max(100, { error: "Email must not exceed 100 characters" });

// Reusable password schema

const passwordSchema = z
	.string()
	.min(8, { error: "Password must be at least 8 characters long" })
	.max(64, { error: "Password must not exceed 64 characters" });

// Login Schema

export const loginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});

// Register Schema

export const registerSchema = z
	.object({
		name: nameSchema,

		email: emailSchema,

		password: passwordSchema,

		confirmPassword: passwordSchema,
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: "Password didn't match",
		path: ["confirmPassword"],
	});

// Edit Profile Schema

export const editUserDetailsSchema = z.object({
	name: nameSchema,

	email: emailSchema,
});

// Change Password Schema

export const changePasswordSchema = z
	.object({
		currentPassword: passwordSchema,
		newPassword: passwordSchema,
		confirmNewPassword: passwordSchema,
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		error: "Password didn't match",
		path: ["confirmNewPassword"],
	});

// Delete Account Schema

export const deleteAccountSchema = z.object({
	password: passwordSchema,
});
