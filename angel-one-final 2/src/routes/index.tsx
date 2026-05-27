import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import {
  Headphones,
  Rocket,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  CheckCircle2,
  MessageCircle,
  Phone,
  MapPin,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Building2,
  Clock,
  Users,
  Award,
  Zap,
  Bolt,
  ChevronDown,
} from "lucide-react";
import heroMap from "@/assets/hero-map.jpg";
import dematSupportImg from "@/assets/demat-account-support-surat.png";
import angelOneOfficeImg from "@/assets/angel-one-sarthana-jakatnaka-surat.png";

const SITE_URL = "https://quickmantra.online";
const OG_IMAGE = `${SITE_URL}/angel-one-sarthana-jakatnaka-surat.png`;
const PAGE_TITLE = "Angel One Surat | Demat & Trading Support in Sarthana";
const PAGE_DESC =
  "Angel One સંબંધિત ડીમેટ એકાઉન્ટ, ટ્રેડિંગ એકાઉન્ટ, KYC અને ઇન્વેસ્ટમેન્ટ સપોર્ટ હવે સરથાણા જકાતનાકા, સુરતમાં સરળ રીતે ઉપલબ્ધ.";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Angel One ઓફિસ સરથાણા જકાતનાકામાં ક્યાં આવેલ છે?",
    a: "અમારી Angel One સંબંધિત સપોર્ટ ઓફિસ 313, રાઇઝ ઓન પ્લાઝા, સરથાણા જકાતનાકા, સુરત ખાતે આવેલ છે. અહીંથી ડીમેટ એકાઉન્ટ ઓપનિંગ અને ટ્રેડિંગ સંબંધિત તમામ સપોર્ટ ગુજરાતીમાં મેળવી શકો છો.",
  },
  {
    q: "શું અહીં ડીમેટ એકાઉન્ટ ઓપનિંગ સપોર્ટ મળે છે?",
    a: "હા, સરથાણા જકાતનાકા, સુરત ખાતે અમારી ટીમ Angel One સંબંધિત ડીમેટ એકાઉન્ટ ઓપનિંગ, ડોક્યુમેન્ટ વેરિફિકેશન અને KYC પ્રોસેસમાં સંપૂર્ણ સહાય આપે છે.",
  },
  {
    q: "શું મોબાઇલ ટ્રેડિંગ માટે ગાઇડન્સ મળે છે?",
    a: "હા, Angel One મોબાઇલ ટ્રેડિંગ એપ સેટઅપ, લોગિન, ઓર્ડર પ્લેસમેન્ટ અને IPO એપ્લાય માટે અમે ગુજરાતીમાં સરળ ગાઇડન્સ આપીએ છીએ.",
  },
  {
    q: "શું KYC સપોર્ટ ઉપલબ્ધ છે?",
    a: "હા, PAN, Aadhaar, બેન્ક પ્રૂફ સાથેની KYC પ્રોસેસ સુરતમાં અમારી ઓફિસ ખાતે અથવા ઘરે બેઠા સરળતાથી પૂર્ણ કરી શકાય છે.",
  },
  {
    q: "Rise On Plaza બિલ્ડિંગમાં ઓફિસ કયા ફ્લોર પર છે?",
    a: "રાઇઝ ઓન પ્લાઝા બિલ્ડિંગમાં ઓફિસ નંબર 313, 3 જા માળ પાર આવેલ છે. ગૂગલ-મેપ પરથી સરળતાથી લોકેશન શોધી શકો છો.",
  },
];

