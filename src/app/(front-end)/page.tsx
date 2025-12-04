import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Auth App",
	description: "Home page of Auth App",
};

const page = () => {
	return (
		<section className="mt-8 flex h-[90dvh] flex-col items-center justify-center gap-4">
			<div className="text-5xl font-semibold">Welcome to AuthApp 🔒</div>

			<div className="text-lg font-light text-black/70 dark:text-white/70">
				Securely manage your data and access your personalized dashboard.
			</div>

			<div className="text-xl">
				<span className="font-semibold"> Features: -</span> 🔒 Secure
				Authentication, 📊 Personalized Dashboard, ⚡ Fast & Reliable
			</div>
		</section>
	);
};

export default page;
