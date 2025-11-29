"use client"

import { BushidoShaderBackground } from "@/components/bushido-shader-background";
import { motion } from "framer-motion";
import { AnimatedBall } from "@/components/animated-ball";

type UpdateEntry = {
  date: string;
  title: string;
  content: React.ReactNode;
};

const UPDATES: UpdateEntry[] = [
  {
    date: "Nov 28, 2025",
    title: "Raptor-1 — the first Xemployee",
    content: (
      <>
        <p className="text-lg leading-relaxed">
          The first Xemployee I'm creating is a sales AI employee named <span className="text-secondary font-medium">Raptor-1</span> – like the Raptor engine, it's a mark of a new era.
        </p>

        <p className="text-base leading-relaxed">
          Raptor-1 is built to hunt for leads, DM them, and reply in-brand with minimal management. It behaves like a tireless SDR that's fully aligned with the owner's voice and style, not a generic bot.
        </p>

        <p className="text-base leading-relaxed">
          Raptor-1 will first sell itself for the time being and then move on to sell future Xemployees (<span className="text-secondary font-medium">Sentinel-1</span>, <span className="text-secondary font-medium">Scribe-1</span>, etc.).
        </p>

        {/* Why it exists */}
        <div className="bg-black/30 rounded-lg p-6 border border-white/10">
          <h4 className="text-white text-xl font-medium mb-4">Why Raptor-1 exists <span className="text-white/60 text-base font-normal">(from me, the founder)</span></h4>
          <div className="space-y-3 text-white/70">
            <p>As a founder, what I want is simple:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-secondary leading-none mt-0.5">→</span>
                <span>I want my brand and product to be heard by real people every day.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary leading-none mt-0.5">→</span>
                <span>I want to find potential customers continuously.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary leading-none mt-0.5">→</span>
                <span>I want to start real connections and ask people what they actually think about what I'm building.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary leading-none mt-0.5">→</span>
                <span>And I want a cheap, reliable Xemployee that helps me do this every single day, forever, without me grinding manual outreach.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary leading-none mt-0.5">→</span>
                <span>I want to spend my time improving my product and company at a higher level, not living inside cold DMs and email threads.</span>
              </li>
            </ul>
            <p className="text-white font-medium pt-2">Raptor-1 exists to do exactly that.</p>
          </div>
        </div>

        {/* Fundamental goal */}
        <div className="border-l-2 border-secondary pl-6">
          <h4 className="text-white text-xl font-medium mb-3">Fundamental goal</h4>
          <p className="text-white/80 text-lg leading-relaxed mb-3">
            A reliable SDR Xemployee that produces visible outcomes for <span className="text-secondary font-bold">&lt; $100/month</span> and is genuinely useful.
          </p>
          <p className="text-white/70 italic mt-2">
            A worker that you can point at a market and say: <span className="text-secondary">"Go hunt. Bring me conversations."</span>
          </p>
        </div>

        {/* Long-term vision */}
        <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
          <h4 className="text-white text-xl font-medium mb-4">Long-term vision</h4>
          <div className="space-y-4 text-white/80">
            <p className="text-white text-lg font-medium">
              We're not building assistants.
            </p>
            <p className="text-white text-lg font-medium">
              We're building the thing that makes the entire sales department obsolete.
            </p>
            <p className="text-white/90">
              One closer + 100 Raptors will eventually outperform almost any human sales org on Earth at <span className="text-secondary font-bold">&lt;5%</span> of the cost.
            </p>
            <div className="space-y-2 my-4">
              <p className="text-white/80">Zero salary</p>
              <p className="text-white/80">Zero vacation</p>
              <p className="text-white/80">Zero drama</p>
              <p className="text-white/80">Zero off-brand messages</p>
              <p className="text-white/80">Never sleeps, never slows down, never misses quota.</p>
            </div>
            <p className="text-white text-lg font-medium pt-2">
              A single human brain steering a swarm of Raptors is the endgame.
            </p>
            <p className="text-white text-lg font-medium">
              Everything else is legacy.
            </p>
            <div className="border-t border-white/10 pt-4 mt-4">
              <p className="text-white/60 italic text-sm">
                This isn't marketing copy.
              </p>
              <p className="text-white/60 italic text-sm">
                This is the bet.
              </p>
              <p className="text-secondary font-medium text-lg mt-2">
                Be useful or be replaced.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // later: push more entries here
];

export default function UpdatesPage() {
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
                        Updates
                    </h1>
                </motion.div>

                {/* Changelog */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="space-y-6">
                        {UPDATES.map((update, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-secondary/20 via-white/5 to-white/5 border border-secondary/30 rounded-xl p-8"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-secondary font-mono text-sm font-bold">
                                        {update.date}
                                    </span>
                                </div>
                                <h3 className="text-white text-3xl md:text-4xl font-serif font-normal mb-4">
                                    {update.title}
                                </h3>
                                <div className="space-y-6 text-white/80">{update.content}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="fixed bottom-32 right-12 z-10 pointer-events-auto">
                <AnimatedBall targetPath="/" />
            </div>
        </div>
    );
}
