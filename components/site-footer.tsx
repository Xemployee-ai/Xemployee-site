"use client"

import Link from "next/link"

export function SiteFooter() {
    return (
        <div className="border-t border-white/10 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Features</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">Product</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Xemployees</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Enterprise</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Company</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">Vision</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Updates</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Brand</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Legal</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Data Use</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Connect</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><Link href="#" className="hover:text-white transition-colors">X (Twitter)</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">YouTube</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
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
        </div>
    )
}
