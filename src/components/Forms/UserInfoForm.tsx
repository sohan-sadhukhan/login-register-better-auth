"use client";

import userSignIn from "@/hooks/userSignIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginType } from "../../lib/type";
import { loginSchema } from "../../lib/zodSchema";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const UserInfoForm = () => {
	const { push } = useRouter();

	const lForm = useForm<LoginType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "all",
	});

	const loginHandeler = async (lData: LoginType) => {
		const { isSuccess, message } = await userSignIn(lData);

		if (!isSuccess) {
			toast.error(message);
		}

		if (isSuccess) {
			toast.success(message);

			lForm.reset();

			push("/studio");
		}
	};
	return (
		<form
			id="lForm-rhf-input"
			onSubmit={lForm.handleSubmit(loginHandeler)}>
			<FieldGroup>
				<Controller
					name="email"
					control={lForm.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="lForm-rhf-input-email">Email</FieldLabel>
							<Input
								{...field}
								id="lForm-rhf-input-email"
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
					control={lForm.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="lForm-rhf-input-password">
								password
							</FieldLabel>
							<Input
								{...field}
								id="lForm-rhf-input-password"
								aria-invalid={fieldState.invalid}
								placeholder="Enter your password"
								autoComplete="password"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>

			<Button
				className="mt-8 w-full cursor-pointer"
				type="submit"
				disabled={lForm.formState.isSubmitting}>
				{lForm.formState.isSubmitting ? (
					<>
						<Loader2 className="animate-spin" /> Submitting..
					</>
				) : (
					<>
						<Lock />
						Sign In
					</>
				)}
			</Button>
		</form>
	);
};

export default UserInfoForm;
