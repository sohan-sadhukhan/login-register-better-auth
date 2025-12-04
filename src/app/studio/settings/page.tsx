import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";
import DeleteAccountForm from "@/components/Forms/DeleteAccountForm";
import EditUserDetailsForm from "@/components/Forms/EditUserDetailsForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Settings | Auth App",
	description: "Settings page of Auth App",
};

const page = () => {
	return (
		<section className="mt-16 grid place-content-center gap-4">
			<Card className="w-4xl">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						Edit Personal Information
					</CardTitle>

					<CardDescription className="text-sm leading-5">
						Update your name and email below.
					</CardDescription>
				</CardHeader>

				<CardContent>
					<EditUserDetailsForm />
				</CardContent>
			</Card>

			<Card className="w-4xl">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						Change Password
					</CardTitle>

					<CardDescription className="text-sm leading-5">
						Update your security credentials
					</CardDescription>
				</CardHeader>

				<CardContent>
					<ChangePasswordForm />
				</CardContent>

				<CardContent>
					<DeleteAccountForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
