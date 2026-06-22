import type { Metadata } from "next"
import Link from "next/link"
import { fetchListing, muxPosterUrl } from "../../../lib/convex"
import { SITE_URL } from "../../../lib/seo"
import { ListingPlayer } from "./ListingPlayer"

type Params = { id: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { id } = await params
  const listing = await fetchListing(id)
  if (!listing) {
    return { title: "Listing not found — Swyft" }
  }

  const price = listing.forSale && listing.salePrice
    ? `KES ${listing.salePrice.toLocaleString()}`
    : `KES ${listing.rent.toLocaleString()}/month`
  const title = `${listing.title} — ${price} | Swyft`
  const description = `${listing.beds === 0 ? "Studio" : `${listing.beds}-bed`} ${listing.type} in ${listing.city}. Watch the tour and unlock the details on Swyft.`
  const image = listing.muxPlaybackId ? muxPosterUrl(listing.muxPlaybackId) : undefined
  const url = `${SITE_URL}/listing/${listing.id}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "video.other",
      images: image ? [{ url: image, width: 720, height: 1280 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default async function ListingPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { id } = await params
  const listing = await fetchListing(id)

  if (!listing) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <img src="/logo-white-border.png" alt="Swyft" className="h-14 w-14" />
        <h1 className="text-xl font-semibold text-neutral-900">Listing not found</h1>
        <p className="max-w-sm text-neutral-500">
          This property may have been taken down or the link is incorrect.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full px-6 py-3 font-semibold text-white"
          style={{ backgroundColor: "#1CD760" }}
        >
          Explore Swyft
        </Link>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4 py-10">
      <ListingPlayer listing={listing} playbackId={listing.muxPlaybackId} />
    </main>
  )
}
