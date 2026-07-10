import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms of Use | HF Daily",
  description: "HF Daily Terms of Use.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <article className="legal-document">
        <h1>Terms of Use</h1>

        <p className="legal-meta">
          {`HF Daily, Inc.\nEffective date: July 6, 2026`}
        </p>

        <section className="legal-section">
          <h2>1. Acceptance of These Terms</h2>
          <p>
            These Terms of Use (&quot;Terms&quot;) are an agreement between you
            and HF Daily, Inc. (&quot;HF Daily,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), an Illinois corporation. They
            govern your use of the HF Daily mobile application (the
            &quot;App&quot;) and our website at hf-daily.com (the
            &quot;Website,&quot; and together with the App, the
            &quot;Services&quot;). By using the Services, you agree to these
            Terms. If you do not agree, do not use the Services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. About HF Daily</h2>
          <p>
            HF Daily is a heart failure self-management and symptom-tracking
            application. You can record your weight, blood pressure, symptom
            check-in responses, care-team contact information, reminder
            preferences, and check-in history. A short daily check-in asks how
            your breathlessness, difficulty breathing while lying down, and
            swelling compare to your usual condition. Based on predetermined
            rules, the App displays one of three general results: continue your
            usual plan, watch and recheck, or consider contacting your care team.
          </p>
          <p>
            The App is designed to help you keep track of your own information
            and support conversations with your own care team. The App does not
            currently use accounts, logins, or passwords, and there are no
            payments or subscriptions. Information you enter in the App is
            stored locally on your device. HF Daily does not currently receive,
            access, transmit, or remotely store that information unless you
            choose to send it to us, for example in a screenshot, email,
            recording, or support message. Device or operating-system backups may
            operate according to your device settings, as described in our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Not Medical Advice; Not for Emergencies</h2>
          <p>This section is important. Please read it carefully.</p>
          <p>
            HF Daily provides general self-management and record-keeping support.
            HF Daily does not provide medical advice, diagnosis, treatment, or
            emergency response, and does not prescribe medication or changes to
            medication. The Services are not a substitute for professional
            medical advice or for your existing care plan.
          </p>
          <p>
            No clinician or HF Daily personnel routinely monitors your entries
            through the App. The App does not automatically contact your doctor,
            nurse, caregiver, emergency services, or anyone else.
          </p>
          <p>
            The App&apos;s results are based only on the information you enter
            and on predetermined rules. Results may be unavailable, delayed,
            incomplete, inaccurate, or wrong. The App may fail to identify
            worsening symptoms or deterioration, and it may display a result that
            is not appropriate for your actual medical condition. Do not rely on
            the App as your sole basis for medical decisions, and do not ignore
            symptoms, delay seeking medical care, or disregard professional
            medical advice because of anything shown in the App.
          </p>
          <p>
            Follow your existing care plan and the instructions of your
            healthcare professionals. Contact your healthcare provider with
            medical questions or concerns. If you think you may be experiencing
            a medical emergency, call 911 or your local emergency number, or
            seek urgent medical help immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Your Responsibilities</h2>
          <p>When using the Services, you are responsible for:</p>
          <ul>
            <li>entering accurate and complete information;</li>
            <li>
              deciding whether and how to act on the App&apos;s general prompts;
            </li>
            <li>contacting your care team when appropriate;</li>
            <li>seeking emergency care when appropriate;</li>
            <li>following your existing medical care plan;</li>
            <li>maintaining the security of your own device; and</li>
            <li>
              not using the App as your sole source of medical decision-making.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Age Requirement</h2>
          <p>
            You must be at least 18 years old to use the Services. By using the
            App or the Website, you represent that you are at least 18. HF Daily
            does not knowingly allow minors to use the Services.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Privacy</h2>
          <p>
            Our <Link href="/privacy">Privacy Policy</Link> explains how HF Daily
            handles information in connection with the App and the Website. The
            Privacy Policy is available at hf-daily.com/privacy and is
            incorporated into these Terms by reference where appropriate. Please
            review it.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. License and Intellectual Property</h2>
          <p>
            HF Daily grants you a limited, personal, non-exclusive,
            non-transferable, revocable license to use the Services for personal,
            non-commercial purposes in accordance with these Terms.
          </p>
          <p>
            The Services, including their text, graphics, logos, images,
            software, design, and other content, are the property of HF Daily or
            its licensors and are protected by copyright, trademark, and other
            intellectual property laws. Except for the limited license above,
            these Terms do not grant you any rights in the Services or their
            content. You may not copy, modify, distribute, sell, or create
            derivative works from the Services or their content without our
            written permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>use the Services unlawfully or in violation of these Terms;</li>
            <li>interfere with or disrupt the Services;</li>
            <li>
              attempt to reverse engineer or access the source code of the App,
              except where the law permits this notwithstanding these Terms;
            </li>
            <li>misuse the Services or use them to harm others; or</li>
            <li>
              submit false, harmful, infringing, or unlawful content to HF Daily.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>9. Communications</h2>
          <p>
            HF Daily may communicate with you by email, through the App, or
            through the Website for operational purposes, such as onboarding,
            support, surveys, feedback, notices, and changes to these Terms. You
            agree that these electronic communications satisfy any legal
            requirement that communications be in writing.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Third-Party Links and Services</h2>
          <p>
            If the App or the Website contains links to third-party websites or
            resources, those third parties are not under HF Daily&apos;s control,
            and HF Daily is not responsible for their content or services. Any use
            of third-party services is at your own risk and may be subject to
            their own terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Changes to the Services</h2>
          <p>
            HF Daily may change, add, or remove features of the Services over
            time and may introduce new features or services. Additional terms may
            apply to new features. HF Daily may also suspend or discontinue all
            or part of the Services.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Disclaimer of Warranties</h2>
          <p>
            The Services are provided &quot;as is&quot; and &quot;as
            available.&quot;
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HF DAILY DISCLAIMS
            ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF ACCURACY,
            RELIABILITY, AVAILABILITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, NON-INFRINGEMENT, UNINTERRUPTED OR ERROR-FREE OPERATION,
            AND SUITABILITY FOR ANY MEDICAL OR HEALTH-RELATED PURPOSE.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties,
            so some of the above exclusions may not apply to you.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HF DAILY AND ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
            PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, USE, OR GOODWILL, ARISING
            OUT OF OR RELATING TO THE SERVICES.
          </p>
          <p>
            This applies to claims arising from: your use of or inability to use
            the Services; reliance on App results; incorrect, incomplete,
            delayed, or missing results; errors or omissions in information you
            enter; any failure of the App to identify potential deterioration;
            any failure to contact a healthcare provider or emergency services;
            data loss; device issues; service interruptions; unauthorized access
            not caused by HF Daily&apos;s own misconduct; support
            communications; and third-party services.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HF DAILY&apos;S
            TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SERVICES
            WILL NOT EXCEED THE GREATER OF THE AMOUNTS YOU PAID HF DAILY FOR THE
            SERVICES IN THE 12 MONTHS BEFORE THE CLAIM AROSE OR $100.
          </p>
          <p>
            Some jurisdictions do not allow the limitation or exclusion of
            certain damages, so some of the above limitations may not apply to
            you. Nothing in these Terms limits liability for gross negligence,
            willful misconduct, or any liability that cannot be limited under
            applicable law.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless HF Daily and its officers,
            directors, employees, and agents from claims, losses, and expenses
            (including reasonable attorneys&apos; fees) arising from your misuse
            of the Services, your violation of these Terms or applicable law,
            your infringement or misuse of third-party rights, or information you
            voluntarily submit to HF Daily.
          </p>
        </section>

        <section className="legal-section">
          <h2>15. Termination</h2>
          <p>
            You may stop using the Services at any time. HF Daily may suspend or
            terminate your access to the Services if you violate these Terms, if
            misuse is suspected, or if the Services are discontinued. Sections of
            these Terms that by their nature should survive termination will
            survive, including the disclaimers, limitation of liability,
            indemnification, and governing law provisions.
          </p>
        </section>

        <section className="legal-section">
          <h2>16. Governing Law and Disputes</h2>
          <p>
            These Terms are governed by the laws of the State of Illinois,
            without regard to its conflict-of-law rules. To the extent permitted
            by applicable law, any dispute arising out of or relating to these
            Terms or the Services will be brought exclusively in the state or
            federal courts located in Cook County, Illinois, and you consent to
            the jurisdiction and venue of those courts. Nothing in this section
            limits any rights you may have under applicable consumer protection
            laws.
          </p>
        </section>

        <section className="legal-section">
          <h2>17. Changes to These Terms</h2>
          <p>
            HF Daily may update these Terms from time to time, for example to
            reflect changes to the Services, our practices, or the law. When we
            update these Terms, we will update the effective date at the top. For
            material changes, we will provide notice through the App, the
            Website, or by email where appropriate. If you continue to use the
            Services after updated Terms take effect and after we have provided
            notice of material changes, the updated Terms will apply.
          </p>
        </section>

        <section className="legal-section">
          <h2>18. Miscellaneous</h2>
          <p>
            If any provision of these Terms is found invalid or unenforceable,
            that provision will be enforced to the maximum extent permitted, and
            the remaining provisions will remain in effect. These Terms,
            together with the Privacy Policy, are the entire agreement between
            you and HF Daily regarding the Services. HF Daily&apos;s failure to
            enforce a provision is not a waiver of it. These Terms do not create
            any joint venture, partnership, employment, or agency relationship
            between you and HF Daily.
          </p>
        </section>

        <section className="legal-section">
          <h2>19. Contact Us</h2>
          <p>
            If you have questions or comments about these Terms, please contact
            us at:
          </p>
          <p>
            HF Daily, Inc.
            <br />
            Chicago, Illinois
            <br />
            Email: <a href="mailto:will@hf-daily.com">will@hf-daily.com</a>
          </p>
        </section>
      </article>
    </main>
  );
}
