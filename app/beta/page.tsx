import type { Metadata } from "next";
import "./beta.css";

export const metadata: Metadata = {
  title: "Beta testing | HF Daily",
  description: "Sign up to join the HF Daily beta testing program.",
};

export default function BetaPage() {
  return (
    <main className="beta-page">
      <div className="beta-section">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfJ9nACndQX_Dia5oPuSxbYb3OcyzUBB2O6M259FWNyPSTlcw/viewform?embedded=true"
          width="640"
          height="3621"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="HF Daily Beta Testing sign-up form"
          className="beta-form"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}
