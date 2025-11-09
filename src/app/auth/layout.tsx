import { PageLayoutProps } from "@/lib/type";

const RootLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<main className="container mx-auto px-6 py-3">{children}</main>
		</>
	);
};

export default RootLayout;
