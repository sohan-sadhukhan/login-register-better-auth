"use server";

import { auth } from "@/lib/betterAuth/auth";
import { EditUserDetailsType } from "@/lib/type";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

const editUserDetails = async ({ name, email }: EditUserDetailsType) => {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (name !== session?.user.name) {
			await auth.api.updateUser({
				body: {
					name,
				},
				headers: await headers(),
			});
		}
		if (email !== session?.user.email) {
			await auth.api.changeEmail({
				body: {
					newEmail: email,
				},
				headers: await headers(),
			});
		}

		revalidatePath("/", "layout");
		revalidatePath("/studio/settings");

		if (name !== session?.user.name && email !== session?.user.email) {
			return {
				isSussess: true,
				message: "Name & Email Successfully Changed✌️",
			};
		} else if (email !== session?.user.email) {
			return {
				isSussess: true,
				message: "Email Successfully Changed😊",
			};
		} else {
			return {
				isSussess: true,
				message: "Name Successfully Changed🤗",
			};
		}
	} catch (error) {
		return {
			isSussess: false,
			message: "Not Changed 😒",
		};
	}
};
export default editUserDetails;
