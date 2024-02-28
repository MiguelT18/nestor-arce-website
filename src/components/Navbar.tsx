"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/nestor_logo.png";
import Link from "next/link";

export default function NavbarComponent() {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 768);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="flex items-center justify-around border-b-2 border-white">
			<Link href="/">
				<Image
					priority={false}
					width={130}
					height={130}
					src={Logo}
					alt="Brand Logo"
				/>
			</Link>

			{isMobile ? (
				<>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button onClick={toggleMenu} className="p-2">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>

					{open && (
						<div className="w-full h-full absolute right-0 top-0 bg-[#18181b] text-white rounded-md">
							<ul className="[&>li]:text-2xl h-full flex flex-col gap-4 items-center justify-center">
								<li>
									<Link href="/" onClick={closeMenu}>
										Inicio
									</Link>
								</li>
								<li>
									<Link href="/recursos" onClick={closeMenu}>
										Recursos
									</Link>
								</li>
								<li>
									<Link href="/asesoria/asesoria-online" onClick={closeMenu}>
										Asesoría Online
									</Link>
								</li>
								<li>
									<Link
										href="/asesoria/asesoria-presencial"
										onClick={closeMenu}
									>
										Asesoría Presencial
									</Link>
								</li>
							</ul>
						</div>
					)}
				</>
			) : (
				<ul className="flex gap-2 items-center">
					<li>
						<Link
							href="/"
							className="hover:bg-[#3f3f46] block p-2 rounded-md transition-all"
						>
							Inicio
						</Link>
					</li>
					<li>
						<Link
							href="/recursos"
							className="hover:bg-[#3f3f46] block p-2 rounded-md transition-all"
						>
							Recursos
						</Link>
					</li>
					<li
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
					>
						<ul className="hover:bg-[#3f3f46]/20 block p-2 rounded-md cursor-pointer transition-all">
							Asesoría
						</ul>

						{open && (
							<ul className="absolute bg-[#18181b] [&>li]:text-white rounded-md">
								<li>
									<Link
										href="/asesoria/asesoria-online"
										className="hover:bg-[#3f3f46] block px-4 py-2 rounded-t-md transition-all"
									>
										Asesoría Online
									</Link>
								</li>
								<li>
									<Link
										href="/asesoria/asesoria-presencial"
										className="hover:bg-[#3f3f46] block px-4 py-2 rounded-b-md transition-all"
									>
										Asesoría Presencial
									</Link>
								</li>
							</ul>
						)}
					</li>
				</ul>
			)}
		</nav>
	);
}
