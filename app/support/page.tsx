import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";
import "./support.css";

export const metadata: Metadata = {
  title: "Support | HF Daily",
  description: "Get help with HF Daily or share feedback with our team.",
};

export default function SupportPage() {
  return (
    <main className="legal-page support-page">
      <article className="legal-document support-document">
        <section className="legal-section">
          <h1 className="support-heading">Need help with HF Daily?</h1>
          <p>
            HF Daily is an early-stage app. If you have questions, feedback, or
            need help using the app, please contact us.
          </p>
          <p>
            For questions, feedback, or help using HF Daily, email us at{" "}
            <a href="mailto:will@hf-daily.com">will@hf-daily.com</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Medical or urgent issues</h2>
          <p>
            HF Daily is not medical advice, emergency support, or a replacement
            for instructions from your doctor or care team.
          </p>
          <p>
            If you have severe trouble breathing, chest pain, fainting, or feel
            that you need urgent help, call 911.
          </p>
        </section>

        <section className="legal-section">
          <h2>Privacy and support</h2>
          <p>
            Please do not email sensitive medical information, medication
            details, or urgent health concerns. HF Daily support cannot provide
            medical advice.
          </p>
          <p>
            <Link href="/">Back to HF Daily home</Link>
          </p>
        </section>
      </article>
    </main>
  );
}
