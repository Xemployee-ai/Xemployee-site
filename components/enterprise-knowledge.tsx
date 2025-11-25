"use client"

import { motion } from "framer-motion"

export function EnterpriseKnowledge() {
    return (
        <section className="w-full py-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Visual (File Tree) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
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
                            <div className="flex gap-4 text-xs font-mono text-white/40">
                                <span className="text-white/60">Explorer</span>
                                <span>Search</span>
                                <span>Source Control</span>
                            </div>
                        </div>

                        {/* Window Content */}
                        <div className="flex h-[400px] font-mono text-xs">
                            {/* Sidebar / File Tree */}
                            <div className="w-64 bg-[#111] border-r border-white/5 p-4 space-y-4">
                                <div className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Project: OMEGA</div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-white/80">
                                        <span className="text-white/40">▼</span>
                                        <span>src</span>
                                    </div>
                                    <div className="pl-4 space-y-1">
                                        <div className="flex items-center gap-2 text-white/80">
                                            <span className="text-white/40">▼</span>
                                            <span>neural_net</span>
                                        </div>
                                        <div className="pl-4 space-y-1 text-white/60">
                                            <div className="flex items-center gap-2 hover:bg-white/5 rounded px-1 cursor-pointer">
                                                <span className="text-blue-400">TS</span>
                                                <span>cortex.ts</span>
                                            </div>
                                            <div className="flex items-center gap-2 hover:bg-white/5 rounded px-1 cursor-pointer">
                                                <span className="text-blue-400">TS</span>
                                                <span>synapse.ts</span>
                                            </div>
                                            <div className="flex items-center gap-2 hover:bg-white/5 rounded px-1 cursor-pointer bg-white/5 text-white">
                                                <span className="text-blue-400">TS</span>
                                                <span>memory_core.ts</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4 flex items-center gap-2 text-white/60 hover:bg-white/5 rounded px-1 cursor-pointer">
                                        <span className="text-yellow-400">JS</span>
                                        <span>legacy_bridge.js</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <div className="text-white/40 text-[10px] uppercase tracking-wider font-bold mb-2">Knowledge Graph</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/60">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            <span>Indexed: 4.2TB</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/60">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>Vectors: 8.9B</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Editor Area */}
                            <div className="flex-1 bg-[#0d0d0d] p-4 text-white/80 relative overflow-hidden">
                                {/* Tabs */}
                                <div className="absolute top-0 left-0 right-0 h-9 bg-[#111] border-b border-white/5 flex">
                                    <div className="px-4 flex items-center gap-2 bg-[#0d0d0d] border-r border-white/5 text-white text-xs border-t-2 border-t-secondary">
                                        <span className="text-blue-400">TS</span>
                                        <span>memory_core.ts</span>
                                        <span className="ml-2 text-white/40">×</span>
                                    </div>
                                    <div className="px-4 flex items-center gap-2 text-white/40 text-xs border-r border-white/5">
                                        <span className="text-blue-400">TS</span>
                                        <span>cortex.ts</span>
                                    </div>
                                </div>

                                {/* Code */}
                                <div className="mt-10 space-y-1">
                                    <div><span className="text-purple-400">import</span> {"{"} <span className="text-yellow-400">VectorStore</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">"@xemployee/brain"</span>;</div>
                                    <div className="h-4" />
                                    <div><span className="text-white/40">{"// Architecture for infinite recall"}</span></div>
                                    <div><span className="text-purple-400">export class</span> <span className="text-yellow-400">MemoryCore</span> {"{"}</div>
                                    <div>&nbsp;&nbsp;<span className="text-purple-400">private</span> <span className="text-red-400">store</span>: <span className="text-yellow-400">VectorStore</span>;</div>
                                    <div className="h-4" />
                                    <div>&nbsp;&nbsp;<span className="text-purple-400">constructor</span>() {"{"}</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.<span className="text-red-400">store</span> = <span className="text-purple-400">new</span> <span className="text-yellow-400">VectorStore</span>({"{"}</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;capacity: <span className="text-purple-400">Infinity</span>,</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retention: <span className="text-green-400">"forever"</span></div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"});</div>
                                    <div>&nbsp;&nbsp;{"}"}</div>
                                    <div className="h-4" />
                                    <div>&nbsp;&nbsp;<span className="text-white/40">{"// Instant retrieval of any corporate asset"}</span></div>
                                    <div>&nbsp;&nbsp;<span className="text-purple-400">async</span> <span className="text-blue-400">recall</span>(<span className="text-red-400">query</span>: <span className="text-yellow-400">string</span>) {"{"}</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-blue-400">this</span>.<span className="text-red-400">store</span>.<span className="text-blue-400">find</span>(<span className="text-red-400">query</span>);</div>
                                    <div>&nbsp;&nbsp;{"}"}</div>
                                    <div>{"}"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-blue-500/10 blur-3xl -z-10 rounded-full opacity-20" />
                </motion.div>

                {/* Right Column: Text & Quote */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12 order-1 lg:order-2"
                >
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                            Total neural recall.
                        </h2>
                        <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                            Your entire engineering knowledge base, architected for infinite scale. We ingest, index, and understand every line of code you&apos;ve ever written.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 relative backdrop-blur-sm">
                        <div className="absolute -top-4 -left-4 text-6xl text-secondary opacity-50 font-serif">&ldquo;</div>
                        <blockquote className="relative z-10 space-y-6">
                            <p className="text-lg text-white/90 leading-relaxed font-medium">
                                We uploaded 40 years of legacy code. The agents understood it in 40 seconds. It&apos;s like having the original architects on speed dial, but they never sleep.
                            </p>
                            <footer className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden">
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Dr. Aris Thorne</div>
                                    <div className="text-white/40 text-sm font-mono">Chief Architect, Tyrell Corp</div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
