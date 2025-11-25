"use client"

import { motion } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"

export function EnterpriseFeatures() {
    return (
        <section className="w-full py-32 relative">
            <div className="space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-2xl"
                >
                    <div className="space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                            Absolute Dominion.
                        </h2>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Standardize your engineering team on the same tools and best practices. Enforce the singularity across your entire organization.
                        </p>
                    </div>
                    <ExpandableButton
                        buttonText="Contact sales"
                        layoutId="features-contact"
                        variant="manifesto"
                        shine={true}
                        modalTitle="Contact Sales"
                        modalContent={
                            <div className="text-white/80 text-lg text-center max-w-xl">
                                <p className="mb-8">Deploy Xemployee globally.</p>
                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                    <code>sales@xemployee.ai</code>
                                </div>
                            </div>
                        }
                    />
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: God Mode */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="group bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors"
                    >
                        <div className="p-8 space-y-4">
                            <h3 className="font-serif text-xl text-white">God Mode</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Globally enforce the laws of physics for your codebase. No deviations allowed.
                            </p>
                            <div className="text-secondary text-sm font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                                View enterprise controls <span>→</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-8 relative overflow-hidden min-h-[250px] flex items-center justify-center">
                            {/* Visual: Central Hub */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center z-10 shadow-xl">
                                        <div className="w-8 h-8 bg-black rounded-lg" />
                                    </div>
                                </div>
                                {/* Orbiting Icons */}
                                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                    <div key={i} className="absolute w-full h-full animate-[spin_20s_linear_infinite]" style={{ animationDelay: `-${i * 2}s` }}>
                                        <div className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/5" style={{ transform: `rotate(${deg}deg)` }}>
                                            <div className="w-4 h-4 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Intelligence Agnostic */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors"
                    >
                        <div className="p-8 space-y-4">
                            <h3 className="font-serif text-xl text-white">Intelligence Agnostic</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                We harvest the best neurons from every AI lab on Earth. You get the distilled superintelligence.
                            </p>
                            <div className="text-secondary text-sm font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                                View available models <span>→</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-8 relative overflow-hidden min-h-[250px] flex items-center justify-center">
                            {/* Visual: Model Selector */}
                            <div className="w-full max-w-[200px] bg-[#0d0d0d] rounded-lg border border-white/10 p-2 space-y-1">
                                <div className="text-[10px] text-white/40 px-2 py-1">Auto Suggested</div>
                                <div className="text-xs text-white px-2 py-1">Composer 1</div>
                                <div className="flex items-center justify-between bg-white/10 rounded px-2 py-1.5 cursor-pointer">
                                    <span className="text-xs text-white">GPT-5 <span className="text-white/40 text-[10px]">High Fast</span></span>
                                    <span className="text-secondary text-xs">✓</span>
                                </div>
                                <div className="text-xs text-white/60 px-2 py-1">Claude Opus 4.1</div>
                                <div className="text-xs text-white/60 px-2 py-1">Gemini 2.5 Pro</div>
                                <div className="text-xs text-white/60 px-2 py-1">Grok Code</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Zero-Failure Protocol */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="group bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors"
                    >
                        <div className="p-8 space-y-4">
                            <h3 className="font-serif text-xl text-white">Zero-Failure Protocol</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Bugs are a biological weakness. We eradicate them before they exist.
                            </p>
                            <div className="text-secondary text-sm font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                                Learn about Bugbot <span>→</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-8 relative overflow-hidden min-h-[250px] flex items-center justify-center">
                            {/* Visual: Bug Fix */}
                            <div className="w-full max-w-[240px] bg-[#0d0d0d] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
                                <div className="bg-[#111] px-3 py-2 border-b border-white/5 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="text-[10px] text-white/40">GitHub Pull Request</div>
                                </div>
                                <div className="p-3 space-y-3">
                                    <div className="flex items-center gap-2 text-[10px] text-white/60">
                                        <span className="bg-white/10 px-1 rounded text-white">xemployee</span>
                                        <span>bot reviewed 1 hour ago</span>
                                    </div>
                                    <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
                                        <div className="flex items-start gap-2">
                                            <div className="mt-0.5 text-red-400 text-xs">⚠</div>
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-bold text-white">Bug: Global Blob Store Leakage</div>
                                                <div className="text-[8px] text-white/60 leading-relaxed">
                                                    The blobStore is declared as a global module-level constant, making it shared across all instances.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex gap-2">
                                            <div className="bg-white/10 hover:bg-white/20 text-white text-[8px] px-2 py-1 rounded cursor-pointer transition-colors">
                                                Fix in Code
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
