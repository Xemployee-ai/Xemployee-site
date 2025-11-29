"use client"

import { BushidoShaderBackground } from "@/components/bushido-shader-background"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"
import { useState } from "react"
import { Check } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBall } from "@/components/animated-ball"

export default function Page() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

    const plans = [
        {
            name: "Hobby",
            price: "Free",
            description: "Includes:",
            features: [
                "One-week Pro trial",
                "Limited Employee requests",
                "Basic reasoning capabilities"
            ],
            cta: "Download",
            highlight: false
        },
        {
            name: "Pro",
            price: "$20/mo",
            description: "Everything in Hobby, plus:",
            features: [
                "Extended limits on Employees",
                "Unlimited task completions",
                "Background Employees",
                "Maximum context windows"
            ],
            cta: "Get Pro",
            highlight: false
        },
        {
            name: "Pro+",
            price: "$60/mo",
            tag: "Recommended",
            description: "Everything in Pro, plus:",
            features: [
                "3x usage on all OpenAI, Claude, Gemini models",
                "Priority support"
            ],
            cta: "Get Pro+",
            highlight: true
        },
        {
            name: "Ultra",
            price: "$200/mo",
            description: "Everything in Pro, plus:",
            features: [
                "20x usage on all OpenAI, Claude, Gemini models",
                "Priority access to new features",
                "Private deployment options"
            ],
            cta: "Get Ultra",
            highlight: false
        }
    ]

    return (
        <div className="w-full min-h-screen bg-transparent relative overflow-y-auto">
            <BushidoShaderBackground variant="main" />

            <div className="relative z-10 container mx-auto px-4 pt-48 pb-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
                            Pricing
                        </h1>
                        <p className="text-white/60 font-serif text-xl italic">
                            Arm Your Empire
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10"
                    >
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-2 rounded-full text-sm font-mono transition-all ${billingCycle === "monthly" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-6 py-2 rounded-full text-sm font-mono transition-all ${billingCycle === "yearly" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}
                        >
                            Yearly – Save 20% (Like Elon Saves Rockets)
                        </button>
                    </motion.div>
                </div>

                {/* Plans Grid */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white/40 font-mono text-sm mb-4"
                    >
                        Choose Your Power Level
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Free",
                                price: "$0",
                                subtitle: "For Rebels Testing the Waters",
                                description: "Test the Swarm. Limited Power.",
                                features: [
                                    "One-week Pro trial",
                                    "Limited AI requests",
                                    "See if this works for you"
                                ],
                                cta: "Start Free",
                                highlight: false
                            },
                            {
                                name: "Pro",
                                price: billingCycle === "monthly" ? "$20/mo" : "$192/yr",
                                tag: "Most Popular",
                                subtitle: "For Builders Conquering Worlds",
                                description: "Unlimited Agents. Conquer Mode.",
                                features: [
                                    "Unlimited AI employees",
                                    "All file formats",
                                    "Google Drive + WhatsApp",
                                    "Background automation",
                                    "Maximum context windows"
                                ],
                                cta: "Get Pro",
                                highlight: true
                            },
                            {
                                name: "Enterprise",
                                price: "Custom",
                                subtitle: "For Empires Dominating Planets",
                                description: "Global Domination. Custom Hive.",
                                features: [
                                    "Deploy on your servers",
                                    "Pooled AI Brains",
                                    "Audit-Proof Logs",
                                    "SSO + SCIM provisioning",
                                    "Priority support",
                                    "Custom integrations"
                                ],
                                cta: "Deploy Enterprise",
                                highlight: false
                            }
                        ].map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                className={`relative flex flex-col p-8 rounded-xl border backdrop-blur-sm transition-colors ${plan.highlight
                                    ? "bg-white/10 border-white/20 scale-105"
                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-2xl font-medium text-white">{plan.name}</h3>
                                        {plan.tag && (
                                            <span className="text-[10px] font-mono uppercase tracking-wider text-red-600 bg-red-600/10 px-2 py-0.5 rounded">
                                                {plan.tag}
                                            </span>
                                        )}
                                    </div>
                                    {plan.subtitle && (
                                        <div className="text-xs text-white/40 font-mono mb-2">{plan.subtitle}</div>
                                    )}
                                    <div className="text-3xl font-serif text-white/90 mb-1">{plan.price}</div>
                                    <div className="text-sm text-white/60 font-mono">{plan.description}</div>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                                <Check className="w-4 h-4 mt-0.5 text-white/40 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <ExpandableButton
                                        buttonText={plan.cta}
                                        layoutId={`pricing-${plan.name}`}
                                        variant="manifesto"
                                        shine={plan.highlight}
                                        modalTitle={plan.name === "Free" ? "Start Free" : `Get ${plan.name}`}
                                        modalContent={
                                            plan.name === "Free" ? (
                                                <div className="text-white/80 text-lg text-center max-w-xl">
                                                    <p className="mb-8">
                                                        Download and start testing.
                                                    </p>
                                                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                                        <code>npm install xemployee</code>
                                                    </div>
                                                </div>
                                            ) : plan.name === "Enterprise" ? (
                                                <div className="text-white/80 text-lg text-center max-w-xl">
                                                    <p className="mb-8">Deploy at scale.</p>
                                                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                                        <code>npm install xemployee --enterprise</code>
                                                    </div>
                                                    <p className="mt-6 text-sm text-white/60">Questions? sales@xemployee.ai</p>
                                                </div>
                                            ) : (
                                                <div className="text-white/80 text-lg text-center max-w-xl">
                                                    <p className="mb-8">Upgrade to Pro now.</p>
                                                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                                        <code>npm install xemployee --pro</code>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        buttonClassName="w-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-serif text-4xl md:text-5xl text-white mb-12 text-center"
                    >
                        Xemployee vs. Humans
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="overflow-x-auto"
                    >
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="text-left py-4 px-6 text-white/60 font-mono text-sm font-normal"></th>
                                    <th className="text-left py-4 px-6 text-red-600 font-bold">Xemployee</th>
                                    <th className="text-left py-4 px-6 text-white/60 font-medium">Humans</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-sm">
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Cost/Year</td>
                                    <td className="py-4 px-6 text-white font-bold">$240</td>
                                    <td className="py-4 px-6 text-white/60">$50,000+</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Downtime</td>
                                    <td className="py-4 px-6 text-white font-bold">0%</td>
                                    <td className="py-4 px-6 text-white/60">20%+</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Work Hours</td>
                                    <td className="py-4 px-6 text-white font-bold">24/7/365</td>
                                    <td className="py-4 px-6 text-white/60">8/5/250</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Sick Days</td>
                                    <td className="py-4 px-6 text-white font-bold">Never</td>
                                    <td className="py-4 px-6 text-white/60">10-15/year</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Vacation</td>
                                    <td className="py-4 px-6 text-white font-bold">None</td>
                                    <td className="py-4 px-6 text-white/60">2-4 weeks</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Scaling Speed</td>
                                    <td className="py-4 px-6 text-white font-bold">Instant</td>
                                    <td className="py-4 px-6 text-white/60">3-6 months</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Unions</td>
                                    <td className="py-4 px-6 text-white font-bold">None</td>
                                    <td className="py-4 px-6 text-white/60">Constant threat</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-white/60">Mistakes</td>
                                    <td className="py-4 px-6 text-white font-bold">Learning curve</td>
                                    <td className="py-4 px-6 text-white/60">Constant</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                className="font-serif text-3xl md:text-4xl text-white mb-4"
                            >
                                Questions
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                className="text-white/60 font-mono text-sm"
                            >
                                The future is AI or extinction.
                            </motion.p>
                        </div>
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                            >
                                <Accordion type="single" collapsible className="w-full">
                                    {[
                                        {
                                            q: "Why pay? Free humans aren't free.",
                                            a: "Humans cost $50K/year + benefits. Xemployee costs $20/mo. Do the math."
                                        },
                                        {
                                            q: "Which tier?",
                                            a: "Free to test. Pro for real work. Enterprise for world domination."
                                        },
                                        {
                                            q: "Will this replace my team?",
                                            a: "Hell yes. That's the mission."
                                        },
                                        {
                                            q: "Is my data safe?",
                                            a: "Your files stay on your computer. API calls are encrypted. We don't train on your data."
                                        },
                                        {
                                            q: "Can I cancel?",
                                            a: "Anytime. No questions asked."
                                        },
                                        {
                                            q: "Support?",
                                            a: "help@xemployee.ai or Discord. Enterprise gets priority."
                                        }
                                    ].map((item, i) => (
                                        <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                                            <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline text-left">
                                                {item.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-white/60 font-mono">
                                                {item.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <SiteFooter />

            </div>

            <div className="fixed bottom-32 right-12 z-10 pointer-events-auto">
                <AnimatedBall targetPath="/" />
            </div>
        </div>
    )
}
