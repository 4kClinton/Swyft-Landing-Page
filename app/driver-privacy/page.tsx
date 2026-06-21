import type { Metadata } from "next";
import LegalShell, { Section } from "../../components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Driver Privacy Policy — Swyft",
  description:
    "How Swyft collects, uses, shares, and protects the personal data of drivers who use the Swyft Driver app.",
};

export default function DriverPrivacyPage() {
  return (
    <LegalShell
      title="Driver Privacy Policy"
      updated="21 June 2026"
      intro="This Driver Privacy Policy explains what data the Swyft Driver app collects from drivers, why we collect it, who we share it with, and how we keep it safe. It applies to drivers who use the Swyft Driver app and complements our general Privacy Policy. It is written to comply with Kenya's Data Protection Act, 2019. Swyft is operated by Taleel Holdings LTD.."
    >
      <Section heading="1. Data we collect from drivers">
        <p>
          We collect the data needed to verify you, connect you with jobs, pay
          you, and keep the platform safe.
        </p>
        <ul>
          <li>
            <strong className="text-ink">Identity &amp; KYC</strong> — your
            name, date of birth, national ID, passport-style photo, driving
            licence, and any NTSA/PSV credentials required for the service you
            provide.
          </li>
          <li>
            <strong className="text-ink">Contact &amp; account info</strong> —
            phone number, email address, and your sign-in credentials.
          </li>
          <li>
            <strong className="text-ink">Vehicle &amp; document data</strong> —
            vehicle type, registration/number plate, logbook, insurance
            details, and photos of your vehicle and documents.
          </li>
          <li>
            <strong className="text-ink">Location</strong> — your precise
            location, collected continuously while you are online and available
            for jobs, including while the app runs in the background. This is
            used to match you with nearby jobs, calculate fares, and give the
            customer live tracking during a move.
          </li>
          <li>
            <strong className="text-ink">Financial &amp; payout info</strong> —
            your M-Pesa payout number, earnings, commission, and a record of
            each transaction. We do not store full payment card details.
          </li>
          <li>
            <strong className="text-ink">Job &amp; performance data</strong> —
            jobs offered, accepted, completed, and cancelled, distances and
            times, and the ratings and reviews customers leave for you.
          </li>
          <li>
            <strong className="text-ink">App, device &amp; diagnostics</strong>{" "}
            — device type, operating system, app version, a device identifier,
            push tokens, and crash logs used to keep the app stable and prevent
            fraud.
          </li>
        </ul>
      </Section>

      <Section heading="2. Background location — what you should know">
        <p>
          The Swyft Driver app collects your location{" "}
          <strong className="text-ink">
            in the background, even when the app is not open
          </strong>
          , but only while you are online and available to receive jobs. We use
          it to:
        </p>
        <ul>
          <li>Match you with the closest available jobs;</li>
          <li>Estimate fares and arrival times;</li>
          <li>Share your live location with the customer during an active job;</li>
          <li>Support safety, dispute resolution, and fraud prevention.</li>
        </ul>
        <p>
          Background location collection stops when you go offline. You can also
          revoke the location permission in your device settings at any time,
          but you will not be able to receive jobs while it is off. We do not
          sell your location data or use it for third-party advertising.
        </p>
      </Section>

      <Section heading="3. How we use your data">
        <ul>
          <li>To verify your identity, documents, and eligibility to drive;</li>
          <li>To match you with jobs and enable live tracking during a move;</li>
          <li>To calculate fares, commission, and process your payouts;</li>
          <li>To operate ratings and maintain safety and quality on the platform;</li>
          <li>To prevent fraud, investigate misuse, and resolve disputes;</li>
          <li>To provide support, keep the app stable, and meet legal obligations.</li>
        </ul>
      </Section>

      <Section heading="4. How we share your data">
        <p>We share driver data only as needed to run the service:</p>
        <ul>
          <li>
            With <strong className="text-ink">customers</strong> — the details
            needed for a job you accept, such as your name, photo, phone number,
            vehicle details, and your live location during the active job.
          </li>
          <li>
            With <strong className="text-ink">service providers</strong> — such
            as payment and payout processors (M-Pesa and partners), mapping
            providers, identity/KYC verification partners, and cloud and
            analytics providers, who are bound to protect your data and use it
            only on our instructions.
          </li>
          <li>
            With <strong className="text-ink">authorities</strong> — where
            required by law, or to protect the rights, property, and safety of
            our users, drivers, and the public.
          </li>
        </ul>
        <p>
          We do not sell your personal data, and we do not share it for
          third-party advertising.
        </p>
      </Section>

      <Section heading="5. Data retention">
        <p>
          We keep your driver data for as long as your account is active and as
          needed to provide our services. After your account is closed, we may
          retain certain records — such as KYC, transaction, and payout data —
          for the period required by Kenyan tax, financial, and transport law,
          and to resolve disputes or enforce our agreements. We delete or
          anonymise data that we are no longer required to keep.
        </p>
      </Section>

      <Section heading="6. Data security">
        <p>
          We use technical and organisational measures — including encryption of
          data in transit, access controls, and secure infrastructure — to
          protect your data, including your identity documents. No system is
          completely secure, but we work continuously to safeguard your
          information.
        </p>
      </Section>

      <Section heading="7. Your rights & deleting your data">
        <p>Under the Data Protection Act, 2019, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you;</li>
          <li>Request correction of inaccurate data;</li>
          <li>Request deletion of your account and data;</li>
          <li>Object to or restrict certain processing;</li>
          <li>Withdraw consent for marketing at any time.</li>
        </ul>
        <p>
          You can request account closure from within the app or via our{" "}
          <a href="/delete-account">account &amp; data deletion request page</a>.
          Some data must be retained where the law requires it (see Data
          retention above). We will action verified requests within a reasonable
          time.
        </p>
      </Section>

      <Section heading="8. Changes to this policy">
        <p>
          We may update this policy from time to time. The latest version will
          always be available here with an updated date, and material changes
          will be notified to you in the app.
        </p>
      </Section>

      <Section heading="9. Contact">
        <p>
          For privacy questions or data requests, contact our team at{" "}
          <a href="mailto:support@swyft.africa">support@swyft.africa</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
