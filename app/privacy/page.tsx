import type { Metadata } from "next";
import LegalShell, { Section } from "../../components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Swyft",
  description: "How Swyft collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="13 June 2026"
      intro="This Privacy Policy explains how Barak Labs LTD collects, uses, and protects your personal data when you use Swyft. We are committed to handling your information responsibly and in line with Kenya's Data Protection Act, 2019."
    >
      <Section heading="1. Information we collect">
        <ul>
          <li>
            <strong className="text-ink">Account details</strong> — your name,
            phone number, email address, and password.
          </li>
          <li>
            <strong className="text-ink">Location data</strong> — pickup and
            drop-off locations, and live location during an active move (with
            your permission).
          </li>
          <li>
            <strong className="text-ink">Usage data</strong> — listings you view
            or save, bookings you make, and how you interact with the app.
          </li>
          <li>
            <strong className="text-ink">Payment information</strong> — processed
            securely through our payment partners. We do not store full payment
            card details.
          </li>
          <li>
            <strong className="text-ink">Device data</strong> — device type,
            operating system, and app version for diagnostics.
          </li>
        </ul>
      </Section>

      <Section heading="2. How we use your information">
        <ul>
          <li>To connect you with property agents and drivers;</li>
          <li>To process bookings, payments, and live tracking;</li>
          <li>To verify accounts and prevent fraud and scam listings;</li>
          <li>To improve the app and provide customer support;</li>
          <li>To send you service updates and, where you opt in, marketing.</li>
        </ul>
      </Section>

      <Section heading="3. How we share information">
        <p>We share information only as needed to provide the service:</p>
        <ul>
          <li>
            With <strong className="text-ink">drivers and agents</strong> — the
            details necessary to complete a move or housing enquiry (such as your
            name, contact, and locations).
          </li>
          <li>
            With <strong className="text-ink">service providers</strong> — such as
            payment processors and mapping providers, who are bound to protect
            your data.
          </li>
          <li>
            With <strong className="text-ink">authorities</strong> — where
            required by law or to protect the rights and safety of our users.
          </li>
        </ul>
        <p>We do not sell your personal data to third parties.</p>
      </Section>

      <Section heading="4. Location data">
        <p>
          Swyft uses your location to show nearby listings, calculate fares, and
          enable live tracking during a move. You can disable location access in
          your device settings, though some features may not work as a result.
        </p>
      </Section>

      <Section heading="5. Data retention">
        <p>
          We keep your personal data for as long as your account is active or as
          needed to provide our services, comply with legal obligations, resolve
          disputes, and enforce our agreements. You may request deletion of your
          account at any time.
        </p>
      </Section>

      <Section heading="6. Your rights">
        <p>Under the Data Protection Act, 2019, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you;</li>
          <li>Request correction of inaccurate data;</li>
          <li>Request deletion of your data;</li>
          <li>Object to or restrict certain processing;</li>
          <li>Withdraw consent for marketing at any time.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:support@swyft.africa">support@swyft.africa</a>.
        </p>
      </Section>

      <Section heading="7. Security">
        <p>
          We use technical and organisational measures — including encryption and
          access controls — to protect your data. No system is completely secure,
          but we work continuously to safeguard your information.
        </p>
      </Section>

      <Section heading="8. Children">
        <p>
          Swyft is not intended for anyone under 18. We do not knowingly collect
          personal data from children.
        </p>
      </Section>

      <Section heading="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The latest version will
          always be available here with an updated date.
        </p>
      </Section>

      <Section heading="10. Contact">
        <p>
          For privacy questions or requests, contact our team at{" "}
          <a href="mailto:support@swyft.africa">support@swyft.africa</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
