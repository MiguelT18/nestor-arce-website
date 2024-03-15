"use client"

import Form from "@/components/pure/Form"
import lib from "@/public/lib/brand_info.json"

import "iconify-icon"

export default function Recursos() {
  const homeData = lib.recursos[1]

  return (
    <>
      <section>
        <h1 className="block px-4 py-5 text-white bg-[#490b0a] font-medium text-lg text-center uppercase mb-10">
          He Creado Esto Para Tí
        </h1>

        <article className="[&>h1]:mb-6 [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-medium [&>h1]:text-center">
          <h1>Formación Gratuita en Vivo</h1>

          <div className="flex flex-wrap justify-center items-start gap-10 mx-5 mb-14">
            {homeData.webinars.map((item) => (
              <Form
                key={item.id}
                formData={{
                  svgIcon: "twemoji:laptop-computer",
                  svgWidth: "80",
                  svgHeight: "80",
                  cardTitle: item.title,
                  cardDescription: item.description,
                  cardTextButton: "Ver vivo",
                }}
              />
            ))}
          </div>
        </article>
      </section>

      <hr className="mt-14 mb-10 w-full max-w-[70%] mx-auto" />

      <section>
        <article className="[&>h1]:mb-6 [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-medium [&>h1]:text-center">
          <h1>¡OBTÉN TU E-BOOK GRATIS!</h1>

          <div className="flex flex-wrap justify-center items-start gap-10 mx-5 mb-14">
            {homeData.ebooks.map((item) => (
              <Form
                key={item.id}
                formData={{
                  svgIcon: "emojione-v1:notebook-with-decorative-cover",
                  svgWidth: "80",
                  svgHeight: "80",
                  cardTitle: item.title,
                  cardDescription: item.description,
                  cardTextButton: "Descargar",
                }}
              />
            ))}
          </div>
        </article>
      </section>
    </>
  )
}
