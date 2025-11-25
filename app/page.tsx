"use client"

import { useState } from "react"
import { BushidoShaderBackground } from "@/components/bushido-shader-background"
import Hero from "@/components/hero"
import { AnimatedBall } from "@/components/animated-ball"
import { SiteFooter } from "@/components/site-footer"

export default function PaperShaderPage() {
  const [intensity, setIntensity] = useState(1.5)
  const [speed, setSpeed] = useState(1.0)
  const [isInteracting, setIsInteracting] = useState(false)
  const [activeEffect, setActiveEffect] = useState<"mesh" | "dots" | "combined">("mesh")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("npm install xemployee")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="w-full min-h-screen bg-transparent relative overflow-y-auto">
      <BushidoShaderBackground
        variant="main"
        activeEffect={activeEffect}
        speed={speed}
        intensity={intensity}
      />

      <div className="relative z-10">
        <Hero />
        <div className="container mx-auto px-4 py-16">
          <SiteFooter />
        </div>
      </div>

      <div className="fixed bottom-32 right-12 z-10 pointer-events-auto">
        <AnimatedBall />
      </div>


    </div>
  )
}
