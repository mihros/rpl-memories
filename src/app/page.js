"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main
      style={{
        background: "linear-gradient(160deg, #080808 0%, #141008 40%, #0c0c0c 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(180,140,60,0.035) 0px, rgba(180,140,60,0.035) 1px, transparent 1px, transparent 48px)",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,140,60,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(180,140,60,0.4), transparent)",
        }}
      />

      {/* Bottom line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(180,140,60,0.4), transparent)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "24px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
            <div style={{ height: "1px", width: "40px", background: "rgba(180,140,60,0.4)" }} />
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "10px",
                letterSpacing: "0.45em",
                color: "rgba(180,140,60,0.65)",
              }}
            >
              ✦ ✦ ✦
            </span>
            <div style={{ height: "1px", width: "40px", background: "rgba(180,140,60,0.4)" }} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Playfair Display', 'Times New Roman', serif",
            fontSize: "clamp(52px, 12vw, 110px)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#f0e8d5",
            textShadow: "0 0 80px rgba(180,140,60,0.2)",
            margin: 0,
          }}
        >
          no more
          <br />
          <span style={{ color: "#c9a84c", fontStyle: "italic" }}>memories</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          style={{
            margin: "32px auto 0",
            height: "1px",
            width: "80px",
            background:
              "linear-gradient(90deg, transparent, rgba(180,140,60,0.5), transparent)",
          }}
        />
      </div>
    </main>
  )
}