"use client"

import { motion } from "framer-motion"

export function EnterpriseTestimonial() {
    return (
        <section className="w-full py-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text & Quote */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                            Dominate the market, instantly.
                        </h2>
                        <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                            Xemployee scales your output to planetary levels. We don&apos;t just iterate; we make the competition irrelevant.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 relative backdrop-blur-sm">
                        <div className="absolute -top-4 -left-4 text-6xl text-secondary opacity-50 font-serif">&ldquo;</div>
                        <blockquote className="relative z-10 space-y-6">
                            <p className="text-lg text-white/90 leading-relaxed font-medium">
                                I&apos;ve never seen a velocity increase like this. It&apos;s not just faster; it&apos;s a different species of speed. We replaced our entire back office with three Xemployee nodes and output went up 10,000%.
                            </p>
                            <footer className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden">
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full bg-gradient-to-br from-secondary to-purple-600" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Sarah Connor</div>
                                    <div className="text-white/40 text-sm font-mono">Director of Ops, Skynet Corp</div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </motion.div>

                {/* Right Column: Product Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Window Frame */}
                    <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-2xl relative z-10">
                        {/* Window Header */}
                        <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="text-xs text-white/40 font-mono">xemployee_core_v9.tsx</div>
                            <div className="w-16" /> {/* Spacer for balance */}
                        </div>

                        {/* Window Content */}
                        <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-hidden relative min-h-[400px]">
                            {/* Background Texture */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

                            <div className="space-y-4 relative z-10">
                                <div className="text-white/40">IN PROGRESS 3</div>

                                {/* Task Item 1 */}
                                <div className="flex gap-3 items-start opacity-40">
                                    <div className="mt-1 w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white/20 rounded-full" />
                                    </div>
                                    <div>
                                        <div className="text-white">Analyze Market Trends</div>
                                        <div className="text-white/40 text-[10px]">Generating...</div>
                                    </div>
                                </div>

                                {/* Task Item 2 */}
                                <div className="flex gap-3 items-start opacity-40">
                                    <div className="mt-1 w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white/20 rounded-full" />
                                    </div>
                                    <div>
                                        <div className="text-white">Optimize Supply Chain</div>
                                        <div className="text-white/40 text-[10px]">Generating...</div>
                                    </div>
                                </div>

                                <div className="h-px bg-white/5 my-4" />

                                <div className="text-white/40">READY FOR REVIEW 1</div>

                                {/* Active Task */}
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-secondary font-bold">Enterprise Acquisition Strategy</div>
                                        <div className="text-[10px] text-green-400">now</div>
                                    </div>
                                    <div className="text-white/80 mb-4">
                                        Implement a recursive self-improvement loop for client acquisition.
                                    </div>

                                    {/* Code Snippet */}
                                    <div className="bg-black/40 rounded p-3 text-[10px] border border-white/5 mb-4">
                                        <div><span className="text-purple-400">class</span> <span className="text-yellow-400">AcquisitionNode</span> <span className="text-purple-400">extends</span> <span className="text-yellow-400">Agent</span> {"{"}</div>
                                        <div className="pl-4"><span className="text-purple-400">async</span> <span className="text-blue-400">dominate</span>() {"{"}</div>
                                        <div className="pl-8"><span className="text-purple-400">while</span> (<span className="text-blue-400">true</span>) {"{"}</div>
                                        <div className="pl-12"><span className="text-blue-400">this</span>.<span className="text-yellow-400">optimize_revenue</span>();</div>
                                        <div className="pl-12"><span className="text-blue-400">this</span>.<span className="text-yellow-400">eliminate_inefficiency</span>();</div>
                                        <div className="pl-8">{"}"}</div>
                                        <div className="pl-4">{"}"}</div>
                                        <div>{"}"}</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-white/60 text-[10px]">• <span className="text-white">Recursive Logic:</span> Self-optimizing loops established.</div>
                                        <div className="text-white/60 text-[10px]">• <span className="text-white">Zero Latency:</span> Execution time &lt; 1ms.</div>
                                        <div className="text-white/60 text-[10px]">• <span className="text-white">Outcome:</span> Market dominance inevitable.</div>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-white/20 text-[10px]">
                                    <span>Plan, search, build anything...</span>
                                    <span className="ml-auto px-2 py-0.5 rounded bg-white/5 border border-white/5">Agent GPT-5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-secondary/20 blur-3xl -z-10 rounded-full opacity-20" />
                </motion.div>
            </div>
        </section>
    )
}
