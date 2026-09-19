import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  MapPin,
  Monitor,
  TrendingUp,
  Clock,
  Smartphone,
  Share2,
  Search,
  X,
  Check,
  Bookmark,
  ArrowRight,
  ThumbsUp,
  Sparkles,
  BookOpen,
  ChevronRight,
  Send,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  "All Posts",
  "SEO",
  "Local Search",
  "Web Development",
  "Case Studies",
];

const HERO_POST = {
  id: "hero-1",
  categoryTag: "FEATURED . CASE STUDY",
  categoryGroup: "Case Studies",
  title:
    "How a Port Harcourt auto shop went from page 5 to the top 3 on Google in 90 days.",
  description:
    "A breakdown of the exact Google Business, keyword, and content changes that moved one client from invisible to fully booked.",
  date: "July 10, 2026",
  readTime: "6 min read",
  author: {
    name: "Tunde Bakare",
    role: "Head of SEO Strategy",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  content: [
    "When Divine Auto Services in Port Harcourt reached out to us, they were struggling to attract organic local customers. Despite having top-notch mechanical services, they were languishing on Page 5 of Google search results for key queries like 'auto mechanic Port Harcourt' and 'car repair near me'.",
    "Over 90% of local search traffic goes to the local map pack and top 3 organic listings. Being on page 5 was functionally equivalent to being invisible.",
    "Our team initiated a aggressive 3-pillar local growth campaign:",
    "1. Google Business Profile Optimization: We restructured their category hierarchy, added hyper-local service descriptions, uploaded geotagged team photos, and implemented an automated SMS review generation funnel.",
    "2. On-Page Keyword Localization: We revamped their landing pages to address specific neighborhoods in Port Harcourt (GRA, Garrison, Eliozu) with intent-driven service pages.",
    "3. High-Authority Local Citations: We cleaned up inconsistent NAP (Name, Address, Phone) records across 25 Nigerian directory sites.",
    "The results? Within 90 days, organic phone call inquiries surged by 310%, and Divine Auto captured the #2 spot on Google Map Pack across Port Harcourt.",
  ],
};

const POSTS = [
  {
    id: 1,
    category: "LOCAL SEO",
    categoryGroup: "Local Search",
    categoryColor: "text-[#0e7c7b]",
    headerBg: "bg-[#0b132b]",
    icon: MapPin,
    title:
      "Why your business isn't showing up on Google Maps (and how to fix it)",
    description:
      "The most common Google Business Profile mistakes we see Nigerian SMEs make.",
    date: "July 10, 2026",
    readTime: "4 min read",
    author: {
      name: "Amara Okafor",
      role: "Local Search Specialist",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    content: [
      "If your physical store or office isn't appearing on Google Maps when local customers search for your products, you're leaving revenue on the table.",
      "In Nigeria's rapidly growing digital economy, local search is often the primary driver of high-intent walk-in customers and direct inquiries.",
      "Key issues holding Nigerian SMEs back include duplicate business listings, unverified pins, vague service categories, and lack of recent customer reviews.",
      "Fixing these issues requires structured optimization of your NAP data, uploading original photos of your business front, and generating consistent customer reviews.",
    ],
  },
  {
    id: 2,
    category: "WEB DEVELOPMENT",
    categoryGroup: "Web Development",
    categoryColor: "text-[#0e7c7b]",
    headerBg: "bg-[#0e7c7b]",
    icon: Monitor,
    title: "Does your website actually help your SEO, or quietly hurt it?",
    description:
      "Site speed, mobile design and structure issues that undo good SEO Work.",
    date: "June 27, 2026",
    readTime: "5 min read",
    author: {
      name: "Chidi Nnamdi",
      role: "Full-Stack Developer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    content: [
      "A visually stunning website is useless if it takes 8 seconds to load on mobile data or fails to communicate with search engine crawlers.",
      "We frequently audit websites in Nigeria that look sleek on desktop computers but suffer from bloated images, unoptimized JavaScript bundles, and poor Cumulative Layout Shift (CLS).",
      "Google prioritizes mobile-first indexing. If your mobile user experience is sluggish, even the best written content will fail to rank.",
      "Learn how modern frameworks, lightweight responsive design, and smart caching can instantly improve your search rankings.",
    ],
  },
  {
    id: 3,
    category: "SEO",
    categoryGroup: "SEO",
    categoryColor: "text-[#0e7c7b]",
    headerBg: "bg-[#e59b38]",
    icon: TrendingUp,
    title:
      "SEO VS paid ads: what's actually worth it for a small Nigerian business ?",
    description:
      "A practical no-hype comparison of cost, timeline and long-term value.",
    date: "June 20, 2026",
    readTime: "7 min read",
    author: {
      name: "Tunde Bakare",
      role: "Head of SEO Strategy",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    content: [
      "Should you spend your marketing budget on Google Ads and Instagram ads, or invest in long-term organic Search Engine Optimization?",
      "Paid ads deliver immediate traffic, but the moment you stop paying, the faucet turns off. SEO takes 3 to 6 months to build momentum, but generates compounding ROI over time.",
      "For small businesses in Lagos, Abuja, or Port Harcourt with limited monthly marketing budgets, a hybrid approach often yields the fastest path to sustainable revenue.",
    ],
  },
  {
    id: 4,
    category: "LOCAL SEO",
    categoryGroup: "Local Search",
    categoryColor: "text-[#0e7c7b]",
    headerBg: "bg-[#0b132b]",
    icon: Clock,
    title: "How long does SEO actually take to work ? A realistic timeline.",
    description:
      "Setting the right expectations before you start any SEO campaign.",
    date: "June 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Amara Okafor",
      role: "Local Search Specialist",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    content: [
      "Anyone who promises page 1 ranking on Google in 48 hours is selling snake oil. SEO is a strategic compound asset.",
      "Month 1 focus: Technical audit, crawl error fixes, and keyword mapping.",
      "Month 2-3 focus: On-page content creation, internal linking, and local citations.",
      "Month 4-6 focus: Domain authority growth, link building, and conversion rate optimization.",
      "By understanding this timeline, business founders can set realistic milestones and track genuine performance metrics.",
    ],
  },
  {
    id: 5,
    category: "WEB DEVELOPMENT",
    categoryGroup: "Web Development",
    categoryColor: "text-[#0e7c7b]",
    headerBg: "bg-[#0e7c7b]",
    icon: Smartphone,
    title:
      "Do you need a mobile app, or would a website actually serve you better?",
    description: "How to decide what to build first when budget is limited.",
    date: "June 10, 2026",
    readTime: "6 min read",
    author: {
      name: "Chidi Nnamdi",
      role: "Full-Stack Developer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    content: [
      "Many business owners believe launching a mobile application is the ultimate validation of growth. However, native apps require users to download, install, and allocate phone storage.",
      "A fast, high-performing Progressive Web App (PWA) or responsive website has zero friction for discovery and ranks directly on search engines.",
      "We break down cost estimates, user retention rates, and acquisition funnel differences so you invest in what actually scales your business.",
    ],
  },
  {
    id: 6,
    category: "CASE STUDIES",
    categoryGroup: "Case Studies",
    categoryColor: "text-[#0e7c7b]",
    headerBg: "bg-[#e59b38]",
    icon: TrendingUp,
    title: "From zero to 300% traffic: a restaurant's 6-month SEO journey",
    description:
      "Month_by_month breakdown of the strategy and what moved the needle.",
    date: "May 30, 2026",
    readTime: "8 min read",
    author: {
      name: "Tunde Bakare",
      role: "Head of SEO Strategy",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    content: [
      "Discover how a casual dining establishment in Victoria Island transformed its online table booking channel through structured content and local map positioning.",
      "We audited their menu landing pages, created geo-targeted blog posts about dining experiences, and built authentic press coverage.",
      "Within 180 days, organic website traffic quadrupled and online weekend table reservations reached capacity.",
    ],
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<(string | number)[]>([]);
  const [likedArticles, setLikedArticles] = useState<
    Record<string | number, boolean>
  >({});
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Animations Hook
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in general scroll elements
      const animElements = gsap.utils.toArray<HTMLElement>(".gsap-fade-up");
      animElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, [activeCategory, searchQuery]); // Re-run when layout filters change items

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleShare = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Copied link for "${title.slice(0, 25)}..." to clipboard!`);
    } else {
      showToast("Link copied to clipboard!");
    }
  };

  const toggleBookmark = (id: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((item) => item !== id) : [...prev, id];
      showToast(
        exists ? "Removed from saved articles" : "Saved to reading list!"
      );
      return next;
    });
  };

  const toggleLike = (id: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedArticles((prev) => {
      const current = prev[id] || false;
      showToast(!current ? "Thank you for your feedback!" : "Feedback updated");
      return { ...prev, [id]: !current };
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes("@")) {
      setSubscribed(true);
      showToast("Subscribed! Check your inbox for our latest insights.");
      setEmailInput("");
    } else {
      showToast("Please enter a valid email address.");
    }
  };

  // Fixed Filter logic for blog posts
  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const activeCat = activeCategory.toLowerCase().trim();

      const matchesCategory =
        activeCategory === "All Posts" ||
        post.categoryGroup.toLowerCase() === activeCat ||
        post.category.toLowerCase().includes(activeCat);

      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Determine if Hero card should show based on selected filter
  const isHeroVisible = useMemo(() => {
    if (searchQuery.trim() !== "") {
      return (
        HERO_POST.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        HERO_POST.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return activeCategory === "All Posts" || activeCategory === "Case Studies";
  }, [activeCategory, searchQuery]);

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#f7f5ef] text-[#121829] selection:bg-[#e59b38] selection:text-white relative overflow-hidden"
    >
      {/* Import Plus Jakarta Sans Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
          background-color: #f7f5ef;
        }
      `}</style>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0b132b] text-white px-5 py-3 rounded-xl flex items-center gap-3 border border-[#0e7c7b] animate-bounce ">
          <Sparkles className="w-4 h-4 text-[#e59b38]" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-white ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-10 md:px-12 lg:px-20 space-y-10">
        <header className="space-y-3 max-w-3xl gsap-fade-up">
          <p className="text-xs font-extrabold tracking-[0.2em] text-[#0e7c7b] uppercase">
            THE BOOST BLOG
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0b132b] leading-[1.15]">
            SEO and growth insights for Nigerian businesses
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal pt-1">
            Practical guides on ranking higher, getting found locally, and
            building the digital presence your business needs to grow.
          </p>
        </header>

        {/* Mobile Search Bar */}
        <div className="relative sm:hidden gsap-fade-up">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#ede8df] text-[#121829] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0e7c7b]"
          />
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap gap-2.5 pt-1 gsap-fade-up">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#121829] text-white scale-105"
                    : "bg-[#ede8df] text-[#121829] hover:bg-[#e2ded4] hover:text-black"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured / Hero Post */}
        {isHeroVisible && (
          <div
            onClick={() => setSelectedArticle(HERO_POST)}
            className="bg-[#0b132b] text-white rounded-xl p-6 md:p-10 relative overflow-hidden group cursor-pointer transition-all duration-300 border border-gray-800 gsap-fade-up "
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#0e7c7b]/20 rounded-full blur-3xl group-hover:bg-[#0e7c7b]/30 transition-all pointer-events-none" />

            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#e59b38] uppercase">
                  {HERO_POST.categoryTag}
                </p>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e59b38]" />
                <span className="text-xs text-gray-400 font-medium">
                  Case Study
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white group-hover:text-amber-100 transition-colors">
                {HERO_POST.title}
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                {HERO_POST.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400 relative z-10">
              <div className="flex items-center gap-3">
                <img
                  src={HERO_POST.author.avatar}
                  alt={HERO_POST.author.name}
                  className="w-7 h-7 rounded-full object-cover border border-[#e59b38]"
                />
                <span>
                  {HERO_POST.date} • {HERO_POST.readTime}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#e59b38] font-bold hover:underline flex items-center gap-1">
                  Read more{" "}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>

                <button
                  onClick={(e) => toggleBookmark(HERO_POST.id, e)}
                  title="Bookmark"
                  className="p-2 rounded-full bg-[#17203d] text-gray-300 hover:text-white hover:bg-[#202c52] transition-colors"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarkedIds.includes(HERO_POST.id)
                        ? "fill-[#e59b38] text-[#e59b38]"
                        : ""
                    }`}
                  />
                </button>

                <button
                  onClick={(e) => handleShare(HERO_POST.title, e)}
                  title="Share post"
                  className="p-2 rounded-full bg-[#17203d] text-gray-300 hover:text-white hover:bg-[#202c52] transition-colors"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 && !isHeroVisible && (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300 space-y-3 gsap-fade-up">
            <BookOpen className="w-10 h-10 mx-auto text-gray-400" />
            <h3 className="text-lg font-bold text-[#0b132b]">
              No articles found
            </h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              We couldn't find any articles matching "
              {searchQuery || activeCategory}". Try clearing your filters or
              choosing another topic.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All Posts");
              }}
              className="mt-2 px-4 py-2 bg-[#0e7c7b] text-white rounded-lg text-xs font-bold hover:bg-[#0b6362] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const IconComponent = post.icon;
            const isBookmarked = bookmarkedIds.includes(post.id);

            return (
              <article
                key={post.id}
                onClick={() => setSelectedArticle(post)}
                className="bg-white rounded-xl overflow-hidden border border-[#e8e4da] transition-all duration-200 flex flex-col justify-between group cursor-pointer gsap-fade-up  "
              >
                <div
                  className={`${post.headerBg} h-40 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <IconComponent className="w-10 h-10 text-white stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />

                  <div className="absolute top-3 right-3">
                    <button
                      onClick={(e) => toggleBookmark(post.id, e)}
                      className="p-1.5 rounded-full bg-black/20 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/40 transition-colors"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${
                          isBookmarked ? "fill-[#e59b38] text-[#e59b38]" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p
                      className={`text-xs font-extrabold tracking-wider ${post.categoryColor} uppercase`}
                    >
                      {post.category}
                    </p>

                    <h3 className="text-lg font-bold text-[#0b132b] leading-snug group-hover:text-[#0e7c7b] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed pt-1">
                      {post.description}
                    </p>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#e59b38] pt-2 group-hover:underline">
                      Read more <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span className="font-medium">{post.date}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleShare(post.title, e)}
                        aria-label="Share post"
                        title="Share article"
                        className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Callout */}
        <section className="bg-[#ede8df] rounded-2xl p-8 md:p-12 border border-[#e2ded4] my-12 relative overflow-hidden gsap-fade-up">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-extrabold tracking-widest text-[#0e7c7b] uppercase">
              JOIN 4,000+ NIGERIAN SME FOUNDERS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b132b]">
              Get practical SEO tips delivered to your inbox every fortnight.
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              No spam. No hype. Just actionable Google Business, local keyword,
              and website growth strategies tailored specifically for Nigerian
              businesses.
            </p>

            {subscribed ? (
              <div className="bg-[#0e7c7b] text-white p-4 rounded-xl flex items-center gap-3 font-medium text-xs md:text-sm">
                <Check className="w-5 h-5 text-[#e59b38]" />
                You're subscribed! Look out for our upcoming guide next Tuesday.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2 pt-2"
              >
                <input
                  type="email"
                  placeholder="Enter your work email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl text-xs md:text-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e7c7b] text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0b132b] text-white font-bold rounded-xl text-xs md:text-sm hover:bg-[#121829] transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe <Send className="w-3.5 h-3.5 text-[#e59b38]" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#f7f5ef] text-[#121829] w-full max-w-3xl rounded-2xl overflow-hidden my-auto border border-[#e2ded4] relative ">
            <div className="bg-[#0b132b] text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
              <span className="text-xs font-bold text-[#e59b38] uppercase tracking-wider">
                {selectedArticle.category || selectedArticle.categoryTag}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => toggleBookmark(selectedArticle.id, e)}
                  className="p-1.5 rounded-full hover:bg-gray-800 text-gray-300 hover:text-white"
                  title="Bookmark"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarkedIds.includes(selectedArticle.id)
                        ? "fill-[#e59b38] text-[#e59b38]"
                        : ""
                    }`}
                  />
                </button>
                <button
                  onClick={(e) => handleShare(selectedArticle.title, e)}
                  className="p-1.5 rounded-full hover:bg-gray-800 text-gray-300 hover:text-white"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full hover:bg-gray-800 text-gray-300 hover:text-white ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-10 space-y-6 max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b132b] leading-tight">
                {selectedArticle.title}
              </h2>

              {selectedArticle.author && (
                <div className="flex items-center gap-3 py-3 border-y border-[#e2ded4]">
                  <img
                    src={selectedArticle.author.avatar}
                    alt={selectedArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#0e7c7b]"
                  />
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-[#0b132b]">
                      {selectedArticle.author.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {selectedArticle.author.role} • {selectedArticle.date}
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-gray-700 font-normal">
                {selectedArticle.content ? (
                  selectedArticle.content.map(
                    (paragraph: string, index: number) => (
                      <p key={index}>{paragraph}</p>
                    )
                  )
                ) : (
                  <p>{selectedArticle.description}</p>
                )}
              </div>

              <div className="pt-6 border-t border-[#e2ded4] flex items-center justify-between">
                <button
                  onClick={(e) => toggleLike(selectedArticle.id, e)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    likedArticles[selectedArticle.id]
                      ? "bg-[#0e7c7b] text-white"
                      : "bg-[#ede8df] text-[#0b132b] hover:bg-[#e2ded4]"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  {likedArticles[selectedArticle.id]
                    ? "Helpful (Liked)"
                    : "Was this helpful?"}
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-[#0b132b] text-white rounded-lg text-xs font-bold hover:bg-[#121829]"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
