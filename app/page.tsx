"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Play, Heart, Bookmark, MessageCircle, BadgeCheck,
  Home as HomeIcon, Sofa, Plug, HardHat, Truck, Navigation, Wallet,
  CalendarClock, Video, Upload, Smartphone, FileText, Receipt,
  Sparkles, ShieldCheck, MapPin, ChevronDown,
  Phone, Mail, Instagram, Banknote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { faqs, homepageLd } from "../lib/seo";

import swyft from "../public/swyft-logo.png";
import heroCouple from "../public/young-couple.jpg";
import phones from "../public/6.png";
import scoutImg from "../public/agent2.jpg";
import driver1 from "../public/driver.jpg";
import driver2 from "../public/dereva.jpg";
import barakLogo from "../public/BARAK LABS.png";
import barakLogoWord from "../public/Barak LOGO.png";

// ── Real destinations ────────────────────────────────────────────────────────
// TODO: replace "#" with the real store links once available.
const PLAY_STORE_URL = "#";
const APP_STORE_URL = "#";
const FIND_HOUSING_URL = "https://move.swyft.africa/findhouse";
const DRIVER_URL = "https://driver.swyft.africa/signup";
const BUSINESS_URL = "https://business.swyft.africa";

// ── Brand glyphs (Lucide has no store logos) ─────────────────────────────────
function AppleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.21-1.13 3.02-.86.98-2.25 1.74-3.39 1.65-.14-1.1.41-2.27 1.06-3.01.74-.85 2.05-1.5 3.18-1.56.01.07.01.14.01.21l.27-.31zM20.5 17.18c-.55 1.27-.81 1.84-1.52 2.96-.99 1.56-2.39 3.51-4.13 3.52-1.54.02-1.94-1-4.03-.99-2.09.01-2.53.99-4.07.97-1.74-.02-3.07-1.78-4.06-3.34C.06 16.91-.21 11.9 1.5 9.27c.84-1.3 2.17-2.12 3.6-2.12 1.45 0 2.36.99 3.56.99 1.16 0 1.87-.99 3.55-.99 1.27 0 2.61.69 3.57 1.88-3.14 1.72-2.63 6.2.72 8.15z" />
    </svg>
  );
}
function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l9.4-9.7-9.4-9.7z" fill="#34D27B" />
      <path d="M17 8.8l-3.8-2.2L4.4 1.9c-.3-.2-.6-.2-.8-.1L13 11.1 17 8.8z" fill="#00C853" />
      <path d="M17 15.2l-4-2.3-9.4 9.3c.2.1.5.1.8-.1l8.8-5 3.8-1.9z" fill="#057A3A" />
      <path d="M17 8.8l-4 2.3 4 2.1 3.4-1.9c.7-.4.7-1.4 0-1.8L17 8.8z" fill="#34D27B" />
    </svg>
  );
}

// ── Scroll reveal ────────────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── Store buttons ────────────────────────────────────────────────────────────
function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-dark inline-flex items-center gap-3 text-white pl-4 pr-5 py-3 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        aria-label="Download Swyft on the App Store"
      >
        <AppleGlyph className="w-6 h-6" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] text-white/60">Download on the</span>
          <span className="block text-sm font-semibold -mt-0.5">App Store</span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-dark inline-flex items-center gap-3 text-white pl-4 pr-5 py-3 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        aria-label="Get Swyft on Google Play"
      >
        <PlayGlyph className="w-5 h-5" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] text-white/60">Get it on</span>
          <span className="block text-sm font-semibold -mt-0.5">Google Play</span>
        </span>
      </a>
    </div>
  );
}

// ── Small UI atoms ───────────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink mb-4">
      {children}
    </p>
  );
}

