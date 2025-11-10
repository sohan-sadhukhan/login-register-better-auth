"use client";

import { authClient } from "@/lib/betterAuth/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

const LogoutButton = () => {
	const { replace } = useRouter();

	const logoutHandler = async () => {
		try {
			const { error } = await authClient.signOut({
				fetchOptions: {
					onSuccess: () => replace("/auth/login"),
				},
			});

			if (error) {
				toast.error(error.message);
			}

			if (error === null) {
				toast.success("Logged out successfully");
			}
		} catch (error) {
			toast.error("An unexpected error occurred during logout.");
		}
	};
	return (
		<Button
			onClick={logoutHandler}
			variant={"destructive"}
			className="cursor-pointer">
			Logout
		</Button>
	);
};

export default LogoutButton;
