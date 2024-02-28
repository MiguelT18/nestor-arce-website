import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html data-theme="dark" lang="es">
			<body className={`${inter.className} overflow-x-hidden`}>
				<NavbarComponent />
				<main className="pt-36">{children}</main>
			</body>
		</html>
	);
}
