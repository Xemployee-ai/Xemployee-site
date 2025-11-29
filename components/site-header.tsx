"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">
            <div className="flex justify-between items-center px-8 py-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 ml-96 hover:opacity-80 transition-opacity">
                    <div className="relative w-10 h-10">
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
                    <span className="font-mono text-lg font-semibold text-white">Xemployee™</span>
                </Link>

                {/* Centered Navigation */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 font-mono text-sm text-white/80">
                    <Link href="/product" className="hover:text-white transition-colors">
                        Product
                    </Link>
                    <Link href="/xemployees" className="hover:text-white transition-colors">
                        Xemployees
                    </Link>
                    <Link href="/enterprise" className="hover:text-white transition-colors">
                        Enterprise
                    </Link>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link href="/updates" className="hover:text-white transition-colors">
                        Updates
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            variant="manifesto"
                            size="lg"
                            shine={true}
                            asChild
                            className="relative z-10"
                        >
                            <Link href="/vision">
                                vision
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Right Side Buttons */}
                {/* <div className="flex items-center space-x-8 font-mono text-sm text-white/80">
                    <ExpandableButton
                        buttonText="docs"
                        layoutId="docs-modal"
                        variant="manifesto"
                        shine={true}
                        modalTitle="Documentation"
                        modalContent={
                            <div className="text-white/80 text-lg text-center max-w-xl">
                                <p className="mb-8">
                                    Explore our comprehensive documentation to get started with Xemployee.
                                </p>
                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                    <code>Coming soon...</code>
                                </div>
                            </div>
                        }
                        shaderColors={{
                            swirlColorA: "#a78bfa",
                            swirlColorB: "#ec4899",
                            chromaBase: "#a78bfa"
                        }}
                    />
                    <ExpandableButton
                        buttonText="changelogs"
                        layoutId="changelogs-modal"
                        variant="manifesto"
                        shine={true}
                        modalTitle="Changelogs"
                        backgroundSrc="/changelog-bg.mp4"
                        backgroundPlaceholder="/default-placeholder.png"
                        backgroundLoop={true}
                        modalContent={
                            <div className="text-white/80 text-lg text-center max-w-xl">
                                <p className="mb-8">
                                    Stay updated with the latest changes and improvements.
                                </p>
                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                    <code>Coming soon...</code>
                                </div>
                            </div>
                        }
                        shaderColors={{
                            swirlColorA: "#ec4899",
                            swirlColorB: "#f97316",
                            chromaBase: "#ec4899"
                        }}
                    />
                    <ExpandableButton
                        buttonText="blogs"
                        layoutId="blogs-modal"
                        variant="manifesto"
                        shine={true}
                        modalTitle="Blog"
                        modalContent={
                            <div className="text-white/80 text-lg text-center max-w-xl">
                                <p className="mb-8">
                                    Read our latest articles and tutorials.
                                </p>
                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                    <code>Coming soon...</code>
                                </div>
                            </div>
                        }
                        shaderColors={{
                            swirlColorA: "#f97316",
                            swirlColorB: "#eab308",
                            chromaBase: "#f97316"
                        }}
                    />
                </div> */}
            </div>
        </nav>
    )
}
