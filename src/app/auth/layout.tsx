import { PageLayoutProps } from "@/lib/type";

const RootLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<main className="container mx-auto py-3">{children}</main>
		</>
	);
};

export default RootLayout;