// ── Reel phone — the "TikTok for houses" centrepiece ─────────────────────────
function ReelPhone({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[270px] sm:w-[300px] aspect-[9/19] rounded-[2.6rem] border-[7px] border-ink bg-ink shadow-soft-lg overflow-hidden">
        <Image
          src={heroCouple}
          alt="A property tour playing in the Swyft video feed"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        {/* top + bottom scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70" aria-hidden="true" />

        {/* status pill */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur rounded-full pl-2 pr-3 py-1 shadow-soft">
          <BadgeCheck className="w-3.5 h-3.5 text-brand" />
          <span className="text-[11px] font-semibold text-ink">Scout Verified · Available</span>
        </div>

        {/* centre play */}
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur flex items-center justify-center border border-white/40">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* right rail */}
        <div className="absolute right-3 bottom-28 flex flex-col items-center gap-4 text-white" aria-hidden="true">
          {[Heart, MessageCircle, Bookmark].map((Icon, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
            </div>
          ))}
        </div>

        {/* caption */}
        <div className="absolute left-4 right-14 bottom-20 text-white">
          <p className="font-display font-semibold text-lg leading-tight">2-Bed Apartment</p>
          <p className="text-sm text-white/85 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Kilimani, Nairobi
          </p>
          <p className="text-sm font-semibold mt-0.5">KES 45,000<span className="text-white/70 font-normal">/mo</span></p>
        </div>

        {/* bucket-list pill */}
        <div className="absolute left-4 right-4 bottom-5">
          <div className="btn-green w-full text-center text-white text-sm font-semibold py-3 rounded-full">
            Add to Bucket List
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white text-ink overflow-x-hidden">

      {/* Homepage structured data — app, services, FAQ (for AI / rich results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageLd) }}
      />

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-white/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <Image src={swyft} alt="Swyft" className="h-7 w-auto" priority />
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={FIND_HOUSING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-ink-soft hover:text-ink text-sm font-medium transition-colors duration-150 px-3 py-2 cursor-pointer"
            >
              Find Housing
            </a>
            <a
              href="#download"
              className="btn-green text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Download App
            </a>
          </div>
        </div>
      </nav>

      {/* ── Section 1 · Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 px-5 sm:px-6">
        <div
          className="animate-orb pointer-events-none absolute -z-0"
          style={{
            width: 620, height: 620, top: -180, right: -120,
            background: "radial-gradient(ellipse at center, rgba(0,200,83,0.14) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(20px)",
          }}
          aria-hidden="true"
        />
        <div
          className="animate-orb-slow pointer-events-none absolute -z-0"
          style={{
            width: 420, height: 420, bottom: -120, left: -100,
            background: "radial-gradient(ellipse at center, rgba(0,200,83,0.10) 0%, transparent 65%)",
            borderRadius: "50%", filter: "blur(30px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-ink text-xs font-semibold px-3 py-1.5 rounded-full mb-7">
              <span className="relative flex w-2 h-2">
                <span className="animate-dot-pulse absolute inline-flex w-2 h-2 rounded-full bg-brand" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-brand" />
              </span>
              Housing + Moving · Nairobi
            </div>

            <h1 className="font-display font-extrabold text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-ink mb-6">
              Find a Home.<br />
              Move In.<br />
              <span className="text-gradient-green">All in One App.</span>
            </h1>

            <p className="text-ink-soft text-lg sm:text-xl leading-relaxed max-w-md mb-9">
              Swipe a video feed of real, Scout-verified homes. Unlock the
              details, then book a trusted mover — without the scams or the stress.
            </p>

            <StoreButtons className="mb-5" />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
              <a
                href={FIND_HOUSING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-brand-ink transition-colors cursor-pointer group"
              >
                Find Housing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-brand" />
                Scout-verified · Nairobi-wide
              </span>
            </div>
          </div>

          {/* Visual */}
          <Reveal className="relative flex justify-center lg:justify-end">
            <ReelPhone />
          </Reveal>
        </div>
      </section>

      {/* ── Section 2 · Trust strip ──────────────────────────────────────── */}
      <section className="w-full px-5 sm:px-6 pb-4">
        <div className="max-w-6xl mx-auto bg-mint border border-border rounded-3xl px-6 sm:px-10 py-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {[
              { Icon: BadgeCheck, stat: "Scout-verified", label: "Every listing, filmed & checked" },
              { Icon: Navigation, stat: "Live tracking", label: "Watch your driver in real time" },
              { Icon: Banknote, stat: "M-Pesa & cash", label: "Upfront prices, no haggling" },
              { Icon: MapPin, stat: "Nairobi-wide", label: "Across the city & metro" },
            ].map(({ Icon, stat, label }) => (
              <div key={stat} className="text-center">
                <Icon className="w-6 h-6 text-brand-ink mx-auto mb-2.5" />
                <p className="font-display font-bold text-xl sm:text-2xl tracking-tight text-ink">{stat}</p>
                <p className="text-[13px] text-ink-soft mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 · Problem ──────────────────────────────────────────── */}
      <section className="w-full py-24 sm:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] text-ink mb-4">
              House hunting in Nairobi is broken.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Finding a place and actually moving into it are two separate
              headaches — buried in WhatsApp groups, riddled with scams, and
              stitched across apps that never talk to each other.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: Smartphone, title: "Discovery", desc: "Vacancies hide in WhatsApp groups and unverifiable Facebook posts. You never know what's real." },
              { Icon: ShieldCheck, title: "Trust & scams", desc: "View alone and waste trips, or go through an agent and risk getting scammed for a place that doesn't exist." },
              { Icon: Truck, title: "Moving day", desc: "Once you finally find a home, finding a trustworthy truck with a fair price is a whole new gamble." },
            ].map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="card-hover h-full bg-white border border-border rounded-3xl p-7">
                  <div className="w-11 h-11 rounded-2xl bg-mint flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-ink-soft" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-ink mb-2">{title}</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 · Discovery (the feed) ─────────────────────────────── */}
      <section className="w-full px-5 sm:px-6">
        <div className="max-w-6xl mx-auto bg-mint rounded-[36px] px-6 sm:px-12 py-20 sm:py-24 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -z-0"
            style={{
              width: 520, height: 520, top: -160, left: -120,
              background: "radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
            aria-hidden="true"
          />
          <div className="relative grid lg:grid-cols-2 gap-14 items-center">
            <Reveal className="flex justify-center lg:justify-start order-2 lg:order-1">
              <ReelPhone />
            </Reveal>

            <Reveal delay={100} className="order-1 lg:order-2">
              <Eyebrow>Discover</Eyebrow>
              <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] text-ink mb-5">
                Find a home the way you scroll.
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed mb-9 max-w-md">
                Swyft turns house hunting into a video feed. Watch real tours
                filmed by verified Scouts, save what you love, and unlock the
                details only when you&apos;re ready.
              </p>

              <ol className="space-y-4 mb-9">
                {[
                  { Icon: Play, t: "Swipe", d: "Scroll a feed of short property videos, personalised to you." },
                  { Icon: Bookmark, t: "Save", d: "Add the homes you love to your Bucket List." },
                  { Icon: Wallet, t: "Unlock", d: "Pay a small viewing fee to reveal building, directions & caretaker contact." },
                  { Icon: HomeIcon, t: "View & move", d: "Go see it yourself, then book your Swyft move when you find the one." },
                ].map(({ Icon, t, d }, i) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0 relative">
                      <Icon className="w-4 h-4 text-brand-ink" />
                      <span className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-brand text-white text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                    </span>
                    <div>
                      <p className="font-semibold text-ink leading-tight">{t}</p>
                      <p className="text-ink-soft text-sm leading-relaxed">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft mb-3">Your feed, your interests</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { Icon: HomeIcon, label: "House Hunting" },
                  { Icon: Sofa, label: "Furniture" },
                  { Icon: Plug, label: "Appliances" },
                  { Icon: HardHat, label: "Building & Construction" },
                ].map(({ Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3.5 py-2 text-sm font-medium text-ink">
                    <Icon className="w-4 h-4 text-brand-ink" /> {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 5 · Move ─────────────────────────────────────────────── */}
      <section className="w-full py-24 sm:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow>Then move in</Eyebrow>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] text-ink mb-5">
              A mover for any move.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
              Book a single vehicle, or pick a moving package sized to your
              home — Swyft bundles the right truck and loaders automatically.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-9">
              <div className="bg-white border border-border rounded-2xl p-5">
                <div className="inline-flex items-center gap-1.5 text-brand-ink text-xs font-semibold uppercase tracking-wide mb-3">
                  <Truck className="w-4 h-4" /> Transport
                </div>
                <p className="text-sm text-ink-soft leading-relaxed">Van, Mini Truck, Pickup, Car Rescue, 5T &amp; 10T Lorry — pick exactly what you need.</p>
              </div>
              <div className="bg-white border border-border rounded-2xl p-5">
                <div className="inline-flex items-center gap-1.5 text-brand-ink text-xs font-semibold uppercase tracking-wide mb-3">
                  <HomeIcon className="w-4 h-4" /> Moving packages
                </div>
                <p className="text-sm text-ink-soft leading-relaxed">Studio to 5+ bedroom, each bundled with the right truck and loaders.</p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-9 max-w-md">
              {[
                { Icon: Banknote, t: "Upfront pricing" },
                { Icon: Navigation, t: "Live driver tracking" },
                { Icon: CalendarClock, t: "Schedule ahead" },
                { Icon: Wallet, t: "M-Pesa or cash" },
              ].map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-brand-ink flex-shrink-0" />
                  <span className="text-sm font-medium text-ink">{t}</span>
                </li>
              ))}
            </ul>

            <StoreButtons />
          </Reveal>

          <Reveal className="order-1 lg:order-2 relative flex justify-center" delay={100}>
            <div
              className="absolute inset-0 -z-0 m-auto"
              style={{
                width: "85%", height: "85%",
                background: "radial-gradient(circle, rgba(0,200,83,0.14) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <Image
              src={phones}
              alt="The Swyft Move tab — vehicle selection and live booking"
              className="relative w-full max-w-md h-auto"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Section 6 · Become a Scout ───────────────────────────────────── */}
      <section className="w-full px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-2 bg-white border border-border rounded-[32px] overflow-hidden shadow-soft">
              <div className="relative h-64 md:h-auto min-h-[280px] order-1 md:order-2">
                <Image
                  src={scoutImg}
                  alt="A Swyft Scout filming a property tour"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur rounded-full pl-2 pr-3 py-1 shadow-soft">
                  <Video className="w-3.5 h-3.5 text-brand" />
                  <span className="text-[11px] font-semibold text-ink">Up to 90 sec</span>
                </div>
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1">
                <Eyebrow>Become a Scout</Eyebrow>
                <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.02em] text-ink mb-4">
                  Get paid to film the city.
                </h3>
                <p className="text-ink-soft leading-relaxed mb-6 max-w-sm">
                  Scouts are verified locals who film short property tours for
                  the feed. Upload, get approved, and earn — keeping 90% of every
                  viewing fee, withdrawn to M-Pesa.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    { Icon: Upload, t: "Earn per approved upload" },
                    { Icon: Wallet, t: "Keep 90% of every viewing fee" },
                    { Icon: BadgeCheck, t: "Get KYC-verified for trust" },
                  ].map(({ Icon, t }) => (
                    <li key={t} className="flex items-center gap-2.5 text-ink">
                      <Icon className="w-4 h-4 text-brand-ink flex-shrink-0" />
                      <span className="text-[15px]">{t}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className="btn-green inline-flex w-fit items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Start scouting in the app <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 7 · Drivers ──────────────────────────────────────────── */}
      <section className="w-full py-24 sm:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="flex gap-4">
            <Image
              src={driver1}
              alt="A Swyft driver ready for a move"
              className="w-1/2 h-72 sm:h-80 object-cover rounded-3xl"
            />
            <Image
              src={driver2}
              alt="A Swyft driver on the road"
              className="w-1/2 h-72 sm:h-80 object-cover rounded-3xl mt-10"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Drive with Swyft</Eyebrow>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] text-ink mb-5">
              Go online.<br />Get paid.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
              Join our network of verified drivers. Flip yourself online, accept
              moves near you, and get paid — managing your earnings right in the app.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-9 max-w-md">
              {[
                { Icon: Sparkles, label: "Competitive pay" },
                { Icon: MapPin, label: "Jobs near you" },
                { Icon: ShieldCheck, label: "Verified & secure" },
                { Icon: Wallet, label: "M-Pesa payouts" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-mint border border-border rounded-2xl px-4 py-3">
                  <Icon className="w-4 h-4 text-brand-ink flex-shrink-0" />
                  <span className="text-sm font-medium text-ink">{label}</span>
                </div>
              ))}
            </div>
            <a
              href={DRIVER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Apply to drive <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Section 8 · Swyft for Business ───────────────────────────────── */}
      <section className="w-full pb-24 sm:pb-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto bg-ink text-white rounded-[32px] px-6 sm:px-12 py-14 sm:py-16 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -z-0"
            style={{
              width: 480, height: 480, top: -160, right: -120,
              background: "radial-gradient(circle, rgba(0,200,83,0.22) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
            aria-hidden="true"
          />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400 mb-4">Swyft for Business</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
                Stop calling brokers.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-7 max-w-md">
                Book verified trucks with live GPS tracking, manage every
                delivery in one dashboard, and get monthly KRA-compliant
                invoices — from KES 4,500 a trip, with no fixed fleet costs.
              </p>
              <a
                href={BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-7 py-3.5 rounded-full cursor-pointer transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Explore Swyft for Business <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>

            <Reveal delay={100} className="grid grid-cols-2 gap-3">
              {[
                { Icon: Truck, t: "Verified trucks", d: "Van to 10T lorry, on demand" },
                { Icon: Navigation, t: "Live GPS", d: "Track every trip in real time" },
                { Icon: Receipt, t: "KRA-compliant", d: "ETR receipts, every invoice" },
                { Icon: FileText, t: "One dashboard", d: "Bookings, spend & billing" },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <Icon className="w-5 h-5 text-brand-400 mb-3" />
                  <p className="font-semibold text-sm">{t}</p>
                  <p className="text-white/50 text-[13px] leading-snug mt-0.5">{d}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ (AEO — answers AI engines can cite) ──────────────────────── */}
      <section className="w-full pb-24 sm:pb-28 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <Eyebrow>Questions, answered</Eyebrow>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] text-ink">
              Finding a home &amp; moving in Nairobi
            </h2>
          </Reveal>

          <div className="border-t border-border">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex justify-between items-center w-full text-left py-5 gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm group"
                    aria-expanded={open}
                  >
                    <span className="font-display font-semibold text-lg text-ink group-hover:text-brand-ink transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-mint flex items-center justify-center transition-transform duration-200"
                      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <ChevronDown className="h-4 w-4 text-ink-soft" />
                    </span>
                  </button>
                  {open && (
                    <p className="pb-6 pr-10 text-ink-soft leading-relaxed animate-accordion-down">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 9 · Final CTA ────────────────────────────────────────── */}
      <section id="download" className="w-full px-5 sm:px-6 pb-24 sm:pb-28 scroll-mt-20">
        <div
          className="max-w-6xl mx-auto rounded-[36px] px-6 sm:px-12 py-20 sm:py-28 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #00C853 0%, #00A846 55%, #057A3A 100%)" }}
        >
          <div className="dot-grid absolute inset-0 opacity-[0.15]" aria-hidden="true" />
          <Reveal className="relative">
            <h2 className="font-display font-extrabold text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] tracking-[-0.03em] text-white mb-5">
              Ready to find a home<br />and move in?
            </h2>
            <p className="text-white/85 text-lg leading-relaxed max-w-md mx-auto mb-10">
              Swipe verified homes, unlock the details, and book a trusted
              mover — all from one app.
            </p>
            <div className="flex justify-center">
              <StoreButtons />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="w-full border-t border-border bg-white px-5 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="max-w-xs">
              <Image src={swyft} alt="Swyft" className="h-7 w-auto mb-4" />
              <p className="text-ink-soft text-sm leading-relaxed">
                Find a home and move into it — all in one app. A video feed of
                verified homes, trusted movers, across Nairobi.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 text-sm">
              <div>
                <p className="text-ink font-semibold mb-4">Product</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Download App", href: "#download", external: false },
                    { label: "Find Housing", href: FIND_HOUSING_URL, external: true },
                    { label: "Swyft for Business", href: BUSINESS_URL, external: true },
                    { label: "Drive with Swyft", href: DRIVER_URL, external: true },
                  ].map(({ label, href, external }) =>
                    external ? (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className="text-ink-soft hover:text-ink transition-colors cursor-pointer">{label}</a>
                    ) : (
                      <a key={label} href={href} className="text-ink-soft hover:text-ink transition-colors cursor-pointer">{label}</a>
                    )
                  )}
                </div>
              </div>
              <div>
                <p className="text-ink font-semibold mb-4">Company</p>
                <div className="flex flex-col gap-3">
                  <Link href="/terms" className="text-ink-soft hover:text-ink transition-colors cursor-pointer">Terms &amp; Conditions</Link>
                  <Link href="/privacy" className="text-ink-soft hover:text-ink transition-colors cursor-pointer">Privacy Policy</Link>
                  <Link href="/delete-account" className="text-ink-soft hover:text-ink transition-colors cursor-pointer">Delete Account</Link>
                </div>
              </div>
              <div>
                <p className="text-ink font-semibold mb-4">Contact</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:0796652112" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink transition-colors cursor-pointer">
                    <Phone className="w-3.5 h-3.5" /> 0796 652 112
                  </a>
                  <a href="mailto:support@swyft.africa" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink transition-colors cursor-pointer">
                    <Mail className="w-3.5 h-3.5" /> Email us
                  </a>
                  <a
                    href="https://www.instagram.com/_.swyft._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-ink transition-colors cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
            <p className="text-ink-soft text-xs">© {new Date().getFullYear()} Barak Labs LTD. All rights reserved.</p>
            <div className="flex items-center gap-2 opacity-50">
              <Image src={barakLogoWord} alt="Barak Labs" className="h-4 w-auto" />
              <Image src={barakLogo} alt="" className="h-6 w-auto" aria-hidden="true" />
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
