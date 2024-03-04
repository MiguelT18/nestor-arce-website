"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/images/nestor_logo.png";
import Link from "next/link";
import lib from "@/public/lib/brand_info.json";
import "iconify-icon";

export default function NavbarComponent() {
	const homeData = lib.home[0];

	const [itemOpen, setItemOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [isMenuOpen]);

	return (
		<>
			<nav className="w-full h-fit bg-black bg-opacity-30 backdrop-blur-md fixed z-40 flex items-center justify-around boder:border-b-2  boder:border-black border-b-2 border-white">
				<Link href="/">
					<Image
						priority={false}
						width={128}
						height={128}
						src={Logo}
						alt="Brand Logo"
					/>
				</Link>

				<ul className="font-medium text-white max-md:hidden flex gap-2 items-center text-sm">
					<li>
						<Link
							href="/"
							className="hover:bg-[#3f3f46] block p-2 rounded-md transition-all"
						>
							{homeData.title}
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
						onMouseEnter={() => setItemOpen(true)}
						onMouseLeave={() => setItemOpen(false)}
					>
						<ul className="hover:bg-[#3f3f46]/20 block p-2 rounded-md cursor-pointer transition-all">
							Asesoría
						</ul>

						{itemOpen && (
							<ul className="absolute bg-[#18181b] text-white rounded-md">
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

				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button onClick={toggleMenu} className="text-white md:hidden p-2">
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
			</nav>

			<div
				className={` transform transition-transform duration-300 ease-in-out ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				} fixed z-50 w-screen h-screen backdrop-blur-md right-0 top-0 bg-[#18181b] bg-opacity-45 text-white rounded-md`}
			>
				<button
					onClick={closeMenu}
					type="button"
					className="absolute right-0 mt-10 mr-14"
				>
					<iconify-icon icon="material-symbols:close" width="60" height="60" />
				</button>

				<ul className="text-white text-lg h-full flex flex-col gap-2 items-center justify-center">
					<li>
						<Link className="px-4 py-3 block" href="/" onClick={closeMenu}>
							Inicio
						</Link>
					</li>
					<li>
						<Link
							className="px-4 py-3 block"
							href="/recursos"
							onClick={closeMenu}
						>
							Recursos
						</Link>
					</li>
					<li>
						<Link
							className="px-4 py-3 block"
							href="/asesoria/asesoria-online"
							onClick={closeMenu}
						>
							Asesoría Online
						</Link>
					</li>
					<li>
						<Link
							className="px-4 py-3 block"
							href="/asesoria/asesoria-presencial"
							onClick={closeMenu}
						>
							Asesoría Presencial
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
