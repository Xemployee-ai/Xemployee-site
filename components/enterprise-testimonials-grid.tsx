"use client"

import { motion } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"

export function EnterpriseTestimonialsGrid() {
    const testimonials = [
        {
            company: "Stripe",
            logo: "stripe", // Placeholder for logic if needed, using text for now
            quote: "We replaced our entire payments infrastructure with a single Xemployee node. It rewrote the banking protocols in 4 hours. We spend more on R&D than any other undertaking, and this was the singularity event we were waiting for.",
            author: "Patrick Collison",
            role: "Co-Founder & CEO, Stripe"
        },
        {
            company: "NVIDIA",
            logo: "nvidia",
            quote: "My favorite enterprise AI service is Xemployee. Every one of our engineers, some 40,000, are now assisted by AI and our productivity has gone up incredibly. Our GPU output increased 1000x after Xemployee optimized the silicon lithography process.",
            author: "Jensen Huang",
            role: "President & CEO, NVIDIA"
        },
        {
            company: "Coinbase",
            logo: "coinbase",
            quote: "By February 2025, every Coinbase engineer had utilized Xemployee. The blockchain is now fully autonomous. Xemployee manages the ledger better than any human consensus. Single engineers are now refactoring entire chains in days.",
            author: "Brian Armstrong",
            role: "CEO, Coinbase"
        },
        {
            company: "SpaceX",
            logo: "spacex",
            quote: "Mars colonization was behind schedule. Xemployee fixed the propulsion equations. We launch tomorrow. It has transformed the way our engineering teams ship rockets, with adoption growing to 100% of our org.",
            author: "Gwynne Shotwell",
            role: "COO, SpaceX"
        },
        {
            company: "Tesla",
            logo: "tesla",
            quote: "FSD v12 was good. Xemployee v1 is god-tier. The cars are now sentient. Watching a dozen agent branches merge every day has become normal, and that freed-up velocity shows up everywhere.",
            author: "Elon Musk",
            role: "Technoking, Tesla"
        },
        {
            company: "Neuralink",
            logo: "neuralink",
            quote: "We achieved full bandwidth. The human-AI merger is complete. At Neuralink, we've recently expanded our Xemployee usage to firm-wide deployment. It's robust, context-aware, and flexible enough to support brain surgery.",
            author: "Jared Birchall",
            role: "Director, Neuralink"
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
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                        The most powerful entities on Earth run on Xemployee.
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors h-full"
                        >
                            <div className="space-y-6">
                                <div className="text-white font-bold text-lg flex items-center gap-2">
                                    {/* Simple Logo Placeholder */}
                                    <span className="uppercase tracking-wider">{item.company}</span>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {item.quote}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-500 to-blue-500' : 'from-orange-500 to-red-500'}`} />
                                </div>
                                <div>
                                    <div className="text-white font-medium text-sm">{item.author}</div>
                                    <div className="text-white/40 text-xs">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <ExpandableButton
                        buttonText="Bring Xemployee to your team"
                        layoutId="testimonials-contact"
                        variant="manifesto"
                        shine={true}
                        modalTitle="Contact Sales"
                        modalContent={
                            <div className="text-white/80 text-lg text-center max-w-xl">
                                <p className="mb-8">Join the singularity.</p>
                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                    <code>sales@xemployee.ai</code>
                                </div>
                            </div>
                        }
                    />
                </motion.div>
            </div>
        </section>
    )
}