const LOCAL_BUSINESS_LD = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Angel One Support — Sarthana Jakatnaka",
  description: PAGE_DESC,
  image: "/angel-one-sarthana-jakatnaka-surat.png",
  telephone: "+91-96381-49284",
  url: "https://quickmantra.online/",
  areaServed: ["Sarthana Jakatnaka", "Surat", "Varachha", "Katargam", "Punagam"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "313, Rise On Plaza, Sarthana Jakatnaka",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395006",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.2300735, longitude: 72.9018526 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://www.angelone.in/"],
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "Angel One Sarthana Jakatnaka, Angel One Surat, Demat Account Surat, Trading Account Surat, Demat Account Sarthana Jakatnaka, Angel One office Surat, Rise On Plaza Surat",
      },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Surat, Sarthana Jakatnaka" },
      { name: "geo.position", content: "21.2300735;72.9018526" },
      { name: "ICBM", content: "21.2300735, 72.9018526" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "gu_IN" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Angel One office at Rise On Plaza, Sarthana Jakatnaka, Surat" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_LD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_LD),
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP = "https://wa.me/919638149284";
const PHONE = "tel:+919638149284";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "હોમ" },
    { href: "#services", label: "સર્વિસ" },
    { href: "#about", label: "અમારા વિશે" },
    { href: "#benefits", label: "લાભો" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "કોન્ટેક્ટ" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${
          scrolled ? "glass-strong rounded-2xl shadow-soft" : ""
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <a href="#home" className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-gradient-cyan grid place-items-center shadow-glow">
              <Bolt className="size-5 text-cyan-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-foreground uppercase tracking-wider">ANGEL ONE</div>
              <div className="text-[10px] text-muted-foreground">સરથાણા જકાતનાકા</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground rounded-lg hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-cyan text-cyan-foreground text-sm font-semibold shadow-glow hover:brightness-110 transition"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
            <button
              className="lg:hidden glass rounded-xl p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden glass-strong rounded-2xl mt-2 p-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-foreground/90 rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            <Sparkles className="size-3.5 text-cyan" />
            સરથાણા જકાતનાકા, સુરત
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="gradient-text">Angel One સર્વિસ સેંટર</span>
            <br />
            <span className="gradient-text">હવે સરથાણા જકાતનાકામાં</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-xl">
            Angel One માં <strong className="text-foreground/90">FREE Demat Account</strong> ઓપનિંગ, KYC અને મોબાઇલ <strong className="text-foreground/90">ટ્રેડિંગ સપોર્ટ હવે ગુજરાતીમાં</strong> સરળ રીતે ઉપલબ્ધ.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/70">
            {[
              "ફાસ્ટ એકાઉન્ટ ઓપનિંગ",
              "સરળ KYC",
              "મોબાઇલ ટ્રેડિંગ",
              "વિશ્વાસપાત્ર સપોર્ટ",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-cyan shadow-glow" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://angel-one.onelink.me/Wjgr/5ak6lxio"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-cyan text-cyan-foreground font-semibold shadow-glow hover:brightness-110 transition"
            >
              ફ્રી એકાઉન્ટ ઓપન કરો
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-strong text-foreground font-semibold hover:bg-white/10 transition"
            >
              <MessageCircle className="size-4" />
              કોન્ટેક્ટ કરો
            </a>
          </div>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-glow blur-3xl opacity-60" />
          <div className="relative glass-strong glow-border rounded-3xl overflow-hidden shadow-card animate-float">
            <img
              src={angelOneOfficeImg}
              alt="Angel One office at Rise On Plaza, Sarthana Jakatnaka, Surat"
              width={1280}
              height={1280}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto object-contain"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="text-center max-w-2xl mx-auto mb-12"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-cyan mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {desc && <p className="mt-4 text-foreground/70">{desc}</p>}
    </motion.div>
  );
}

const services = [
  { icon: Headphones, title: "પર્સનલ સપોર્ટ", desc: "ગુજરાતીમાં સરળ ગાઇડન્સ અને સીધી મદદ" },
  { icon: Rocket, title: "ફાસ્ટ એકાઉન્ટ ઓપનિંગ", desc: "ઘરે બેઠા સરળ પ્રોસેસથી ડીમેટ એકાઉન્ટ ઓપન કરો" },
  { icon: Smartphone, title: "મોબાઇલ ટ્રેડિંગ", desc: "મોબાઇલ એપથી સરળતાથી ટ્રેડિંગ અને ઇન્વેસ્ટમેન્ટ" },
  { icon: ShieldCheck, title: "સરળ KYC સપોર્ટ", desc: "ડોક્યુમેન્ટ અને KYC પ્રોસેસમાં સંપૂર્ણ સપોર્ટ" },
  { icon: TrendingUp, title: "IPO અને ઇન્વેસ્ટમેન્ટ સપોર્ટ", desc: "IPO અને લાંબા ગાળાના ઇન્વેસ્ટમેન્ટ માટે સપોર્ટ" },
  { icon: GraduationCap, title: "બેગીનર ફ્રેન્ડલી ગાઇડન્સ", desc: "સ્ટોક માર્કેટમાં નવા લોકો માટે સરળ સમજણ" },
];

function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="અમારી સર્વિસ"
          title="શા માટે લોકો અમને પસંદ કરે છે?"
          desc="અમે દરેક સ્ટેપ પર સરળ અને વિશ્વાસપાત્ર સપોર્ટ આપીએ છીએ"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
              className="group relative glass glow-border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-cyan opacity-0 group-hover:opacity-20 transition pointer-events-none blur-xl" />
              <div className="relative">
                <div className="size-12 rounded-xl bg-gradient-cyan grid place-items-center shadow-glow mb-4 group-hover:scale-110 transition">
                  <s.icon className="size-6 text-cyan-foreground" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-glow blur-3xl opacity-50" />
          <div className="relative glass-strong glow-border rounded-3xl overflow-hidden shadow-card">
            <img
              src={dematSupportImg}
              alt="Demat account and Angel One trading support in Surat"
              loading="lazy"
              decoding="async"
              width={1280}
              height={1280}
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4 flex items-center gap-3">
              <Building2 className="size-8 text-cyan" />
              <div>
                <div className="font-semibold text-sm">સરથાણા જકાતનાકા સર્વિસ સેન્ટર</div>
                <div className="text-xs text-foreground/60">સુરત, ગુજરાત</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-cyan mb-4">
            અમારા વિશે
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="gradient-text">સ્ટોક માર્કેટને સરળ બનાવીએ છીએ</span>
          </h2>
          <div className="mt-6 space-y-4 text-foreground/75 leading-relaxed">
            <p>
              અમે સરથાણા જકાતનાકા, સુરત ખાતે આવેલ ડીમેટ અને ટ્રેડિંગ સપોર્ટ સર્વિસ સેન્ટર છીએ.
            </p>
            <p>
              અમારું લક્ષ્ય લોકો સુધી સ્ટોક માર્કેટ અને ડિજિટલ ઇન્વેસ્ટમેન્ટ સરળ રીતે પહોંચાડવાનું છે.
            </p>
            <p>
              ઘણા લોકોને Angel one માં એકાઉન્ટ ઓપનિંગ, KYC અથવા ટ્રેડિંગ એપ્લિકેશન સમજવામાં મુશ્કેલી પડે છે. અમે એ સમગ્ર પ્રોસેસ સરળ અને સ્મૂથ બનાવવામાં મદદ કરીએ છીએ.
            </p>
            <p className="text-foreground/90 font-medium">
              સરળ ભાષામાં વિશ્વાસપાત્ર સપોર્ટ આપવો એ અમારી સૌથી મોટી ખાસિયત છે.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { icon: Users, k: "300+", v: "ગ્રાહકો" },
              { icon: Clock, k: "10+", v: "વર્ષનો અનુભવ" },
              { icon: Award, k: "100%", v: "વિશ્વાસપાત્ર" },
              { icon: Zap, k: "15 min", v: "ફાસ્ટ KYC" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-4">
                <s.icon className="size-5 text-cyan mb-2" />
                <div className="text-xl font-bold">{s.k}</div>
                <div className="text-xs text-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const benefits = [
  "ઘરે બેઠા એકાઉન્ટ ઓપનિંગ",
  "ફાસ્ટ KYC પ્રોસેસ",
  "મોબાઇલથી ટ્રેડિંગ અને ઇન્વેસ્ટમેન્ટ",
  "ગુજરાતી સપોર્ટ",
  "IPO એપ્લાય સપોર્ટ",
  "માર્કેટ એપ ગાઇડન્સ",
  "લાંબા ગાળાના ઇન્વેસ્ટમેન્ટ સપોર્ટ",
  "સરળ અને યુઝર ફ્રેન્ડલી ટ્રેડિંગ એક્સપિરિયન્સ",
];

function Benefits() {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ફાયદાઓ"
          title="તમને શું ફાયદો મળશે?"
          desc="દરેક સ્ટેપ પર સરળતા અને સ્મૂથ એક્સપિરિયન્સ"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="glass glow-border rounded-2xl p-5 flex items-start gap-3 hover:bg-white/10 hover:-translate-y-1 transition group"
            >
              <div className="shrink-0 size-9 rounded-lg bg-gradient-cyan grid place-items-center shadow-glow group-hover:scale-110 transition">
                <CheckCircle2 className="size-5 text-cyan-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground/90 leading-snug">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative glass-strong glow-border rounded-3xl p-8 lg:p-12 overflow-hidden">
          <div className="absolute -top-20 -right-20 size-64 bg-cyan/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-64 bg-primary/40 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-cyan mb-4">
                <MapPin className="size-3.5" />
                લોકલ સપોર્ટ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                <span className="gradient-text">હવે ટ્રેડિંગ સપોર્ટ વધુ સરળ</span>
              </h2>
              <p className="mt-6 text-foreground/75 leading-relaxed">
                સરથાણા જકાતનાકા અને આસપાસના વિસ્તારમાં હવે ડીમેટ અને ટ્રેડિંગ સંબંધિત સપોર્ટ સરળતાથી ઉપલબ્ધ.
              </p>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                ગુજરાતીમાં સરળ ગાઇડન્સ અને ઝડપી સપોર્ટ સાથે હવે સ્ટોક માર્કેટ વધુ સરળ અનુભવાશે.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["સરથાણા", "જકાતનાકા", "વરાછા", "કતારગામ", "પૂણા"].map((a) => (
                  <span key={a} className="glass rounded-full px-3 py-1 text-xs text-foreground/80">
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Mini map graphic */}
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <img
                  src={heroMap}
                  alt="Sarthana Jakatnaka, Surat — Angel One support location map"
                  loading="lazy"
                  width={1920}
                  height={1280}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 size-16 bg-cyan/40 rounded-full blur-2xl animate-pulse" />
                    <div className="relative size-14 rounded-full bg-gradient-cyan grid place-items-center shadow-glow animate-glow-pulse">
                      <MapPin className="size-7 text-cyan-foreground" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="mt-3 glass-strong rounded-xl px-3 py-1.5 text-xs font-semibold whitespace-nowrap -translate-x-1/4">
                    સરથાણા જકાતનાકા
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const stats = [
    { icon: ShieldCheck, k: "100%", v: "વિશ્વાસપાત્ર સપોર્ટ" },
    { icon: Zap, k: "24/7", v: "ફાસ્ટ સર્વિસ" },
    { icon: CheckCircle2, k: "Easy", v: "સરળ પ્રોસેસ" },
    { icon: Sparkles, k: "Smooth", v: "પ્રીમિયમ એક્સપિરિયન્સ" },
    { icon: Award, k: "10+", v: "વર્ષનો વિશ્વાસ" },
  ];
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="અમારું ફોકસ" title="અમારી પ્રતિબદ્ધતા" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="glass-strong glow-border rounded-2xl p-6 text-center group hover:-translate-y-1 transition"
            >
              <div className="size-12 mx-auto rounded-xl bg-gradient-cyan grid place-items-center shadow-glow mb-3 group-hover:scale-110 transition">
                <s.icon className="size-6 text-cyan-foreground" strokeWidth={2.2} />
              </div>
              <div className="text-2xl font-bold gradient-text">{s.k}</div>
              <div className="text-xs text-foreground/70 mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 sm:py-24 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="વારંવાર પૂછાતા પ્રશ્નો"
          desc="Angel One, ડીમેટ એકાઉન્ટ અને સુરતમાં અમારી ઓફિસ વિશે સામાન્ય પ્રશ્નોના જવાબ."
        />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={f.q}
                className="glass glow-border rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-white/5 transition"
                  aria-expanded={open}
                >
                  <span className="text-sm sm:text-base font-semibold text-foreground/90">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`size-5 text-cyan shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm text-foreground/75 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="કોન્ટેક્ટ"
          title="આજે જ કોન્ટેક્ટ કરો"
          desc="ડીમેટ એકાઉન્ટ, ટ્રેડિંગ અથવા IPO સંબંધિત માહિતી માટે આજે જ અમારો સંપર્ક કરો."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp કરો",
                value: "+91 96381 49284",
                href: WHATSAPP,
                cta: "મેસેજ",
              },
              {
                icon: Phone,
                title: "કોલ કરો",
                value: "+91 96381 49284",
                href: PHONE,
                cta: "કોલ",
              },
              {
                icon: MapPin,
                title: "લોકેશન જુઓ",
                value: "313, રાઇઝ ઓન પ્લાઝા, સરથાણા જકાતનાકા, સુરત.",
                href: "https://www.google.com/maps/place/Angel+One/@21.2300785,72.8992777,1022m/data=!3m3!1e3!4b1!5s0x3be04f670821f5a1:0xb4ed73bb144501ad!4m6!3m5!1s0x3be045dd2bbb2111:0xc002d5cf2fcc7655!8m2!3d21.2300735!4d72.9018526!16s%2Fg%2F11y63yhp47",
                cta: "મેપ",
              },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-border rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white/10 transition group"
              >
                <div className="size-10 sm:size-12 rounded-xl bg-gradient-cyan grid place-items-center shadow-glow shrink-0">
                  <c.icon className="size-5 sm:size-6 text-cyan-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-foreground/60">{c.title}</div>
                  <div className="font-semibold text-sm sm:text-base break-words">{c.value}</div>
                </div>
                <ArrowRight className="size-5 text-cyan shrink-0 group-hover:translate-x-1 transition" />
              </a>
            ))}

            <div className="glass rounded-2xl overflow-hidden h-56 sm:h-48">
              <iframe
                title="Angel One લોકેશન મેપ"
                src="https://www.google.com/maps?q=Angel+One+Rise+On+Plaza+Sarthana+Jakatnaka+Surat&ll=21.2300735,72.9018526&z=18&output=embed"
                className="w-full h-full border-0 grayscale-[20%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            onSubmit={(e) => {
              e.preventDefault();
              window.open(WHATSAPP, "_blank");
            }}
            className="lg:col-span-3 glass-strong glow-border rounded-3xl p-4 sm:p-6 lg:p-8 space-y-4"
          >
            <h3 className="text-xl font-bold">ઇન્ક્વાયરી મોકલો</h3>
            <p className="text-sm text-foreground/70">
              તમારી માહિતી ભરો, અમે જલ્દી તમારો સંપર્ક કરીશું.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="નામ" placeholder="તમારું નામ" />
              <Field label="મોબાઇલ નંબર" placeholder="+91" type="tel" />
            </div>
            <Field label="ઇમેલ" placeholder="you@email.com" type="email" />
            <div>
              <label htmlFor="inq-service" className="text-xs text-foreground/70 mb-1.5 block">સર્વિસ</label>
              <select id="inq-service" name="service" aria-label="સર્વિસ પસંદ કરો" className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:ring-2 focus:ring-cyan/50">
                <option className="bg-background">ડીમેટ એકાઉન્ટ ઓપનિંગ</option>
                <option className="bg-background">KYC સપોર્ટ</option>
                <option className="bg-background">મોબાઇલ ટ્રેડિંગ ગાઇડન્સ</option>
                <option className="bg-background">IPO સપોર્ટ</option>
                <option className="bg-background">ઇન્વેસ્ટમેન્ટ ગાઇડન્સ</option>
              </select>
            </div>
            <div>
              <label htmlFor="inq-message" className="text-xs text-foreground/70 mb-1.5 block">મેસેજ</label>
              <textarea
                id="inq-message"
                name="message"
                rows={4}
                placeholder="તમારી જરૂરિયાત જણાવો..."
                className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:ring-2 focus:ring-cyan/50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-cyan text-cyan-foreground font-semibold shadow-glow hover:brightness-110 transition"
            >
              <MessageCircle className="size-5" />
              ઇન્ક્વાયરી મોકલો
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const reactId = useId();
  const id = props.id ?? reactId;
  return (
    <div>
      <label htmlFor={id} className="text-xs text-foreground/70 mb-1.5 block">{label}</label>
      <input
        id={id}
        aria-label={label}
        {...props}
        className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:ring-2 focus:ring-cyan/50 placeholder:text-foreground/40"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 mt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-xl bg-gradient-cyan grid place-items-center shadow-glow">
                <Bolt className="size-5 text-cyan-foreground" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-bold uppercase tracking-wider">ANGEL ONE</div>
                <div className="text-xs text-foreground/60">સરથાણા જકાતનાકા, સુરત</div>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-md">
              Angel One સંબંધિત એકાઉન્ટ ઓપનિંગ અને ટ્રેડિંગ સપોર્ટ સર્વિસ સેન્ટર. ગુજરાતીમાં સરળ ગાઇડન્સ.
            </p>
          </div>

          <div>
            <div className="font-semibold mb-3">ક્વિક લિંક્સ</div>
            <ul className="space-y-2 text-sm text-foreground/70">
              {[
                { href: "#home", label: "હોમ" },
                { href: "#services", label: "સર્વિસ" },
                { href: "#about", label: "અમારા વિશે" },
                { href: "#benefits", label: "લાભો" },
                { href: "#contact", label: "કોન્ટેક્ટ" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-cyan transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3">કોન્ટેક્ટ</div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-cyan shrink-0 mt-0.5" />
                313, રાઇઝ ઓન પ્લાઝા, સરથાણા જકાતનાકા, સુરત.
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-cyan" />
                +91 96381 49284
              </li>
            </ul>
          </div>
        </div>

        <div className="glass rounded-2xl p-5 text-xs text-foreground/65 leading-relaxed mb-6">
          <strong className="text-foreground/85">ડિસ્ક્લેમર: </strong>
          અમે Angel One સંબંધિત એકાઉન્ટ ઓપનિંગ અને ટ્રેડિંગ સપોર્ટ સર્વિસમાં સહાય કરીએ છીએ. ઇન્વેસ્ટમેન્ટ અને માર્કેટ સંબંધિત નિર્ણય પોતાની સમજણથી લેવા.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-foreground/60">
          <div>© {new Date().getFullYear()} ટ્રેડિંગ સપોર્ટ સેન્ટર. તમામ હક અનામત.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-cyan transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan transition">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gradient-cyan grid place-items-center shadow-glow animate-glow-pulse hover:scale-110 transition"
    >
      <MessageCircle className="size-7 text-cyan-foreground" strokeWidth={2.2} />
    </a>
  );
}

function LandingPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Location />
      <Trust />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
