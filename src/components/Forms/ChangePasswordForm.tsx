"use client";

import changePassword from "@/hooks/server/changePassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditIcon, Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ChangePasswordType } from "../../lib/type";
import { changePasswordSchema } from "../../lib/zodSchema";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const ChangePasswordForm = () => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting, isDirty },
	} = useForm<ChangePasswordType>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmNewPassword: "",
		},
		mode: "all",
	});

	const changePasswordHandeler = async (password: ChangePasswordType) => {
		const { isSussess, message } = await changePassword(password);

		if (!isSussess) {
			reset();

			toast.error(message);
		}

		if (isSussess) {
			reset();

			toast.success(message);
		}
	};
	return (
		<form
			id="change-password-form"
			onSubmit={handleSubmit(changePasswordHandeler)}>
			<FieldGroup className="grid grid-cols-2 gap-4">
				<Controller
					name="currentPassword"
					control={control}
					render={({ field, fieldState }) => (
						<Field
							data-invalid={fieldState.invalid}
							className="col-span-2">
							<FieldLabel htmlFor="-rhf-input-currentPassword">
								Current Password
							</FieldLabel>

							<Input
								{...field}
								id={field.name}
								aria-invalid={fieldState.invalid}
								placeholder="Enter your current password"
								autoComplete="currentPassword"
								type="password"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="newPassword"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="-rhf-input-newPassword">
								New Password
							</FieldLabel>

							<Input
								{...field}
								id={field.name}
								aria-invalid={fieldState.invalid}
								placeholder="Enter your new password"
								autoComplete="newPassword"
								type="password"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="confirmNewPassword"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="-rhf-input-confirmNewPassword">
								Confirm New Password
							</FieldLabel>

							<Input
								{...field}
								id={field.name}
								aria-invalid={fieldState.invalid}
								placeholder="Enter confirm password"
								autoComplete="confirmNewPassword"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>

			<Button
				className="mt-8 w-96 cursor-pointer bg-blue-600 hover:bg-blue-600/80"
				type="submit"
				disabled={isSubmitting || !isDirty}>
				{isSubmitting ? (
					<>
						<Loader2 className="animate-spin" /> Updateing..
					</>
				) : (
					<>
						<EditIcon />
						Update Password
					</>
				)}
			</Button>
		</form>
	);
};

export default ChangePasswordForm;
