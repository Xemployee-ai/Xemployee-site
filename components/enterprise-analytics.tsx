"use client"

import { motion } from "framer-motion"

export function EnterpriseAnalytics() {
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
                            Mathematical perfection.
                        </h2>
                        <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                            In head-to-head evaluations, 99.9% of biological employees are outperformed by Xemployee. We don&apos;t make mistakes; we make progress.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 relative backdrop-blur-sm">
                        <div className="absolute -top-4 -left-4 text-6xl text-secondary opacity-50 font-serif">&ldquo;</div>
                        <blockquote className="relative z-10 space-y-6">
                            <p className="text-lg text-white/90 leading-relaxed font-medium">
                                What used to be a weeks-long ramp-up, navigating complex repos and scheduling handoffs, is now a structured process built around Xemployee from millisecond one.
                            </p>
                            <footer className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden">
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-400" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Roni Avidor</div>
                                    <div className="text-white/40 text-sm font-mono">VP of Engineering, Cyberdyne Systems</div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </motion.div>

                {/* Right Column: Visual (Dashboard) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Window Frame */}
                    <div className="rounded-xl overflow-hidden bg-[#f5f5f5] text-black border border-white/10 shadow-2xl relative z-10">
                        {/* Window Header */}
                        <div className="bg-black px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="text-xs text-white/40 font-mono">xemployee.com/dashboard</div>
                            <div className="w-16" />
                        </div>

                        {/* Window Content */}
                        <div className="p-6 min-h-[400px] bg-[#f5f5f5]">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2 font-bold text-lg">
                                    <div className="w-6 h-6 bg-black rounded-full" />
                                    XEMPLOYEE
                                </div>
                                <div className="flex gap-4 text-sm text-gray-500">
                                    <span className="text-black font-medium">Agents</span>
                                    <span>Dashboard</span>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500 mb-1">Agent Line Edits</div>
                                    <div className="text-xl font-bold">426k <span className="text-green-500 text-xs">▲ 23%</span></div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500 mb-1">Tab Line Edits</div>
                                    <div className="text-xl font-bold">61k</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500 mb-1">Chats</div>
                                    <div className="text-xl font-bold">10k</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500 mb-1">Users</div>
                                    <div className="text-xl font-bold">122</div>
                                </div>
                            </div>

                            {/* Graph Area */}
                            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 relative h-48">
                                <div className="absolute inset-0 flex items-end justify-between px-6 pb-6 pt-12">
                                    <div className="w-full h-full flex items-end gap-4">
                                        {/* Fake Bars/Lines */}
                                        <div className="w-full h-full relative">
                                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                                <path d="M0 100 L 50 80 L 100 60 L 150 50 L 200 45 L 250 10 L 300 40" fill="none" stroke="#10b981" strokeWidth="2" />
                                                <path d="M0 100 L 50 80 L 100 60 L 150 50 L 200 45 L 250 10 L 300 40 L 300 150 L 0 150 Z" fill="url(#gradient)" opacity="0.1" />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#10b981" />
                                                        <stop offset="100%" stopColor="white" />
                                                    </linearGradient>
                                                </defs>
                                                {/* Points */}
                                                <circle cx="0" cy="100" r="3" fill="#10b981" />
                                                <circle cx="50" cy="80" r="3" fill="#10b981" />
                                                <circle cx="100" cy="60" r="3" fill="#10b981" />
                                                <circle cx="150" cy="50" r="3" fill="#10b981" />
                                                <circle cx="200" cy="45" r="3" fill="#10b981" />
                                                <circle cx="250" cy="10" r="3" fill="#10b981" />
                                                <circle cx="300" cy="40" r="3" fill="#10b981" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Grid Lines */}
                                <div className="absolute inset-0 px-6 py-6 flex flex-col justify-between pointer-events-none">
                                    <div className="w-full h-px bg-gray-100" />
                                    <div className="w-full h-px bg-gray-100" />
                                    <div className="w-full h-px bg-gray-100" />
                                    <div className="w-full h-px bg-gray-100" />
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="text-lg font-bold text-gray-400">1</div>
                                        <div>
                                            <div className="text-sm font-bold">Massimo</div>
                                            <div className="text-xs text-gray-400">Auto</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-mono text-gray-400">140k</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="text-lg font-bold text-gray-400">2</div>
                                        <div>
                                            <div className="text-sm font-bold">Tadao Ando</div>
                                            <div className="text-xs text-gray-400">GPT-5</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-mono text-gray-400">120k</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-green-500/10 blur-3xl -z-10 rounded-full opacity-20" />
                </motion.div>
            </div>
        </section>
    )
}
