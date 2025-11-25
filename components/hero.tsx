"use client"

import { ExpandableButton } from "@/components/expandable-button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {

  return (
    <>
      {/* Hero Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center pointer-events-none px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="mb-8 relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-mono shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)] group hover:bg-white/30 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.8)] hover:border-white/60 transition-all duration-300 cursor-default"
        >
          <motion.div
            className="absolute inset-0 -translate-x-full"
            animate={{
              translateX: ["100%", "-100%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
              repeatDelay: 3
            }}
          >
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12" />
          </motion.div>
          <span className="relative z-10 font-semibold tracking-wide">Xemployee · Humanity&apos;s Final Upgrade</span>
        </motion.div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white text-center text-balance leading-tight mb-2">
          Xemployee: AI Employees
        </h1>
        <p className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white text-center text-balance leading-tight mb-6">
          Fire your humans. Hire AI.
        </p>
        <p className="text-white/80 text-base md:text-lg text-center max-w-2xl text-balance mb-4">
          24/7. No salary. No drama. Just output.
        </p>
        <p className="text-white/60 text-sm md:text-base text-center max-w-3xl text-balance mb-8">
          Give recurring work to Xemployees instead of people: research, forms, outreach, support and more, all handled by AI employees.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <ExpandableButton
            buttonText="Launch your first AI employee"
            buttonIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
            layoutId="cta-card"
            variant="manifesto"
            shine={true}
            modalTitle="Launch Your First AI Employee"
            modalContent={
              <>
                <p className="text-white/80 text-lg text-center max-w-xl mb-8">
                  Coming soon
                </p>
              </>
            }
          />
        </div>

        {/* What Xemployee Does Today */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16 pointer-events-auto"
        >
          <h2 className="text-white font-serif text-3xl md:text-5xl text-center mb-4">
            What an Xemployee can do right now
          </h2>
          <p className="text-white/60 text-center text-sm md:text-base mb-12 max-w-2xl mx-auto">
            Not a demo. Not a concept. This is what ships today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              {
                icon: "🤖",
                title: "Autonomous Daily Work",
                description: "Wake itself up, run its tasks, and report back — without human supervision."
              },
              {
                icon: "💬",
                title: "Instant Communication",
                description: "Send and reply to emails and WhatsApp messages. Handle support and ops in Slack with your rules."
              },
              {
                icon: "✍️",
                title: "Content & Research",
                description: "Create and post social content, write documents, and do deep research on demand."
              },
              {
                icon: "🧠",
                title: "Best Models Always",
                description: "Choose and run on the best frontier models (OpenAI, Claude, Grok) for each job."
              },
              {
                icon: "📋",
                title: "Follow Your SOPs",
                description: "Follow your standard operating procedures step-by-step, not just vibes."
              },
              {
                icon: "🎯",
                title: "Custom or Pre-Built",
                description: "Create your own for any role, or start from pre-built ones for outbound, grant hunting, support, and research."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,91,0,0.3)]"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="relative bg-gradient-to-br from-secondary/30 via-secondary/10 to-white/5 border-2 border-secondary/50 rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent animate-pulse" />

            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Steps */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <span className="text-white/90 text-base md:text-lg font-medium">Pick a job</span>
                </div>

                <div className="hidden md:block text-secondary text-2xl">→</div>
                <div className="md:hidden text-secondary text-2xl rotate-90">→</div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <span className="text-white/90 text-base md:text-lg font-medium">Give it to Xemployee</span>
                </div>

                <div className="hidden md:block text-secondary text-2xl">→</div>
                <div className="md:hidden text-secondary text-2xl rotate-90">→</div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary border-2 border-secondary flex items-center justify-center shadow-[0_0_20px_rgba(255,91,0,0.5)]">
                    <span className="text-2xl">✨</span>
                  </div>
                  <span className="text-secondary text-base md:text-lg font-bold">Never touch it again</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Main message */}
              <p className="text-white text-xl md:text-3xl font-serif font-medium text-center leading-relaxed">
                Automate completely. <span className="text-secondary">Not partially.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Demo Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-secondary/20 flex items-center justify-center animate-pulse">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 font-mono text-sm uppercase tracking-wider">First look: Raptor-1 closing deals while you sleep</p>
                <p className="text-white/50 text-sm max-w-md mx-auto mt-2">Watch an AI employee fill forms, send emails, and update your tools with zero human clicks.</p>
              </div>
            </div>
          </div>
          <p className="text-center text-white/40 font-mono text-xs mt-4 uppercase tracking-widest">Watch the revolution</p>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 font-mono text-sm italic">
            "AI is a supersonic tsunami."
          </p>
          <p className="text-white/30 font-mono text-xs mt-1">— Elon Musk, 2025</p>
        </motion.div>
      </div >
    </>
  )
}
