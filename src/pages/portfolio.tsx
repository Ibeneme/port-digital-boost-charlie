import React, { useState } from "react";
import {
  TrendingUp,
  Monitor,
  MapPin,
  Smartphone,
  Check,
  ArrowRight,
  Building2,
  Truck,
  Dumbbell,
} from "lucide-react";

type Category =
  | "All"
  | "SEO"
  | "Web design"
  | "Web Development"
  | "Mobile Apps";

interface Project {
  id: string;
  category: Category;
  categoryLabel: string;
  subCategory: string;
  client: string;
  title: string;
  description: string;
  outcome: string;
  headerBg: string;
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: "greenfield-clinic",
    category: "SEO",
    categoryLabel: "SEO",
    subCategory: "HEALTHCARE",
    client: "GREENFIELD CLINIC",
    title: "Content and technical SEO for a private medical clinical",
    description:
      "On-page fixes, service-page content and local keyword targeting for patient search terms.",
    outcome: "183% increase in organic appointment inquiries",
    headerBg: "bg-[#E5A73C]", // Golden Amber
    icon: <TrendingUp className="w-10 h-10 text-white stroke-[2.5]" />,
  },
  {
    id: "riverside-fashion",
    category: "Web Development",
    categoryLabel: "WEB DEVELOPMENT",
    subCategory: "RETAIL",
    client: "RIVERSIDE FASHION HOUSE",
    title: "E-commerce built for a growing fashion label",
    description:
      "Full online store with catalog, checkout and SEO-optimized product pages from day one.",
    outcome: "Launched in 3 weeks, ranking within 90 days",
    headerBg: "bg-[#1E2538]", // Dark Slate Navy
    icon: <Monitor className="w-10 h-10 text-white stroke-[2]" />,
  },
  {
    id: "suya-spot",
    category: "SEO",
    categoryLabel: "SEO",
    subCategory: "RESTAURANT",
    client: "SUYA SPOT PH",
    title: "Local SEO overhaul for a growing restaurant chain",
    description:
      "Google Business optimization and content strategy across 3 locations in Port Harcourt.",
    outcome: "214% increase in map-pack visibility",
    headerBg: "bg-[#0E4945]", // Dark Teal Green
    icon: <MapPin className="w-10 h-10 text-white stroke-[2]" />,
  },
  {
    id: "pickars-logistics",
    category: "Mobile Apps",
    categoryLabel: "MOBILE APP",
    subCategory: "PACKAGE DELIVERY",
    client: "PICKARS LOGISTICS",
    title: "Ordering app with live ETA tracking for local deliveries.",
    description:
      "Full mobile ordering flow - menu, payment, live delivery tracking and delivery dashboard.",
    outcome: "149% increase in map-pack visibility",
    headerBg: "bg-[#E5A73C]", // Golden Amber
    icon: <Smartphone className="w-10 h-10 text-white stroke-[2]" />,
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "SEO",
    "Web design",
    "Web Development",
    "Mobile Apps",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-gray-900 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#0E6C5E] font-semibold text-sm tracking-wide uppercase">
            Our Works
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real businesses. Real rankings. Real results.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A look at our SEO campaigns success stories and recent projects
            we've built for nigerian businesses - and the numbers behind them.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-black text-white border-black "
                    : "bg-white/80 text-gray-700 border-gray-300 hover:bg-white hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {}
        {(activeCategory === "All" || activeCategory === "SEO") && (
          <section className="bg-[#0b141a] rounded-xl overflow-hidden border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
            {/* Dark Details Side */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[11px] font-bold tracking-widest text-amber-500 uppercase">
                  FEATURED - SEO CAMPAIGN
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Javin Hotel : Ada-george, Port Harcourt
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Javin hotel was ranking on page 5 for every relevant local
                  search. We rebuilt their Google Business Profile, targeted
                  hyper-local keywords, and built out service-page content -
                  moving them into top 3 results within three months.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    #47
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                    Google ranking
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    #3
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                    Organic traffic
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    +312%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                    Organic traffic
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    +4.1k
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                    Profile views
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button className="inline-flex items-center gap-2 bg-[#E5A73C] hover:bg-[#d4962b] text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-colors ">
                  View full case study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Glowing Trend Visual Side */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#063327] via-[#094233] to-[#041c16] relative min-h-[220px] lg:min-h-full flex items-center justify-center p-6 overflow-hidden">
              {/* Background Accent glow */}
              <div className="absolute right-6 top-1/3 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Canvas-style trend line illustration using SVG */}
              <svg
                className="w-full h-auto max-w-md ]"
                viewBox="0 0 400 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10 160 Q 60 150 110 135 T 210 100 T 290 85 L 340 50"
                  stroke="#E5A73C"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Glowing End Dot */}
                <circle
                  cx="340"
                  cy="50"
                  r="10"
                  fill="white"
                  className="animate-pulse"
                />
                <circle cx="340" cy="50" r="5" fill="#E5A73C" />
              </svg>
            </div>
          </section>
        )}

        {}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden  border border-gray-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Block */}
                <div
                  className={`${project.headerBg} h-40 relative p-4 flex items-center justify-center`}
                >
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded">
                    {project.categoryLabel}
                  </span>
                  <div>{project.icon}</div>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-bold text-slate-500 tracking-wider">
                    <span>{project.client}</span>
                    <span className="mx-1.5">•</span>
                    <span>{project.subCategory}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Outcome Checkmark Bar */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-2">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-xs sm:text-sm">
                  <Check className="w-4 h-4 stroke-[3] shrink-0" />
                  <span>{project.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {}
        <section className="pt-8 pb-4">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative bg-[#f8f6f0] px-4">
              <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
                Our Clients
              </span>
            </div>
          </div>

          {/* Client Logos Grid */}
          <div className="flex flex-wrap items-center justify-around gap-8 py-4 opacity-90">
            {/* Hotel 26 Mock Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tighter text-slate-700 uppercase font-mono">
                HOTEL 26
              </span>
            </div>

            {/* Pickars Logistics Mock Logo */}
            <div className="flex items-center gap-2">
              {/* Pickars Logistics Logo */}

              <img
                src="https://www.pickars.com/logo.svg"
                alt="Pickars Logistics"
                className="h-8 w-auto object-contain"
              />

              <div className="leading-tight">
                <div className="font-extrabold text-xs tracking-tight text-slate-900">
                  Pickars
                </div>
              </div>
            </div>

            {/* Greensteel Limited Mock Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 text-white p-1 rounded-md">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xs text-emerald-700 tracking-tight">
                greensteel limited
              </span>
            </div>
          </div>
        </section>

        {}
        <section className="bg-white rounded-xl p-8 sm:p-10 text-center border border-gray-200/70 space-y-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Want results like these ?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            Start with a free SEO audit, or tell us what you're looking to build
          </p>
          <div className="pt-2">
            <button className="bg-[#E5A73C] hover:bg-[#d4962b] text-slate-950 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg  transition-colors">
              Get in touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
