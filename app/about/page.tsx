import type { Metadata } from "next";
import "./about.css";

export const metadata: Metadata = {
  title: "How it works | HF Daily",
  description:
    "See how HF Daily’s daily check-in works — from setup to your recommended next step.",
};

const steps = [
  {
    title: "Set up your check-in",
    body: "Add your basic details, optional care team or caregiver contacts, and choose whether you want a daily reminder.",
  },
  {
    title: "Complete a daily check-in",
    body: "Enter your weight, answer a few symptom questions, and add blood pressure if you want to track it.",
  },
  {
    title: "HF Daily checks for changes",
    body: "HF Daily compares today's inputs with recent check-ins and looks for changes that may need attention.",
  },
  {
    title: "See your recommended next step",
    body: "Get a simple result: continue your usual plan, watch and recheck, or consider speaking with your care team.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="about-page page-fit-viewport">
      <div className="how-it-works">
        <section className="how-layout" aria-label="How HF Daily works">
          <div className="how-main-row">
            <h1 className="how-heading">How it works</h1>

            <ol className="step-list">
              {steps.map((step, index) => (
                <li key={step.title} className="step-card">
                  <p className="step-label">Step {index + 1}</p>
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-body">{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="how-screenshot" aria-hidden="true">
              <div className="how-screenshot-frame">
                <span className="how-screenshot-label">App screenshot</span>
              </div>
            </div>
          </div>

          <aside className="how-disclaimer">
            <p className="how-disclaimer-lead">HF Daily is not medical care.</p>
            <p>
              HF Daily does not replace your care team&apos;s advice, monitor you in
              real time, or contact emergency services. If this may be an
              emergency, call 911.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
