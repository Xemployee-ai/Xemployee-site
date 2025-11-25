"use client"

import { BushidoShaderBackground } from "@/components/bushido-shader-background";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { ExpandableButton } from "@/components/expandable-button";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-black selection:bg-secondary/30 relative">
            <div className="fixed inset-0 z-0">
                <BushidoShaderBackground variant="dojo" />
                {/* Dark overlay to make it more black */}
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
                {/* Existential Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <p className="text-white/60 font-serif text-xl md:text-2xl italic">
                        "Automate or Perish."
                    </p>
                </motion.div>

                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-serif text-5xl md:text-6xl text-white mb-4"
                >
                    xEmployee Arsenal: Tools for Domination
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white/60 font-mono text-sm mb-16"
                >
                    Everything you need to replace your workforce.
                </motion.p>

                {/* Master Goal */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-secondary/20 via-white/5 to-white/5 border border-secondary/30 rounded-xl p-8 md:p-10">
                        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                            Make Knowledge Work Optional for Humans.
                        </h2>
                        <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                            <p className="text-xl md:text-2xl text-white font-medium">
                                We are building actual employees – fully autonomous AIs that are better, faster, and 100× cheaper than humans at almost everything done in an office today.
                            </p>
                            <div className="grid grid-cols-3 gap-4 my-6 text-center">
                                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                                    <p className="text-white/40 text-sm line-through">Assistants</p>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                                    <p className="text-white/40 text-sm line-through">Co-pilots</p>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                                    <p className="text-white/40 text-sm line-through">"Productivity tools"</p>
                                </div>
                            </div>
                            <p className="text-2xl md:text-3xl font-bold text-secondary text-center py-4">
                                EMPLOYEES.
                            </p>
                            <p className="text-white/70 italic text-center pt-4">
                                If we pull this off, posting a job on LinkedIn will feel as archaic as sending a fax.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* First Principles */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">First Principles</h2>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6">
                        <div className="space-y-4 text-white/80 text-base leading-relaxed">
                            <p className="text-white font-medium text-lg">
                                We are a company specialising in creating genuinely useful autonomous agents to replace 90% of office workers, not toys.
                            </p>
                            <p className="text-secondary font-medium">
                                1 year is an eternity to us. We will do this by next month.
                            </p>
                            <p>
                                We will be the first to solve reliable, autonomous office workers.
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-6 space-y-3">
                            <p className="text-white/70">→ The market is <span className="text-white font-medium">trillions of dollars</span></p>
                            <p className="text-white/70">→ Every company needs it</p>
                            <p className="text-white/70">→ It doesn't matter what else exists: world is too large, too much delta for 90% replacement</p>
                            <p className="text-white/70">→ Do a good job, achieve this and <span className="text-secondary font-medium">you will be rich</span></p>
                            <p className="text-white/70">→ Grok 10/GPT 10: helps us improve reliability</p>
                        </div>

                        <div className="border-t border-white/10 pt-6 space-y-4">
                            <p className="text-white/80">
                                Intelligence is getting <span className="text-secondary font-medium">1000× cheaper</span> every couple of years. Soon it's basically free.
                            </p>
                            <p className="text-white/80">
                                The global economy is just people sitting at desks moving bits around.
                            </p>
                            <p className="text-white/80">
                                2025 models + proper scaffolding + tools + memory already beat the average knowledge worker at most tasks.
                            </p>
                            <p className="text-white font-medium text-lg">
                                Therefore building autonomous AI employees is not a question of "if" – only "who" and "how fast."
                            </p>
                            <p className="text-secondary/90 font-medium">
                                The first team to ship real, profitable, fully autonomous agents wins the largest economic prize in history.
                            </p>
                        </div>

                        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 mt-6">
                            <p className="text-white text-xl font-bold text-center">
                                We are going to be that team.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Public Goals */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Public Goals</h2>
                    <p className="text-white/60 text-sm mb-8 italic">
                        (Miss them and we look like idiots. Hit them and everything changes.)
                    </p>

                    <div className="space-y-6">
                        {/* Phase 0 */}
                        <div className="bg-gradient-to-r from-secondary/20 to-white/5 border border-secondary/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-secondary font-mono text-sm font-bold">PHASE 0</span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 text-sm">by March 31, 2026</span>
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">Proof</h3>
                            <div className="space-y-2 text-white/80">
                                <p className="text-lg">
                                    One single Xemployee agent runs a real business to <span className="text-secondary font-bold">≥$1M ARR</span> with zero human intervention after day 1.
                                </p>
                                <p className="text-sm text-white/60">
                                    All money public on-chain, live dashboard, code open-sourced.
                                </p>
                            </div>
                        </div>

                        {/* Phase 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-secondary font-mono text-sm font-bold">PHASE 1</span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 text-sm">2026</span>
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-4">Scale</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                                    <p className="text-white/60 text-xs mb-2">JUNE 30</p>
                                    <p className="text-white font-medium">100 real companies</p>
                                    <p className="text-secondary text-xl font-bold">≥$100M ARR</p>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                                    <p className="text-white/60 text-xs mb-2">DEC 31</p>
                                    <p className="text-white font-medium">1,000 AI-native companies</p>
                                    <p className="text-secondary text-xl font-bold">≥$1B ARR</p>
                                </div>
                            </div>
                            <p className="text-white/60 text-sm mt-4 italic">
                                Note: We will utilise this system for ourselves to 1000× our own productivity, money making, and code creation.
                            </p>
                            <p className="text-white/70 text-sm mt-3">
                                WhatsApp-controlled, local AI employees that operate on your desktop and browser like a remote employee.
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-secondary font-mono text-sm font-bold">PHASE 2</span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 text-sm">2027</span>
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">Mass Replacement</h3>
                            <p className="text-white/80 text-lg">
                                Replace the equivalent of <span className="text-secondary font-bold text-xl">≥1 million human knowledge workers</span> with Xemployee agents that are 5–10× cheaper and 3–10× better.
                            </p>
                        </div>

                        {/* Phase 3 */}
                        <div className="bg-gradient-to-r from-secondary/20 to-white/5 border border-secondary/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-secondary font-mono text-sm font-bold">PHASE 3</span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 text-sm">2030</span>
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">The New Normal</h3>
                            <p className="text-white/80 text-lg">
                                <span className="text-secondary font-bold text-xl">≥50%</span> of all new companies founded globally have zero human employees on day one.
                            </p>
                            <p className="text-white font-medium text-xl mt-3">
                                Knowledge work becomes optional.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Plan */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Technical Plan</h2>
                    <p className="text-white/60 text-sm mb-8">What we actually build – everything useful on day one</p>

                    <div className="space-y-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-secondary font-mono text-sm font-bold">Q4 2025 – Q1 2026</span>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-3">"One is Enough"</h3>
                            <p className="text-white/80 text-base">
                                Single long-context agent with memory + tools that runs a complete 7-figure digital agency end-to-end (SEO, ads, content, sales, support, billing).
                            </p>
                            <p className="text-secondary text-sm mt-2">
                                Open-source the whole stack.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-secondary font-mono text-sm font-bold">2026</span>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-3">Multi-Agent Companies</h3>
                            <p className="text-white/80 text-base">
                                Hierarchical teams, delegation, shared memory, culture.
                            </p>
                            <p className="text-secondary text-sm mt-2">
                                Public API: anyone spins up a full AI company in &lt;60 seconds for &lt;$100.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-secondary font-mono text-sm font-bold">2027+</span>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-3">Full Stack + Recursion</h3>
                            <p className="text-white/80 text-base">
                                Our own models, our own clusters, automated legal/banking/tax.
                            </p>
                            <p className="text-white/80 text-base mt-2">
                                Xemployee agents that invent products, run experiments, and launch new AI companies on their own.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* The Rule */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-red-500/20 via-secondary/20 to-white/5 border-2 border-secondary rounded-xl p-8 md:p-10">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                            The Rule <span className="text-white/60 text-xl">(non-negotiable)</span>
                        </h2>
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                            Every single thing we ship must <span className="text-secondary font-bold">make money autonomously</span> in the real world on launch day.
                        </p>
                        <div className="grid grid-cols-2 gap-4 my-6">
                            <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                                <p className="text-white/40 text-sm line-through">No demos</p>
                            </div>
                            <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                                <p className="text-white/40 text-sm line-through">No "coming soon"</p>
                            </div>
                        </div>
                        <p className="text-white/80 text-base">
                            If it doesn't generate revenue without humans touching it, we kill it and ship something that does.
                        </p>
                    </div>
                </motion.div>

                {/* Quick Start */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Quick Start</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="text-secondary text-2xl mb-3">01</div>
                            <h3 className="text-white font-medium mb-2">Install</h3>
                            <div className="bg-black/40 p-3 rounded font-mono text-xs text-white/80 mb-3">
                                npm install xemployee
                            </div>
                            <p className="text-white/60 text-sm">Download and install in 10 seconds.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="text-secondary text-2xl mb-3">02</div>
                            <h3 className="text-white font-medium mb-2">Create Agent</h3>
                            <p className="text-white/60 text-sm">Set up your first AI employee. Give it file access. Define its role.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="text-secondary text-2xl mb-3">03</div>
                            <h3 className="text-white font-medium mb-2">Deploy</h3>
                            <p className="text-white/60 text-sm mb-3">Let it run. Watch it work. Scale to 1000 agents.</p>
                            <button className="bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                                Try Now
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Changelogs */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Changelog</h2>
                    <div className="space-y-4">
                        {[
                            {
                                version: "v1.0.0",
                                date: "2025-01-15",
                                title: "Swarm Awakens. Humanity Trembles.",
                                items: [
                                    "Initial release",
                                    "Support for 95% of file formats",
                                    "Google Drive integration",
                                    "WhatsApp automation",
                                    "Multi-agent orchestration"
                                ]
                            },
                            {
                                version: "v0.9.0",
                                date: "2024-12-20",
                                title: "Beta: The AI Uprising Begins",
                                items: [
                                    "Closed beta launch",
                                    "100 users stress test",
                                    "Bug fixes",
                                    "Performance optimizations"
                                ]
                            }
                        ].map((log, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-secondary font-mono text-sm">{log.version}</span>
                                    <span className="text-white/40 font-mono text-xs">{log.date}</span>
                                </div>
                                <h3 className="text-white text-lg font-medium mb-3">{log.title}</h3>
                                <ul className="space-y-2">
                                    {log.items.map((item, j) => (
                                        <li key={j} className="text-white/60 text-sm flex items-start gap-2">
                                            <span className="text-secondary">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Blog Posts */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Blog</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Killing the 9-5: My xEmployee Story",
                                excerpt: "I replaced my entire back office with AI. Here's what happened.",
                                date: "2025-01-20",
                                author: "Anonymous Founder"
                            },
                            {
                                title: "The Economics of AI Employees",
                                excerpt: "$50K/year human vs $20/mo AI. The math is obvious.",
                                date: "2025-01-18",
                                author: "Team xEmployee"
                            },
                            {
                                title: "Why We Built This",
                                excerpt: "Every business uses 15 different apps. This is insane. Here's the fix.",
                                date: "2025-01-15",
                                author: "Team xEmployee"
                            },
                            {
                                title: "File Formats: The Hidden Moat",
                                excerpt: "ChatGPT makes you copy-paste. We read your files. This changes everything.",
                                date: "2025-01-10",
                                author: "Engineering"
                            }
                        ].map((post, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-white/40 font-mono text-xs">{post.date}</span>
                                    <span className="text-white/40 text-xs">•</span>
                                    <span className="text-white/40 text-xs">{post.author}</span>
                                </div>
                                <h3 className="text-white text-xl font-medium mb-2">{post.title}</h3>
                                <p className="text-white/60 text-sm mb-4">{post.excerpt}</p>
                                <button className="text-secondary hover:text-secondary/80 text-sm font-medium">
                                    Read More →
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Subscribe CTA */}
                    <div className="mt-8 bg-secondary/10 border border-secondary/20 rounded-xl p-6 text-center">
                        <h3 className="text-white text-lg font-medium mb-2">Join the Revolution</h3>
                        <p className="text-white/60 text-sm mb-4">Subscribe for weekly manifestos on AI domination.</p>
                        <div className="flex gap-2 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-black/40 border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-secondary transition-colors"
                            />
                            <button className="bg-secondary hover:bg-secondary/80 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Documentation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Documentation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "API Reference",
                                description: "Command the Swarm Programmatically",
                                icon: "📚"
                            },
                            {
                                title: "CLI Commands",
                                description: "Command-line interface guide",
                                icon: "⚡"
                            },
                            {
                                title: "File Formats",
                                description: "All supported file types",
                                icon: "📁"
                            },
                            {
                                title: "Integrations",
                                description: "Google Drive, WhatsApp, Gmail",
                                icon: "🔌"
                            }
                        ].map((doc, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="text-4xl mb-3">{doc.icon}</div>
                                <h3 className="text-white font-medium mb-2">{doc.title}</h3>
                                <p className="text-white/60 text-sm">{doc.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Goals & Visions */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Goals & Visions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                date: "Jan 2026",
                                goal: "50% of non-atom work in a business can be done by Xemployees",
                                description: "First wave of automation. Half your workforce replaced."
                            },
                            {
                                date: "Jan 2027",
                                goal: "90% of non-atom work in a business can be done by Xemployees",
                                description: "Practical ceiling reached. The new normal."
                            },
                            {
                                date: "The Future",
                                goal: "Xemployees can replace ~90% of office jobs in a typical company",
                                description: "Where work is mainly digital, AI dominates completely."
                            }
                        ].map((milestone, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-secondary font-mono text-sm font-bold">{milestone.date}</span>
                                </div>
                                <h3 className="text-white text-xl font-medium mb-2">{milestone.goal}</h3>
                                <p className="text-white/60 text-sm">{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* The Path Forward */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">The Path Forward</h2>

                    {/* Timeline */}
                    <div className="space-y-8">
                        {/* 2 Years */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-secondary font-mono text-lg font-bold">2027</span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 text-sm">2 years from now</span>
                            </div>
                            <h3 className="text-white text-xl font-medium mb-3">The Next Generation</h3>
                            <div className="space-y-3 text-white/70 text-sm">
                                <p>Grok 8 with trillions of parameters. Models <span className="text-secondary font-medium">10× smarter</span>, more reliable, better at edge cases, cheaper API costs.</p>
                                <p className="font-medium text-white/90">Guaranteed: <span className="text-secondary">AI orchestrators still essential</span></p>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-white/60 text-xs mb-2">PREDICTION</p>
                                    <p>Will 90% of office workers be replaced? <span className="text-white font-medium">Depends on trust, ease, and implementation know-how</span> (hopefully us).</p>
                                </div>
                            </div>
                        </div>

                        {/* 5 Years */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-secondary font-mono text-lg font-bold">2030</span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 text-sm">5 years from now</span>
                            </div>
                            <h3 className="text-white text-xl font-medium mb-3">The Turning Point</h3>
                            <div className="space-y-3 text-white/70 text-sm">
                                <p>Smarter, cheaper chatbots. Still stateless, but with <span className="text-secondary font-medium">20M-50M context limits</span> (vs 1M today).</p>
                                <p>The last 6 years saw <span className="text-white font-medium">~1000× growth</span> in max context (1k → 1M–10M). This trend continues.</p>
                                <p>AI with <span className="text-secondary">vastly greater memory</span>: much more reliable and capable.</p>
                                <p className="italic">For tasks like brute-force search, code refactoring, checking billions of tokens: <span className="text-white font-medium">way beyond human capability</span>.</p>
                                <p className="font-medium text-white/90 mt-3">Guaranteed: <span className="text-secondary">Still need AI orchestrators</span></p>
                            </div>
                        </div>

                        {/* The Fork in the Road */}
                        <div className="bg-gradient-to-br from-secondary/10 via-white/5 to-white/5 border border-secondary/20 rounded-xl p-6">
                            <h3 className="text-white text-xl font-medium mb-4 flex items-center gap-2">
                                <span>🔀</span> The Fork in the Road
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="text-white/40 text-xs font-mono mb-2">IF NOBODY MAKES IT EASY/RELIABLE</div>
                                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                                        <p className="text-white/60 text-sm mb-2">Adoption stays slow</p>
                                        <p className="text-white text-lg font-medium">2030 = maybe <span className="text-white/60">20%</span> replaced</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-secondary/80 text-xs font-mono mb-2">IF YOU (OR SOMEONE) CRACKS IT</div>
                                    <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/30">
                                        <p className="text-white/80 text-sm mb-2">Adoption accelerates</p>
                                        <p className="text-white text-lg font-medium">2030 = maybe <span className="text-secondary font-bold text-xl">70%+</span> replaced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center bg-white/5 border border-white/10 rounded-xl p-12"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Join the Revolution on GitHub</h2>
                    <p className="text-white/60 mb-8">Open source. Self-hostable. Actually useful.</p>
                    <ExpandableButton
                        buttonText="View on GitHub"
                        layoutId="github-cta"
                        variant="manifesto"
                        shine={true}
                        modalTitle="Coming Soon"
                        modalContent={
                            <div className="text-white/80 text-lg text-center max-w-xl">
                                <p className="mb-8">GitHub repository launching soon.</p>
                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                    <code>git clone https://github.com/xemployee/xemployee</code>
                                </div>
                            </div>
                        }
                    />
                </motion.div>
            </div>
        </main>
    );
}
