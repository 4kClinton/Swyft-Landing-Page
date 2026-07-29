// Android App Links verification file. Served at
// https://www.swyft.africa/.well-known/assetlinks.json (and the apex domain).
//
// The fingerprints below are the app's public signing-certificate SHA-256s
// (Play app-signing + upload cert, from Play Console → App integrity → App
// signing). They are not secret — they're embedded in every signed APK — so
// they're committed as the default. ANDROID_SHA256 (comma-separated) can still
// override them if the signing certs ever change.
export const dynamic = "force-static"

const DEFAULT_FINGERPRINTS = [
  "80:3A:AC:F0:25:CD:B9:D6:7F:22:FF:03:7F:89:04:B3:0F:C1:89:DA:05:D5:2C:95:62:F6:FF:FC:12:B5:5C:A3",
  "3B:25:42:65:72:29:2E:36:87:FB:E5:21:FE:30:43:4A:1A:AF:AB:C1:08:4E:72:51:A2:28:3F:85:57:D7:60:C5",
].join(",")

const FINGERPRINTS = (process.env.ANDROID_SHA256 || DEFAULT_FINGERPRINTS)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)

export function GET() {
  const body = [
    {
      relation: [
        "delegate_permission/common.handle_all_urls",
        "delegate_permission/common.get_login_creds",
      ],
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
