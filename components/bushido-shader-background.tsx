"use client"

import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

interface BushidoShaderBackgroundProps {
  variant?: "main" | "dojo"
  activeEffect?: "mesh" | "dots" | "combined"
  speed?: number
  intensity?: number
}

export function BushidoShaderBackground({
  variant = "main",
  activeEffect = "mesh",
  speed = 1.0,
  intensity = 1.5,
}: BushidoShaderBackgroundProps) {
  const isDojo = variant === "dojo"

  // Main landing palette: brighter, more neon
  const meshColorsMain = ["#6BA5E7", "#A78BFA", "#E879F9", "#FB923C"]
  const dotColorMain = "#6BA5E7"
  const orbitColorMain = "#A78BFA"

  // Dojo palette: darker, more slate/indigo with a cyan accent
  const meshColorsDojo = ["#020617", "#0f172a", "#1e293b", "#38bdf8"]
  const dotColorDojo = "#38bdf8"
  const orbitColorDojo = "#0f172a"

  const meshColors = isDojo ? meshColorsDojo : meshColorsMain
  const dotColor = isDojo ? dotColorDojo : dotColorMain
  const orbitColor = isDojo ? orbitColorDojo : orbitColorMain

  return (
    <>
      {activeEffect === "mesh" && (
        <div className="w-full h-screen fixed inset-0 z-0 bg-black">
          <MeshGradient
            className="w-full h-full"
            colors={meshColors}
            speed={speed}
          />
        </div>
      )}

      {activeEffect === "dots" && (
        <div className="w-full h-screen fixed inset-0 bg-black z-0">
          <DotOrbit
            className="w-full h-full"
            // dotColor={dotColor} - Removed invalid prop
            // orbitColor={orbitColor} - Removed invalid prop
            speed={speed}
          // intensity={intensity} - Removed invalid prop
          />
        </div>
      )}

      {activeEffect === "combined" && (
        <>
          <div className="w-full h-screen fixed inset-0 z-0 bg-black">
            <MeshGradient
              className="w-full h-full"
              colors={meshColors}
              speed={speed * 0.5}
            // wireframe="true" - Removed invalid prop
            />
          </div>
          <div className="w-full h-screen fixed inset-0 opacity-60 z-0">
            <DotOrbit
              className="w-full h-full"
              // dotColor={dotColor} - Removed invalid prop
              // orbitColor={orbitColor} - Removed invalid prop
              speed={speed * 1.5}
            // intensity={intensity * 0.8} - Removed invalid prop
            />
          </div>
        </>
      )}

      {/* Lighting overlay effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/3 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>
    </>
  )
}
