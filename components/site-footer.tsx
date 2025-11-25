"use client"

import Link from "next/link"

export function SiteFooter() {
    return (
        <div className="border-t border-white/10 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Product</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">Agents</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Neural Net</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Enterprise</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Resources</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Company</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">Manifesto</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Legal</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Ethics</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Connect</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">X (Twitter)</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
                <div>© 2025 Xemployee Inc. All systems nominal.</div>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        SOC 2 Certified
                    </span>
                    <span>English</span>
                </div>
            </div>
            <div className="mt-4 text-center text-xs text-white/40 font-mono">
                Xemployee™ is a trademark of Lee Wen Xuan.
            </div>
        </div>
    )
}
