import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Néstor Árce | Personal Trainer",
	description: "Hey there! I'm your new personal trainer, are you ready? 😾",
};

export default function RootLayout({
	children,
	mainClass,
}: Readonly<{
	children: React.ReactNode;
	mainClass?: string;
}>) {
	return (
		<html data-theme="dark" lang="es">
			<body className={`${inter.className} overflow-x-hidden`}>
				<NavbarComponent />
				<main className={`${mainClass ? mainClass : "pt-40"}`}>{children}</main>
			</body>
		</html>
	);
}
