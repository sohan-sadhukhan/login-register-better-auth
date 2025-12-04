import { authClient } from "@/lib/betterAuth/auth-client";
import { LoginType } from "@/lib/type";

const userSignIn = async ({ email, password }: LoginType) => {
	try {
		const { error, data } = await authClient.signIn.email({
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
			message: `Welcome ${data.user.name}🤗`,
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
