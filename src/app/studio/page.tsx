import { auth } from "@/lib/betterAuth/auth";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
	title: "Dashboard | Auth App",
	description: "Dashboard page of Auth App",
};

const page = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	return (
		<section className="grid h-[90dvh] place-content-center gap-4">
			<div className="text-5xl font-semibold">
				Hello, {session?.user.name} 👋
			</div>
		</section>
	);
};

export default page;
