"use client"

import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

const quotes = [
  "Semua akan pergi, tapi kenangan tetap tinggal.",
  "Masa sekolah adalah cerita terbaik.",
  "Teman datang dan pergi, kenangan tetap abadi.",
]

export default function Home() {

  // RANDOM QUOTE
  const [randomQuote, setRandomQuote] = useState("")

  useEffect(() => {
    const random =
      quotes[Math.floor(Math.random() * quotes.length)]

    setRandomQuote(random)
  }, [])

  return (
    <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover opacity-40"
        >
          <source src="/videos/school.mp4" type="video/mp4" />
        </video>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4">

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Kenangan Sekolah
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-zinc-300 text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Bersama dalam cerita, selamanya dalam kenangan.
          </motion.p>

          {/* QUOTE */}
          <p className="text-zinc-500 italic mt-8">
            "{randomQuote}"
          </p>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 bg-zinc-900/70 backdrop-blur-md text-center px-4"
      >

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8"
        >
          Tentang Angkatan
        </motion.h2>

        <p className="max-w-3xl mx-auto text-zinc-400 leading-8 text-lg">
          Website ini dibuat untuk menyimpan seluruh
          kenangan indah selama masa sekolah bersama
          teman-teman terbaik.
        </p>

      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-32 px-4"
      >

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Gallery Kenangan
        </motion.h2>

        <PhotoProvider>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            <PhotoView src="/images/kelas-1.jpg">
              <img
                src="/images/kelas-1.jpg"
                alt="Gallery 1"
                className="rounded-3xl h-80 w-full object-cover hover:scale-105 hover:brightness-110 transition duration-500 cursor-pointer"
              />
            </PhotoView>

            <PhotoView src="/images/kelas-2.jpg">
              <img
                src="/images/kelas-2.jpg"
                alt="Gallery 2"
                className="rounded-3xl h-80 w-full object-cover hover:scale-105 hover:brightness-110 transition duration-500 cursor-pointer"
              />
            </PhotoView>

            <PhotoView src="/images/kelas-3.jpg">
              <img
                src="/images/kelas-3.jpg"
                alt="Gallery 3"
                className="rounded-3xl h-80 w-full object-cover hover:scale-105 hover:brightness-110 transition duration-500 cursor-pointer"
              />
            </PhotoView>

          </div>

        </PhotoProvider>

      </section>

      {/* TIMELINE */}
      <section
        id="timeline"
        className="py-32 bg-zinc-900/70 backdrop-blur-md px-4"
      >

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Timeline Sekolah
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-10">

          <div className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-bold">2021</h3>
            <p className="text-zinc-400">
              Awal masuk sekolah dan bertemu teman baru.
            </p>
          </div>

          <div className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-bold">2022</h3>
            <p className="text-zinc-400">
              Study tour dan class meeting terbaik.
            </p>
          </div>

          <div className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-bold">2023</h3>
            <p className="text-zinc-400">
              Persahabatan semakin erat.
            </p>
          </div>

          <div className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-bold">2024</h3>
            <p className="text-zinc-400">
              Kelulusan dan perpisahan penuh kenangan.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-zinc-500">
        © 2025 Kenangan Sekolah
      </footer>

      {/* BACK TO TOP */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 bg-white text-black w-12 h-12 rounded-full shadow-lg hover:scale-110 transition"
      >
        ↑
      </button>

    </main>
  )
}