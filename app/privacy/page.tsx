import type { Metadata } from "next";
import LegalShell, { Section } from "../../components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Swyft",
  description: "How Swyft collects, uses, shares, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="17 June 2026"
      intro="This Privacy Policy explains what data Swyft collects, why we collect it, who we share it with, and how we keep it safe. It is written to match the data we disclose on our Google Play and App Store listings, and to comply with Kenya's Data Protection Act, 2019. Swyft is operated by Taleel Holdings LTD.."
    >
      <Section heading="1. Data we collect">
        <p>
          We only collect data that is needed to run Swyft and provide the
          service you ask for. The categories below map to the data types shown
          on our app store listings.
        </p>
        <ul>
          <li>
            <strong className="text-ink">Personal info</strong> — your name,
            phone number, email address, and a password (or sign-in identifier).
          </li>
          <li>
            <strong className="text-ink">Location</strong> — your approximate
            and precise location to show nearby listings, estimate fares, and
            enable live tracking during an active move. Precise location is only
            used while you have granted permission.
          </li>
          <li>
            <strong className="text-ink">Financial info</strong> — your payment
            method (such as M-Pesa) and your in-app purchase and transaction
            history. Payments are processed by our payment partners; we do not
            store full payment card details.
          </li>
          <li>
            <strong className="text-ink">App activity</strong> — the videos and
            listings you watch or save to your Bucket List, viewing fees you
            pay, moves you book, searches, and how you interact with the app.
          </li>
          <li>
            <strong className="text-ink">App info & performance</strong> — crash
            logs and diagnostics used to keep the app stable.
          </li>
          <li>
            <strong className="text-ink">Device or other identifiers</strong> —
            device type, operating system, app version, and a device identifier
            used for diagnostics and fraud prevention.
          </li>
        </ul>
      </Section>

      <Section heading="2. Data safety summary">
        <p>
          This is a plain-language summary of what we collect and share, why,
          and our key security commitments — the same disclosures shown on our
          store listings.
        </p>
        <ul>
          <li>
            <strong className="text-ink">Personal info (name, phone, email, user ID)</strong>{" "}
            — Collected. Shared with a driver when you book a move so they can
            reach you. Used for account management and app functionality.
          </li>
          <li>
            <strong className="text-ink">Location (approximate & precise)</strong>{" "}
            — Collected. Shared with your assigned driver during an active move.
            Used for app functionality (nearby content, fares, live tracking).
          </li>
          <li>
            <strong className="text-ink">Financial info (payment & purchase history)</strong>{" "}
            — Collected. Shared with payment processors to complete a
            transaction. Used for app functionality and fraud prevention.
          </li>
          <li>
            <strong className="text-ink">App activity & search history</strong>{" "}
            — Collected. Used for app functionality, personalising your feed, and
            analytics. Not shared for advertising.
          </li>
          <li>
            <strong className="text-ink">App info, performance & device IDs</strong>{" "}
            — Collected. Used for analytics, diagnostics, and fraud prevention.
          </li>
          <li>
            <strong className="text-ink">Security commitments</strong> — data is
            encrypted in transit, you can request that your data be deleted, and
            we do <strong className="text-ink">not</strong> sell your personal
            data or use it for third-party advertising.
          </li>
        </ul>
      </Section>

      <Section heading="3. How we use your data">
        <ul>
          <li>To run the video feed and personalise listings for you;</li>
          <li>To process viewing-fee payments and unlock verified property details;</li>
          <li>To connect you with independent drivers and enable live tracking of a move;</li>
          <li>To verify accounts and prevent fraud and scam content;</li>
          <li>To provide customer support and keep the app stable;</li>
          <li>To send service updates and, where you opt in, marketing.</li>
        </ul>
      </Section>

      <Section heading="4. How we share data">
        <p>We share data only as needed to provide the service:</p>
        <ul>
          <li>
            With <strong className="text-ink">drivers</strong> — the details
            needed to complete a move you book (such as your name, phone number,
            and pickup and drop-off locations).
          </li>
          <li>
            With <strong className="text-ink">service providers</strong> — such
            as payment processors (M-Pesa and partners), mapping providers, and
            cloud and analytics providers, who are bound to protect your data and
            use it only on our instructions.
          </li>
          <li>
            With <strong className="text-ink">authorities</strong> — where
            required by law or to protect the rights and safety of our users.
          </li>
        </ul>
        <p>
          Swyft Scouts who film property videos do not receive your personal
          data and never meet you — trust is handled through KYC verification,
          ratings, and freshness checks. We do not sell your personal data, and
          we do not share it for third-party advertising.
        </p>
      </Section>

      <Section heading="5. Location data">
        <p>
          Swyft uses your location to show nearby listings, calculate fares, and
          enable live tracking during a move. Precise location is only accessed
          while you grant permission, and is shared with your driver only for the
          duration of an active move. You can disable location access in your
          device settings, though some features may not work as a result.
        </p>
      </Section>

      <Section heading="6. Payments & financial data">
        <p>
          Payments and viewing fees are processed through the methods offered in
          the app, such as M-Pesa. Card and mobile-money details are handled by
          our payment partners — we receive a record of the transaction (amount,
          status, and reference) but do not store full payment card numbers.
        </p>
      </Section>

      <Section heading="7. Data retention">
        <p>
          We keep your personal data for as long as your account is active or as
          needed to provide our services, comply with legal obligations, resolve
          disputes, and enforce our agreements. When you delete your account, we
          delete or anonymise your personal data unless we are required to retain
          some of it by law (for example, transaction records).
        </p>
      </Section>

      <Section heading="8. Data security">
        <p>
          We use technical and organisational measures — including encryption of
          data in transit, access controls, and secure infrastructure — to
          protect your data. No system is completely secure, but we work
          continuously to safeguard your information.
        </p>
      </Section>

      <Section heading="9. Your rights & deleting your data">
        <p>Under the Data Protection Act, 2019, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you;</li>
          <li>Request correction of inaccurate data;</li>
          <li>Request deletion of your account and data;</li>
          <li>Object to or restrict certain processing;</li>
          <li>Withdraw consent for marketing at any time.</li>
        </ul>
        <p>
          You can delete your account from within the app, or use our{" "}
          <a href="/delete-account">account &amp; data deletion request page</a>.
          We will action verified requests within a reasonable time.
        </p>
      </Section>

      <Section heading="10. Children">
        <p>
          Swyft is not intended for anyone under 18. We do not knowingly collect
          personal data from children.
        </p>
      </Section>

      <Section heading="11. Changes to this policy">
        <p>
          We may update this policy from time to time. The latest version will
          always be available here with an updated date, and material changes
          will be reflected in our store listings.
        </p>
      </Section>

      <Section heading="12. Contact">
        <p>
          For privacy questions or data requests, contact our team at{" "}
          <a href="mailto:support@swyft.africa">support@swyft.africa</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
