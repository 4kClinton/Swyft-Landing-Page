// iOS Universal Links association file. Served at
// https://www.swyft.africa/.well-known/apple-app-site-association
// Must be valid JSON, no extension, content-type application/json.
//
// Set APPLE_TEAM_ID in the environment (find it in the Apple Developer portal,
// or run `eas credentials` → iOS). The appID is "<TEAM_ID>.<bundleIdentifier>"
// and the bundle id is com.swyft.africa (see app.config.js).
export const dynamic = "force-static"

const APPLE_TEAM_ID = process.env.APPLE_TEAM_ID ?? "REPLACE_WITH_APPLE_TEAM_ID"

export function GET() {
  const body = {
    applinks: {
      apps: [],
      details: [
        {
          appID: `${APPLE_TEAM_ID}.com.swyft.africa`,
          // /listing/* — shared listings; /scout/* — invite-only agent onboarding
          // deep link (account-page card stays hidden in prod). Android side lives
          // in swyft-customer app.config.js intentFilters.
          paths: ["/listing/*", "/scout/*"],
        },
      ],
    },
  }
  return new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json" },
  })
}
