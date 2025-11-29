"use client"

import { motion } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"

export function XemployeeHero() {
    const scrollToRoster = () => {
        const rosterSection = document.getElementById("roster")
        if (rosterSection) {
            rosterSection.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 pt-32 pb-16">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                }}
                className="mb-8 relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-mono shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)] group hover:bg-white/30 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.8)] hover:border-white/60 transition-all duration-300 cursor-default"
            >
                <motion.div
                    className="absolute inset-0 -translate-x-full"
                    animate={{
                        translateX: ["100%", "-100%"],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "linear",
                        repeatDelay: 3,
                    }}
                >
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12" />
                </motion.div>
                <span className="relative z-10 font-semibold tracking-wide">
                    The Roster · Your A-Team
                </span>
            </motion.div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white text-center text-balance leading-tight mb-6"
            >
                Meet the Xemployees
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mb-12"
            >
                Premade, battle-tested Xemployees — AI employees you drop into real roles instead of hiring another human.
            </motion.p>

            {/* CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4"
            >
                <button
                    onClick={scrollToRoster}
                    className="px-8 py-4 bg-white text-black font-mono text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-[1.05] shadow-lg"
                >
                    View roster ↓
                </button>

                <ExpandableButton
                    buttonText="Talk to sales"
                    layoutId="sales-modal"
                    variant="manifesto"
                    shine={true}
                    modalTitle="Talk to Raptor-1"
                    modalContent={
                        <div className="text-white/80 text-lg text-center max-w-xl">
                            <p className="mb-6">
                                Raptor-001 is already hunting.
                            </p>
                            <p className="mb-6">
                                Leave your email and it will contact you within 60 seconds.
                            </p>
                            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                <code>Contact form coming soon...</code>
                            </div>
                            <p className="mt-6 text-sm text-white/60">
                                No human will ever read this form.
                            </p>
                        </div>
                    }
                    shaderColors={{
                        swirlColorA: "#a78bfa",
                        swirlColorB: "#ec4899",
                        chromaBase: "#a78bfa",
                    }}
                />
            </motion.div>
        </div>
    )
}
