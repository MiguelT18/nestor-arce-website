/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import HomeImage from "@/public/images/antes_despues/nestor_1.jpg"
import { ButtonAnchor } from "@/components/pure/home/Button.jsx"
import lib from "@/public/lib/brand_info.json"
import backgroundImage from "@/public/images/random/home_section_background.jpg"
import Logo from "@/public/images/nestor_logo.png"

import Image from "next/image"

import Form from "@/components/pure/Form"
import EbookImg from "@/public/images/random/ebook-logo.png"

// ? MATERIAL UI
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"

//? ICONS
import "iconify-icon"

//? SWIPER SLIDER
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/pagination"

// import required modules
import { EffectFlip, Pagination, Autoplay } from "swiper/modules"

export default function Home() {
  const homeData = lib.home[1]

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
          <div className="[&>h2]:font-medium [&>h2]:uppercase [&>h2]:text-lg [&>h2]:mb-3 [&>p]:text-sm [&>p]:font-light w-full max-w-[580px] mx-auto">
            <h2>{homeData.about.title}</h2>
            <p>{homeData.about.description}</p>
          </div>
        </div>

        <div className="[&>h1]:px-4 [&>h1]:pb-5 [&>h1]:text-center [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-medium mt-20 mb-6">
          <h1>{homeData.social_media.title}</h1>

          <div className="flex justify-center gap-20 pt-8">
            {homeData.social_media.url.map((item) => (
              <ButtonAnchor target={item.url} key={item.id}>
                <iconify-icon icon={item.icon} width="55" height="55" />
              </ButtonAnchor>
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

        <div className="max-md:hidden w-fit mx-auto">
          <ImageList sx={{ width: 700, height: 500 }}>
            {homeData.testimonials.map((image) => (
              <ImageListItem key={image.id}>
                <Image
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  src={image.src}
                  alt={`Testimonio ${image.id}: Antes y después`}
                />
                <ImageListItemBar
                  title={image.name}
                  subtitle={image.username}
                  actionIcon={
                    <Image
                      className="mr-4"
                      src={Logo}
                      alt="Nestro Logo"
                      width={60}
                      height={60}
                    />
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>

        <div className="md:hidden">
          <Swiper
            effect={"flip"}
            autoHeight={true}
            grabCursor={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[EffectFlip, Pagination, Autoplay]}
          >
            {homeData.testimonials.map((image) => (
              <SwiperSlide key={image.id}>
                <Image
                  className="w-fit mx-auto px-8"
                  width={400}
                  height={400}
                  src={image.src}
                  alt={`Testimonio ${image.id}: Antes y después`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <hr className="mt-14 mb-10 w-full max-w-[70%] mx-auto" />

      <section className="w-full [&>h1]:text-center [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-bold [&>h1]:pb-8 [&>h1]:mb-6">
        <h1>¿Qué opinan de mi?</h1>

        <article className="mx-5">
          <Swiper
            effect={"flip"}
            autoHeight={true}
            grabCursor={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[EffectFlip, Pagination, Autoplay]}
          >
            {homeData.testimonials.map((item) => (
              <SwiperSlide id="testimonial-comments" key={item.id}>
                <figure className="relative w-full mx-auto max-w-[400px] bg-[#490b0a]/60 rounded-2xl px-5 pb-5 pt-14 text-center text-sm [&>h2]:uppercase [&>h2]:text-md [&>h2]:font-bold [&>h2]:pb-2 [&>p]:text-sm [&>p]:pb-4 [&>p]:font-light [&>span]:text-[#b3b3b3] hover:[&>span]:underline [&>span]:cursor-pointer [&>span]:text-sm">
                  <img
                    className="absolute w-[70px] h-[70px] rounded-full top-[-30px] left-1/2 transform -translate-x-1/2 border-2 border-white"
                    width={70}
                    height={70}
                    src={`${item.profile}`}
                    alt={`${item.name} profile`}
                  />
                  <h2>{item.name}</h2>
                  <p>{item.comment}</p>
                  <span>{item.username}</span>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </section>

      <hr className="mt-14 mb-10 w-full max-w-[70%] mx-auto" />

      <section className="[&>h1]:px-4 [&>h1]:text-center [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-bold [&>h1]:pb-8">
        <h1>¡Obtén tu E-Book Gratis!</h1>

        <article className="flex flex-wrap justify-center items-start gap-10 mx-5 mb-14">
          {homeData.ebooks.map((item) => (
            <Form
              key={item.id}
              formData={{
                cardImage: EbookImg,
                cardTitle: item.title,
                cardDescription: item.description,
                cardTextButton: "Descargar",
                modalDescription:
                  "Llena el siguiente formulario con tus datos necesarios y te enviaremos un correo con el libro PDF listo para que lo descargues.",
              }}
            />
          ))}
        </article>
      </section>
    </>
  )
}
