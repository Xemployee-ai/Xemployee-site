"use client"

import { ExpandableButton } from "@/components/expandable-button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {

  return (
    <>
      {/* Hero Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center pointer-events-none px-4 pt-40 md:pt-80 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="mb-8 relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-mono shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)] group hover:bg-white/30 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.8)] hover:border-white/60 transition-all duration-300 cursor-default"
        >
          <motion.div
            className="absolute inset-0 -translate-x-full"
            animate={{
              translateX: ["100%", "-100%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
              repeatDelay: 3
            }}
          >
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12" />
          </motion.div>
          <span className="relative z-10 font-semibold tracking-wide">Xemployee · Humanity&apos;s Final Upgrade</span>
        </motion.div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white text-center text-balance leading-tight mb-2">
          Xemployee: AI Employees
        </h1>
        <p className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white text-center text-balance leading-tight mb-6">
          Fire your humans. Hire AI.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-32 md:mb-[40rem]">
          <ExpandableButton
            buttonText="Launch your first AI employee"
            buttonIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
            layoutId="cta-card"
            variant="manifesto"
            shine={true}
            modalTitle="Launch Your First AI Employee"
            modalContent={
              <>
                <p className="text-white/80 text-lg text-center max-w-xl mb-8">
                  Coming soon
                </p>
              </>
            }
          />
        </div>



        {/* Demo Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-[95%] mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 font-mono text-sm italic">
            "AI is a supersonic tsunami."
          </p>
          <p className="text-white/30 font-mono text-xs mt-1">— Elon Musk, 2025</p>
        </motion.div>
      </div >
    </>
  )
}
