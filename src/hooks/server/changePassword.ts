"use server";

import { auth } from "@/lib/betterAuth/auth";
import { ChangePasswordType } from "@/lib/type";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

const changePassword = async ({
	currentPassword,
	newPassword,
}: ChangePasswordType) => {
	try {
		await auth.api.changePassword({
			body: {
				currentPassword,
				newPassword,
			},
			headers: await headers(),
		});

		revalidatePath("/", "layout");

		return {
			isSussess: true,
			message: "Password successfully changed✌️",
		};
	} catch (error) {
		return {
			isSussess: false,
			message: "Password not Changed😒",
		};
	}
};

export default changePassword;
