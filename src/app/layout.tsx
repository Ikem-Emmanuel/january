import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import Navbar from "../components/Template/Navbar";
import Footer from "../components/Template/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "DevKodes",
	description: "Next.js starter app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<div className="container">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
