"use client"

import type { Xemployee } from "@/lib/xemployees-data"
import { motion } from "framer-motion"
import Link from "next/link"

interface XemployeeCardProps {
    xemployee: Xemployee
    index: number
}

export function XemployeeCard({ xemployee, index }: XemployeeCardProps) {
    const statusColors = {
        "battle-tested": "from-green-500/20 to-green-600/20 border-green-500/40",
        "private-beta": "from-blue-500/20 to-blue-600/20 border-blue-500/40",
        "coming-soon": "from-white/5 to-white/10 border-white/20",
    }

    const statusText = {
        "battle-tested": "Battle-tested",
        "private-beta": "In private beta",
        "coming-soon": "Coming soon",
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group ${xemployee.comingSoon ? "opacity-50" : ""}`}
        >
            <div
                className={`h-full p-8 rounded-xl border backdrop-blur-sm transition-all duration-300 ${xemployee.comingSoon
                        ? "bg-white/5 border-white/10"
                        : "manifesto-effect manifesto-effect-rounded"
                    }`}
            >
                {/* Header */}
                <div className="mb-6">
                    <h3 className="text-3xl font-mono font-bold text-white mb-2">
                        {xemployee.name}
                    </h3>
                    <p className="text-lg text-white/80 italic mb-3">{xemployee.tagline}</p>

                    {/* Status Badge */}
                    <div className="inline-block">
                        <div
                            className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${statusColors[xemployee.status]}`}
                        >
                            {statusText[xemployee.status]}
                        </div>
                    </div>
                </div>

                {/* Replaces */}
                <div className="mb-6">
                    <h4 className="text-sm font-mono text-white/60 uppercase tracking-wider mb-2">
                        Replaces
                    </h4>
                    <p className="text-white font-medium">{xemployee.replaces}</p>
                </div>

                {/* What it does */}
                <div className="mb-6">
                    <h4 className="text-sm font-mono text-white/60 uppercase tracking-wider mb-3">
                        Does
                    </h4>
                    <ul className="space-y-2">
                        {xemployee.whatItDoes.map((item, idx) => (
                            <li key={idx} className="flex items-baseline gap-2 text-white/80">
                                <span className="text-secondary flex-shrink-0">→</span>
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Funny line */}
                {xemployee.funnyLine && !xemployee.comingSoon && (
                    <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-sm text-white/70 italic">"{xemployee.funnyLine}"</p>
                    </div>
                )}

                {/* Runs on */}
                <div className="mb-8">
                    <h4 className="text-sm font-mono text-white/60 uppercase tracking-wider mb-2">
                        Runs on
                    </h4>
                    <p className="text-sm text-white/70">{xemployee.runsOn}</p>
                </div>

                {/* CTAs - only for available employees */}
                {!xemployee.comingSoon && (
                    <div className="pt-6 border-t border-white/10">
                        <Link
                            href={`/xemployees/${xemployee.id}`}
                            className="block w-full px-4 py-3 bg-white text-black font-mono text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-center hover:scale-[1.02]"
                        >
                            View full profile →
                        </Link>
                    </div>
                )}

                {/* Coming soon message */}
                {xemployee.comingSoon && (
                    <div className="pt-6 border-t border-white/10">
                        <p className="text-center text-white/40 font-mono text-sm">
                            In training...
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
