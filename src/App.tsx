import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import HomePage from "./pages/home";
import EditorialPortfolioSection from "./pages/portfolio";
import PrivacyPolicy from "./pages/privacy";
import TermsAndConditions from "./pages/terms";
import "./index.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

// ScrollToTop component to reset window scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// ScrollToTopButton component for floating smooth scroll back to top
function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5 font-bold" />
    </button>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full min-h-screen bg-[#fbf9f4] text-slate-900 font-sans flex flex-col justify-between pt-16 relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<EditorialPortfolioSection />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}
