"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function EnterpriseSecurity() {
    const features = [
        {
            title: "Mission Control Support",
            description: "Direct line to our central command. Deploy AI at scale with professional expertise."
        },
        {
            title: "Elite Vanguard",
            description: "Special ops team for your deployment. Tailored support for teams with specialized needs."
        },
        {
            title: "Total Amnesia",
            description: "We train on nothing. Your data is a ghost. No training on your data by Xemployee or LLM providers."
        },
        {
            title: "Neural ID",
            description: "SAML-based bio-digital verification for secure user access."
        },
        {
            title: "Auto-Provisioning",
            description: "Instantaneous onboarding of your entire workforce. Easily create, update, and remove users."
        },
        {
            title: "Overlord Dashboard",
            description: "God-view of every permission. Configure model access, MCPs, and agent rules."
        },
        {
            title: "Planetary Compliance",
            description: "GDPR, CCPA, SOC2 - we conquered them all. Compliant with global requirements."
        },
        {
            title: "Battle Tested",
            description: "Penetration testing by state-level actors. SOC 2 Type 2 certified and annual testing."
        },
        {
            title: "Quantum Encryption",
            description: "AES-256 is just the beginning. Robust data protection at rest and TLS 1.2+ in transit."
        }
    ]

    return (
        <section className="w-full py-32 relative">
            <div className="space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto space-y-4"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                        Impenetrable Fortress.
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed">
                        Security is not a feature; it is a law of physics. Built with compliance at the core.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
                        >
                            <h3 className="font-serif text-lg text-white mb-3">{feature.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#"
                        className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
                    >
                        Visit our Trust Center <span>↗</span>
                    </Link>
                    <Link
                        href="#"
                        className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                    >
                        Read about our security <span>→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
