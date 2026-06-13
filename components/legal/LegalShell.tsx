import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import swyft from "../../public/swyft-logo.png";

export default function LegalShell({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-ink">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <Image src={swyft} alt="Swyft" className="h-7 w-auto" priority />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
        </div>
      </header>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink mb-4">
          Legal
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] mb-3">
          {title}
        </h1>
        <p className="text-sm text-ink-soft mb-8">Last updated · {updated}</p>
        <p className="text-lg text-ink-soft leading-relaxed mb-12">{intro}</p>

        <div className="legal-body space-y-10">{children}</div>

        <div className="mt-16 pt-8 border-t border-border text-sm text-ink-soft">
          Questions about this policy? Email{" "}
          <a
            href="mailto:support@swyft.africa"
            className="text-brand-ink font-semibold hover:underline cursor-pointer"
          >
            support@swyft.africa
          </a>
          .
        </div>
      </article>
    </main>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display font-semibold text-2xl tracking-[-0.01em] mb-3">
        {heading}
      </h2>
      <div className="text-ink-soft leading-relaxed space-y-3 [&_a]:text-brand-ink [&_a]:font-medium [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:marker:text-brand">
        {children}
      </div>
    </section>
  );
}
