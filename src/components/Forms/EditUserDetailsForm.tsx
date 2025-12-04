"use client";

import editUserDetails from "@/hooks/server/editUserDetails";
import { authClient } from "@/lib/betterAuth/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { EditUserDetailsType } from "../../lib/type";
import { editUserDetailsSchema } from "../../lib/zodSchema";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import { Skeleton } from "../shadcnui/skeleton";

const EditUserDetailsForm = () => {
	const { push } = useRouter();

	const { data, refetch } = authClient.useSession();

	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting, isDirty },
	} = useForm<EditUserDetailsType>({
		resolver: zodResolver(editUserDetailsSchema),
		defaultValues: {
			name: "",
			email: "",
		},
		mode: "all",
	});

	useEffect(() => {
		if (data?.user) {
			reset({
				name: data.user.name,
				email: data.user.email,
			});
		}
	}, [data]);

	const loginHandeler = async (userData: EditUserDetailsType) => {
		const res = await editUserDetails(userData);

		if (!res?.isSussess) {
			refetch();

			toast.error(res?.message);
		}

		if (res?.isSussess) {
			refetch();

			push("/studio");

			toast.success(res?.message);
		}
	};
	return (
		<form
			id="edit-userDetails-form"
			onSubmit={handleSubmit(loginHandeler)}>
			<FieldGroup className="grid grid-cols-2 gap-3">
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="-rhf-input-name">Name</FieldLabel>

							{!data ? (
								<Skeleton className="h-[38px] w-[414px] rounded-full" />
							) : (
								<Input
									{...field}
									id={field.name}
									aria-invalid={fieldState.invalid}
									placeholder="Enter your name"
									autoComplete="name"
								/>
							)}
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="-rhf-input-email">Email</FieldLabel>
							{!data ? (
								<Skeleton className="h-[38px] w-[414px] rounded-full" />
							) : (
								<Input
									{...field}
									id={field.name}
									aria-invalid={fieldState.invalid}
									placeholder="Enter your email"
									autoComplete="Email"
								/>
							)}

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>

			<Button
				className="mt-8 w-96 cursor-pointer"
				type="submit"
				disabled={isSubmitting || !isDirty}>
				{isSubmitting ? (
					<>
						<Loader2 className="animate-spin" /> Saveing..
					</>
				) : (
					<>
						<EditIcon />
						Save
					</>
				)}
			</Button>
		</form>
	);
};

export default EditUserDetailsForm;
