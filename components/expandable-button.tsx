"use client"

import { useState, useEffect, ReactNode } from "react"
import { X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Background } from "@/components/background"

interface ExpandableButtonProps {
  buttonText: string | ReactNode
  buttonIcon?: ReactNode
  layoutId: string
  buttonColor?: string
  modalTitle: string
  modalContent: ReactNode
  buttonClassName?: string
  variant?: "button" | "link" | "manifesto"
  shaderColors?: {
    swirlColorA?: string
    swirlColorB?: string
    chromaBase?: string
    chromaUp?: string
    chromaDown?: string
    chromaLeft?: string
    chromaRight?: string
  }
  shine?: boolean
  backgroundSrc?: string
  backgroundPlaceholder?: string
  backgroundLoop?: boolean
}

export function ExpandableButton({
  buttonText,
  buttonIcon,
  layoutId,
  buttonColor = "bg-blue-600",
  modalTitle,
  modalContent,
  buttonClassName = "",
  variant = "button",
  shaderColors = {},
  shine = false,
  backgroundSrc,
  backgroundPlaceholder,
  backgroundLoop = true
}: ExpandableButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  const {
    swirlColorA = "#6366f1",
    swirlColorB = "#ec4899",
    chromaBase = "#8b5cf6",
    chromaUp = "#6366f1",
    chromaDown = "#ec4899",
    chromaLeft = "#d946ef",
    chromaRight = "#8b5cf6"
  } = shaderColors

  return (
    <>
      <AnimatePresence initial={false}>
        {!isExpanded && (
          <motion.div className="inline-block relative pointer-events-auto">
            {variant === "button" && (
              <motion.div
                style={{ borderRadius: "12px" }}
                layout
                layoutId={layoutId}
                className={`absolute inset-0 ${buttonColor} items-center justify-center transform-gpu will-change-transform`}
              ></motion.div>
            )}
            {variant === "link" && (
              <motion.div
                style={{ borderRadius: "12px" }}
                layout
                layoutId={layoutId}
                className="absolute inset-0 bg-transparent items-center justify-center transform-gpu will-change-transform"
              ></motion.div>
            )}
            {variant === "manifesto" && (
              <motion.div
                style={{ borderRadius: "9999px" }}
                layout
                layoutId={layoutId}
                className="absolute inset-0 items-center justify-center transform-gpu will-change-transform"
              ></motion.div>
            )}
            {variant === "manifesto" ? (
              <motion.div
                layout={false}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Button
                  variant="manifesto"
                  size="lg"
                  shine={shine}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleExpand()
                  }}
                  className={cn("relative z-10 flex items-center gap-2", buttonClassName)}
                >
                  {buttonIcon && buttonIcon}
                  {buttonText}
                </Button>
              </motion.div>
            ) : (
              <motion.button
                type="button"
                initial={variant === "button" ? { opacity: 0, scale: 0.8 } : false}
                animate={variant === "button" ? { opacity: 1, scale: 1 } : false}
                transition={variant === "button" ? { delay: 0.2 } : undefined}
                exit={variant === "button" ? { opacity: 0, scale: 0.8 } : false}
                layout={false}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleExpand()
                }}
                className={
                  variant === "link"
                    ? `relative z-10 text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 ${buttonClassName}`
                    : `relative z-10 px-6 py-3 text-white rounded-lg font-medium transition-colors flex items-center gap-2 ${buttonClassName}`
                }
              >
                {buttonIcon && variant === "button" && buttonIcon}
                {buttonText}
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
            <motion.div
              layoutId={layoutId}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: "24px" }}
              layout
              className="relative flex h-full w-full overflow-hidden bg-black transform-gpu will-change-transform"
            >
              {/* Background - Video/Image or Shader */}
              {backgroundSrc ? (
                <Background
                  src={backgroundSrc}
                  placeholder={backgroundPlaceholder}
                  className="rounded-[24px]"
                  loop={backgroundLoop}
                />
              ) : (
                <div className="absolute inset-0 z-0">
                  <Shader className="h-full w-full">
                    {/* Base swirling pattern */}
                    <Swirl
                      colorA={swirlColorA}
                      colorB={swirlColorB}
                      speed={0.8}
                      detail={0.8}
                      blend={50}
                      coarseX={40}
                      coarseY={40}
                      mediumX={40}
                      mediumY={40}
                      fineX={40}
                      fineY={40}
                    />

                    {/* Reactive mouse-following effect */}
                    <ChromaFlow
                      baseColor={chromaBase}
                      upColor={chromaUp}
                      downColor={chromaDown}
                      leftColor={chromaLeft}
                      rightColor={chromaRight}
                      intensity={0.9}
                      radius={1.8}
                      momentum={25}
                      maskType="alpha"
                      opacity={0.97}
                    />
                  </Shader>
                </div>
              )}

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative z-10 flex flex-col h-full w-full max-w-[1100px] mx-auto items-center justify-center p-16"
              >
                <h2 className="text-5xl font-medium text-white mb-4">
                  {modalTitle}
                </h2>
                {modalContent}
              </motion.div>

              {/* Close Button */}
              <motion.button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleClose()
                }}
                className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors pointer-events-auto cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

