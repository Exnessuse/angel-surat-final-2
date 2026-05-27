import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => {
    const title = "Terms & Conditions | Angel One Sarthana Jakatnaka Surat";
    const description =
      "Terms and Conditions for our services as an authorised sub broker of Angel One Limited, offering demat account opening and trading support in Sarthana Jakatnaka, Surat.";
    const image = "https://quickmantra.online/angel-one-sarthana-jakatnaka-surat.png";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: "/terms" },
        { property: "og:type", content: "article" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: "/terms" }],
    };
  },
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link to="/" className="text-sm text-cyan hover:underline">&larr; Back to Home</Link>
        <h1 className="mt-4 text-4xl font-bold gradient-text">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-foreground/60">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-invert mt-8 space-y-6 text-foreground/80 leading-relaxed">
          <section className="glass rounded-2xl p-4 border border-cyan/20">
            <p className="text-sm">
              <strong className="text-foreground">Important disclosure:</strong> We are an
              authorised sub broker (Authorised Person) of <strong>Angel One Limited</strong>,
              registered with the relevant stock exchanges. <strong>We are not Angel One
              Limited.</strong> Angel One Limited is the SEBI-registered stock broker and
              depository participant; we act only as an authorised intermediary to source
              clients and provide local service support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">1. About Us</h2>
            <p>
              We operate as an <strong>authorised sub broker / Authorised Person of
              Angel One Limited</strong> from 313, Rise On Plaza, Sarthana Jakatnaka,
              Surat. In this capacity we help clients open Angel One demat and trading
              accounts, complete KYC, and use Angel One's trading platforms. All trades,
              custody of funds and securities, contract notes, ledgers and statements
              are issued and handled by Angel One Limited — not by us. We do not
              ourselves execute trades, hold client funds or securities, or offer
              investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Acceptance of Terms</h2>
            <p>
              By visiting our office, contacting us, or using this website, you agree to
              be bound by these Terms &amp; Conditions, in addition to the separate terms,
              rights &amp; obligations and risk disclosure documents issued by Angel One
              Limited at the time of account opening. If you do not agree, please do not
              use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Services Provided</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sourcing and onboarding of clients for Angel One Limited as an authorised sub broker.</li>
              <li>Assistance with KYC document collection, submission and in-person verification.</li>
              <li>Walk-through of the Angel One mobile and web trading platforms.</li>
              <li>Local service support for account, login, segment activation and basic operational queries.</li>
              <li>Communication and support in Gujarati, Hindi and English.</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> accept cash, cheques or any payment towards
              brokerage, margin, pay-in or investments. All such payments must be made
              by the client directly to Angel One Limited through the approved banking
              and payment channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. No Investment Advice</h2>
            <p>
              We are <strong>not</strong> a SEBI-registered Investment Adviser or
              Research Analyst. Any information shared by us is for general educational
              and support purposes only and does not constitute investment, financial,
              tax or legal advice, nor a recommendation to buy or sell any security.
              All investment and trading decisions are taken solely at your own
              discretion and risk. Past performance is not indicative of future returns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Market &amp; Trading Risks</h2>
            <p>
              Trading in stocks, derivatives, commodities and other market instruments is
              subject to market risk. You should read all related documents carefully
              before investing. We are not responsible for any loss or damage arising
              from your investment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Account Opening</h2>
            <p>
              Account opening is subject to verification and final approval by
              Angel One Limited as per SEBI and exchange regulations. As a sub broker
              we only facilitate the application — we do not guarantee approval of any
              account or activation of any segment. Customers must provide accurate
              and genuine documents; submitting forged or misleading documents may
              lead to rejection and action under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Charges</h2>
            <p>
              Account opening assistance at our centre is provided free of cost.
              Brokerage, demat AMC, DP charges, exchange transaction charges, SEBI
              turnover fees, GST, stamp duty and all other statutory and regulatory
              charges are levied by <strong>Angel One Limited</strong> as per its
              published tariff and are payable directly to Angel One Limited. As an
              authorised sub broker we earn a share of brokerage from Angel One
              Limited — we do not charge clients separately for sub-broker services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Intellectual Property</h2>
            <p>
              The "Angel One" name, logo and related marks are the property of
              Angel One Limited and are used on this website strictly to identify our
              status as its authorised sub broker. This website is operated by us
              independently and is <strong>not</strong> the official website of
              Angel One Limited. For official information please visit
              angelone.in. All other content on this site is the property of this
              sub-broker office.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any
              direct, indirect, incidental or consequential losses arising out of the
              use of our services, including but not limited to trading losses, market
              movement, margin calls, system downtime, technical glitches, order
              execution issues, delays or actions of Angel One Limited, the exchanges,
              depositories, banks or any third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Grievance Redressal</h2>
            <p>
              For trading, demat, settlement or account-related grievances, please
              raise the issue first with Angel One Limited through its official
              grievance channels at angelone.in. For service issues relating to our
              sub-broker office, you may contact us directly using the details below
              and we will assist in coordinating with Angel One Limited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in Surat, Gujarat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">12. Contact</h2>
            <p>
              Authorised Sub Broker — Angel One Limited<br />
              313, Rise On Plaza, Sarthana Jakatnaka, Surat.<br />
              Phone / WhatsApp: +91 96381 49284
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
