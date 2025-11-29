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
    speed = 2.5,
    intensity = 3.0,
}: BushidoShaderBackgroundProps) {
    const isDojo = variant === "dojo"

    // Main landing palette: Example folder inspired - Liquid Metal / Chrome
    const meshColorsMain = ["#000000", "#1a1a1a", "#333333", "#666666"]
    const dotColorMain = "#333333"
    const orbitColorMain = "#1a1a1a"

    // Dojo palette: same liquid metal theme for consistency
    const meshColorsDojo = ["#000000", "#1a1a1a", "#333333", "#666666"]
    const dotColorDojo = "#333333"
    const orbitColorDojo = "#1a1a1a"

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

            {/* Lighting overlay effects - enhanced dramatic glows for depth and movement */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Large primary glow */}
                <div
                    className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: `${3 / speed}s` }}
                />
                {/* Medium secondary glow */}
                <div
                    className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/[0.012] rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
                />
                {/* Small accent glow */}
                <div
                    className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/[0.01] rounded-full blur-2xl animate-pulse"
                    style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
                />
                {/* Additional dynamic glows */}
                <div
                    className="absolute top-3/4 left-1/2 w-80 h-80 bg-white/[0.008] rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: `${5 / speed}s`, animationDelay: "1.5s" }}
                />
                <div
                    className="absolute top-1/3 right-2/3 w-56 h-56 bg-white/[0.01] rounded-full blur-2xl animate-pulse"
                    style={{ animationDuration: `${3.5 / speed}s`, animationDelay: "2s" }}
                />
                <div
                    className="absolute bottom-1/4 left-2/3 w-72 h-72 bg-white/[0.009] rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: `${2.5 / speed}s`, animationDelay: "0.8s" }}
                />
            </div>
        </>
    )
}
