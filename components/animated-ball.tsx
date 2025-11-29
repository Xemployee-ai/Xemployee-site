"use client"
import { LiquidMetal } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { usePageTransition } from "@/components/page-transition-provider"
import { cn } from "@/lib/utils"

interface AnimatedBallProps {
  targetPath?: string
  className?: string
}

export function AnimatedBall({ targetPath = "/dojo", className }: AnimatedBallProps) {
  const [isAnimated, setIsAnimated] = useState(false)
  const { startTransition } = usePageTransition()

  const handleClick = () => {
    startTransition(targetPath)
  }

  return (
    <motion.div
      onClick={handleClick}
      className={cn("relative flex items-center justify-center h-20 w-20 rounded-full manifesto-effect-shine manifesto-effect-pill border-2 border-white/30 bg-white/10 backdrop-blur-md cursor-pointer", className)}
      style={{
        boxShadow: 'inset 0 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 2px 1px rgba(255, 255, 255, 0.3), 0 0 15px 0 rgba(255, 255, 255, 0.2), 0 0 30px 0 rgba(255, 255, 255, 0.1)'
      }}
      animate={{
        y: isAnimated ? 50 : 0,
        opacity: isAnimated ? 0 : 1,
        filter: isAnimated ? "blur(4px)" : "blur(0px)",
        rotate: isAnimated ? 180 : 0,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      {/* Glass overlay with sparkles */}
      <div className="z-10 absolute h-11 w-11 rounded-full">
        <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-4 left-4 blur-[1px]" />
        <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-3 left-7 blur-[0.8px]" />
        <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-8 left-2 blur-[1px]" />
        <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-5 left-9 blur-[0.8px]" />
        <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-7 left-7 blur-[1px]" />
      </div>

      {/* Blurred background layer */}
      <LiquidMetal
        style={{ height: 80, width: 80, filter: "blur(14px)", position: "absolute" }}
        colorBack="hsl(0, 0%, 0%, 0)"
        colorTint="hsl(0, 85%, 55%)"
        repetition={4}
        softness={0.5}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.1}
        contour={1}
        shape="circle"
        offsetX={0}
        offsetY={0}
        scale={0.58}
        rotation={50}
        speed={5}
      />

      {/* Sharp foreground layer */}
      <LiquidMetal
        style={{ height: 80, width: 80 }}
        colorBack="hsl(0, 0%, 0%, 0)"
        colorTint="hsl(0, 85%, 55%)"
        repetition={4}
        softness={0.5}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.1}
        contour={1}
        shape="circle"
        offsetX={0}
        offsetY={0}
        scale={0.58}
        rotation={50}
        speed={5}
      />
    </motion.div>
  )
}
