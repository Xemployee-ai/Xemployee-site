"use client"

import { motion } from "framer-motion"
import { ExpandableButton } from "@/components/expandable-button"

export function EnterpriseCTA() {
    return (
        <section className="w-full py-40 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-12 max-w-4xl mx-auto"
            >
                <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-none">
                    Get started with<br />Xemployee Enterprise.
                </h2>

                <div className="flex justify-center">
                    <ExpandableButton
                        buttonText="Contact sales ->"
                        layoutId="enterprise-final-cta"
                        variant="manifesto"
                        shine={true}
                        modalTitle="Contact Sales"
                        modalContent={
                            <div className="text-white/80 text-lg text-center max-w-xl">
                                <p className="mb-8">Scale your intelligence.</p>
                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                    <code>sales@xemployee.ai</code>
                                </div>
                            </div>
                        }
                    />
                </div>
            </motion.div>
        </section>
    )
}
