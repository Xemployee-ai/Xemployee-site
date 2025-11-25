"use client";

import { motion } from "framer-motion";
import { BushidoShaderBackground } from "@/components/bushido-shader-background";
import { AnimatedBall } from "@/components/animated-ball";
import { DojoCoreBall } from "@/components/dojo-core-ball";

export default function DojoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BushidoShaderBackground variant="dojo" />

      {/* Foreground content stays on top */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        {/* Giant central ball */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex items-center justify-center"
        >
          <DojoCoreBall />
        </motion.div>

        {/* Text content */}
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/70">
            Bushido • Inner Dojo
          </p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            Welcome to the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              decision dojo
            </span>
            .
          </h1>
          <p className="mx-auto max-w-xl text-sm text-slate-300/80 sm:text-base">
            This is the space the ball opens. We can wire in the real product
            experience next.
          </p>
        </motion.div>
      </section>

      <div className="fixed bottom-32 right-12 z-10 pointer-events-auto">
        <AnimatedBall targetPath="/" />
      </div>
    </main>
  );
}

