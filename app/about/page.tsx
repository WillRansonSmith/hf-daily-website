import type { Metadata } from "next";
import "./about.css";

export const metadata: Metadata = {
  title: "Learn More | HF Daily",
  description:
    "Learn how HF Daily helps people with heart failure track symptoms, weight, and daily changes over time.",
};

export default function AboutPage() {
  return (
    <main className="about-page page-fit-viewport">
      <div className="goal-section">
        <h2>HF Daily&apos;s Goal</h2>

        <p>
          Living with heart failure can mean keeping track of symptoms, weight,
          and daily changes over time. HF Daily was created to make that routine
          simpler. Each day, the app guides people through a quick check-in
          about how they are feeling, with the option to add weight and blood
          pressure. It then shows a simple next step to help them think through
          whether it may be worth speaking with their care team. HF Daily is
          meant to support consistency, confidence, and clearer conversations.
          It does not replace medical advice or real-time care from a healthcare
          professional.
        </p>
      </div>
    </main>
  );
}
