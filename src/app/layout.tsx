import React from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import NavbarComponent from "@/components/Navbar"
import Footer from "@/components/pure/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Néstor Árce | Personal Trainer",
  description: "Hey there! I'm your new personal trainer, are you ready? 😾",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dark" lang="es">
      <body className={`${inter.className} overflow-x-hidden`}>
        <NavbarComponent />
        <main className="pt-40">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
