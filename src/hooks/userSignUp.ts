import { authClient } from "@/lib/betterAuth/auth-client";
import { RegisterType } from "@/lib/type";

const userSignUp = async ({ email, name, password }: RegisterType) => {
	try {
		const { error } = await authClient.signUp.email({
			email,
			name,
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
			message: "User Registration Successfully 🤗",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "User registration failed 😞",
		};
	}
};

export default userSignUp;
