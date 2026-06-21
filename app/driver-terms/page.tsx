import type { Metadata } from "next";
import LegalShell, { Section } from "../../components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Driver Partner Agreement — Swyft",
  description:
    "The terms governing your use of the Swyft Driver app as an independent driver partner.",
};

export default function DriverTermsPage() {
  return (
    <LegalShell
      title="Driver Partner Agreement"
      updated="21 June 2026"
      intro="This Driver Partner Agreement governs your access to and use of the Swyft Driver app and your provision of moving and delivery services through the Swyft platform, operated by Taleel Holdings LTD.. By creating a driver account, you agree to these terms in addition to our general Terms & Conditions and Privacy Policy."
    >
      <Section heading="1. Who this agreement is for">
        <p>
          This agreement is between Taleel Holdings LTD. (&quot;Swyft&quot;,
          &quot;we&quot;, &quot;us&quot;) and you, an independent driver who
          uses the Swyft Driver app to receive and complete moving and delivery
          jobs. Swyft provides the technology that connects you with people who
          need a move; Swyft does not own your vehicle or perform the move
          itself.
        </p>
      </Section>

      <Section heading="2. Independent contractor status">
        <ul>
          <li>
            You are an independent contractor, not an employee, agent, or
            partner of Swyft. Nothing in this agreement creates an employment,
            joint-venture, or agency relationship.
          </li>
          <li>
            You decide when, where, and how often you go online and accept
            jobs. Swyft does not set your hours or require you to accept any
            particular job.
          </li>
          <li>
            You are not entitled to wages, leave, pension, or other employee
            benefits, and you are responsible for your own equipment and costs
            (fuel, maintenance, airtime, data).
          </li>
        </ul>
      </Section>

      <Section heading="3. Eligibility & documents">
        <p>To drive on Swyft you must, at all times, hold and keep current:</p>
        <ul>
          <li>A valid Kenyan driving licence for the class of vehicle you use;</li>
          <li>A valid national ID and complete KYC verification;</li>
          <li>
            A valid vehicle logbook (or proof you are authorised to use the
            vehicle), insurance, and any NTSA/PSV licensing required for the
            service you provide;
          </li>
          <li>
            A vehicle that meets Swyft&apos;s condition and safety requirements.
          </li>
        </ul>
        <p>
          You must be at least 18 years old. We may request, verify, and
          re-verify these documents at any time, and may suspend your account if
          they are missing, expired, or cannot be verified.
        </p>
      </Section>

      <Section heading="4. Earnings, commission & payouts">
        <ul>
          <li>
            For each completed job you earn the fare shown in the app, less
            Swyft&apos;s service commission. The current commission rate is
            disclosed to you in the app before you accept jobs.
          </li>
          <li>
            <strong className="text-ink">
              Swyft may change the commission rate at any time, at its sole
              discretion.
            </strong>{" "}
            The rate shown in the app at the time you accept a job is the rate
            that applies to that job. Where reasonable we will notify you of
            changes in advance, but by continuing to accept jobs after a change
            takes effect you accept the updated rate.
          </li>
          <li>
            Fares are estimates based on distance, vehicle type, waiting time,
            and the items moved, and may be adjusted for changes to the job.
          </li>
          <li>
            Where you collect payment directly (for example, cash or M-Pesa paid
            to you by the customer), you owe Swyft its commission on that job.
            You authorise Swyft to track, invoice, and recover outstanding
            commission, and we may restrict your account until commission owed
            is settled.
          </li>
          <li>
            Payouts are made through the payment methods offered in the app,
            such as M-Pesa, according to the payout schedule communicated to
            you. You are responsible for keeping your payout details accurate.
          </li>
          <li>
            You are solely responsible for your own taxes, including income tax,
            arising from your earnings on Swyft.
          </li>
        </ul>
      </Section>

      <Section heading="5. Your responsibilities on a job">
        <ul>
          <li>
            Drive safely and lawfully, obey all traffic and transport laws, and
            never drive under the influence of alcohol or drugs.
          </li>
          <li>
            Treat customers, their property, and other road users with respect.
            Discrimination, harassment, threats, or violence are strictly
            prohibited.
          </li>
          <li>
            Handle customers&apos; belongings with reasonable care during
            loading, transport, and offloading.
          </li>
          <li>
            Refuse to transport illegal, hazardous, stolen, or prohibited items,
            and report such requests to Swyft.
          </li>
          <li>
            Do not solicit customers to complete or pay for jobs outside the
            Swyft platform, cancel jobs for cash, or manipulate fares.
          </li>
        </ul>
      </Section>

      <Section heading="6. Insurance & liability">
        <ul>
          <li>
            You are responsible for maintaining valid insurance for your vehicle
            and the services you provide, as required by law.
          </li>
          <li>
            As an independent contractor, you are responsible for loss of, or
            damage to, a customer&apos;s goods, and for injury or damage caused
            during a job, except where the law provides otherwise.
          </li>
          <li>
            Swyft provides the platform &quot;as is&quot; and, to the maximum
            extent permitted by law, is not liable for your vehicle costs, lost
            earnings, or claims arising from how you perform a job. You agree to
            indemnify Swyft against claims arising from your breach of this
            agreement or your unlawful or negligent conduct.
          </li>
        </ul>
      </Section>

      <Section heading="7. Location & background tracking">
        <p>
          To match you with nearby jobs, give customers live tracking, calculate
          fares, and keep the service safe, the Swyft Driver app collects your
          device location — including while the app is running in the background
          and you are online to receive jobs. By going online you consent to
          this collection and to your location being shared with the customer
          during an active job.
        </p>
        <p>
          You can stop background location collection by going offline or
          revoking the permission in your device settings, but you will not be
          able to receive jobs while it is off. How we handle your data is
          described in our <a href="/driver-privacy">Driver Privacy Policy</a>.
        </p>
      </Section>

      <Section heading="8. Ratings, suspension & deactivation">
        <p>
          Customers may rate and review your service. We may warn, suspend, or
          permanently deactivate your account — with or without prior notice
          where reasonable — if you:
        </p>
        <ul>
          <li>Breach this agreement or our general Terms &amp; Conditions;</li>
          <li>Fall below our safety, quality, or rating standards;</li>
          <li>Provide false documents or information, or fail verification;</li>
          <li>Engage in fraud, unsafe driving, or harm to users or staff;</li>
          <li>Have unresolved commission owed to Swyft.</li>
        </ul>
        <p>
          You may stop using the app and request account closure at any time,
          subject to settling any amounts owed.
        </p>
      </Section>

      <Section heading="9. Your data">
        <p>
          Operating as a Swyft driver involves collecting your personal and KYC
          data, your documents, vehicle details, location history, and job and
          payout records. We use this to verify you, run the platform, process
          payouts, prevent fraud, and meet legal obligations. Your rights —
          including access and deletion — are set out in our{" "}
          <a href="/driver-privacy">Driver Privacy Policy</a>, which forms part
          of this agreement.
        </p>
      </Section>

      <Section heading="10. Changes to this agreement">
        <p>
          We may update this agreement from time to time. We will post the
          updated version here with a new &quot;last updated&quot; date and,
          where changes are material, notify you in the app. Continuing to drive
          on Swyft after changes take effect constitutes acceptance of the
          revised agreement.
        </p>
      </Section>

      <Section heading="11. Governing law">
        <p>
          This agreement is governed by the laws of the Republic of Kenya. Any
          disputes will be subject to the exclusive jurisdiction of the Kenyan
          courts.
        </p>
      </Section>

      <Section heading="12. Contact">
        <p>
          For questions about this agreement or your driver account, contact us
          at <a href="mailto:support@swyft.africa">support@swyft.africa</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
