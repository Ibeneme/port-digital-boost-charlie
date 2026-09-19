import  { useEffect, useRef } from "react";
import { Check, Compass, Star, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in sections on scroll
      const sections = gsap.utils.toArray<HTMLElement>(".animate-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <main
      ref={mainRef}
      className="w-full bg-[#fbf9f4] text-slate-900 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          ABOUT PORTDIGITALBOOST
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-3xl leading-tight mb-6">
          We help Nigerian businesses get found, then build what it takes to
          keep growing.
        </h1>
        <p className="text-slate-500 max-w-2xl text-base leading-relaxed">
          Founded in Port Harcourt, we combine SEO strategy with software
          development- two skills most agencies split across different vendors,
          we keep under one roof.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="animate-section max-w-6xl mx-auto px-6 py-12">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          OUR MISSION
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
              Ranking and building shouldn't be two separate headaches
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Too many small businesses in Nigeria are told to hire one agency
              for SEO and a completely different developer for their website.
              With neither talking to the other, and the business owner stuck in
              the middle.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We started PortDigitalBoost to close that gap: one team that
              understands both sides, so your site is built to rank from day
              one, and your SEO strategy is backed by a site that can actually
              support it.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#111625] rounded-2xl p-12 flex items-center justify-center min-h-[280px]">
              <div className="relative flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-teal-400/40 flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-200">
                    SEO
                  </span>
                </div>
                <div className="w-32 h-32 rounded-full border border-amber-400/40 flex items-center justify-center -ml-10">
                  <span className="text-xs font-medium text-slate-200 ml-6">
                    BUILD
                  </span>
                </div>
                <div className="absolute w-6 h-6 rounded-full bg-amber-400/80 blur-xs"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Got Here Section */}
      <section className="animate-section max-w-6xl mx-auto px-6 py-16">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          HOW WE GOT HERE
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          From one project to a growing team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 ">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-3">
              THE START
            </span>
            <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">
              A developer who kept getting asked "why isn't my site showing up?"
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              PortDigitalBoost began as a software development practice - and
              quickly noticed every client's next question was about visibility,
              not just design.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-6 ">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-3">
              THE SHIFT
            </span>
            <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">
              SEO became the core, development stayed close behind
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We built out a dedicated SEO practice, while keeping development
              in-house, so the two could actually work together instead of being
              outsourced separately.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-6 ">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-3">
              TODAY
            </span>
            <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">
              A Port Harcourt -based team serving businesses locally and beyond
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We now work with businesses across Nigeria, and internationally,
              who want one team that handles both getting found and getting
              built.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="animate-section max-w-6xl mx-auto px-6 py-16">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          HOW WE WORK
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
          The principles behind the work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#111625] text-amber-400 flex items-center justify-center mb-4">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-2">
              Results over reports
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We measure success in ranking and revenue, not vanity metrics
              dressed up in a slide deck.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-lg bg-[#111625] text-amber-400 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-2">
              Straight timelines
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              No inflated promises about "ranking #1 in a week." We tell you
              what's realistic, and when.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-lg bg-[#111625] text-amber-400 flex items-center justify-center mb-4">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-2">
              Built for Nigeria and beyond
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Local search behavior, local payment realities, local
              infrastructure - we design around how things actually work here.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-lg bg-[#111625] text-amber-400 flex items-center justify-center mb-4">
              <User className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-2">
              One point of contact
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              A dedicated strategist who knows your business end-to-end. Not a
              rotating cast of account managers.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="animate-section bg-[#111625] text-slate-100 py-20 px-6 mt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-tr from-teal-800 to-teal-500/40"></div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block">
              FOUNDER'S NOTE
            </span>
            <h2 className="text-2xl font-bold text-white">Charles Assor</h2>
            <p className="text-xs text-slate-400 mb-6">
              Founder, PortDigitalBoost
            </p>

            <blockquote className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                "I started out building software for local businesses in Port
                Harcourt, and kept running into the same wall. Great products
                that nobody could find online. That gap between building
                something good and actually getting it seen is where
                PortDigitalBoost lives."
              </p>
              <p>
                "We're still small, but that's by design. Every client gets
                direct access to the person actually doing the work, not a sales
                layer between you and results."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="animate-section max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-xl border border-slate-200/80 py-6 px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-sm">
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
              143+
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Businesses served
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
              312%
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Avg. organic traffic growth
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
              2
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Core services, one team
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
              4.9/5
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Client satisfaction rating
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-section max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Ready to work with us?
        </h2>
        <p className="text-xs text-slate-500">
          Start with a free SEO audit, or tell us what you're looking to build
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-xs transition-colors">
            Get my free SEO audit
          </button>
          <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors">
            Book a dev consultation
          </button>
        </div>
      </section>
    </main>
  );
}
