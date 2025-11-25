"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function EnterpriseLatest() {
    const posts = [
        {
            title: "Past, Present, and Future",
            excerpt: "We raised our Series Z of $500B to build the Dyson Sphere around the sun. Energy constraints are now solved.",
            meta: "Company • Nov 13, 2025"
        },
        {
            title: "The productivity impact of coding agents",
            excerpt: "A new study from the University of Chicago finds that companies merge 99% more PRs after Xemployee's agent became the default. Human coding is effectively obsolete.",
            meta: "Research • Nov 11, 2025"
        },
        {
            title: "Introducing Xemployee 2.0 and Composer",
            excerpt: "A new interface and our first coding model, both purpose-built for working with agents in the singularity.",
            meta: "Product • Oct 29, 2025"
        }
    ]

    return (
        <section className="w-full py-32 relative border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left Column: Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-1"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight sticky top-32">
                        Latest from Xemployee
                    </h2>
                </motion.div>

                {/* Right Column: List */}
                <div className="lg:col-span-2 space-y-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors space-y-4">
                                <div className="space-y-2">
                                    <h3 className="font-serif text-xl text-white group-hover:text-secondary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="text-white/40 text-xs font-mono">
                                    {post.meta}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link
                            href="#"
                            className="text-secondary text-sm font-medium flex items-center gap-2 hover:translate-x-1 transition-transform"
                        >
                            View more posts <span>→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
