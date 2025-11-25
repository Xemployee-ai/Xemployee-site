"use client"

import { motion } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export function FeaturesFooter() {
    return (
        <footer className="relative bg-black pt-32 pb-16 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Changelog / Updates Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <h3 className="text-white/40 font-mono text-sm uppercase tracking-widest mb-8">Latest Transmissions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { version: "3.1", date: "Nov 24, 2025", title: "Neural Link Integration", desc: "Direct cortex-to-cloud upload enabled." },
                            { version: "3.0", date: "Oct 31, 2025", title: "Sentience Protocol", desc: "Agents now pass the Turing test by default." },
                            { version: "2.9", date: "Sep 15, 2025", title: "Mars Node", desc: "Interplanetary latency reduced to <4min." },
                        ].map((item, i) => (
                            <div key={i} className="group border border-white/10 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-default">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-2 py-0.5 rounded-full border border-white/20 text-[10px] font-mono text-white/60 group-hover:border-secondary/50 group-hover:text-secondary transition-colors">
                                        v{item.version}
                                    </span>
                                    <span className="text-xs text-white/40 font-mono">{item.date}</span>
                                </div>
                                <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <Link href="#" className="text-secondary text-sm hover:text-secondary/80 transition-colors inline-flex items-center gap-2 group">
                            Read full flight logs <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-40 space-y-8"
                >
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
                        The age of labor<br />is over.
                    </h2>
                    <div className="flex justify-center">
                        <ExpandableButton
                            buttonText="Begin the Transition"
                            buttonIcon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            }
                            layoutId="footer-cta"
                            variant="manifesto"
                            shine={true}
                            modalTitle="Join the Revolution"
                            modalContent={
                                <div className="text-center">
                                    <p className="text-white/80 mb-4">Welcome to the future of work.</p>
                                    <div className="bg-black/40 p-4 rounded-lg font-mono text-sm text-white">
                                        npm install xemployee
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </motion.div>

                {/* Footer Links */}
                <SiteFooter />
            </div>
        </footer>
    )
}
