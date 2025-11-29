"use client"

import { BushidoShaderBackground } from "@/components/bushido-shader-background"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ExpandableButton } from "@/components/expandable-button"
import { EnterpriseTestimonial } from "@/components/enterprise-testimonial"
import { EnterpriseKnowledge } from "@/components/enterprise-knowledge"
import { EnterpriseAnalytics } from "@/components/enterprise-analytics"
import { EnterpriseFeatures } from "@/components/enterprise-features"
import { EnterpriseStats } from "@/components/enterprise-stats"
import { EnterpriseSecurity } from "@/components/enterprise-security"
import { EnterpriseTestimonialsGrid } from "@/components/enterprise-testimonials-grid"
import { EnterpriseLatest } from "@/components/enterprise-latest"
import { EnterpriseFAQ } from "@/components/enterprise-faq"
import { EnterpriseCTA } from "@/components/enterprise-cta"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBall } from "@/components/animated-ball"

export default function Page() {
    const [staffSize, setStaffSize] = useState(100)

    // ROI Calculations
    const avgSalary = 50000
    const benefits = avgSalary * 0.3  // 30% benefits/overhead
    const totalCostPerEmployee = avgSalary + benefits  // $65,000 total
    const humanCost = staffSize * totalCostPerEmployee
    const aiCost = 240  // $20/mo * 12 months
    const savings = humanCost - aiCost

    const companies = [
        "Samsung", "OpenAI", "Zoom", "Datadog", "Adobe", "Stripe", "PwC", "Figma",
        "Carlyle", "Sysco", "Deloitte", "Shopify", "Hilton", "eBay", "BP", "DirecTV",
        "Mercado Libre", "Sanofi", "British Airways", "Ramp", "Rivian", "Fox", "Budweiser", "Lyft"
    ]

    return (
        <div className="w-full min-h-screen bg-transparent relative overflow-y-auto">
            <BushidoShaderBackground variant="main" />

            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">

                {/* Hero Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white/60 font-mono text-sm mb-4"
                    >
                        Enterprise
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-serif text-5xl md:text-6xl text-white mb-8 max-w-4xl leading-tight"
                    >
                        Replace Your Workforce Overnight
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ExpandableButton
                            buttonText="Conquer Enterprise"
                            layoutId="enterprise-contact"
                            variant="manifesto"
                            shine={true}
                            modalTitle="Conquer Enterprise"
                            modalContent={
                                <div className="text-white/80 text-lg text-center max-w-xl">
                                    <p className="mb-8">Start your enterprise deployment.</p>
                                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                        <code>npm install xemployee --enterprise</code>
                                    </div>
                                    <p className="mt-6 text-sm text-white/60">Questions? sales@xemployee.ai</p>
                                </div>
                            }
                        />
                    </motion.div>
                </div>

                {/* Trusted By Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full mb-32"
                >
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                            Empires that will be built on Xemployee
                        </h2>
                        <p className="text-white/60 text-lg max-w-3xl mx-auto">
                            You're early. There are no Fortune 500 logos here yet. If that bothers you, come back later. If it excites you, you're our user.
                        </p>
                    </div>

                    {/* Future Logo Wall Block */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-12">
                        <div className="text-center mb-8">
                            <div className="text-white/40 text-xs font-mono uppercase tracking-wider mb-4">
                                Future customer wall
                            </div>
                            <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
                                This is where the Wall of Logos goes.<br />
                                The banks, the FAANGs, the governments, the funds.<br />
                                Right now it's intentionally empty. We're still in the part of the movie where the crazy founders and the first believers wire this into production before legal knows what it is.
                            </p>
                        </div>

                        {/* Placeholder Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="aspect-[3/2] flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 border-dashed rounded-lg">
                                <span className="text-white/40 font-mono text-sm">Your logo here</span>
                            </div>
                            <div className="aspect-[3/2] flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 border-dashed rounded-lg">
                                <span className="text-white/40 font-mono text-sm">Early design partner #1</span>
                            </div>
                            <div className="aspect-[3/2] flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 border-dashed rounded-lg">
                                <span className="text-white/40 font-mono text-sm">Early design partner #2</span>
                            </div>
                            <div className="aspect-[3/2] flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 border-dashed rounded-lg">
                                <span className="text-white/40 font-mono text-sm">Stealth enterprise (NDA)</span>
                            </div>
                        </div>

                        {/* Under the grid */}
                        <p className="text-white/40 text-sm text-center font-mono">
                            The first logos that appear here will be the teams that decided to replace busywork with AI employees before it was obvious.
                        </p>
                    </div>

                    {/* Optional spicy line */}
                    <div className="mt-8 text-center">
                        <p className="text-white/60 text-base max-w-3xl mx-auto mb-6">
                            If you need a logo wall to move, you're not our customer yet. If you want to be the logo everyone else points at later, click below.
                        </p>
                        <ExpandableButton
                            buttonText="Claim your launch partner slot"
                            layoutId="launch-partner-contact"
                            variant="manifesto"
                            shine={true}
                            modalTitle="Claim Your Slot"
                            modalContent={
                                <div className="text-white/80 text-lg text-center max-w-xl">
                                    <p className="mb-8">First believers get first-mover advantage. Forever.</p>
                                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                        <code>partners@xemployee.ai</code>
                                    </div>
                                    <p className="mt-6 text-sm text-white/60">This pricing disappears the moment we have our first logo.</p>
                                </div>
                            }
                        />
                    </div>
                </motion.div>

                {/* Why Enterprises Choose Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 bg-white/5 border border-white/10 rounded-xl p-12"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                        Why Enterprises Choose Xemployee
                    </h2>
                    <p className="text-white/40 text-sm font-mono mb-8">
                        Your competitors are still using humans. Pity them.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <div className="text-secondary text-3xl font-bold">90%</div>
                            <div className="text-white font-medium">HR Cut</div>
                            <div className="text-white/60 text-sm">Fire the Costs.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-secondary text-3xl font-bold">∞</div>
                            <div className="text-white font-medium">Infinite Scale</div>
                            <div className="text-white/60 text-sm">Grow Without Growing Pains.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-secondary text-3xl font-bold">0</div>
                            <div className="text-white font-medium">No Unions</div>
                            <div className="text-white/60 text-sm">Pure Efficiency.</div>
                        </div>
                    </div>
                </motion.div>

                {/* ROI Calculator */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 bg-white/5 border border-white/10 rounded-xl p-12"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                        ROI Calculator
                    </h2>
                    <p className="text-white/60 mb-8">
                        Enter staff size. See billions saved.
                    </p>

                    <div className="max-w-2xl space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-end">
                            <div className="flex-1">
                                <label className="text-white/60 text-sm font-mono mb-2 block">Current Staff Size</label>
                                <input
                                    type="number"
                                    placeholder="100"
                                    min="1"
                                    value={staffSize}
                                    onChange={(e) => setStaffSize(Number(e.target.value) || 0)}
                                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-secondary transition-colors"
                                />
                            </div>
                        </div>

                        <div className="bg-black/40 border border-secondary/20 rounded-lg p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div>
                                    <div className="text-white/60 text-xs font-mono mb-1">Annual HR Cost</div>
                                    <div className="text-2xl font-bold text-white">
                                        {staffSize > 0 ? `$${(humanCost / 1000000).toFixed(2)}M` : '$0'}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white/60 text-xs font-mono mb-1">Annual Xemployee Cost</div>
                                    <div className="text-2xl font-bold text-white">
                                        ${aiCost}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white/60 text-xs font-mono mb-1">Annual Savings</div>
                                    <div className="text-2xl font-bold text-secondary">
                                        {staffSize > 0 ? `$${(savings / 1000000).toFixed(2)}M` : '$0'}
                                    </div>
                                </div>
                            </div>
                            {staffSize > 0 && (
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <div className="text-white/80 text-sm font-mono">
                                        <div className="flex justify-between mb-2">
                                            <span>ROI:</span>
                                            <span className="text-secondary font-bold">
                                                {((savings / aiCost) * 100).toFixed(0)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Payback Period:</span>
                                            <span className="text-secondary font-bold">
                                                {(aiCost / (savings / 365)).toFixed(0)} days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <p className="text-white/40 text-xs font-mono">
                            * Calculation: ${avgSalary.toLocaleString()}/employee average + 30% benefits/overhead = ${totalCostPerEmployee.toLocaleString()}/employee annual cost. xEmployee Pro at $20/mo.
                        </p>
                    </div>
                </motion.div>

                {/* Dramatic Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 text-center"
                >
                    <p className="text-white/60 font-serif text-2xl md:text-3xl italic max-w-3xl mx-auto">
                        "The office is dead. Long live the swarm."
                    </p>
                </motion.div>

                {/* Testimonial Section */}
                <EnterpriseTestimonial />

                {/* Knowledge Section */}
                <EnterpriseKnowledge />

                {/* Analytics Section */}
                <EnterpriseAnalytics />

                {/* Features Section */}
                <EnterpriseFeatures />

                {/* Stats Section */}
                <EnterpriseStats />

                {/* Security Section */}
                <EnterpriseSecurity />

                {/* Testimonials Grid Section */}
                <EnterpriseTestimonialsGrid />

                {/* Latest Section */}
                <EnterpriseLatest />

                {/* FAQ Section */}
                <EnterpriseFAQ />

                {/* CTA Section */}
                <EnterpriseCTA />

                {/* Footer */}
                <SiteFooter />

            </div>

            <div className="fixed bottom-32 right-12 z-10 pointer-events-auto">
                <AnimatedBall targetPath="/" />
            </div>
        </div>
    )
}
