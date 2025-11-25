"use client"

export function DojoCoreBall() {
  return (
    <div className="relative h-[28rem] w-[28rem] max-w-[90vw]">
      <div className="absolute inset-0 rounded-full blur-[8px] bg-gradient-to-br from-cyan-200 via-indigo-500 to-pink-500 opacity-80 animate-pulse" />
      <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-200 via-indigo-400 to-pink-400 shadow-[0_0_120px_rgba(99,102,241,0.65)]" />
      <div className="absolute inset-8 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute inset-12 rounded-full border border-white/30 bg-transparent" />
    </div>
  )
}

