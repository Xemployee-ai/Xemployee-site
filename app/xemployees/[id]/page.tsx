import { notFound } from "next/navigation"
import { getXemployeeById } from "@/lib/xemployees-data"
import { BushidoShaderBackground } from "@/components/bushido-shader-background"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBall } from "@/components/animated-ball"
import { ExpandableButton } from "@/components/expandable-button"
import Link from "next/link"

interface XemployeeDetailPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function XemployeeDetailPage({ params }: XemployeeDetailPageProps) {
    const { id } = await params
    const xemployee = getXemployeeById(id)

    if (!xemployee) {
        notFound()
    }

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
        <div className="w-full min-h-screen bg-transparent relative overflow-y-auto">
            <BushidoShaderBackground
                variant="main"
                activeEffect="mesh"
                speed={1.0}
                intensity={1.5}
            />

            <div className="relative z-10">
                {/* Hero Section */}
                <div className="container mx-auto px-4 pt-32 pb-16">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/xemployees"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-mono text-sm"
                        >
                            ← Back to roster
                        </Link>
                    </div>

                    {/* Hero Content */}
                    <div className="max-w-4xl">
                        <div className="mb-6">
                            {/* Status Badge */}
                            <div className="inline-block mb-4">
                                <div
                                    className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${statusColors[xemployee.status]}`}
                                >
                                    {statusText[xemployee.status]}
                                </div>
                            </div>

                            {/* Name */}
                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-4">
                                {xemployee.name}
                            </h1>

                            {/* Tagline */}
                            <p className="text-2xl md:text-3xl text-white/80 italic mb-6">
                                {xemployee.tagline}
                            </p>

                            {/* Replaces */}
                            <div className="mb-8">
                                <h2 className="text-sm font-mono text-white/60 uppercase tracking-wider mb-2">
                                    Replaces
                                </h2>
                                <p className="text-xl text-white font-medium">{xemployee.replaces}</p>
                            </div>

                            {/* CTAs */}
                            {!xemployee.comingSoon && (
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <ExpandableButton
                                        buttonText="Talk to sales"
                                        layoutId={`sales-modal-${xemployee.id}`}
                                        variant="manifesto"
                                        shine={true}
                                        modalTitle="Talk to Sales"
                                        modalContent={
                                            <div className="text-white/80 text-lg text-center max-w-xl">
                                                <p className="mb-8">
                                                    Ready to deploy {xemployee.name} at your organization? Let's talk.
                                                </p>
                                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-white">
                                                    <code>Contact form coming soon...</code>
                                                </div>
                                            </div>
                                        }
                                        shaderColors={{
                                            swirlColorA: "#a78bfa",
                                            swirlColorB: "#ec4899",
                                            chromaBase: "#a78bfa",
                                        }}
                                    />
                                </div>
                            )}

                            {xemployee.comingSoon && (
                                <div className="inline-block px-6 py-3 bg-white/5 border border-white/20 rounded-lg">
                                    <p className="text-white/60 font-mono text-sm">Currently in training...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* What it does section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl">
                        <div className="manifesto-effect manifesto-effect-rounded p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-8">
                                What this AI employee does
                            </h2>

                            <ul className="space-y-4 mb-8">
                                {xemployee.whatItDoes.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white/90">
                                        <span className="text-secondary text-xl mt-1 flex-shrink-0">→</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Runs on */}
                            <div className="pt-6 border-t border-white/10">
                                <h3 className="text-sm font-mono text-white/60 uppercase tracking-wider mb-3">
                                    Runs on
                                </h3>
                                <p className="text-white/80">{xemployee.runsOn}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Raptor-1 Scorecard (Draft) */}
                {xemployee.id === "raptor-1" && (
                    <div className="container mx-auto px-4 pb-16">
                        <div className="max-w-4xl">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
                                <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">
                                    Raptor-1 scorecard (draft)
                                </h2>

                                <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                                    <p>
                                        Base models pass lab evals. Raptor-1 has to pass job evals.
                                        For this role, we care about:
                                    </p>

                                    <ul className="space-y-2 pl-4">
                                        <li className="flex items-center gap-3">
                                            <span className="text-secondary">•</span>
                                            <span>Qualified meetings per month</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-secondary">•</span>
                                            <span>Cost per meeting vs human SDR</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-secondary">•</span>
                                            <span>Complaint rate ("never email me again")</span>
                                        </li>
                                    </ul>

                                    <p className="text-white/60 italic text-base pt-4 border-t border-white/10">
                                        We grade Raptor-1 on these numbers and keep turning the knobs until it’s strictly better than a human SDR on cost, output, and reliability.
                                        <br className="mb-2" />
                                        We’ll publish the stats once Raptor-1 has enough blood on its hands.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Funny line section */}
                {xemployee.funnyLine && !xemployee.comingSoon && (
                    <div className="container mx-auto px-4 py-8">
                        <div className="max-w-4xl">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <p className="text-white/70 italic text-center font-mono">
                                    "{xemployee.funnyLine}"
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer */}
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
