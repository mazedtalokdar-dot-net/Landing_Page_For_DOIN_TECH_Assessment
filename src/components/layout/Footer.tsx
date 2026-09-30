import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin, Code2, Globe, MessageSquare, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0F52FF] text-white border-t border-blue-600/40 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CAFF00] text-[#0F52FF] shadow-lg">
                <BookOpen className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Byte<span className="text-[#CAFF00]">Space</span>
              </span>
            </Link>
            <p className="text-sm text-blue-100 max-w-sm font-medium leading-relaxed">
              ByteSpace is a premier online learning platform providing top-tier professional courses, interactive tutorials, and industry certificates.
            </p>

            <div className="space-y-2 text-xs font-semibold text-blue-100 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#CAFF00]" />
                <span>123 Innovation Way, Tech City, USA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#CAFF00]" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#CAFF00]" />
                <span>support@bytespace.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#CAFF00]">Quick Links</h3>
            <ul className="space-y-2.5 text-sm font-semibold text-blue-100">
              <li><Link href="#" className="hover:text-[#CAFF00] transition-colors">About Us</Link></li>
              <li><Link href="#courses" className="hover:text-[#CAFF00] transition-colors">Courses</Link></li>
              <li><Link href="#why-us" className="hover:text-[#CAFF00] transition-colors">Why Choose Us</Link></li>
              <li><Link href="#testimonials" className="hover:text-[#CAFF00] transition-colors">Testimonials</Link></li>
              <li><Link href="/login" className="hover:text-[#CAFF00] transition-colors">Student Login</Link></li>
            </ul>
          </div>

          {/* Top Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#CAFF00]">Categories</h3>
            <ul className="space-y-2.5 text-sm font-semibold text-blue-100">
              <li><Link href="#courses" className="hover:text-[#CAFF00] transition-colors">Web Development</Link></li>
              <li><Link href="#courses" className="hover:text-[#CAFF00] transition-colors">UI/UX Design</Link></li>
              <li><Link href="#courses" className="hover:text-[#CAFF00] transition-colors">Digital Marketing</Link></li>
              <li><Link href="#courses" className="hover:text-[#CAFF00] transition-colors">Data Science</Link></li>
              <li><Link href="#courses" className="hover:text-[#CAFF00] transition-colors">Business Management</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#CAFF00]">Support</h3>
            <ul className="space-y-2.5 text-sm font-semibold text-blue-100">
              <li><Link href="#" className="hover:text-[#CAFF00] transition-colors">Help Center / FAQ</Link></li>
              <li><Link href="#" className="hover:text-[#CAFF00] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#CAFF00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#CAFF00] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-600/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-blue-100">
          <p>&copy; {new Date().getFullYear()} ByteSpace E-Learning. Assessment for Doin Tech Limited.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#CAFF00] transition-colors" aria-label="GitHub">
              <Code2 className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#CAFF00] transition-colors" aria-label="Twitter">
              <Globe className="h-5 w-5" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-[#CAFF00] transition-colors" aria-label="Discord">
              <MessageSquare className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#CAFF00] transition-colors" aria-label="LinkedIn">
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
