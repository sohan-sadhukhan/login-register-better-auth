"use client";

import { Button } from "@/components/shadcnui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/shadcnui/dialog";
import deleteAccount from "@/hooks/server/deleteAccount";
import { DeleteAccountType } from "@/lib/type";
import { deleteAccountSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const DeleteAccountForm = () => {
	const { replace } = useRouter();

	const [open, setOpen] = useState(false);

	const {
		handleSubmit,
		control,
		formState: { isSubmitting, isDirty },
	} = useForm<DeleteAccountType>({
		resolver: zodResolver(deleteAccountSchema),
		defaultValues: {
			password: "",
		},
		mode: "all",
	});

	const deleteAccountHandler = async ({ password }: DeleteAccountType) => {
		const { isSuccess, message } = await deleteAccount(password);

		if (!isSuccess) {
			toast.error(message);
		}

		if (isSuccess) {
			toast.success(message);

			replace("/");
		}
	};

	return (
		<div className="border-destructive/40 mt-10 flex flex-col gap-4 rounded-xl border p-5">
			<h2 className="text-destructive text-xl font-semibold">Danger Zone</h2>
			<p className="text-muted-foreground text-sm leading-5">
				Permanently delete your account and all associated data. This action
				cannot be undone.
			</p>

			<Dialog
				open={open}
				onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button
						variant="destructive"
						type="button"
						className="flex w-full cursor-pointer items-center gap-2">
						<Trash2 size={18} />
						Delete Account
					</Button>
				</DialogTrigger>

				<DialogContent className="max-w-sm">
					<DialogHeader>
						<DialogTitle className="text-destructive flex items-center gap-2">
							<AlertTriangle size={22} />
							Delete Account
						</DialogTitle>

						<DialogDescription>
							Are you absolutely sure? This action is irreversible and will
							permanently remove your account.
						</DialogDescription>
					</DialogHeader>

					<DialogFooter className="w-full sm:flex-col sm:justify-normal">
						<form
							id="delete-account-form"
							onSubmit={handleSubmit(deleteAccountHandler)}>
							<Controller
								name="password"
								control={control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="-rhf-input-currentPassword">
											Current Password
										</FieldLabel>

										<Input
											{...field}
											id={field.name}
											aria-invalid={fieldState.invalid}
											placeholder="Enter your current Password"
											autoComplete="currentPassword"
											type="password"
											className="my-1"
										/>

										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>

							<div>
								<Button
									variant="outline"
									onClick={() => setOpen(false)}
									className="my-1 w-full cursor-pointer"
									disabled={isSubmitting}
									type="button">
									Cancel
								</Button>
								<Button
									type="submit"
									variant="destructive"
									disabled={isSubmitting || !isDirty}
									onClick={() => setOpen(false)}
									className="my-1 flex w-full cursor-pointer items-center gap-2">
									{isSubmitting ? (
										<>
											<Loader2 className="animate-spin" />
											Deleting...
										</>
									) : (
										<>
											<Trash2 size={18} />
											Delete
										</>
									)}
								</Button>
							</div>
						</form>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default DeleteAccountForm;
