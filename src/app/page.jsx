"use client";

import React from "react";
import Image from "next/image";
import HomeImage from "@/public/images/antes_despues/nestor_1.jpg";
import UIButton from "@/components/pure/home/Button.jsx";
import lib from "@/public/lib/brand_info.json";
import backgroundImage from "@/public/images/random/home_section_background.jpg";

//? ICONS
import "iconify-icon";

//? SWIPER SLIDER
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

// import required modules
import { EffectFlip, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
	const homeData = lib.home[1];

	return (
		<>
			<div className="absolute -z-10 top-0 w-screen h-screen opacity-15">
				<Image
					src={backgroundImage}
					alt="background"
					className="w-full h-full object-cover fixed"
				/>
			</div>

			<section className="pt-5 pb-14">
				<h1 className="block px-4 py-5 text-white bg-[#490b0a] font-medium text-lg text-center uppercase mb-10">
					{homeData.branding}
				</h1>

				<div className="flex flex-col gap-6 items-center w-full lg:max-w-[70%] mx-auto max-lg:px-4 pt-8 lg:flex-row lg:[&>div]:text-start [&>div]:text-center">
					<Image
						className="w-full max-w-[420px] h-full mx-auto"
						width={300}
						height={300}
						src={HomeImage}
						alt="Personal Trainer"
					/>
					<div className="[&>h2]:font-medium [&>h2]:uppercase [&>h2]:text-md [&>h2]:mb-3 [&>p]:text-sm [&>p]:font-light w-full max-w-[580px] mx-auto">
						<h2>{homeData.about.title}</h2>
						<p>{homeData.about.description}</p>
					</div>
				</div>

				<div className="[&>h1]:px-4 [&>h1]:pb-5 [&>h1]:text-center [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-medium mt-20 mb-6">
					<h1>{homeData.social_media.title}</h1>

					<div className="flex justify-center gap-20 pt-8">
						{homeData.social_media.url.map((item) => (
							<UIButton target={item.url} key={item.id}>
								<iconify-icon icon={item.icon} width="55" height="55" />
							</UIButton>
						))}
					</div>
				</div>
			</section>

			<section className="px-8 mb-10">
				<h1 className="text-lg text-center uppercase font-medium pb-8">
					{homeData.remarketing.title}
				</h1>

				<div className="w-full max-w-[1080px] mx-auto flex gap-8 max-md:flex-col [&>article]:mx-auto [&>article]:w-full [&>article]:max-w-[320px] [&>article]:bg-[#490b0a] [&>article]:px-6 [&>article]:py-4 [&>article>p]:text-sm">
					{homeData.remarketing.card.map((card) => (
						<article key={card.id}>
							<iconify-icon icon={card.icon} width="60" height="60" />
							<h2 className="text-sm uppercase font-medium mt-2 mb-2">
								{card.title}
							</h2>
							<p className="text-sm font-light">{card.description}</p>
						</article>
					))}
				</div>
			</section>

			<hr className="mt-14 mb-14 w-full max-w-[70%] mx-auto" />

			<section>
				<h1 className="text-lg text-center uppercase font-medium px-4">
					{homeData.remarketing.cta.title}
				</h1>

				<div className="w-full max-w-[1080px] mx-auto flex flex-wrap">
					{homeData.remarketing.cta.list.map((item) => (
						<div
							className="flex flex-col items-center w-full max-w-[320px] mx-auto py-8 px-4 gap-4 text-center"
							key={item.id}
						>
							<iconify-icon icon={item.icon} width="80" height="80" />
							<div className="[&>h2]:text-sm [&>h2]:font-bold [&>h2]:uppercase [&>p]:text-sm flex flex-col gap-2">
								<h2>{item.title}</h2>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<hr className="mt-14 mb-10 w-full max-w-[70%] mx-auto" />

			<section className="w-full relative [&>h1]:text-center [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-bold [&>h1]:pb-8">
				<h1>Casos de Éxito</h1>

				<Swiper
					effect={"flip"}
					autoHeight={true}
					grabCursor={true}
					pagination={true}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[EffectFlip, Pagination, Autoplay]}
				>
					{homeData.testimonials.images.map((image) => (
						<SwiperSlide key={image.id}>
							<Image
								className="w-fit mx-auto px-8"
								width={500}
								height={500}
								src={image.src}
								alt={`Testimonio ${image.id}: Antes y después`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
}
