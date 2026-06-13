import type { Metadata } from "next";
import LegalShell, { Section } from "../../components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Terms & Conditions — Swyft",
  description: "The terms and conditions governing your use of Swyft.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      updated="13 June 2026"
      intro="These Terms & Conditions govern your access to and use of the Swyft app, website, and services operated by Barak Labs LTD. By creating an account or using Swyft, you agree to these terms."
    >
      <Section heading="1. About Swyft">
        <p>
          Swyft is a platform operated by Barak Labs LTD (&quot;Swyft&quot;,
          &quot;we&quot;, &quot;us&quot;) that connects people looking for housing
          and moving services with verified property agents and independent
          drivers across Kenya. Swyft provides the technology that connects
          users; it does not own the properties listed or operate the vehicles
          used for moves.
        </p>
      </Section>

      <Section heading="2. Eligibility & accounts">
        <p>
          You must be at least 18 years old to use Swyft. You are responsible for
          keeping your account credentials secure and for all activity that
          happens under your account. You agree to provide accurate, current
          information and to keep it up to date.
        </p>
      </Section>

      <Section heading="3. Housing listings">
        <ul>
          <li>
            Listings are posted by verified Swyft Agents. While we verify agents,
            we do not guarantee the accuracy, availability, or condition of any
            individual property.
          </li>
          <li>
            You are responsible for inspecting a property and confirming all
            details directly with the agent before making any payment or
            commitment.
          </li>
          <li>
            Swyft is not a party to any rental or tenancy agreement entered into
            between you and a landlord or agent.
          </li>
        </ul>
      </Section>

      <Section heading="4. Moving & delivery services">
        <ul>
          <li>
            Moves are carried out by independent drivers. Prices shown in the app
            are estimates and may change based on distance, vehicle type, waiting
            time, and the items being moved.
          </li>
          <li>
            You agree not to transport illegal, hazardous, or prohibited items.
            You are responsible for accurately describing the items to be moved.
          </li>
          <li>
            Swyft will use reasonable efforts to connect you with reliable
            drivers but is not liable for delays, loss, or damage caused by a
            driver, except as required by applicable law.
          </li>
        </ul>
      </Section>

      <Section heading="5. Payments">
        <p>
          Payment for services is made through the methods made available in the
          app. You agree to pay all charges associated with your bookings.
          Refunds, where applicable, are handled according to our cancellation
          and refund guidelines communicated at the time of booking.
        </p>
      </Section>

      <Section heading="6. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>Use Swyft for any unlawful or fraudulent purpose;</li>
          <li>Post false, misleading, or scam listings;</li>
          <li>Harass, threaten, or harm other users, agents, or drivers;</li>
          <li>Attempt to interfere with, disrupt, or reverse-engineer the platform.</li>
        </ul>
        <p>
          We may suspend or terminate accounts that violate these terms.
        </p>
      </Section>

      <Section heading="7. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Swyft and Barak Labs LTD are
          not liable for any indirect, incidental, or consequential damages
          arising from your use of the platform or from interactions with agents,
          landlords, or drivers. Our total liability for any claim is limited to
          the amount you paid to Swyft for the relevant service.
        </p>
      </Section>

      <Section heading="8. Changes to these terms">
        <p>
          We may update these terms from time to time. We will post the updated
          version here with a new &quot;last updated&quot; date. Continued use of
          Swyft after changes take effect constitutes acceptance of the revised
          terms.
        </p>
      </Section>

      <Section heading="9. Governing law">
        <p>
          These terms are governed by the laws of the Republic of Kenya. Any
          disputes will be subject to the exclusive jurisdiction of the Kenyan
          courts.
        </p>
      </Section>

      <Section heading="10. Contact">
        <p>
          For any questions about these terms, contact us at{" "}
          <a href="mailto:support@swyft.africa">support@swyft.africa</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
