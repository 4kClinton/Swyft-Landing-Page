// Android App Links verification file. Served at
// https://www.swyft.africa/.well-known/assetlinks.json
//
// Set ANDROID_SHA256 in the environment — the app signing certificate's SHA-256
// fingerprint (colon-separated hex). Get it with `eas credentials` → Android, or
// from the Play Console (App integrity → App signing). Multiple fingerprints
// (e.g. upload + Play app-signing) can be comma-separated in the env var.
export const dynamic = "force-static"

const FINGERPRINTS = (process.env.ANDROID_SHA256 ?? "REPLACE_WITH_ANDROID_SHA256")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)

export function GET() {
  const body = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.swyft.africa",
        sha256_cert_fingerprints: FINGERPRINTS,
      },
    },
  ]
  return new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json" },
  })
}
