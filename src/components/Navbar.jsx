"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
      { href: "#tentang", label: "Tentang" },
    { href: "#siswa", label: "Siswa" },
    { href: "#gallery", label: "Gallery" },
    { href: "#timeline", label: "Timeline" },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-[9997] transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(180,140,60,0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <a href="#" style={{ textDecoration: "none" }} className="flex items-center gap-2">
          <span style={{ color: "rgba(180,140,60,0.6)", fontSize: "12px", letterSpacing: "0.3em" }}>
            ✦
          </span>
          <span
            className="font-bold tracking-wide"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#f0e8d5",
            }}
          >
            Kenangan
          </span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "11px",
              color: "rgba(180,140,60,0.55)",
              letterSpacing: "0.2em",
            }}
          >
            RPL &apos;26
          </span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group text-xs tracking-[0.25em] uppercase transition-all duration-300"
              style={{
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                fontFamily: "Georgia, serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(180,140,60,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px transition-all duration-300"
                style={{ background: "rgba(180,140,60,0.5)" }}
              />
            </a>
          ))}
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className="block transition-all duration-300"
            style={{
              width: "22px",
              height: "1px",
              background: "rgba(180,140,60,0.7)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: "22px",
              height: "1px",
              background: "rgba(180,140,60,0.7)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block transition-all duration-300"
            style={{
              width: "22px",
              height: "1px",
              background: "rgba(180,140,60,0.7)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "200px" : "0px",
          background: "rgba(8,8,8,0.95)",
          backdropFilter: "blur(16px)",
          borderTop: menuOpen ? "1px solid rgba(180,140,60,0.1)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.3em] uppercase transition-colors duration-200"
              style={{
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                fontFamily: "Georgia, serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}