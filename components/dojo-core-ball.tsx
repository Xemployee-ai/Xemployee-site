"use client"
"use client"

import Image from "next/image"

export function DojoCoreBall() {
  return (
    <div className="relative h-[96rem] w-[96rem] max-w-[95vw] flex items-center justify-center">
      {/* Glowing red background effect matching header logo */}
      <div className="absolute inset-0 rounded-full blur-[80px] bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] opacity-60 animate-pulse" />

      {/* Logo container with red gradient overlay */}
      <div className="relative z-10 w-[70%] h-[70%] flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Red glow effect behind logo */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] blur-md opacity-50 animate-gradient-flow"
            style={{
              maskImage: 'url(/Xemployeelogo.svg)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: 'url(/Xemployeelogo.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}
          />
          {/* Main logo with red gradient */}
          <div className="absolute inset-0"
            style={{
              maskImage: 'url(/Xemployeelogo.svg)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: 'url(/Xemployeelogo.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}
          >
            {/* Red gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] animate-gradient-flow" />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
          </div>
        </div>
      </div>
    </div>
  )
}
