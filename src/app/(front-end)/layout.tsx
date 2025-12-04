import Header from "@/components/Header/PublicHeader/Header";
import { PageLayoutProps } from "@/lib/type";
import "../globals.css";

const RootLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<Header />

			<main className="container mx-auto px-6 py-3">{children}</main>
		</>
	);
};

export default RootLayout;
