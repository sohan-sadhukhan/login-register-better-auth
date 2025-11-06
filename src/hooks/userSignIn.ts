import { authClient } from "@/lib/betterAuth/auth-client";
import { LoginType } from "@/lib/type";

const userSignIn = async ({ email, password }: LoginType) => {
	try {
		const { error } = await authClient.signIn.email({
			email,
			password,
		});

		if (error) {
			return {
				isSuccess: false,
				message: error.message,
			};
		}

		return {
			isSuccess: true,
			message: "User signed in successfully 🤗",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "User sign-in failed 😞",
		};
	}
};

export default userSignIn;
