import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-white pt-16 pb-8 px-6 lg:px-12 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand & Socials */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="PortDigitalBoost Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-white font-sans">
              Port<span className="text-slate-300">digital</span>
              <span className="text-amber-500">boost</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            SEO and software development for businesses ready to be found and
            grow.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-slate-500 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-slate-500 transition-colors"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current text-white stroke-[2]"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-slate-500 transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-slate-500 transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-slate-500 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            SERVICES
          </h4>
          <ul className="space-y-3 text-xs text-slate-300 font-medium">
            <li>
              <Link
                to="/#services"
                className="hover:text-amber-400 transition-colors"
              >
                SEO & Local Search
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className="hover:text-amber-400 transition-colors"
              >
                Software Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            QUICK LINKS
          </h4>
          <ul className="space-y-3 text-xs text-slate-300 font-medium">
            <li>
              <Link
                to="/blog"
                className="hover:text-amber-400 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-amber-400 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className="hover:text-amber-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-amber-400 transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            CONTACT INFO
          </h4>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <a
                href="mailto:Hello@Portdigitalboost.com"
                className="hover:text-amber-400 transition-colors"
              >
                Email: Hello@Portdigitalboost.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <a
                href="tel:+2348089557692"
                className="hover:text-amber-400 transition-colors"
              >
                +234 8089557692
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>Port Harcourt, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>
          &copy; {new Date().getFullYear()} PortDigitalBoost. All rights
          reserved
        </p>
        <div className="flex items-center gap-6">
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
