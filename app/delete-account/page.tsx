import type { Metadata } from "next";
import LegalShell, { Section } from "../../components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Delete your account — Swyft",
  description:
    "Request deletion of your Swyft account and associated personal data.",
};

const MAIL_TO =
  "mailto:support@swyft.africa" +
  "?subject=" +
  encodeURIComponent("Account & data deletion request") +
  "&body=" +
  encodeURIComponent(
    [
      "Please delete my Swyft account and the personal data associated with it.",
      "",
      "Name on account:",
      "Phone number on account:",
      "Email on account:",
      "",
      "I understand that some records may be retained where required by law.",
    ].join("\n")
  );

export default function DeleteAccountPage() {
  return (
    <LegalShell
      title="Delete your account"
      updated="17 June 2026"
      intro="You can ask us to delete your Swyft account and the personal data associated with it at any time. This page explains how to request deletion, what is removed, and what we may be required to keep. Swyft is operated by Barak Labs LTD."
    >
      <Section heading="1. Delete from within the app">
        <p>
          The fastest way is in the app: go to the{" "}
          <strong className="text-ink">Account</strong> tab →{" "}
          <strong className="text-ink">Settings</strong> →{" "}
          <strong className="text-ink">Delete account</strong>, then confirm.
          Your account is deactivated immediately and your data is deleted as
          described below.
        </p>
      </Section>

      <Section heading="2. Request deletion by email">
        <p>
          If you can&apos;t access the app, you can request deletion by email and
          we&apos;ll verify and action it for you.
        </p>
        <p>
          <a
            href={MAIL_TO}
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white no-underline hover:opacity-90 transition-opacity"
          >
            Request account &amp; data deletion
          </a>
        </p>
        <p>
          This opens an email to{" "}
          <a href="mailto:support@swyft.africa">support@swyft.africa</a> with the
          details we need. Please send it from the email address on your account,
          or include the phone number you signed up with, so we can verify the
          request.
        </p>
      </Section>

      <Section heading="3. What gets deleted">
        <ul>
          <li>Your profile and account details (name, phone number, email);</li>
          <li>Your saved listings and Bucket List;</li>
          <li>Your move and viewing history linked to your identity;</li>
          <li>Your stored preferences and app activity.</li>
        </ul>
      </Section>

      <Section heading="4. What we may keep">
        <p>
          We may retain a limited amount of data where the law requires it or to
          protect against fraud and abuse — for example, transaction and payment
          records needed for tax, accounting, and legal obligations. Retained
          records are kept only for as long as required and are then deleted.
        </p>
      </Section>

      <Section heading="5. How long it takes">
        <p>
          In-app deletions take effect immediately. Email requests are verified
          and actioned within a reasonable time, normally within 30 days. We will
          confirm by email once your data has been deleted.
        </p>
      </Section>

      <Section heading="6. Questions">
        <p>
          For anything about deleting your account or data, contact us at{" "}
          <a href="mailto:support@swyft.africa">support@swyft.africa</a>. See our{" "}
          <a href="/privacy">Privacy Policy</a> for full details on how we handle
          your data.
        </p>
      </Section>
    </LegalShell>
  );
}
