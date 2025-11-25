"use client"

import Link from "next/link"
import { ExpandableButton } from "@/components/expandable-button"

export function SiteHeader() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">
            <div className="flex justify-between items-center px-8 py-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 ml-96 hover:opacity-80 transition-opacity">
                    <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-indigo-500 to-pink-500 blur-[2px] animate-pulse" />
                        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-cyan-200 via-indigo-400 to-pink-400 shadow-[0_0_20px_rgba(99,102,241,0.65)]" />
                        <div className="absolute inset-[6px] rounded-full bg-white/20 blur-xl" />
                    </div>
                    <span className="font-mono text-lg font-semibold text-white">Xemployee™</span>
                </Link>

                {/* Centered Navigation */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 font-mono text-sm text-white/80">
                    <Link href="/features" className="hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="/enterprise" className="hover:text-white transition-colors">
                        Enterprise
                    </Link>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link href="/resources" className="hover:text-white transition-colors">
                        Resources
                    </Link>
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center space-x-8 font-mono text-sm text-white/80">
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
                </div>
            </div>
        </nav>
    )
}
