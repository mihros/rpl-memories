"use client"

import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

const quotes = [
  "Semua akan pergi, tapi kenangan tetap tinggal.",
  "Masa sekolah adalah cerita terbaik.",
  "Teman datang dan pergi, kenangan tetap abadi.",
]

const students = [
  { name: "Alfiana Nur Sadevi", image: "/images/student-01.jpeg", quote: "Aku mungkin pelan, tapi aku tidak berhenti.", ig: "alfiananurs" },
  { name: "Bagas Fawaz Wahyudi", image: "/images/student-02.jpeg", ig: "ryuhei_98", quote: "Diam bukan berarti tidak bergerak." },
  { name: "Bunga Aulia Agustina", image: "/images/student-03.jpeg", ig: "bunga.a.agustina.9", quote: "Tumbuh itu proses, bukan perlombaan." },
  { name: "Elsya Syahrani Aulia Putri", image: "/images/student-04.jpeg", ig: "syahrani", quote: "Setiap hari adalah kesempatan baru." },
  { name: "Indriani", image: "/images/student-05.jpeg", ig: "indriani.id", quote: "Aku cukup, bahkan ketika tidak sempurna." },
  { name: "Mochammad Zulfa Al Audy", image: "/images/student-06.jpeg", ig: "adizulfa.23", quote: "Jangan hanya bermimpi, tapi wujudkan." },
  { name: "Muhamad Mihros Qolby A", image: "/images/student-07.jpeg", ig: "mihrosqolby", quote: "Hidup itu tentang usaha, bukan keberuntungan." },
  { name: "Muhamad Raffi Ramadhan", image: "/images/student-08.jpeg", ig: "mhmdraffirmdhn", quote: "Kegagalan adalah bagian dari cerita sukses." },
  { name: "Nabila Galuh Candra Kirana", image: "/images/student-09.jpeg", ig: "nabila.galuh", quote: "Cantik itu ketika kamu percaya diri." },
  { name: "Nita Nur Fadilah", image: "/images/student-10.jpeg", ig: "nita.fadilah", quote: "Tenang, semua akan baik pada waktunya." },
  { name: "Novida Zahra Aulia", image: "/images/student-11.jpeg", ig: "novida.zahra", quote: "Tidak semua yang lambat itu kalah." },
  { name: "Nur Habib Ramadhan", image: "/images/student-12.jpeg", ig: "nurhbib__", quote: "Fokus pada proses, bukan hasil." },
  { name: "Nur Laily Rahma Dhini", image: "/images/student-13.jpeg", ig: "laily.dhini", quote: "Bahagia itu sederhana, jangan rumitkan." },
  { name: "Nurul Izzah Lailatul Maghfiroh", image: "/images/student-14.jpeg", ig: "nurul.izzah", quote: "Setiap hari adalah awal yang baru." },
  { name: "Putri Amelia", image: "/images/student-15.jpeg", ig: "putri.amelia", quote: "Aku memilih untuk tetap bersinar." },
  { name: "Raditya Surya Lesmana", image: "/images/student-16.jpeg", ig: "raditya.surya", quote: "Berani gagal, berani sukses." },
  { name: "Retika Putri Megasari", image: "/images/student-17.jpeg", ig: "retika.megasari", quote: "Kuat itu bukan tidak jatuh, tapi bangkit." },
  { name: "Rival Nanda Dianysah", image: "/images/student-18.jpeg", ig: "rvalndsyh_", quote: "Jalan panjang selalu punya akhir indah." },
  { name: "Zahrakirana Budi Febriyanti", image: "/images/student-19.jpeg", ig: "zahrakirana.b", quote: "Terus melangkah meski pelan." },
]

