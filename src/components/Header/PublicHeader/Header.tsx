import ThemeToggleButton from "@/components/ThemeToggleButton";
import { auth } from "@/lib/betterAuth/auth";
import { headers } from "next/headers";
import Link from "next/link";

const Header = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return (
		<header
			className="fixed right-0 left-0 border-b shadow"
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<h1
						className="text-2xl font-semibold"
						aria-label="App Name">
						Auth App
					</h1>
				</Link>

				<nav className="flex items-center gap-8">
					{!session && (
						<div className="flex items-center gap-6">
							<Link
								href={"/auth/login"}
								className="font-medium dark:hover:text-white/85">
								Login
							</Link>

							<Link
								href={"/auth/register"}
								className="font-medium dark:hover:text-white/85">
								Register
							</Link>
						</div>
					)}

					{session && (
						<Link
							href={"/studio"}
							className="font-medium">
							Dashboard
						</Link>
					)}

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
