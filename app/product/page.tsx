"use client"

import { BushidoShaderBackground } from "@/components/bushido-shader-background"
import { ExpandableButton } from "@/components/expandable-button"
import { motion } from "framer-motion"
import { FeaturesFooter } from "@/components/features-footer"
import { AnimatedBall } from "@/components/animated-ball"

export default function FeaturesPage() {
    return (
        <main className="w-full min-h-screen bg-transparent relative overflow-y-auto selection:bg-secondary/30">
            <BushidoShaderBackground variant="main" />

            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
                {/* Hero Section */}
                <div className="max-w-6xl space-y-6 mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white/60 font-mono text-sm mb-4"
                    >
                        Product
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-serif text-5xl md:text-6xl text-white leading-tight text-left max-w-4xl"
                    >
                        Humans Are Now Optional
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-start"
                    >
                        <ExpandableButton
                            buttonText="Deploy Xemployee"
                            buttonIcon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            }
                            layoutId="features-cta"
                            variant="manifesto"
                            shine={true}
                            modalTitle="Deploy Xemployee"
                            modalContent={
                                <div className="text-center">
                                    <p className="text-white/80 mb-4">Deploy your digital workforce.</p>
                                    <div className="bg-black/40 p-4 rounded-lg font-mono text-sm text-white">
                                        npm install xemployee
                                    </div>
                                </div>
                            }
                        />
                    </motion.div>
                </div>

                {/* Product Visual + Description Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-32 grid grid-cols-1 lg:grid-cols-4 gap-12 items-center"
                >
                    {/* Left: Text Content */}
                    <div className="space-y-6 lg:col-span-1">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                            Xemployees
                        </h2>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
                            Swap the human for an AI worker that runs 24/7 on schedules and triggers, clears the queue, and never asks what to do next.
                        </p>
                    </div>

                    {/* Right: Product Visual */}
                    <div className="relative w-full aspect-[5/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm group cursor-pointer hover:border-white/20 transition-colors lg:col-span-3">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-32 h-32 mx-auto rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p className="text-white/60 font-mono text-sm uppercase tracking-wider">Try Swarm Mode Now</p>
                                <p className="text-white/40 font-mono text-xs">Interactive Demo Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feature Highlight Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                            Humans Are the Bottleneck
                        </h2>
                        <div className="text-lg text-white/60 leading-relaxed max-w-md space-y-4">
                            <p>Xemployees run entire workflows with infinite stamina and zero downtime.</p>
                            <p>Every Xemployee we ship has been tested in production against real humans doing the exact same role.</p>
                            <p>Metrics: output volume, speed, error rate, cost per task, reliability.</p>
                            <p>They all outperform the median human on every metric.</p>
                            <p>And they will only keep getting better.</p>
                        </div>
                        <div className="pt-4">
                            <a href="#" className="text-secondary hover:text-secondary/80 font-medium flex items-center gap-2 group">
                                View specs
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />

                        <div className="absolute inset-8 bg-black/40 rounded-lg border border-white/10 p-6 space-y-4 backdrop-blur-sm">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <div className="ml-auto text-xs font-mono text-white/30">swarm_core_v9.exe</div>
                            </div>
                            <div className="space-y-3 font-mono text-xs text-green-400/80">
                                <p>{">"} Optimizing workflow efficiency...</p>
                                <p>{">"} Output: 10,000% Increase</p>
                                <p className="text-white/80">{">"} Human workforce: terminated</p>
                                <p className="text-yellow-400">{">"} Warning: Human obsolescence imminent</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Your First Xemployee Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-32 grid grid-cols-1 lg:grid-cols-4 gap-12 items-center"
                >
                    {/* Left: Text Content */}
                    <div className="space-y-6 lg:col-span-1">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                            Your First Xemployee
                        </h2>
                        <div className="text-base md:text-lg text-white/70 leading-relaxed space-y-4">
                            <p>No blank prompts. No tinkering for weeks.</p>
                            <p>Start with a roster of roles we've already run against human teams:</p>

                            <div className="space-y-4 pt-2">
                                <div>
                                    <p className="text-white font-semibold mb-1">Raptor-1 → Outbound SDR</p>
                                    <p className="text-sm text-white/60">Handles prospecting, cold email, and replies, then hands off when a human actually needs to step in.</p>
                                </div>

                                <div>
                                    <p className="text-white font-semibold mb-1">Sentinel-1 → L1 support (in training)</p>
                                    <p className="text-sm text-white/60">Built to answer common tickets instantly and escalate the weird ones.</p>
                                </div>

                                <div>
                                    <p className="text-white font-semibold mb-1">Scribe-1 → Back office & forms (in training)</p>
                                    <p className="text-sm text-white/60">Designed to fill forms, update CRMs/spreadsheets, and clear repetitive admin.</p>
                                </div>
                            </div>

                            <p className="pt-2">Or spin up your own Xemployee.</p>
                            <p className="font-medium text-white">Day-one easy replacement. Zero guesswork.</p>
                        </div>
                    </div>

                    {/* Right: Product Visual */}
                    <div className="relative w-full aspect-[5/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm group cursor-pointer hover:border-white/20 transition-colors lg:col-span-3">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-32 h-32 mx-auto rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p className="text-white/60 font-mono text-sm uppercase tracking-wider">View Xemployee Roster</p>
                                <p className="text-white/40 font-mono text-xs">Video Demo Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Autocomplete Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Image Content (Left) */}
                    <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl p-8 flex items-center justify-center">
                        <div className="w-full max-w-md bg-[#0d0d0d] rounded-lg border border-white/10 overflow-hidden shadow-lg">
                            <div className="h-8 bg-[#1e1e1e] border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <div className="ml-4 text-xs text-white/40 font-mono">neural_link.tsx</div>
                            </div>
                            <div className="p-6 font-mono text-sm leading-relaxed space-y-2">
                                <div><span className="text-blue-400">import</span> <span className="text-white">React</span> <span className="text-blue-400">from</span> <span className="text-green-400">"react"</span>;</div>
                                <div className="h-2" />
                                <div><span className="text-purple-400">function</span> <span className="text-yellow-400">NeuralInterface</span>() {"{"}</div>
                                <div>&nbsp;&nbsp;<span className="text-blue-400">const</span> [thought, setThought] = <span className="text-yellow-400">useState</span>(<span className="text-green-400">""</span>);</div>
                                <div className="h-2" />
                                <div>&nbsp;&nbsp;<span className="text-white/40">{"// Predicting next action..."}</span></div>
                                <div>&nbsp;&nbsp;<span className="text-white">return</span> (</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"<ConnectToCortex />"}</span></div>
                                <div>&nbsp;&nbsp;);</div>
                                <div>{"}"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content (Right) */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                            Full Self-Driving for Business
                        </h2>
                        <div className="text-lg text-white/60 leading-relaxed max-w-md space-y-4">
                            <p>The fully autonomous company is no longer a thought experiment.</p>
                            <p>Xemployees can now run the day-to-day work that happens behind a screen—outbound, support, ops, forms—24/7.</p>
                            <p>Humans deploy an Xemployee once, set high-level goals and guardrails, and step back to watch the numbers.</p>
                            <p>Everything else is on autopilot. No meetings. No payroll. No excuses.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Feature Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Card 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4 hover:bg-white/10 transition-colors group">
                        <div className="h-48 bg-black/40 rounded-lg border border-white/5 mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-secondary rounded-full absolute top-1/4 left-1/4 animate-pulse" />
                                <div className="w-2 h-2 bg-secondary rounded-full absolute top-3/4 left-3/4 animate-pulse" />
                                <div className="w-2 h-2 bg-secondary rounded-full absolute top-1/2 left-1/2 animate-pulse" />
                                <svg className="absolute inset-0 w-full h-full stroke-secondary/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <line x1="25" y1="25" x2="50" y2="50" strokeWidth="0.5" />
                                    <line x1="50" y1="50" x2="75" y2="75" strokeWidth="0.5" />
                                    <line x1="25" y1="25" x2="75" y2="75" strokeWidth="0.5" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="font-serif text-2xl text-white">Swarm Mode</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                            One Xemployee → 10,000 Xemployees.<br />
                            Same bill.<br />
                            Headcount still zero.<br />
                            Good luck keeping up.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4 hover:bg-white/10 transition-colors group">
                        <div className="h-48 bg-black/40 rounded-lg border border-white/5 mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                <div className="w-16 h-6 bg-white/10 rounded border border-white/10" />
                                <div className="flex gap-4">
                                    <div className="w-12 h-6 bg-white/10 rounded border border-white/10" />
                                    <div className="w-12 h-6 bg-white/10 rounded border border-white/10" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-6 bg-secondary/20 rounded border border-secondary/20" />
                                    <div className="w-8 h-6 bg-white/10 rounded border border-white/10" />
                                    <div className="w-8 h-6 bg-white/10 rounded border border-white/10" />
                                </div>
                            </div>
                        </div>
                        <h3 className="font-serif text-2xl text-white">AI Brains</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                            Whatever model is crushing it this week, that's the brain.<br />
                            Upgrades drop automatically.<br />
                            Your humans don't get that patch.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4 hover:bg-white/10 transition-colors group">
                        <div className="h-48 bg-black/40 rounded-lg border border-white/5 mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-16 border-2 border-white/20 rounded flex flex-col items-center justify-center gap-1">
                                    <div className="w-8 h-1 bg-white/20 rounded" />
                                    <div className="w-8 h-1 bg-white/20 rounded" />
                                    <div className="w-6 h-1 bg-white/20 rounded" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-secondary/10 to-transparent animate-pulse" />
                            </div>
                        </div>
                        <h3 className="font-serif text-2xl text-white">Instant Upload</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                            Plug in your Gmail, Notion, Slack, CRM.<br />
                            90 seconds later every Xemployee knows your entire company better than your last hire.<br />
                            They start closing tickets while HR is still writing the job post.
                        </p>
                    </div>
                </motion.div>

                {/* What One Xemployee Can Do Right Now Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-12 text-center">
                        What One Xemployee Can Do Right Now (Real Examples)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Card 1: Surf the Web */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors group">
                            <div className="text-5xl mb-4">🌐</div>
                            <h3 className="font-serif text-xl text-white">Surf the Web</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Browse any site, scrape data, click buttons — no human in the loop.
                            </p>
                            <div className="h-32 bg-black/40 rounded-lg border border-white/5 mt-4 flex items-center justify-center">
                                <p className="text-white/40 font-mono text-xs">GIF: Xemployee opening Crunchbase, copying 200 leads into Google Sheets</p>
                            </div>
                        </div>

                        {/* Card 2: Fill Any Form */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors group">
                            <div className="text-5xl mb-4">📝</div>
                            <h3 className="font-serif text-xl text-white">Fill Any Form</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Thiel Fellowship, YC, visas, grants, job apps — submits 200+ per day.
                            </p>
                            <div className="h-32 bg-black/40 rounded-lg border border-white/5 mt-4 flex items-center justify-center">
                                <p className="text-white/40 font-mono text-xs">Screenshot: "Application submitted by Xemployee #47"</p>
                            </div>
                        </div>

                        {/* Card 3: Post on X / Socials */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors group">
                            <div className="text-5xl mb-4">🐦</div>
                            <h3 className="font-serif text-xl text-white">Post on X / Socials</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Writes, schedules, replies, grows accounts — 24/7 autopilot.
                            </p>
                            <div className="h-32 bg-black/40 rounded-lg border border-white/5 mt-4 flex items-center justify-center">
                                <p className="text-white/40 font-mono text-xs">GIF: 50 accounts posting different memes at once</p>
                            </div>
                        </div>

                        {/* Card 4: Cold Email & DM */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors group">
                            <div className="text-5xl mb-4">📧</div>
                            <h3 className="font-serif text-xl text-white">Cold Email & DM</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Personalized outreach to 500 investors/day. Books calls while you sleep.
                            </p>
                            <div className="h-32 bg-black/40 rounded-lg border border-white/5 mt-4 flex items-center justify-center">
                                <p className="text-white/40 font-mono text-xs">Live inbox: "Meeting booked with a16z partner"</p>
                            </div>
                        </div>

                        {/* Card 5: WhatsApp / SMS / Slack */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors group">
                            <div className="text-5xl mb-4">💬</div>
                            <h3 className="font-serif text-xl text-white">WhatsApp / SMS / Slack</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Customer support, sales, reminders — replies instantly in your tone.
                            </p>
                            <div className="h-32 bg-black/40 rounded-lg border border-white/5 mt-4 flex items-center justify-center">
                                <p className="text-white/40 font-mono text-xs">GIF: WhatsApp conversation handled perfectly</p>
                            </div>
                        </div>

                        {/* Card 6: Create & Edit Docs */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors group">
                            <div className="text-5xl mb-4">📄</div>
                            <h3 className="font-serif text-xl text-white">Create & Edit Docs</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Writes pitch decks, contracts, blog posts, code — from one prompt.
                            </p>
                            <div className="h-32 bg-black/40 rounded-lg border border-white/5 mt-4 flex items-center justify-center">
                                <p className="text-white/40 font-mono text-xs">GIF: Google Doc being written in real time</p>
                            </div>
                        </div>

                        {/* Card 7: Auto-Schedule & Wake-Up Swarm */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors group md:col-span-2 lg:col-span-1">
                            <div className="text-5xl mb-4">⏰</div>
                            <h3 className="font-serif text-xl text-white">Auto-Schedule & Wake-Up Swarm</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Set it once: "Every day at 8 am, cold-DM 200 investors. Every Monday, apply to 50 grants." The swarm wakes itself, runs, sleeps, repeats — forever.
                            </p>
                            <div className="h-32 bg-black/40 rounded-lg border border-white/5 mt-4 flex items-center justify-center relative">
                                <div className="text-center">
                                    <p className="text-white/40 font-mono text-xs mb-2">GIF: Calendar view → clock hits 8:00 → 200 emails fire → goes back to sleep</p>
                                    <p className="text-white/60 font-mono text-xs italic">You set the mission. They run it on autopilot until the heat death of the universe.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-center text-white/80 text-lg md:text-xl font-mono max-w-2xl mx-auto">
                        Pick one task. Give it to an Xemployee. Never touch it again.
                    </p>
                </motion.div>

                {/* Evals Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32"
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="border-t border-white/10 pt-12">
                            <p className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] mb-8">
                                Xemployee evals (draft)
                            </p>
                            <div className="space-y-6 text-white/70 text-lg md:text-xl leading-relaxed font-light">
                                <p>
                                    We don't sell "AI employees" as a vibe. We grade them like hires.
                                </p>
                                <p>
                                    Each Xemployee is tested on clear, objective stats—output, cost efficiency, reliability—and we continuously push those numbers up.
                                    Because we actually measure and compare them against humans on their own scorecards, we can tell if an Xemployee is improving or just pretending.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Integration Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                            Command From Anywhere
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed max-w-md">
                            Surf the web, fill any form, post on X, send emails, message WhatsApp. Zero human clicks.
                        </p>
                        <div className="pt-4">
                            <a href="#" className="text-secondary hover:text-secondary/80 font-medium flex items-center gap-2 group">
                                Initialize remote command
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />

                        {/* Abstract UI representation: Mobile + Chat */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            {/* Background Chat Window */}
                            <div className="absolute top-8 right-8 w-3/4 h-3/4 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-2xl p-4 space-y-3 opacity-60 scale-95 origin-top-right">
                                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-20 h-2 bg-white/10 rounded" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-6 h-6 rounded-full bg-secondary/20" />
                                    <div className="flex-1 bg-white/5 rounded p-2">
                                        <div className="w-3/4 h-2 bg-white/10 rounded mb-1" />
                                        <div className="w-1/2 h-2 bg-white/10 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Foreground Mobile Interface */}
                            <div className="relative w-48 h-80 bg-black border border-white/20 rounded-[2rem] shadow-2xl p-4 flex flex-col gap-4">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl border-b border-x border-white/10" />

                                {/* Screen Content */}
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-secondary animate-pulse" />
                                    </div>
                                    <div className="text-[10px] font-mono text-green-400">STATUS: ACTIVE</div>
                                </div>

                                <div className="flex-1 space-y-2">
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <div className="text-[8px] text-white/40 mb-1">TASK #8821</div>
                                        <div className="text-[10px] text-white">Optimizing revenue...</div>
                                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                            <div className="w-3/4 h-full bg-green-500 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5">
                                        <div className="text-[8px] text-white/40 mb-1">TASK #8822</div>
                                        <div className="text-[10px] text-white">Deploying infrastructure...</div>
                                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                            <div className="w-1/2 h-full bg-yellow-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Action */}
                                <div className="h-8 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/20">
                                    <div className="text-[10px] text-secondary font-bold">EXECUTE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tools Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Card 1: Neural Dashboard */}
                    <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
                        <div className="p-8 space-y-4">
                            <div className="text-4xl mb-3">🧠</div>
                            <h3 className="font-serif text-2xl text-white">Neural Dash</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Control the Hive.
                            </p>
                            <a href="#" className="text-secondary hover:text-secondary/80 font-medium text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform inline-flex">
                                Launch Dashboard <span>→</span>
                            </a>
                        </div>
                        <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-4 relative overflow-hidden min-h-[200px]">
                            {/* Abstract Graph Visual */}
                            <div className="absolute inset-0 flex items-end justify-center px-8 pb-8 gap-2">
                                <div className="w-1/5 h-[40%] bg-white/5 rounded-t animate-pulse" />
                                <div className="w-1/5 h-[70%] bg-white/5 rounded-t animate-pulse delay-75" />
                                <div className="w-1/5 h-[50%] bg-secondary/20 rounded-t animate-pulse delay-150" />
                                <div className="w-1/5 h-[80%] bg-white/5 rounded-t animate-pulse delay-100" />
                                <div className="w-1/5 h-[60%] bg-white/5 rounded-t animate-pulse delay-200" />
                            </div>
                            {/* Overlay Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
                                <path d="M0 150 Q 50 100 100 120 T 200 80 T 300 150" fill="none" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 2: Direct Interface */}
                    <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
                        <div className="p-8 space-y-4">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="font-serif text-2xl text-white">CLI Direct</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Bypass the Weak GUI.
                            </p>
                            <a href="#" className="text-secondary hover:text-secondary/80 font-medium text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform inline-flex">
                                Install CLI <span>→</span>
                            </a>
                        </div>
                        <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-4 relative overflow-hidden min-h-[200px]">
                            {/* Terminal Visual */}
                            <div className="font-mono text-[10px] text-white/60 space-y-2 p-2">
                                <div className="flex gap-2">
                                    <span className="text-secondary">➜</span>
                                    <span>~ xemployee init --force</span>
                                </div>
                                <div className="text-white/40">Initializing core protocols...</div>
                                <div className="text-white/40">Connecting to neural net...</div>
                                <div className="text-green-400">✓ Connection established</div>
                                <div className="flex gap-2">
                                    <span className="text-secondary">➜</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Self-Healing */}
                    <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
                        <div className="p-8 space-y-4">
                            <h3 className="font-serif text-2xl text-white">Self-Healing</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                The system detects and patches its own inefficiencies. It gets smarter every second.
                            </p>
                            <a href="#" className="text-secondary hover:text-secondary/80 font-medium text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform inline-flex">
                                View Logs <span>→</span>
                            </a>
                        </div>
                        <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-4 relative overflow-hidden min-h-[200px]">
                            {/* Diff Visual */}
                            <div className="font-mono text-[10px] space-y-1 p-2">
                                <div className="flex gap-2 text-red-400/60 line-through">
                                    <span>-</span>
                                    <span>process_data(slow_method)</span>
                                </div>
                                <div className="flex gap-2 text-green-400">
                                    <span>+</span>
                                    <span>process_data(optimized_v2)</span>
                                </div>
                                <div className="flex gap-2 text-white/40 pl-4">
                                    <span>// Latency reduced by 99.9%</span>
                                </div>
                                <div className="flex gap-2 text-white/40 pl-4">
                                    <span>// Memory usage optimized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Configuration Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
                            Build Your Digital Empire
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl">
                            Configure Once. Dominate Forever.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Instant Assimilation */}
                        <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
                            <div className="p-6 space-y-3">
                                <h3 className="font-serif text-lg text-white">Instant Assimilation</h3>
                                <p className="text-white/60 leading-relaxed text-xs">
                                    Eat Old Systems Alive.
                                </p>
                            </div>
                            <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-4 relative overflow-hidden min-h-[150px] flex items-center justify-center">
                                <div className="relative w-12 h-16 bg-white/10 rounded border border-white/10 flex items-center justify-center">
                                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-secondary">→</div>
                                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 font-mono text-xs text-green-400">{`{}`}</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Omnipresent Connectivity */}
                        <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
                            <div className="p-6 space-y-3">
                                <h3 className="font-serif text-lg text-white">Omnipresent Connectivity</h3>
                                <p className="text-white/60 leading-relaxed text-xs">
                                    The swarm lives in your Slack, your Jira, your Salesforce. It is everywhere, all at once.
                                </p>
                            </div>
                            <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-4 relative overflow-hidden min-h-[150px] flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center z-10 relative">
                                        <div className="w-4 h-4 bg-secondary rounded-full animate-pulse" />
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/10 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Immutable Core Laws */}
                        <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
                            <div className="p-6 space-y-3">
                                <h3 className="font-serif text-lg text-white">Immutable Core Laws</h3>
                                <p className="text-white/60 leading-relaxed text-xs">
                                    Define the axioms of your business. Agents adhere to your constitution with mathematical precision.
                                </p>
                            </div>
                            <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-4 relative overflow-hidden min-h-[150px] flex items-center justify-center">
                                <div className="font-mono text-[10px] text-white/40 space-y-1">
                                    <div><span className="text-purple-400">const</span> RULES = [</div>
                                    <div className="pl-2"><span className="text-green-400">&quot;NO_DOWNTIME&quot;</span>,</div>
                                    <div className="pl-2"><span className="text-green-400">&quot;MAX_PROFIT&quot;</span></div>
                                    <div>];</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Override Protocols */}
                        <div className="bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
                            <div className="p-6 space-y-3">
                                <h3 className="font-serif text-lg text-white">Override Protocols</h3>
                                <p className="text-white/60 leading-relaxed text-xs">
                                    Take manual control of any agent, at any time. You are the architect; they are the builders.
                                </p>
                            </div>
                            <div className="flex-1 bg-[#1e1e1e] border-t border-white/10 p-4 relative overflow-hidden min-h-[150px] flex items-center justify-center">
                                <div className="flex items-center gap-3">
                                    <div className="text-[10px] font-mono text-white/40">MANUAL</div>
                                    <div className="w-12 h-6 bg-secondary/20 rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-secondary rounded-full shadow-lg" />
                                    </div>
                                    <div className="text-[10px] font-mono text-secondary font-bold">AUTO</div>
                                </div>
                            </div>

                            {/* Bottom Action */}
                            <div className="h-8 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/20">
                                <div className="text-[10px] text-secondary font-bold">EXECUTE</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div >
            <FeaturesFooter />

            <div className="fixed bottom-32 right-12 z-10 pointer-events-auto">
                <AnimatedBall targetPath="/" />
            </div>
        </main >
    )
}
