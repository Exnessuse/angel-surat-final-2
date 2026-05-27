import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const title = "Privacy Policy | Angel One Sarthana Jakatnaka Surat";
    const description =
      "Privacy Policy for our services as an authorised sub broker of Angel One Limited, providing demat account opening and trading support in Sarthana Jakatnaka, Surat.";
    const image = "https://quickmantra.online/angel-one-sarthana-jakatnaka-surat.png";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: "/privacy" },
        { property: "og:type", content: "article" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: "/privacy" }],
    };
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link to="/" className="text-sm text-cyan hover:underline">&larr; Back to Home</Link>
        <h1 className="mt-4 text-4xl font-bold gradient-text">Privacy Policy</h1>
        <p className="mt-2 text-sm text-foreground/60">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-invert mt-8 space-y-6 text-foreground/80 leading-relaxed">
          <section className="glass rounded-2xl p-4 border border-cyan/20">
            <p className="text-sm">
              <strong className="text-foreground">Important disclosure:</strong> We are an
              authorised sub broker (Authorised Person) of <strong>Angel One Limited</strong>.
              <strong> We are not Angel One Limited.</strong> Angel One Limited is the
              SEBI-registered stock broker and depository participant that maintains
              your demat and trading account; we act only as an authorised intermediary
              who collects your information and forwards it to Angel One Limited for
              processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              This Privacy Policy explains how our office, operating as an authorised
              sub broker of Angel One Limited at 313, Rise On Plaza, Sarthana Jakatnaka,
              Surat ("we", "us", or "our") collects, uses and protects information you
              share with us when you contact us, visit our office, or use this website.
              For information handled directly by Angel One Limited, please also refer
              to the Angel One Limited privacy policy on angelone.in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, mobile number, email address and address you share with us.</li>
              <li>KYC documents such as PAN, Aadhaar, bank proof and photograph submitted for account opening.</li>
              <li>Income, occupation and trading-experience details required by SEBI / exchange KYC norms.</li>
              <li>Basic device and browser information when you use this website.</li>
              <li>Messages you send through WhatsApp, phone, email or the contact form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To facilitate opening of your demat and trading account with Angel One Limited.</li>
              <li>To forward your KYC and application data to Angel One Limited for processing.</li>
              <li>To provide ongoing local service support for your Angel One account.</li>
              <li>To respond to your enquiries and service requests.</li>
              <li>To meet legal, regulatory, SEBI, exchange and KYC requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Sharing of Information</h2>
            <p>
              We share KYC and application data with <strong>Angel One Limited</strong> and
              with authorised intermediaries, KRAs, depositories (CDSL/NSDL), stock
              exchanges and regulators to the extent required for processing your account
              and for statutory compliance. We do not sell or rent your personal
              information to third parties for marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
            <p>
              We take reasonable steps to protect your information against unauthorised
              access, alteration or disclosure. Physical documents are kept in secure
              storage and digital records are protected with access controls. Once your
              application is submitted to Angel One Limited, the security of that data
              within Angel One systems is governed by Angel One Limited's own policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
            <p>
              This website may use minimal cookies and analytics to measure traffic and
              improve user experience. You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of the personal data
              we hold about you, subject to our regulatory record-keeping obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Contact Us</h2>
            <p>
              For any privacy-related questions, please contact us at:<br />
              Authorised Sub Broker — Angel One Limited<br />
              313, Rise On Plaza, Sarthana Jakatnaka, Surat.<br />
              Phone / WhatsApp: +91 96381 49284
            </p>
            <p>
              For privacy queries relating to your demat / trading account data
              held by the broker, please contact Angel One Limited through the
              official channels listed on angelone.in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will
              always be available on this page with an updated effective date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
