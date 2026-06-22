// Thin server-side Convex reader for the shared listing page. The customer app
// owns the Convex backend; here we only need one paywall-safe public query, so
// we reference it by name instead of importing generated types.
import { ConvexHttpClient } from "convex/browser"
import { makeFunctionReference } from "convex/server"

// Defaults to the production deployment (find-a-house project). Override with
// NEXT_PUBLIC_CONVEX_URL to point at dev while testing.
export const CONVEX_URL =
  process.env.NEXT_PUBLIC_CONVEX_URL ??
  "https://flippant-turtle-913.eu-west-1.convex.cloud"

export interface PublicListing {
  id: string
  title: string
  city: string
  state: string
  rent: number
  beds: number
  baths: number
  type: string
  category: string
  forSale: boolean
  salePrice?: number
  availabilityStatus: string
  muxPlaybackId: string | null
}

const getPublicListing = makeFunctionReference<
  "query",
  { reelId: string },
  PublicListing | null
>("reels:getPublicListing")

export async function fetchListing(reelId: string): Promise<PublicListing | null> {
  try {
    const client = new ConvexHttpClient(CONVEX_URL)
    return await client.query(getPublicListing, { reelId })
  } catch {
    // Bad/expired id, network error, or query not yet deployed → render not-found.
    return null
  }
}

// Mux delivery URLs (playback ids are public on the basic tier).
export const muxStreamUrl = (playbackId: string) =>
  `https://stream.mux.com/${playbackId}.m3u8`
export const muxPosterUrl = (playbackId: string) =>
  `https://image.mux.com/${playbackId}/thumbnail.jpg?time=1`
