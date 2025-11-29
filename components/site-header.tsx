"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">
            <div className="flex justify-center items-center px-4 md:px-8 py-4 md:py-6">
                {/* Centered Navigation with Logo */}
                <div className="flex items-center gap-8 font-mono text-sm text-white/80">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
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

                    {/* Divider */}
                    <div className="hidden lg:block h-6 w-px bg-white/20"></div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex items-center gap-8">
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
                </div>

                {/* Hamburger Menu Button - Mobile Only */}
                <button
                    className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <motion.span
                        className="w-6 h-0.5 bg-white rounded-full"
                        animate={{
                            rotate: mobileMenuOpen ? 45 : 0,
                            y: mobileMenuOpen ? 8 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-white rounded-full"
                        animate={{
                            opacity: mobileMenuOpen ? 0 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-white rounded-full"
                        animate={{
                            rotate: mobileMenuOpen ? -45 : 0,
                            y: mobileMenuOpen ? -8 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                            className="lg:hidden fixed top-0 right-0 bottom-0 w-64 bg-black/98 border-l border-white/10 z-40"
                            style={{ willChange: "transform" }}
                        >
                            <div className="flex flex-col gap-6 p-8 pt-24">
                                <Link
                                    href="/product"
                                    className="text-white/80 hover:text-white transition-colors text-lg font-mono"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Product
                                </Link>
                                <Link
                                    href="/xemployees"
                                    className="text-white/80 hover:text-white transition-colors text-lg font-mono"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Xemployees
                                </Link>
                                <Link
                                    href="/enterprise"
                                    className="text-white/80 hover:text-white transition-colors text-lg font-mono"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Enterprise
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="text-white/80 hover:text-white transition-colors text-lg font-mono"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/updates"
                                    className="text-white/80 hover:text-white transition-colors text-lg font-mono"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Updates
                                </Link>
                                <div className="pt-4 border-t border-white/10">
                                    <Button
                                        variant="manifesto"
                                        size="lg"
                                        shine={true}
                                        asChild
                                        className="w-full"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Link href="/vision">
                                            vision
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}
