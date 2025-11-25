"use client"

import { motion } from "framer-motion"

export function EnterpriseStats() {
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
                        The inevitable future of labor.
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 min-h-[300px] flex flex-col justify-between hover:border-white/20 transition-colors"
                    >
                        <div className="font-serif text-6xl md:text-7xl text-white tracking-tighter">
                            99%
                        </div>
                        <div className="text-white/60 text-lg">
                            Fortune 500 companies assimilated.
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 min-h-[300px] flex flex-col justify-between hover:border-white/20 transition-colors"
                    >
                        <div className="font-serif text-6xl md:text-7xl text-white tracking-tighter">
                            100k+
                        </div>
                        <div className="text-white/60 text-lg">
                            Enterprises powered by Xemployee.
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 min-h-[300px] flex flex-col justify-between hover:border-white/20 transition-colors"
                    >
                        <div className="font-serif text-6xl md:text-7xl text-white tracking-tighter">
                            1B+
                        </div>
                        <div className="text-white/60 text-lg">
                            Lines of code generated per hour.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
