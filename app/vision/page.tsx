"use client";

import { BushidoShaderBackground } from "@/components/bushido-shader-background";
import { motion } from "framer-motion";

export default function VisionPage() {
  return (
    <div className="w-full min-h-screen bg-transparent relative overflow-y-auto selection:bg-secondary/30">
      <BushidoShaderBackground variant="dojo" />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-white/60 font-serif text-xl italic mb-4">
            "Automate or perish."
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Vision
          </h1>
          <p className="text-white/60 font-mono text-sm max-w-xl">
            This is what we are doing to the global economy over the next decade.
          </p>
        </motion.div>

        {/* Core Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-secondary/20 via-white/5 to-white/5 border border-secondary/30 rounded-xl p-8 md:p-10">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Make human knowledge work optional.
            </h2>
            <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
              <p>
                The global economy is mostly people sitting at desks moving bits
                around in tools: email, spreadsheets, CRMs, docs. Almost none of
                that work actually requires a human mind anymore.
              </p>
              <p>
                Intelligence is getting 1000× cheaper every few years. Soon it&apos;s
                basically free. With proper scaffolding, tools, and memory, 2025–2030
                models already beat the average knowledge worker at most tasks.
              </p>
              <p className="font-medium text-white">
                The question is not if.
              </p>
              <p className="font-medium text-white">
                The question is who ships first and how fast.
              </p>
            </div>
          </div>
        </motion.section>

        {/* First Principles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            First Principles
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-5 text-white/80 text-base leading-relaxed">
            <p className="text-white font-medium text-lg">
              Xemployee is not a "productivity tool", not an "assistant", and not a "copilot".
            </p>
            <p>
              We specialise in creating genuinely useful autonomous agents to replace{" "}
              <span className="text-secondary font-medium">90% of office workers</span>,
              starting with the most repetitive, high-leverage roles.
            </p>
            <div className="grid grid-cols-3 gap-4 my-4 text-center">
              <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                <p className="text-white/40 text-xs line-through">Assistants</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                <p className="text-white/40 text-xs line-through">Co-pilots</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                <p className="text-white/40 text-xs line-through">"Productivity tools"</p>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-secondary text-center py-2">
              EMPLOYEES.
            </p>
            <p className="italic text-white/70 text-center pt-2">
              If we pull this off, posting a job on LinkedIn will feel as archaic as sending a fax.
            </p>
          </div>
        </motion.section>

        {/* Public Goals (Phases) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
            Public Goals
          </h2>
          <p className="text-white/60 text-sm mb-6 italic">
            miss and I look stupid, hit and everything changes
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-secondary/20 to-white/5 border border-secondary/30 rounded-xl p-6">
              <p className="text-white/80 text-base">
                <span className="text-secondary font-mono font-bold">2026 Q1</span> · One agent runs a real business to{" "}
                <span className="text-secondary font-bold">≥ $1M ARR</span>, zero humans, money on-chain, live dashboard
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white/80 text-base">
                <span className="text-secondary font-mono font-bold">2026</span> · 100+ real companies + 1,000 AI-native companies doing{" "}
                <span className="text-secondary font-bold">$100M–$1B</span> combined ARR
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white/80 text-base">
                <span className="text-secondary font-mono font-bold">2027+</span> · Replace{" "}
                <span className="text-secondary font-bold">≥ 1 million</span> human knowledge workers (5–10× cheaper, 3–10× better)
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary/20 to-white/5 border border-secondary/30 rounded-xl p-6">
              <p className="text-white/80 text-base">
                <span className="text-secondary font-mono font-bold">2030</span> ·{" "}
                <span className="text-secondary font-bold">≥ 50%</span> of new companies founded globally ship with zero human employees
              </p>
            </div>
          </div>
        </motion.section>

        {/* Tie-back to now */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-white/80 text-base leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">
              Where we are today
            </h2>
            <p className="mb-3">
              Vision without shipping is just fan fiction. The first real step on this path is{" "}
              <span className="text-secondary font-medium">Raptor-1</span>, our first sales Xemployee.
            </p>
            <p className="mb-3">
              Raptor-1 hunts for leads, messages them, replies in-brand, and brings real humans
              back to the founder. Every future Xemployee is held to the same standard:{" "}
              <span className="text-secondary font-medium">actually useful on day one.</span>
            </p>
            <p className="text-white/60 text-sm">
              You can track what&apos;s actually shipped on the{" "}
              <a href="/resources" className="text-secondary underline underline-offset-2">
                public changelog
              </a>.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

