"use server";

import { auth } from "@/lib/betterAuth/auth";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

const deleteAccount = async (password: string) => {
	try {
		await auth.api.deleteUser({
			body: {
				password,
			},
			headers: await headers(),
		});

		revalidatePath("/studio/settings");
		revalidatePath("/", "layout");

		return {
			isSuccess: true,
			message: "Account successfully deleted 👍",
		};
	} catch (error) {
		return {
			isSuccess: false,
			message: "Account not deleted ❌",
		};
	}
};

export default deleteAccount;
