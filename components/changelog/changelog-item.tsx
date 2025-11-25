"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ChangelogItemProps {
    date: string;
    version?: string;
    title: string;
    description: string;
    content?: React.ReactNode;
    imageSrc?: string;
    videoSrc?: string;
    index: number;
}

export function ChangelogItem({
    date,
    version,
    title,
    description,
    content,
    imageSrc,
    videoSrc,
    index,
}: ChangelogItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-16 border-b border-border/40 last:border-0"
        >
            {/* Sticky Date/Version Column */}
            <div className="md:sticky md:top-32 h-fit space-y-4">
                <div className="flex items-center gap-3">
                    {version && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                            {version}
                        </span>
                    )}
                    <span className="text-sm text-muted-foreground font-mono">{date}</span>
                </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-white">
                        {title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>

                {/* Media Area */}
                {(imageSrc || videoSrc) && (
                    <div className="relative rounded-xl overflow-hidden border border-border/50 bg-card shadow-2xl aspect-video group">
                        {imageSrc && (
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
                        {/* Placeholder for video if we had one, for now just image support or custom content */}
                    </div>
                )}

                {/* Additional Content */}
                {content && <div className="prose prose-invert max-w-none">{content}</div>}
            </div>
        </motion.div>
    );
}
