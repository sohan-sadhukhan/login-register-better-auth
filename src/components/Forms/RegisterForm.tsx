"use client";

import userSignUp from "@/hooks/userSignUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterType } from "../../lib/type";
import { registerSchema } from "../../lib/zodSchema";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const RegisterForm = () => {
	const { push } = useRouter();

	const rForm = useForm<RegisterType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "all",
	});

	const registerHandeler = async (rData: RegisterType) => {
		const { isSuccess, message } = await userSignUp(rData);

		if (!isSuccess) {
			toast.error(message);
		}

		if (isSuccess) {
			toast.success(message);

			rForm.reset();

			push("/auth/login");
		}
	};
	return (
		<form
			id="form-rhf-input"
			onSubmit={rForm.handleSubmit(registerHandeler)}
			noValidate>
			<FieldGroup>
				<Controller
					name="name"
					control={rForm.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="rForm-rhf-input-name">Name</FieldLabel>
							<Input
								{...field}
								id="rForm-rhf-input-name"
								aria-invalid={fieldState.invalid}
								placeholder="Enter your name"
								autoComplete="Name"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="email"
					control={rForm.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="rForm-rhf-input-email">Email</FieldLabel>
							<Input
								{...field}
								id="rForm-rhf-input-email"
								aria-invalid={fieldState.invalid}
								placeholder="Enter your email"
								autoComplete="Email"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="password"
					control={rForm.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="rForm-rhf-input-password">
								Password
							</FieldLabel>
							<Input
								{...field}
								id="rForm-rhf-input-password"
								aria-invalid={fieldState.invalid}
								placeholder="Enter your password"
								autoComplete="password"
								type="password"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="confirmPassword"
					control={rForm.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="rForm-rhf-input-confirmPassword">
								confirmconfirmPassword
							</FieldLabel>
							<Input
								{...field}
								id="rForm-rhf-input-confirmPassword"
								aria-invalid={fieldState.invalid}
								placeholder="Enter your confirm password"
								autoComplete="confirmPassword"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>

			<Button
				className="mt-8 w-full cursor-pointer"
				type="submit"
				disabled={rForm.formState.isSubmitting}>
				{rForm.formState.isSubmitting ? (
					<>
						<Loader2 className="animate-spin" /> Submitting..
					</>
				) : (
					<>
						<Lock />
						Sign Up
					</>
				)}
			</Button>
		</form>
	);
};

export default RegisterForm;
