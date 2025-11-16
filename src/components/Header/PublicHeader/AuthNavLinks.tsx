import { auth } from "@/lib/betterAuth/auth";
import { headers } from "next/headers";
import Link from "next/link";

const AuthNavLinks = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return (
		<div>
			{!session && (
				<div className="flex items-center gap-6">
					<Link
						href={"/auth/login"}
						className="font-medium hover:text-white/85">
						Login
					</Link>

					<Link
						href={"/auth/register"}
						className="font-medium hover:text-white/85">
						Register
					</Link>
				</div>
			)}

			{session && (
				<Link
					href={"/studio"}
					className="font-medium">
					Dashbord
				</Link>
			)}
		</div>
	);
};

export default AuthNavLinks;
