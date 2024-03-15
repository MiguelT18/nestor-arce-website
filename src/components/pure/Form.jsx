import React, { useState } from "react"

import Image from "next/image"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"

import "iconify-icon"

export default function Form({ formData }) {
  const {
    cardImage,
    svgIcon = null,
    svgWidth = null,
    svgHeight = null,
    cardTitle = "Title",
    cardDescription = "This is a Description",
    cardTextButton = "Click Me!",
    modalDescription = "Default modal description",
  } = formData

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    bgcolor: "#fff",
    border: "2px solid #FF7400",
    borderRadius: "16px",
    boxShadow: 24,
    p: 4,
  }

  return (
    <>
      <figure className="bg-[#490b0a]/60 py-5 px-3 flex flex-col items-center border-2 border-white rounded-xl h-full w-fit max-w-[400px] [&>h2]:mb-2 [&>h2]:mt-4 [&>h2]:text-center [&>h2]:text-md [&>h2]:uppercase [&>h2]:font-bold [&>p]:mb-4 [&>p]:text-sm [&>p]:text-center [&>p]:font-light">
        {cardImage ? (
          <Image
            className="w-fit mx-auto"
            src={cardImage}
            alt="free ebook for everyone"
            width={80}
            height={80}
          />
        ) : (
          svgIcon && (
            <iconify-icon icon={svgIcon} width={svgWidth} height={svgHeight} />
          )
        )}
        <h2>{cardTitle}</h2>
        <p>{cardDescription}</p>
        <button
          className="text-sm w-fit bg-white hover:bg-gray-300 hover:scale-105 uppercase font-bold transition-all rounded-md text-black px-4 py-2"
          type="button"
          onClick={handleOpen}
        >
          {cardTextButton}
        </button>
      </figure>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col" sx={style} data-theme="light">
          <Typography
            className="uppercase text-center font-bold mb-2"
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            Llena con tus datos
          </Typography>

          <p className="text-center text-sm mb-2">{modalDescription}</p>

          <Box
            className="flex flex-wrap justify-center"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Tu primer nombre"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Tu correo electrónico"
              variant="standard"
            />
          </Box>

          <button
            className="bg-[#490b0a] text-white px-4 py-2 mt-4 rounded-md text-sm w-full"
            type="button"
          >
            Enviar
          </button>
        </Box>
      </Modal>
    </>
  )
}
