import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  // Replace with your business WhatsApp link
  const whatsappUrl = "https://wa.me/2348089557692";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    setMobileMenuOpen(false);
    if (path === "/#services") {
      e.preventDefault();
      if (location.pathname === "/") {
        const servicesElement = document.getElementById("services");
        if (servicesElement) {
          servicesElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/#services");
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fbf9f4]/95 backdrop-blur-md border-b border-slate-200/80 px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="PortDigitalBoost Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 font-sans">
            Port<span className="text-slate-700">digital</span>
            <span className="text-amber-500">boost</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`transition-colors hover:text-slate-900 ${
                  isActive ? "font-bold text-slate-900" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp Button */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs md:text-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fbf9f4] border-b border-slate-200 px-6 py-6 space-y-4 shadow-md">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="hover:text-slate-950 transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
