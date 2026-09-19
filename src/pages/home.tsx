import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, ChevronDown, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "Most local businesses start seeing noticeable improvements in their Google rankings and visibility within 60 to 90 days, depending on your current online presence and competition level.",
    },
    {
      question: "Do you offer one-time projects or monthly retainers ?",
      answer:
        "We primarily offer monthly retainers for SEO to ensure steady, long-term ranking growth, but we also handle one-time custom software and web development projects.",
    },
    {
      question: "Can you help redesign my website and optimize it for SEO?",
      answer:
        "Yes! Because we combine SEO strategy and software development under one roof, we can redesign your website to look great, load fast, and rank higher on Google simultaneously.",
    },
    {
      question: "Do you guarantee #1 rankings on Google ?",
      answer:
        "No reputable agency can ethically guarantee a #1 ranking because Google's algorithm changes constantly. However, we guarantee proven optimization frameworks that significantly boost your visibility and bring you more calls and customers.",
    },
    {
      question: "Do I need to already have a website before working with you ?",
      answer:
        "Not at all. If you don't have a website yet, our development team can build one for you from scratch as part of your digital growth plan.",
    },
  ];

  return (
    <main
      ref={mainRef}
      className="w-full bg-[#fbf9f5] text-slate-900 overflow-hidden"
    >
      {/* Hero Section (Immediate load animation) */}
      <section className="bg-[#111625] text-white pt-16 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Digital Growth & Custom Software - One Partner, One Mission.
            </h1>
            <p className="text-teal-400 font-medium text-lg">
              We boost, We build, You grow.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              We boost your online visibility and build the digital products
              your business needs to scale. SEO that drives traffic + custom
              software that streamlines operations.
            </p>
            <div className="pt-2">
              <a
                href="tel:+2348089557692"
                className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-xs md:text-sm transition-colors inline-flex items-center gap-2"
              >
                Get a free SEO Audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-400 pt-2">
              143+ businesses ranking higher on Google.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1a2032] rounded-2xl p-6 border border-slate-800 flex items-center justify-center min-h-[260px]">
              <div className="flex items-end space-x-3 h-32">
                <div className="w-8 bg-amber-500/80 rounded-t h-[40%]"></div>
                <div className="w-8 bg-amber-500/90 rounded-t h-[60%]"></div>
                <div className="w-8 bg-amber-500 rounded-t h-[80%]"></div>
                <div className="w-8 bg-teal-400 rounded-t h-[100%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="border-b border-slate-200/80 bg-white py-4 px-6 text-center text-xs font-medium text-slate-500">
        Trusted by businesses in Lagos, Abuja, Port Harcourt, Kano, Enugu and
        international
      </div>

      {/* What We Do Section */}
      <section className="animate-section max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          WHAT WE DO
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Two core strengths.
        </h2>
        <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto mb-12">
          One unified mission - get your business found, then build what it
          needs to keep growing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {/* SEO Card */}
          <div className="bg-[#111625] text-white rounded-2xl p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-amber-500/20 text-amber-400 rounded uppercase tracking-wider mb-4 inline-block">
                SEO
              </span>
              <h3 className="text-xl font-bold mb-2">SEO</h3>
              <p className="text-xs text-slate-400 mb-6">
                Rank higher, faster.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Audit
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Local SEO
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> On-page SEO
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Content
                  strategy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Link building
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a
                href="tel:+2348089557692"
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-xs transition-colors block text-center"
              >
                Get Free SEO Audit
              </a>
            </div>
          </div>

          {/* Software Development Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded uppercase tracking-wider mb-4 inline-block">
                DEV
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Software Development
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Build smarter, scale faster.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> Mobile Apps
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> Web Apps
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> Custom
                  Software
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> API
                  Integration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> IT Consulting
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a
                href="tel:+2348089557692"
                className="w-full py-2.5 rounded-lg bg-[#111625] hover:bg-slate-800 text-white font-semibold text-xs transition-colors block text-center"
              >
                Book a Dev Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="animate-section max-w-6xl mx-auto px-6 py-16">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          WHY CHOOSE US
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <h2 className="lg:col-span-6 text-2xl md:text-3xl font-bold text-slate-900">
            Ranking is only useful if the business behind it is solid too.
          </h2>
          <p className="lg:col-span-6 text-xs md:text-sm text-slate-500 leading-relaxed pt-1">
            We're the only team in Port Harcourt combining SEO strategy with
            development workflow that lets a growing business actually keep up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200/80 border border-slate-200/80 rounded-xl overflow-hidden">
          <div className="bg-white p-6 space-y-3">
            <span className="text-xs font-bold text-amber-600">01</span>
            <h3 className="font-bold text-slate-900 text-sm">
              Local search, actually local
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We optimize for how people in Nigeria search - not generic
              playbooks built for other markets.
            </p>
          </div>

          <div className="bg-white p-6 space-y-3">
            <span className="text-xs font-bold text-amber-600">02</span>
            <h3 className="font-bold text-slate-900 text-sm">
              One team, not two vendors
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              SEO strategy and development work under one roof, so your rankings
              and your website move forward together - not on two separate
              timelines.
            </p>
          </div>

          <div className="bg-white p-6 space-y-3">
            <span className="text-xs font-bold text-amber-600">03</span>
            <h3 className="font-bold text-slate-900 text-sm">
              Transparent reporting
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Track your ranking progress and application status yourself - no
              chasing us for updates.
            </p>
          </div>

          <div className="bg-white p-6 space-y-3">
            <span className="text-xs font-bold text-amber-600">04</span>
            <h3 className="font-bold text-slate-900 text-sm">
              Built to scale with you
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Start with an SEO audit, add development or compliance services
              later - no need to switch providers as you grow.
            </p>
          </div>

          <div className="bg-white p-6 space-y-3">
            <span className="text-xs font-bold text-amber-600">05</span>
            <h3 className="font-bold text-slate-900 text-sm">
              Fair, upfront pricing
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              No hidden fees or government filings, no vague "custom quote" for
              every SEO plan.
            </p>
          </div>

          <div className="bg-white p-6 space-y-3">
            <span className="text-xs font-bold text-amber-600">06</span>
            <h3 className="font-bold text-slate-900 text-sm">
              Real people, real support
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              A dedicated strategist who knows your business, not a rotating
              support queue.
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="mt-12 py-6 border-y border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
              Average organic traffic growth
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
              14 days
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Average website launch turnaround
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
              4.6/5
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Average client rating
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="animate-section bg-[#111625] text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            From paperwork to live online - four steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold text-amber-400">
                01
              </div>
              <h3 className="font-bold text-sm">Free SEO audit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We check how your business currently ranks and where you're
                losing customers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold text-amber-400">
                02
              </div>
              <h3 className="font-bold text-sm">We optimize</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google Business, keywords, content and on-page SEO get built out
                for your business and city.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold text-amber-400">
                03
              </div>
              <h3 className="font-bold text-sm">You start ranking</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Watch your position climb on Google over the following weeks as
                the work takes effect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold text-amber-400">
                04
              </div>
              <h3 className="font-bold text-sm">Add development, if needed</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Want a website or app to support the growth? Bring our dev team
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="animate-section max-w-6xl mx-auto px-6 py-20">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          PRICING
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Bundles for every stage of business
        </h2>

        {/* Currency Switcher */}
        <div className="inline-flex p-1 bg-slate-200/80 rounded-lg text-xs font-semibold mb-10">
          <button
            onClick={() => setCurrency("NGN")}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currency === "NGN" ? "bg-white text-slate-900" : "text-slate-600"
            }`}
          >
            Local (₦)
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              currency === "USD" ? "bg-white text-slate-900" : "text-slate-600"
            }`}
          >
            International ($)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* SEO Starter */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-6">
            <h3 className="font-bold text-base text-slate-900">SEO Starter</h3>
            <div>
              <span className="text-xs text-slate-400">Starting from </span>
              <span className="text-2xl font-extrabold text-slate-900">
                {currency === "NGN" ? "250,000" : "$350"}
              </span>
              <span className="text-xs text-slate-400">/month</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li className="py-1">Google Business Profile</li>
              <li className="py-1">Local keyword targeting</li>
              <li className="py-1">Monthly performance tracking</li>
            </ul>

            <a
              href="tel:+2348089557692"
              className="w-full py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors block text-center"
            >
              Choose Starter
            </a>
          </div>

          {/* SEO Growth */}
          <div className="bg-white border-2 border-amber-500 rounded-2xl p-6 space-y-6 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              MOST CHOSEN
            </div>
            <h3 className="font-bold text-base text-slate-900">SEO Growth</h3>
            <div>
              <span className="text-xs text-slate-400">Starting from </span>
              <span className="text-2xl font-extrabold text-slate-900">
                {currency === "NGN" ? "400,000" : "$600"}
              </span>
              <span className="text-xs text-slate-400">/month</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li className="py-1">Everything in Starter</li>
              <li className="py-1">Ongoing content & on-page SEO</li>
              <li className="py-1">Competitor tracking</li>
              <li className="py-1">Monthly detailed SEO report</li>
            </ul>

            <a
              href="tel:+2348089557692"
              className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-xs transition-colors block text-center"
            >
              Choose Growth
            </a>
          </div>

          {/* SEO Pro */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-6">
            <h3 className="font-bold text-base text-slate-900">SEO Pro</h3>
            <div>
              <span className="text-xs text-slate-400">Starting from </span>
              <span className="text-2xl font-extrabold text-slate-900">
                {currency === "NGN" ? "700,000" : "$1,000"}
              </span>
              <span className="text-xs text-slate-400">/month</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li className="py-1">Everything in Growth</li>
              <li className="py-1">Multi-location SEO</li>
              <li className="py-1">Link building</li>
              <li className="py-1">Dedicated strategist</li>
            </ul>

            <a
              href="tel:+2348089557692"
              className="w-full py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors block text-center"
            >
              Choose Pro
            </a>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 text-center max-w-2xl mx-auto mt-8">
          Note: Prices shown is for small businesses (clinics, shops,
          restaurants). Hotels, real estates and other higher-competition
          businesses start at a higher rates due to additional optimization
          needs.
        </p>

        {/* Custom Dev Callout */}
        <div className="bg-[#f2efe9] rounded-xl p-6 mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[#111625] text-amber-400 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">
                These prices cover SEO only
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                The plans above are for SEO and local search work - they do not
                include custom software or web development, which is scoped and
                priced separately based on the project.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you need a website, web app, or custom software built, reach
                out directly and we'll put together a quote based on what you're
                looking to build.
              </p>
            </div>
          </div>
          <div className="whitespace-nowrap flex items-center gap-4 w-full md:w-auto">
            <span className="text-xs font-semibold text-slate-800">
              Need something custom built ?
            </span>
            <a
              href="tel:+2348089557692"
              className="px-5 py-2.5 rounded-lg bg-[#111625] hover:bg-slate-800 text-white font-semibold text-xs transition-colors inline-flex items-center gap-2"
            >
              Book a Dev Consultation <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 text-center mt-4">
          Promotional payments accepted via Alice, Stripe or Paystack. Billed
          monthly, cancel anytime.
        </p>
      </section>

      {/* From The Blog */}
      <section className="animate-section max-w-6xl mx-auto px-6 py-16">
        <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase block mb-3">
          FROM THE BLOG
        </span>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Latest insights
          </h2>
          <a
            href="#"
            className="text-xs font-bold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1"
          >
            View all posts <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              FEATURES . CASE STUDY
            </span>
            <h3 className="font-bold text-slate-900 text-base leading-snug">
              How a Port Harcourt auto shop went from page 5 to the top 3 on
              Google in 90 days.
            </h3>
            <p className="text-[11px] text-slate-400">
              July 10, 2026. 4 min read
            </p>
          </article>

          <article className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              LOCAL SEO
            </span>
            <h3 className="font-bold text-slate-900 text-base leading-snug">
              Why your business isn't showing up on Google Maps
            </h3>
            <p className="text-[11px] text-slate-400">
              July 8, 2026. 5 min read
            </p>
          </article>

          <article className="bg-white border border-slate-200/80 rounded-xl p-6 space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              WEB DEVELOPMENT
            </span>
            <h3 className="font-bold text-slate-900 text-base leading-snug">
              Does your website actually help your SEO, or quietly hurt it?
            </h3>
            <p className="text-[11px] text-slate-400">
              July 5, 2026. 3 min read
            </p>
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section className="animate-section bg-[#111625] text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase block">
            WHAT OUR CLIENTS ARE SAYING
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white text-slate-900 rounded-xl p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "PortDigitalBoost took us from page 3 to #1 for 'hotels in Port
                Harcourt'. Bookings increased 35%"
              </p>
              <div className="pt-2 text-[11px] font-bold text-slate-900">
                Chinedu O, Hotel Manager
              </div>
            </div>

            <div className="bg-white text-slate-900 rounded-xl p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "We now get 3x more calls from Google. Best investment we made"
              </p>
              <div className="pt-2 text-[11px] font-bold text-slate-900">
                Emeka K., Restaurant Owner
              </div>
            </div>

            <div className="bg-white text-slate-900 rounded-xl p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "They really explained SEO in very simple terms. No jargon, just
                results"
              </p>
              <div className="pt-2 text-[11px] font-bold text-slate-900">
                Ibrahim A. S, Oil Servicing Firm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="animate-section max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className="bg-white border border-slate-200/80 rounded-lg p-4 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openFaq === index && (
                <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
