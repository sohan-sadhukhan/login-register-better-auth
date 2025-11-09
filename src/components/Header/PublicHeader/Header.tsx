import ThemeToggleButton from "@/components/ThemeToggleButton";
import Link from "next/link";

const Header = () => {
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

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
