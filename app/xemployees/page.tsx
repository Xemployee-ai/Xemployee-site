"use client"

import { BushidoShaderBackground } from "@/components/bushido-shader-background"
import { XemployeeHero } from "@/components/xemployee-hero"
import { XemployeeRoster } from "@/components/xemployee-roster"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBall } from "@/components/animated-ball"

export default function XemployeesPage() {
    return (
        <div className="w-full min-h-screen bg-transparent relative overflow-y-auto">
            <BushidoShaderBackground
                variant="main"
                activeEffect="mesh"
                speed={1.0}
                intensity={1.5}
            />

            <div className="relative z-10">
                <XemployeeHero />
                <XemployeeRoster />

                <div className="container mx-auto px-4 py-16">
                    <SiteFooter />
                </div>
            </div>

            <div className="fixed bottom-32 right-12 z-10 pointer-events-auto">
                <AnimatedBall />
            </div>
        </div>
    )
}
