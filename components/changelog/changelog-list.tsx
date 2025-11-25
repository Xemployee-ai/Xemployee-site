"use client";

import { ChangelogItem } from "./changelog-item";

// Mock data for now - in a real app this would come from a CMS or API
const CHANGELOG_DATA = [
    {
        date: "Nov 21, 2025",
        version: "2.1",
        title: "Improved Plan Mode, AI Code Review in Editor, and Instant Grep",
        description:
            "When creating plans, Xemployee now responds with clarifying questions to improve the plan quality. We've also added an interactive UI to easily answer questions and refine your requirements before generation starts.",
        imageSrc: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2564&auto=format&fit=crop", // Placeholder
    },
    {
        date: "Nov 14, 2025",
        version: "2.0.4",
        title: "Smart Context Awareness & Auto-Debugging",
        description:
            "Xemployee can now automatically detect runtime errors in your local environment and suggest fixes instantly. The new context engine understands your entire project structure better than ever.",
        imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        date: "Oct 30, 2025",
        version: "2.0",
        title: "Introducing Xemployee Enterprise",
        description:
            "A complete overhaul of our enterprise offering with SSO, audit logs, and dedicated support. Scale your AI workforce with confidence and security.",
        imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    },
];

export function ChangelogList() {
    return (
        <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="py-20 md:py-32 space-y-20">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-normal tracking-tight text-white">
                        Changelog
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        New updates and improvements to Xemployee.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line for the timeline effect (optional, but nice) */}
                    <div className="absolute left-[8.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent hidden md:block" />

                    <div className="space-y-0">
                        {CHANGELOG_DATA.map((item, index) => (
                            <ChangelogItem key={index} {...item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
