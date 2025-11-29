"use client"

import { XemployeeCard } from "@/components/xemployee-card"
import { xemployees, comingSoonXemployees } from "@/lib/xemployees-data"
import { motion } from "framer-motion"

export function XemployeeRoster() {
    return (
        <div id="roster" className="container mx-auto px-4 pt-64 pb-20">
            {/* Active AI Employees */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4 text-center">
                    Available Now
                </h2>
                <p className="text-white/60 text-center mb-12 font-mono text-sm uppercase tracking-wider">
                    Deploy these AI employees today
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {xemployees.map((xemployee, index) => (
                        <XemployeeCard key={xemployee.id} xemployee={xemployee} index={index} />
                    ))}
                </div>
            </motion.div>

            {/* Coming Soon Section */}
            {comingSoonXemployees.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="border-t border-white/10 pt-20">
                        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4 text-center">
                            In Training
                        </h2>
                        <p className="text-white/60 text-center mb-12 font-mono text-sm uppercase tracking-wider">
                            The future of your workforce
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {comingSoonXemployees.map((xemployee, index) => (
                                <XemployeeCard key={xemployee.id} xemployee={xemployee} index={index} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
