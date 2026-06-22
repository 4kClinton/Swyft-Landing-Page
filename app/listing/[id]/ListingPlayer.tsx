"use client"

import { useCallback } from "react"
import MuxPlayer from "@mux/mux-player-react"
import type { PublicListing } from "../../../lib/convex"

const BRAND = "#1CD760"
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.swyft.africa"
// TODO: replace with the real App Store listing once the iOS app is published.
const APP_STORE = "https://apps.apple.com/app/swyft/id0000000000"

export function ListingPlayer({
  listing,
  playbackId,
}: {
  listing: PublicListing
  playbackId: string | null
}) {
  const deepLink = `swyft://listing/${listing.id}`

  // Try the app first; if it isn't installed, nothing happens and the user
  // still has the store buttons below.
  const openApp = useCallback(() => {
    window.location.href = deepLink
  }, [deepLink])

  const priceLabel = listing.forSale && listing.salePrice
    ? `KES ${listing.salePrice.toLocaleString()}`
    : `KES ${listing.rent.toLocaleString()}/mo`

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
        {playbackId ? (
          <MuxPlayer
            playbackId={playbackId}
            streamType="on-demand"
            autoPlay="muted"
            loop
            accentColor={BRAND}
            style={{ height: "100%", width: "100%", "--controls": "none" } as React.CSSProperties}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/60">
            Video unavailable
          </div>
        )}

        {/* Watermark overlay — visible to anyone watching outside the app. */}
        <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
          <img src="/logo-white-border.png" alt="" className="h-6 w-6" />
          <span className="text-lg font-bold tracking-wide text-white">swyft</span>
        </div>

        {/* Bottom gradient + title/price */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
          <p className="text-base font-semibold text-white">{listing.title}</p>
          <p className="text-sm text-white/80">
            {priceLabel} · {listing.beds === 0 ? "Studio" : `${listing.beds} bed`} · {listing.type}
          </p>
        </div>
      </div>

      {/* Open-in-app CTA */}
      <button
        onClick={openApp}
        className="mt-5 flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-semibold text-white transition active:scale-[0.98]"
        style={{ backgroundColor: BRAND }}
      >
        Open in Swyft app
      </button>
      <p className="mt-3 text-center text-sm text-neutral-500">
        Don&apos;t have the app yet?
      </p>
      <div className="mt-2 flex items-center justify-center gap-3">
        <a
          href={PLAY_STORE}
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
        >
          Google Play
        </a>
        <a
          href={APP_STORE}
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
        >
          App Store
        </a>
      </div>
    </div>
  )
}
