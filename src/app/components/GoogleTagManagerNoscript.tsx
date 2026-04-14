/**
 * GTM <noscript> fallback.
 *
 * The @next/third-parties GoogleTagManager component injects the <head>
 * script automatically, but it does NOT render the <noscript> iframe.
 * This component adds the <noscript> tag immediately after <body> as
 * recommended by Google's GTM installation guide.
 */
export default function GoogleTagManagerNoscript({
  gtmId,
}: {
  gtmId: string;
}) {
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
