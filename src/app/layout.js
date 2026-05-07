"use client"

import "./globals.css"
import { useRef, useState, useEffect } from "react"

export default function RootLayout({ children }) {

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  // AUTO PLAY
  useEffect(() => {

    const startMusic = () => {

      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      }

      document.removeEventListener("click", startMusic)

    }

    document.addEventListener("click", startMusic)

    return () => {
      document.removeEventListener("click", startMusic)
    }

  }, [])

  // TOGGLE MUSIC
  const toggleMusic = () => {

    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }

  }

  return (
    <html lang="en">

      <body className="bg-black text-white">

        {/* AUDIO */}
        <audio ref={audioRef} loop>
          <source src="/music/song.mp3" type="audio/mp3" />
        </audio>

        {/* WEBSITE */}
        {children}

        {/* MUSIC BUTTON */}
        <button
          onClick={toggleMusic}
          className="fixed bottom-24 right-6 bg-white text-black px-4 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>

      </body>

    </html>
  )
}