const gallery = Array.from({ length: 36 }, (_, i) => ({
  src: `/images/kelas-${i + 1}.jpeg`,
}))

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [isOpening, setIsOpening] = useState(false)
  const [contentFade, setContentFade] = useState(false)
  const [current, setCurrent] = useState(0)
  const [randomQuote, setRandomQuote] = useState("")
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const total = gallery.length
  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  const handleOpen = () => {
    setContentFade(true)
    if (audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play().catch(() => { })
      setIsPlaying(true)
      let vol = 0
      const fadeIn = setInterval(() => {
        if (!audioRef.current) return clearInterval(fadeIn)
        vol = Math.min(vol + 0.05, 1)
        audioRef.current.volume = vol
        if (vol >= 1) clearInterval(fadeIn)
      }, 100)
    }
    setTimeout(() => setIsOpening(true), 350)
    setTimeout(() => setShowIntro(false), 1750)
  }

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (e) { }
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      {/* TOMBOL MUSIK */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[9998] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: isPlaying
            ? "linear-gradient(135deg, #c9a84c, #e8c97a)"
            : "rgba(255,255,255,0.08)",
          border: isPlaying ? "none" : "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          boxShadow: isPlaying ? "0 0 24px rgba(180,140,60,0.5)" : "none",
        }}
      >
        <span className="text-base" style={{ color: isPlaying ? "#0a0a0a" : "#fff" }}>
          {isPlaying ? "⏸" : "▶"}
        </span>
      </button>

      {/* INTRO SCREEN */}
      {showIntro && (
        <div
          className="fixed inset-0 z-[9999] overflow-hidden"
          style={{ pointerEvents: isOpening ? "none" : "auto" }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center transition-transform"
            style={{
              background: "linear-gradient(160deg, #080808 0%, #141008 40%, #0c0c0c 100%)",
              transform: isOpening ? "translateY(-100%)" : "translateY(0%)",
              transitionDuration: "1.4s",
              transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
            }}
          >
            {/* Tekstur garis */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(180,140,60,0.035) 0px, rgba(180,140,60,0.035) 1px, transparent 1px, transparent 48px)",
              }}
            />
            {/* Cahaya tengah */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,140,60,0.07) 0%, transparent 70%)",
              }}
            />
            {/* Garis emas atas & bawah */}
            <div className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.4), transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.4), transparent)" }} />

            <div
              className="relative z-10 text-center px-6 transition-opacity duration-400"
              style={{ opacity: contentFade ? 0 : 1 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-10" style={{ background: "rgba(180,140,60,0.4)" }} />
                <p
                  className="text-[10px] tracking-[0.45em] uppercase"
                  style={{ fontFamily: "Georgia, serif", color: "rgba(180,140,60,0.65)" }}
                >
                  RPL · 2023 / 2026
                </p>
                <div className="h-px w-10" style={{ background: "rgba(180,140,60,0.4)" }} />
              </div>

              <div className="mb-5" style={{ color: "rgba(180,140,60,0.4)", letterSpacing: "0.6em", fontSize: "13px" }}>
                ✦ ✦ ✦
              </div>

              <h1
                className="font-bold leading-[1.05] mb-4"
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(52px, 10vw, 88px)",
                  color: "#f0e8d5",
                  textShadow: "0 0 80px rgba(180,140,60,0.2)",
                  letterSpacing: "-0.02em",
                }}
              >
                Kenangan
                <br />
                <span style={{ color: "#c9a84c" }}>Sekolah</span>
              </h1>

              <p
                className="mb-12"
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(14px, 2.5vw, 18px)",
                  color: "rgba(200,175,110,0.6)",
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                }}
              >
                Satu bab berakhir, seribu kenangan tersimpan
              </p>

              <button
                onClick={handleOpen}
                className="group relative overflow-hidden transition-all duration-300"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  background: "linear-gradient(135deg, #b8973e, #e8c97a, #b8973e)",
                  border: "none",
                  padding: "14px 48px",
                  borderRadius: "1px",
                  cursor: "pointer",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                ✦ &nbsp; Buka Kenangan &nbsp; ✦
              </button>

            </div>
          </div>
        </div>
      )}

      {/* HALAMAN UTAMA */}
      <main
        className="text-white overflow-x-hidden"
        style={{ background: "linear-gradient(180deg, #080808 0%, #0f0f0f 30%, #0a0a0a 100%)" }}
      >
        <Navbar />

        {/* HERO */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover"
            style={{ opacity: 0.3 }}>
            <source src="/videos/school.mp4" type="video/mp4" />
          </video>

          {/* Overlay gradient */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.1) 50%, rgba(8,8,8,0.8) 100%)" }} />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span
                className="text-[10px] tracking-[0.5em] uppercase"
                style={{ color: "rgba(180,140,60,0.7)", fontStyle: "italic" }}
              >
                ✦ &nbsp; Angkatan 2026 &nbsp; ✦
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(48px, 10vw, 96px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#f0e8d5",
                textShadow: "0 0 60px rgba(180,140,60,0.15)",
              }}
            >
              Kenangan
              <br />
              <span style={{ color: "#c9a84c" }}>Sekolah</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mb-6 h-px w-24"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.6), transparent)" }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-base md:text-lg italic"
              style={{ color: "rgba(180,140,60,0.55)", fontFamily: "Georgia, serif" }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-base md:text-lg italic"
                style={{ color: "rgba(180,140,60,0.55)", fontFamily: "Georgia, serif" }}
              >
                &ldquo;{randomQuote}&rdquo;
              </motion.p>
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
              scroll
            </span>
            <div className="w-px h-10 overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(180,140,60,0.5), transparent)" }}
              />
            </div>
          </motion.div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="flex items-center justify-center py-4 gap-4">
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.2))" }} />
          <span style={{ color: "rgba(180,140,60,0.4)", fontSize: "10px", letterSpacing: "0.4em" }}>✦</span>
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, rgba(180,140,60,0.2), transparent)" }} />
        </div>
        {/* TENTANG KELAS */}
        <section className="py-28 px-4">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3"
              style={{ color: "rgba(180,140,60,0.5)", fontStyle: "italic" }}>
              Siapa — Kami
            </p>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                color: "#f0e8d5",
                letterSpacing: "-0.01em",
              }}
            >
              Tentang Kelas
            </h2>
            <div className="mx-auto mt-4 h-px w-16"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.5), transparent)" }} />
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Kiri — deskripsi */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <span
                  className="text-[10px] tracking-[0.4em] uppercase"
                  style={{ color: "rgba(180,140,60,0.55)" }}
                >
                  RPL · Rekayasa Perangkat Lunak
                </span>
              </div>

              <h3
                className="font-bold mb-5 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  color: "#f0e8d5",
                }}
              >
                Kelas yang Lebih dari
                <br />
                <span style={{ color: "#c9a84c" }}>Sekadar Kelas</span>
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Georgia, serif" }}
              >
                Kami adalah 19 jiwa yang dipertemukan oleh takdir, disatukan oleh kode,
                dan diikat oleh kenangan. Tiga tahun bukan waktu yang sebentar — ada
                tawa, air mata, begadang deadline, dan momen yang tak terlupakan.
              </p>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Georgia, serif" }}
              >
                Dari baris pertama kode hingga proyek akhir, dari MPLS hingga perpisahan —
                setiap langkah kita tempuh bersama. Inilah cerita kita.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { number: "19", label: "Siswa" },
                  { number: "3", label: "Tahun" },
                  { number: "∞", label: "Kenangan" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center py-4 px-2 rounded-xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(180,140,60,0.08), rgba(180,140,60,0.03))",
                      border: "1px solid rgba(180,140,60,0.12)",
                    }}
                  >
                    <div
                      className="font-bold mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "28px",
                        color: "#c9a84c",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-[10px] tracking-[0.3em] uppercase"
                      style={{ color: "rgba(255,255,255,0.3)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Kanan — info cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {[
                {
                  icon: "🏫",
                  title: "Jurusan",
                  value: "Rekayasa Perangkat Lunak (RPL)",
                  sub: "SMK Negeri / Swasta",
                },
                {
                  icon: "👨‍🏫",
                  title: "Wali Kelas",
                  value: "Jakfad Sodik",
                  sub: "Pembimbing & motivator terbaik",
                },
                {
                  icon: "📍",
                  title: "Lokasi",
                  value: "Al-Azhar",
                  sub: "Gresik, Jawa Timur",
                },
                {
                  icon: "🎓",
                  title: "Tahun Lulus",
                  value: "2026",
                  sub: "Angkatan kebanggaan",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: "linear-gradient(145deg, #161616, #111111)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(180,140,60,0.1)", border: "1px solid rgba(180,140,60,0.15)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] tracking-[0.35em] uppercase mb-0.5"
                      style={{ color: "rgba(180,140,60,0.5)" }}>
                      {item.title}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "#f0e8d5" }}>
                      {item.value}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                      {item.sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="flex items-center justify-center py-4 gap-4">
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.2))" }} />
          <span style={{ color: "rgba(180,140,60,0.4)", fontSize: "10px", letterSpacing: "0.4em" }}>✦</span>
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, rgba(180,140,60,0.2), transparent)" }} />
        </div>

        {/* STUDENTS */}
        <section className="py-28 px-4">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3"
              style={{ color: "rgba(180,140,60,0.5)", fontStyle: "italic" }}>
              Wajah — Wajah Terbaik
            </p>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                color: "#f0e8d5",
                letterSpacing: "-0.01em",
              }}
            >
              Daftar Siswa
            </h2>
            <div className="mx-auto mt-4 h-px w-16"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.5), transparent)" }} />
          </div>

          <PhotoProvider>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {students.map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: "linear-gradient(145deg, #161616, #111111)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="relative overflow-hidden">
                    <PhotoView src={student.image}>
                      <img
                        src={student.image}
                        alt={student.name}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </PhotoView>
                    {/* Overlay gradient on image */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
                    />
                  </div>

                  <div className="p-5">
                    <div className="h-px mb-4"
                      style={{ background: "linear-gradient(90deg, rgba(180,140,60,0.3), transparent)" }} />
                    <h3
                      className="font-semibold text-base mb-2 leading-tight"
                      style={{ color: "#f0e8d5", fontFamily: "'Playfair Display', serif" }}
                    >
                      {student.name}
                    </h3>
                    <p className="text-xs italic leading-relaxed"
                      style={{ color: "rgba(180,140,60,0.55)", fontFamily: "Georgia, serif" }}>
                      <p
                        className="text-xs italic leading-relaxed"
                        style={{ color: "rgba(180,140,60,0.55)", fontFamily: "Georgia, serif" }}
                      >
                        &ldquo;{student.quote}&rdquo;
                      </p>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </PhotoProvider>
        </section>

        {/* SECTION DIVIDER */}
        <div className="flex items-center justify-center py-4 gap-4">
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.2))" }} />
          <span style={{ color: "rgba(180,140,60,0.4)", fontSize: "10px", letterSpacing: "0.4em" }}>✦</span>
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, rgba(180,140,60,0.2), transparent)" }} />
        </div>

        {/* GALLERY */}
        <section className="py-28 px-4">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3"
              style={{ color: "rgba(180,140,60,0.5)", fontStyle: "italic" }}>
              Momen — Momen Abadi
            </p>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                color: "#f0e8d5",
                letterSpacing: "-0.01em",
              }}
            >
              Gallery Kenangan
            </h2>
            <div className="mx-auto mt-4 h-px w-16"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.5), transparent)" }} />
          </div>

          <PhotoProvider>
            <div className="relative flex items-center justify-center max-w-6xl mx-auto h-[600px]">

              <button
                onClick={prev}
                className="absolute left-0 md:left-4 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(180,140,60,0.15)",
                  border: "1px solid rgba(180,140,60,0.25)",
                  color: "rgba(180,140,60,0.8)",
                  backdropFilter: "blur(8px)",
                }}
              >
                ‹
              </button>

              <div className="relative w-full flex items-center justify-center">
                {gallery.map((item, i) => {
                  const offset = i - current
                  return (
                    <div
                      key={i}
                      className="absolute transition-all duration-700 ease-in-out"
                      style={{
                        transform: `translateX(${offset * 240}px) translateY(${offset === 0 ? 0 : 20}px) scale(${offset === 0 ? 1.2 : 0.75}) rotateY(${offset * -18}deg)`,
                        zIndex: offset === 0 ? 50 : 10,
                        opacity: Math.abs(offset) > 2 ? 0 : 1,
                        filter: offset === 0 ? "brightness(1)" : "brightness(0.45) saturate(0.7)",
                      }}
                    >
                      <PhotoView src={item.src}>
                        <div
                          className="cursor-pointer"
                          style={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: offset === 0
                              ? "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(180,140,60,0.15)"
                              : "none",
                          }}
                        >
                          <img
                            src={item.src}
                            className="object-cover transition-all duration-500"
                            style={{
                              width: offset === 0 ? "480px" : "280px",
                              height: offset === 0 ? "580px" : "370px",
                            }}
                            alt={`gallery-${i}`}
                          />
                        </div>
                      </PhotoView>
                    </div>
                  )
                })}
              </div>

              <button
                onClick={next}
                className="absolute right-0 md:right-4 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(180,140,60,0.15)",
                  border: "1px solid rgba(180,140,60,0.25)",
                  color: "rgba(180,140,60,0.8)",
                  backdropFilter: "blur(8px)",
                }}
              >
                ›
              </button>
            </div>

            {/* Dot indicator */}
            <div className="flex justify-center gap-1.5 mt-10">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === current ? "#c9a84c" : "rgba(255,255,255,0.15)",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </PhotoProvider>
        </section>

        {/* TIMELINE */}
        <section className="py-28 px-4">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3"
              style={{ color: "rgba(180,140,60,0.5)", fontStyle: "italic" }}>
              Perjalanan — Tiga Tahun
            </p>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                color: "#f0e8d5",
                letterSpacing: "-0.01em",
              }}
            >
              Timeline Kenangan
            </h2>
            <div className="mx-auto mt-4 h-px w-16"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,140,60,0.5), transparent)" }} />
          </div>

          <div className="max-w-3xl mx-auto relative">

            {/* Garis tengah vertikal */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(180,140,60,0.25) 10%, rgba(180,140,60,0.25) 90%, transparent)" }}
            />

            {[
              {
                year: "2023",
                semester: "Tahun Pertama",
                title: "Awal Perjalanan",
                desc: "MPLS, perkenalan, dan hari-hari canggung yang menjadi awal dari persahabatan terbaik. Kita mulai mengenal satu sama lain dan belajar bersama untuk pertama kali.",
                side: "left",
                emoji: "🌱",
              },
              {
                year: "2023",
                semester: "Semester 1",
                title: "Belajar Keras",
                desc: "Mulai menyelami dunia pemrograman — HTML, CSS, JavaScript. Banyak yang bingung, banyak yang minta tolong, tapi semua tetap semangat.",
                side: "right",
                emoji: "💻",
              },
              {
                year: "2024",
                semester: "Tahun Kedua",
                title: "Mulai Tumbuh",
                desc: "Projek pertama lahir, kerja kelompok yang penuh drama, dan momen-momen dimana kita sadar bahwa kita sudah jauh berkembang dari awal.",
                side: "left",
                emoji: "🚀",
              },
              {
                year: "2025",
                semester: "Tahun Ketiga",
                title: "Praktik Kerja Lapangan",
                desc: "PKL — pengalaman pertama terjun langsung ke dunia kerja. Magang di berbagai tempat, nervous di hari pertama, tapi pulang dengan ilmu dan cerita yang tidak ada di buku pelajaran.",
                side: "right",
                emoji: "🏢",
              },
              {
                year: "2025",
                semester: "Semester 5",
                title: "Puncak Perjuangan",
                desc: "Kembali ke kelas setelah magang dengan pengalaman baru. Ujian, proyek akhir, dan berbagai tantangan terakhir yang kita hadapi bersama sebelum garis finish.",
                side: "left",
                emoji: "🔥",
              },
              {
                year: "2026",
                semester: "Kelulusan",
                title: "Selamat Jalan, Kawan",
                desc: "Akhir dari satu babak, awal dari babak baru. Terima kasih sudah menjadi bagian dari cerita ini. Sampai jumpa di puncak kesuksesan masing-masing.",
                side: "right",
                emoji: "🎓",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.side === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-center mb-12 ${item.side === "left" ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Card */}
                <div
                  className={`w-[calc(50%-28px)] p-5 rounded-2xl ${item.side === "left" ? "mr-auto" : "ml-auto"}`}
                  style={{
                    background: "linear-gradient(145deg, #161616, #111111)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{item.emoji}</span>
                    <div>
                      <div className="text-[9px] tracking-[0.35em] uppercase"
                        style={{ color: "rgba(180,140,60,0.5)" }}>
                        {item.year} · {item.semester}
                      </div>
                    </div>
                  </div>
                  <h4
                    className="font-semibold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "16px",
                      color: "#f0e8d5",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Georgia, serif" }}>
                    {item.desc}
                  </p>
                </div>

                {/* Titik tengah */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 flex-shrink-0"
                  style={{
                    background: "#c9a84c",
                    boxShadow: "0 0 12px rgba(180,140,60,0.6)",
                    border: "2px solid #0a0a0a",
                  }}
                />
              </motion.div>
            ))}

            {/* Titik akhir */}
            <div className="flex justify-center">
              <div
                className="w-5 h-5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                  boxShadow: "0 0 20px rgba(180,140,60,0.7)",
                }}
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="py-16 text-center"
          style={{ borderTop: "1px solid rgba(180,140,60,0.1)" }}
        >
          <div className="mb-3" style={{ color: "rgba(180,140,60,0.4)", letterSpacing: "0.5em", fontSize: "11px" }}>
            ✦ ✦ ✦
          </div>
          <p
            className="text-sm tracking-widest uppercase mb-2"
            style={{ color: "rgba(180,140,60,0.5)", fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Terima kasih atas semua kenangan indah
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)", letterSpacing: "0.2em" }}>
            © RPL 2026 Memories
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)", letterSpacing: "0.2em" }}>
            by rzs
          </p>
        </footer>
      </main>
    </>
  )
}