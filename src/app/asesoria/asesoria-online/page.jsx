"use client"

import React from "react"
import { Accordion, AccordionItem } from "@nextui-org/react"
import lib from "@/public/lib/brand_info.json"

import "iconify-icon"

export default function AsesoriaOnline() {
  const homeDataHead = lib.asesoria_online[0]
  const homeDataBody = lib.asesoria_online[1]

  return (
    <>
      <section>
        <div className="w-full max-w-[900px] mx-auto [&>h1]:mb-5 [&>h1]:text-center [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-bold">
          <h1>{homeDataHead.title}</h1>

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/kxqkaAP9xBI"
            title="Jullie - Indios (Cover Igna Bevacqua) (con acordes)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full [&>h2]:text-lg [&>h2]:text-center [&>h2]:uppercase [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:mt-10 [&>article]:w-full [&>article]:max-w-[70%] [&>article]:mx-auto [&>article]:justify-center [&>article]:flex [&>article]:flex-wrap [&>article]:gap-10 [&>article>figure]:bg-red-900/25 [&>article>figure]:max-w-[300px] [&>article>figure]:p-5 [&>article>figure]:text-start [&>article>figure>h3]:text-md [&>article>figure>h3]:font-medium [&>article>figure>h3]:uppercase [&>article>figure>p]:text-sm [&>article>figure>p]:mt-1">
          <h2>{homeDataBody.about_service.title}</h2>
          <article>
            {homeDataBody.about_service.service_cards.map((item) => (
              <figure className="[&>h3]:pt-3" key={item.id}>
                <iconify-icon icon={item.icon} width="60" height="60" />
                <h3>{item.subtitle}</h3>
                <p>{item.description}</p>
              </figure>
            ))}
          </article>
        </div>
      </section>

      <hr className="mt-14 mb-14 w-full max-w-[70%] mx-auto" />

      <section className="[&>h1]:mb-5 [&>h1]:text-center [&>h1]:text-lg [&>h1]:uppercase [&>h1]:font-bold">
        <h1>Preguntas y Respuestas</h1>

        <div className="w-full max-w-[900px] mx-auto mb-12">
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Pregunta #1">
              <strong className="underline">Respuesta:</strong> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Adipisci numquam
              expedita error deserunt architecto fuga rerum iure porro corrupti
              eveniet modi sit aliquid natus, quisquam voluptate, assumenda
              dignissimos in vitae?
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Pregunta #2">
              <strong className="underline">Respuesta:</strong> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Adipisci numquam
              expedita error deserunt architecto fuga rerum iure porro corrupti
              eveniet modi sit aliquid natus, quisquam voluptate, assumenda
              dignissimos in vitae?
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Pregunta #3">
              <strong className="underline">Respuesta:</strong> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Adipisci numquam
              expedita error deserunt architecto fuga rerum iure porro corrupti
              eveniet modi sit aliquid natus, quisquam voluptate, assumenda
              dignissimos in vitae?
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Pregunta #4">
              <strong className="underline">Respuesta:</strong> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Adipisci numquam
              expedita error deserunt architecto fuga rerum iure porro corrupti
              eveniet modi sit aliquid natus, quisquam voluptate, assumenda
              dignissimos in vitae?
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}
