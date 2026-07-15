import ThreeKnot from "./three-knot";
import ScrollReveal from "./scroll-reveal";
import MobileMenu from "./mobile-menu";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between border-b border-white/20 px-8 py-5 md:px-16 md:py-6">
        <img
          src="/logo.png?v=2"
          alt="Vexoro"
          className="h-9 w-auto md:h-11"
        />

        <nav className="hidden items-center gap-12 md:flex">
          <a href="#services" className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 transition">Capabilities</a>
          <a href="#work" className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 transition">Portfolio</a>
          <a href="#process" className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 transition">Process</a>
          <a href="#contact" className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 transition">Contact</a>
        </nav>

        <div className="flex items-center">
          <a href="#contact" className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-transparent bg-[#ff5448] px-5 text-xs font-mono font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#ff5448] hover:bg-white hover:text-[#ff5448]">
            Get an Audit
          </a>
          <MobileMenu />
        </div>
      </header>

      <ScrollReveal>
      <section className="border-b border-white/20 md:grid md:grid-cols-2">
        <div className="px-8 pb-8 pt-6 md:px-16 md:pb-16 md:pt-10">
          <div className="reveal flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5448] pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5448]">Available for projects</span>
          </div>

          <h1 className="reveal mt-4 font-display text-[clamp(2.5rem,10vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] text-white">
            Building systems that actually
            <span className="block text-[#ff5448]">convert.</span>
          </h1>

          <p className="reveal mt-6 max-w-xl font-body text-lg leading-8 text-white/80 md:text-xl md:leading-9">
            We build fast, modern websites, digital menus, and web applications for businesses across Pakistan and beyond — designed to turn visitors into real customers, not just look nice.
          </p>

          <div className="reveal mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex h-13 items-center justify-center rounded-md border border-transparent bg-[#ff5448] px-8 text-sm font-mono font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#ff5448] hover:bg-white hover:text-[#ff5448]">
              Start Project
            </a>
            <a href="#process" className="inline-flex h-13 items-center justify-center rounded-md border border-white/20 px-8 text-sm font-mono font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#ff5448] hover:text-[#ff5448]">
              Our Process
            </a>
          </div>

          <p className="reveal mt-10 font-mono text-xs uppercase tracking-[0.24em] text-white/40">
            Trusted by exporters · retailers · restaurants
          </p>
        </div>

        <div className="hidden md:block relative min-h-full">
          <ThreeKnot />
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section id="services" className="bg-white px-6 py-14 md:px-16 md:py-30">
        <div>
          <p className="reveal font-mono text-xs uppercase tracking-[0.35em] text-[#ff5448]">// 01 our services</p>
          <h2 className="reveal mt-3 font-display text-5xl font-black uppercase tracking-[-0.02em] text-[#0a0a0a] md:text-7xl md:leading-[1]">
            What we build.
          </h2>

          <div className="reveal mt-14 grid gap-6 md:grid-cols-3 md:justify-items-center">
            <div className="w-full max-w-md border border-black/20 p-8">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.05em] text-[#0a0a0a]">01</span>
              <h3 className="mt-6 font-display text-2xl font-black uppercase tracking-[-0.01em] text-[#0a0a0a]">Custom Websites</h3>
              <div className="mt-5 h-0.5 w-12 bg-[#ff5448]" />
              <p className="mt-6 font-body text-sm leading-7 text-[#303030]">
                Fully custom websites with an integrated admin panel — update content, products, or pages yourself, no developer needed for every small change.
              </p>
            </div>

            <div className="w-full max-w-md border border-black/20 p-8">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.05em] text-[#0a0a0a]">02</span>
              <h3 className="mt-6 font-display text-2xl font-black uppercase tracking-[-0.01em] text-[#0a0a0a]">AI Menus</h3>
              <div className="mt-5 h-0.5 w-12 bg-[#ff5448]" />
              <p className="mt-6 font-body text-sm leading-7 text-[#303030]">
                Smart, QR-based digital menus for restaurants — instant edits, no reprinting, multilingual support, and AI-powered recommendations.
              </p>
            </div>

            <div className="w-full max-w-md border border-black/20 p-8">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.05em] text-[#0a0a0a]">03</span>
              <h3 className="mt-6 font-display text-2xl font-black uppercase tracking-[-0.01em] text-[#0a0a0a]">AI Agents</h3>
              <div className="mt-5 h-0.5 w-12 bg-[#ff5448]" />
              <p className="mt-6 font-body text-sm leading-7 text-[#303030]">
                Custom AI agents to automate customer support, bookings, and business workflows.
              </p>
              <span className="mt-8 inline-flex border border-[#ff5448] px-3 py-1 text-xs font-mono uppercase tracking-[0.28em] text-[#ff5448]">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section id="work" className="border-b border-white/20 px-6 py-14 md:px-16 md:py-30">
        <div>
          <p className="reveal font-mono text-xs uppercase tracking-[0.35em] text-[#ff5448]">// 02 our portfolio</p>
          <h2 className="reveal mt-3 font-display text-5xl font-black uppercase tracking-[-0.04em] text-white md:text-7xl md:leading-[1]">
            Our Work.
          </h2>

          <div className="reveal mt-14 grid gap-6 md:grid-cols-2">
            <article className="reveal border border-transparent transition hover:border-[#ff5448]">
              <div className="h-64 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'720\' height=\'400\' viewBox=\'0 0 720 400\'%3E%3Crect width=\'720\' height=\'400\' fill=\'%23101010\'/%3E%3Cpath d=\'M0 260 Q180 220 360 260 T720 260 V400 H0 Z\' fill=\'%23ffffff11\'/%3E%3C/svg%3E')] bg-cover bg-center" />
              <div className="border-t border-white/20 p-8">
                <span className="font-mono text-xs uppercase tracking-[0.32em] text-[#ff5448]">E-Commerce</span>
                <h3 className="mt-3 font-display text-2xl font-black uppercase tracking-[-0.01em] text-white">
                  Orlev Pressons{" "}
                  <span className="inline-block text-[#ff5448]">↗</span>
                </h3>
                <p className="mt-3 font-body text-sm leading-7 text-white/60">
                  Premium press-on nails brand — modern, conversion-focused storefront built from scratch.
                </p>
              </div>
            </article>

            <article className="reveal border border-transparent transition hover:border-[#ff5448]">
              <div className="h-64 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'720\' height=\'400\' viewBox=\'0 0 720 400\'%3E%3Crect width=\'720\' height=\'400\' fill=\'%23101010\'/%3E%3Cpath d=\'M0 240 Q180 200 360 240 T720 240 V400 H0 Z\' fill=\'%23ffffff11\'/%3E%3C/svg%3E')] bg-cover bg-center" />
              <div className="border-t border-white/20 p-8">
                <span className="font-mono text-xs uppercase tracking-[0.32em] text-[#ff5448]">Concept</span>
                <h3 className="mt-3 font-display text-2xl font-black uppercase tracking-[-0.01em] text-white">
                  Export Catalog Concept{" "}
                  <span className="inline-block text-[#ff5448]">↗</span>
                </h3>
                <p className="mt-3 font-body text-sm leading-7 text-white/60">
                  Buyer-facing product catalog concept for manufacturers, built to establish trust with international buyers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section id="process" className="bg-white px-8 py-16 md:px-16 md:py-30">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="reveal font-mono text-xs uppercase tracking-[0.35em] text-[#ff5448]">// 03 our philosophy</p>
            <h2 className="reveal mt-3 font-display text-6xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#0a0a0a] md:text-7xl">
              Your business deserves better than a template.
            </h2>
            <p className="reveal mt-6 font-body text-base leading-8 text-[#303030] md:text-lg md:leading-9">
              Whether you&apos;re an exporter whose buyers check you out before replying to an inquiry, or a restaurant tired of repeating menus every time prices change — we build for the business you actually run, not a generic template pretend to fit everyone.
            </p>
            <div className="reveal mt-8 grid gap-4 sm:grid-cols-2">
              <div className="p-6">
                <h3 className="font-display text-lg font-black uppercase text-[#0a0a0a]">Built for your industry</h3>
                <p className="mt-3 font-body text-sm leading-7 text-[#303030]">Export catalogs, digital menus, and tailored systems built to earn your customers&apos; trust.</p>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-black uppercase text-[#0a0a0a]">No disappearing act</h3>
                <p className="mt-3 font-body text-sm leading-7 text-[#303030]">Clear communication, dependable timelines, and support that continues after launch.</p>
              </div>
            </div>

          </div>

            <div className="reveal border border-[#ff5448]/80 p-8">
            <div className="border border-[#ff5448]/80 p-6">
              <div className="h-64 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'720\' height=\'540\' viewBox=\'0 0 720 540\'%3E%3Crect width=\'720\' height=\'540\' fill=\'%23f0f0f0\'/%3E%3Cpath d=\'M0 400 Q180 320 360 380 T720 400 V540 H0 Z\' fill=\'%2300000008\'/%3E%3C/svg%3E')] bg-cover bg-center" />
              <div className="mt-6 border-2 border-[#ff5448] bg-white p-5">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff5448]">FREE WEBSITE AUDIT — NO COST, NO OBLIGATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section id="contact" className="px-8 py-16 md:px-16 md:py-30">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div>
            <p className="reveal font-mono text-xs uppercase tracking-[0.35em] text-[#ff5448]">// 04 let&apos;s talk</p>
            <h2 className="reveal mt-3 font-display text-6xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Let&apos;s fix what&apos;s holding your business back online.
            </h2>

            <div className="reveal mt-10 space-y-0 relative">
              <div className="absolute left-2 top-3 bottom-3 w-px bg-[#ff5448]/30" />

              <div className="relative flex items-start gap-5 pb-14">
                <div className="relative z-10 mt-1 h-4 w-4 rounded-full bg-[#ff5448] pulse-dot" />
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5448]">Step 01</span>
                  <h3 className="mt-1 font-display text-xl font-black uppercase text-white">Free Audit</h3>
                  <p className="mt-2 font-body text-sm leading-7 text-white/60">We look at your current website or the fact that you don&apos;t have one and tell you exactly what&apos;s costing you customers.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-5 pb-14">
                <div className="relative z-10 mt-1 h-4 w-4 rounded-full bg-[#ff5448] pulse-dot" />
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5448]">Step 02</span>
                  <h3 className="mt-1 font-display text-xl font-black uppercase text-white">Build</h3>
                  <p className="mt-2 font-body text-sm leading-7 text-white/60">We design and build your website or digital menu system — mobile-ready, fast, and made for your actual customers.</p>
                </div>
              </div>

              <div className="relative flex items-start gap-5">
                <div className="relative z-10 mt-1 h-4 w-4 rounded-full bg-[#ff5448] pulse-dot" />
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff5448]">Step 03</span>
                  <h3 className="mt-1 font-display text-xl font-black uppercase text-white">Launch & Support</h3>
                  <p className="mt-2 font-body text-sm leading-7 text-white/60">We launch it, then stick around for updates, changes, and support — not just a one-time handoff.</p>
                </div>
              </div>
            </div>
          </div>

          <form action="https://formsubmit.co/abdullahnoordev@gmail.com" method="POST" className="reveal border border-white/20 p-8 min-h-[550px] md:min-h-[600px]">
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 font-body text-sm text-white/60">
                Name
                <input type="text" name="name" placeholder="John Doe" className="w-full rounded-md border border-white/20 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#ff5448]" required />
              </label>
              <label className="space-y-2 font-body text-sm text-white/60">
                Email or phone
                <input type="text" name="email_or_phone" placeholder="+1 234 567 8900" className="w-full rounded-md border border-white/20 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#ff5448]" required />
              </label>
            </div>
            <label className="mt-5 block space-y-2 font-body text-sm text-white/60">
              Your business URL
              <input type="text" name="business_url" placeholder="yourbusiness.com" className="w-full rounded-md border border-white/20 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#ff5448]" />
            </label>
            <label className="mt-5 block space-y-2 font-body text-sm text-white/60">
              Project details
              <textarea name="project_details" placeholder="Briefly describe your project..." rows={5} className="w-full rounded-md border border-white/20 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#ff5448]" required />
            </label>
            <button type="submit" className="mt-8 flex h-12 w-full items-center justify-center rounded-md border border-transparent bg-[#ff5448] px-8 text-xs font-mono font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#ff5448] hover:bg-white hover:text-[#ff5448] cursor-pointer">
              Request Free Audit
            </button>
            <p className="mt-5 text-center font-mono text-xs uppercase tracking-[0.35em] text-white/40">We usually reply within 24 hours.</p>
          </form>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <footer className="flex flex-col gap-4 border-t border-white/20 px-8 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-16">
        <p className="reveal font-body text-white/50">&copy; 2026 Vexoro Digital. All rights reserved.</p>
        <div className="reveal flex flex-wrap items-center gap-6">
          <a href="#" className="font-mono text-xs uppercase tracking-[0.2em] text-white transition hover:text-[#ff5448]">Privacy Policy</a>
          <a href="#" className="font-mono text-xs uppercase tracking-[0.2em] text-white transition hover:text-[#ff5448]">LinkedIn</a>
          <a href="#" className="font-mono text-xs uppercase tracking-[0.2em] text-white transition hover:text-[#ff5448]">Behance</a>
        </div>
      </footer>
      </ScrollReveal>
    </main>
  );
}
