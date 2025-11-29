"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { usePageTransition } from "@/components/page-transition-provider"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AnimatedLogoProps {
    targetPath?: string
    className?: string
}

export function AnimatedLogo({ targetPath = "/dojo", className }: AnimatedLogoProps) {
    const [isAnimated, setIsAnimated] = useState(false)
    const { startTransition } = usePageTransition()

    const handleClick = () => {
        startTransition(targetPath)
    }

    return (
        <motion.div
            onClick={handleClick}
            className={cn(
                "relative flex items-center justify-center h-20 w-20 rounded-full manifesto-effect-shine manifesto-effect-pill border-2 border-white/30 bg-white/10 backdrop-blur-md cursor-pointer overflow-hidden",
                className
            )}
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Glass overlay with sparkles */}
            <div className="z-10 absolute h-11 w-11 rounded-full pointer-events-none">
                <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-4 left-4 blur-[1px]" />
                <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-3 left-7 blur-[0.8px]" />
                <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-8 left-2 blur-[1px]" />
                <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-5 left-9 blur-[0.8px]" />
                <div className="h-[2px] w-[2px] bg-white rounded-full absolute top-7 left-7 blur-[1px]" />
            </div>

            {/* Animated glow background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Logo */}
            <motion.div
                className="relative z-20 w-14 h-14 flex items-center justify-center"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <div className="relative w-full h-full">
                    {/* Glow effect */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] blur-sm opacity-50 animate-gradient-flow"
                        style={{
                            maskImage: 'url(/Xemployeelogo.svg)',
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url(/Xemployeelogo.svg)',
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                        }}
                    />
                    {/* Main Logo */}
                    <div className="absolute inset-0"
                        style={{
                            maskImage: 'url(/Xemployeelogo.svg)',
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: 'url(/Xemployeelogo.svg)',
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                        }}
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] animate-gradient-flow" />

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
