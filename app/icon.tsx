import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// The HF Daily mark asset is white on a transparent background, so used directly
// it disappears against light-mode browser tabs. Compositing that exact mark onto
// the brand teal produces a favicon that stays visible in both light and dark
// browser chrome — without altering or redesigning the logo itself.
export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const markDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/hf-daily-favicon.png"),
).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#13565d",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUri} width={46} height={46} alt="" />
      </div>
    ),
    { ...size },
  );
}
