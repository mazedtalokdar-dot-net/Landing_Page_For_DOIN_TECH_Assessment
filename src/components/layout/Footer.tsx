import Link from "next/link";
import { Terminal, Globe, Code2, Share2, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Overview */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-neutral-950">
                  <Terminal className="h-4 w-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">ByteSpace</span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm">
              Next-generation cloud development environments empowering teams to build, scale, and ship software faster than ever.
            </p>

            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/signup" className="hover:text-white transition-colors">Cloud Workspaces</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press Kit</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Security Audit</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} ByteSpace Inc. All rights reserved. Assessment for Doin Tech Limited.
          </p>

          <div className="flex items-center gap-4 text-neutral-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Code2 className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
              <Globe className="h-5 w-5" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Discord">
              <MessageSquare className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
