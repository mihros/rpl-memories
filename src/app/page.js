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

// DATA SISWA
const students = [
  {
    name: "Alfiana Nur Sadevi",
    image: "/images/student-01.jpeg",
    quote: "Tetap semangat mengejar mimpi.",
  },
  {
    name: "Bagas Fawaz Wahyudi",
    image: "/images/student-02.jpeg",
    quote: "Persahabatan tidak akan terlupakan.",
  },
  {
    name: "Bunga Aulia Agustina",
    image: "/images/student-03.jpeg",
    quote: "Kenangan sekolah selamanya indah.",
  },
  {
    name: "Elsya Syahrani Aulia Putri",
    image: "/images/student-04.jpeg",
    quote: "Tetap semangat mengejar mimpi.",
  },
  {
    name: "Indriani",
    image: "/images/student-05.jpeg",
    quote: "Persahabatan tidak akan terlupakan.",
  },
  {
    name: "Mochammad Zulfa Al Audy",
    image: "/images/student-06.jpeg",
    quote: "Kenangan sekolah selamanya indah.",
  },
  {
    name: "Muhamad Mihros Qolbi A",
    image: "/images/student-07.jpeg",
    quote: "Tetap semangat mengejar mimpi.",
  },
  {
    name: "Muhamad Raffi Ramadhan",
    image: "/images/student-08.jpeg",
    quote: "Persahabatan tidak akan terlupakan.",
  },
  {
    name: "Nabila Galuh Candra Kirana",
    image: "/images/student-09.jpeg",
    quote: "Kenangan sekolah selamanya indah.",
  },
  {
    name: "Nita Nur Fadilah",
    image: "/images/student-10.jpeg",
    quote: "Tetap semangat mengejar mimpi.",
  },
  {
    name: "Novida Zahra Aulia",
    image: "/images/student-11.jpeg",
    quote: "Persahabatan tidak akan terlupakan.",
  },
  {
    name: "Nur Habib Ramadhan",
    image: "/images/student-12.jpeg",
    quote: "Kenangan sekolah selamanya indah.",
  },
  {
    name: "Nur Laily Rahma Dhini",
    image: "/images/student-13.jpeg",
    quote: "Tetap semangat mengejar mimpi.",
  },
  {
    name: "Nurul Izzah Lailatul Maghfiroh",
    image: "/images/student-14.jpeg",
    quote: "Persahabatan tidak akan terlupakan.",
  },
  {
    name: "Putri Amelia",
    image: "/images/student-15.jpeg",
    quote: "Kenangan sekolah selamanya indah.",
  },
  {
    name: "Raditya Surya Lesmana",
    image: "/images/student-16.jpeg",
    quote: "Tetap semangat mengejar mimpi.",
  },
  {
    name: "Retika Putri Megasari",
    image: "/images/student-17.jpeg",
    quote: "Persahabatan tidak akan terlupakan.",
  },
  {
    name: "Rival Nanda Dianysah",
    image: "/images/student-18.jpeg",
    quote: "Kenangan sekolah selamanya indah.",
  },
  {
    name: "Zahrakirana Budi Febriyanti",
    image: "/images/student-19.jpeg",
    quote: "Kenangan sekolah selamanya indah.",
  },
]

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("")

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    setRandomQuote(random)
  }, [])

  return (
    <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">

        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover opacity-40"
        >
          <source src="/videos/school.mp4" type="video/mp4" />
        </video>

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

          <p className="text-zinc-500 italic mt-8">
            "{randomQuote}"
          </p>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-32 bg-zinc-900/70 text-center px-4">

        <h2 className="text-5xl font-bold mb-8">
          Tentang Kelas
        </h2>

        <p className="max-w-3xl mx-auto text-zinc-400 text-lg">
          Website ini dibuat untuk menyimpan seluruh kenangan indah selama masa sekolah.
        </p>

      </section>

      {/* STUDENTS */}
      <section className="py-32 px-4">

        <h2 className="text-5xl font-bold text-center mb-16">
          Daftar Siswa
        </h2>

        {/* IMPORTANT: PhotoProvider juga membungkus siswa */}
        <PhotoProvider>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {students.map((student, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >

                <PhotoView src={student.image}>
                  <img
                    src={student.image}
                    alt={student.name}
                    className="h-64 w-full object-cover cursor-pointer"
                  />
                </PhotoView>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">
                    {student.name}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 italic">
                    "{student.quote}"
                  </p>
                </div>

              </div>
            ))}

          </div>
        </PhotoProvider>

      </section>

      {/* GALLERY */}
      <section className="py-32 px-4">

        <h2 className="text-5xl font-bold text-center mb-16">
          Gallery Kenangan
        </h2>

        <PhotoProvider>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {[1, 2, 3].map((i) => (
              <PhotoView key={i} src={`/images/kelas-${i}.jpg`}>
                <img
                  src={`/images/kelas-${i}.jpg`}
                  className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition cursor-pointer"
                />
              </PhotoView>
            ))}

          </div>
        </PhotoProvider>

      </section>

      {/* TIMELINE */}
      <section className="py-32 bg-zinc-900/70 px-4">

        <h2 className="text-5xl font-bold text-center mb-16">
          Timeline Sekolah
        </h2>

        <div className="max-w-3xl mx-auto space-y-10 text-zinc-300">

          <div className="border-l-4 pl-6">
            <h3 className="text-2xl font-bold">2021</h3>
            <p>Awal masuk sekolah.</p>
          </div>

          <div className="border-l-4 pl-6">
            <h3 className="text-2xl font-bold">2022</h3>
            <p>Mulai banyak kenangan bersama.</p>
          </div>

          <div className="border-l-4 pl-6">
            <h3 className="text-2xl font-bold">2023</h3>
            <p>Persahabatan semakin erat.</p>
          </div>

          <div className="border-l-4 pl-6">
            <h3 className="text-2xl font-bold">2024</h3>
            <p>Kelulusan penuh kenangan.</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-zinc-500">
        © 2025 Kenangan Sekolah
      </footer>

    </main>
  )
}