import React, { useState } from 'react'

function Icon({ children, className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {children}
    </svg>
  )
}

const icons = {
  check: (
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l5.25 5.25L19.5 8.25" />
  ),
  sparkles: (
    <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 3.8L18 8.5l-4.2 1.1L12 13 10.2 9.6 6 8.5l4.2-1.7L12 3zM6 15l.9 1.8L9 18l-2.1.6L6 21l-.9-2.4L3 18l2.1-.2L6 15zM17 14l.7 1.5 1.6.4-1.3.9.2 1.7-1.2-1-1.5.6.7-1.6-1.1-1.1 1.6.1L17 14z" />
  ),
  bolt: (
    <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  ),
  shield: (
    <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
  ),
  bar: (
    <>
      <rect x="3" y="10" width="3" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9.5" y="6" width="3" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16" y="3" width="3" height="17" rx="1" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  menu: (
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M3.5 6h17M3.5 12h17M3.5 18h17" />
  ),
  close: (
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 5l14 14M19 5L5 19" />
  ),
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-neutral-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400" />
            <span className="text-lg font-semibold tracking-tight">Nova</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-neutral-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-neutral-300 hover:text-white">Pricing</a>
            <a href="#testimonials" className="text-sm text-neutral-300 hover:text-white">Testimonials</a>
            <a href="#faq" className="text-sm text-neutral-300 hover:text-white">FAQ</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white">Sign in</a>
            <a href="#cta" className="rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/5" aria-label="Toggle menu">
            <Icon className="w-6 h-6 text-white">{open ? icons.close : icons.menu}</Icon>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {['Features','Pricing','Testimonials','FAQ'].map(link => (
              <a key={link} href={'#' + link.toLowerCase()} onClick={() => setOpen(false)}
                 className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5">
                {link}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#" className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-sm text-neutral-300 hover:bg-white/5">Sign in</a>
              <a href="#cta" onClick={() => setOpen(false)} className="flex-1 rounded-lg bg-white text-neutral-900 px-3 py-2 text-center text-sm font-medium hover:bg-neutral-200 transition">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:22px_22px]" />
      {/* gradient blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <span className="inline-flex -space-x-1 overflow-hidden">
              <span className="h-4 w-4 rounded-full bg-indigo-400/80" />
              <span className="h-4 w-4 rounded-full bg-sky-400/80" />
              <span className="h-4 w-4 rounded-full bg-emerald-400/80" />
            </span>
            New: AI analytics just shipped 🚀
          </p>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight">
            Grow faster with <span className="gradient-text">AI‑powered insights</span>
          </h1>
          <p className="mt-5 text-lg text-neutral-300">
            Nova helps you turn product data into decisions. Track, analyze, and act—
            all in a beautiful, blazing‑fast dashboard.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#pricing" className="w-full sm:w-auto rounded-xl bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-200">
              Start free trial
            </a>
            <a href="#features" className="w-full sm:w-auto rounded-xl border border-white/10 px-6 py-3 font-medium text-white hover:bg-white/5">
              See features
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center text-sm text-neutral-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-semibold text-white">2x</div>
              Faster decisions
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-semibold text-white">99.9%</div>
              Uptime SLA
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-2xl font-semibold text-white">14d</div>
              Free trial
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Logos() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-neutral-400">Trusted by teams at</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 opacity-80">
          {['Acme','Orbit','Vertex','Zenith','Nimbus','Pulse'].map((name,i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm tracking-wide">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sky-300">
        <Icon className="w-5 h-5">{icon}</Icon>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to ship faster</h2>
          <p className="mt-3 text-neutral-300">Powerful analytics, secure infrastructure, and delightful UX baked in.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={icons.bolt} title="Real‑time analytics" desc="See live usage, conversion, and retention with second‑level granularity." />
          <FeatureCard icon={icons.shield} title="Enterprise‑grade security" desc="SSO, audit logs, and role‑based access built in by default." />
          <FeatureCard icon={icons.bar} title="Custom dashboards" desc="Compose KPI cards and charts to match your team's goals." />
          <FeatureCard icon={icons.sparkles} title="AI insights" desc="Automatic anomaly detection and prioritized recommendations." />
          <FeatureCard icon={icons.check} title="Effortless integrations" desc="Drop‑in SDKs for web, iOS, Android, and server." />
          <FeatureCard icon={icons.bolt} title="Blazing performance" desc="Edge‑first architecture keeps dashboards snappy worldwide." />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, title }) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <blockquote className="text-neutral-200">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-neutral-400">
        <span className="font-medium text-white">{name}</span> • {title}
      </figcaption>
    </figure>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Loved by product teams</h2>
          <p className="mt-3 text-neutral-300">From early‑stage startups to global enterprises.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <TestimonialCard quote="Nova has transformed our weekly reviews. We ship decisions, not dashboards." name="Prachi Sharma" title="PM, Orbit Labs" />
          <TestimonialCard quote="Set‑up was a breeze. We got our first insights within an hour." name="Arjun Mehta" title="Founder, Pulse" />
          <TestimonialCard quote="The UX is beautiful and fast—even for our global team." name="Saanvi Rao" title="Data Lead, Zenith" />
        </div>
      </div>
    </section>
  )
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition
                  ${checked ? 'bg-white' : 'bg-white/20'}`}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-neutral-900 transition ${checked ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(true)
  const plans = [
    { name: 'Starter', price: 0, unit: '/mo', yearlyPrice: 0, features: ['Up to 3 projects','Basic analytics','Community support'] },
    { name: 'Pro', price: 19, unit: '/mo', yearlyPrice: 15, features: ['Unlimited projects','AI insights','Priority support'] },
    { name: 'Enterprise', price: 49, unit: '/mo', yearlyPrice: 39, features: ['SSO & RBAC','Audit logs','Dedicated manager'] },
  ]
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-300">Start free. Upgrade anytime.</p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm">
            <span className={!yearly ? 'text-white' : 'text-neutral-400'}>Monthly</span>
            <Toggle checked={yearly} onChange={setYearly} />
            <span className={yearly ? 'text-white' : 'text-neutral-400'}>Yearly <span className="text-emerald-400">(-20%)</span></span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((p, i) => {
            const price = yearly ? p.yearlyPrice : p.price
            const highlight = p.name === 'Pro'
            return (
              <div key={i} className={`relative rounded-2xl border ${highlight ? 'border-white/30 bg-white/10' : 'border-white/10 bg-white/5'} p-6 shadow-soft`}>
                {highlight && <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400 px-3 py-1 text-xs font-medium text-neutral-900">Most popular</span>}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold">{price === 0 ? 'Free' : `₹${price}`}</span>
                  {price !== 0 && <span className="text-sm text-neutral-400">{p.unit}</span>}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-400">{icons.check}</Icon>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium transition ${highlight ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'border border-white/10 hover:bg-white/5'}`}>
                  {p.price === 0 ? 'Start for free' : 'Get started'}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-emerald-400/20 p-8 sm:p-12 shadow-soft">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold">Start your 14‑day free trial today</h2>
            <p className="mt-2 max-w-xl text-neutral-200">Join thousands of teams using Nova to make faster, smarter decisions.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                required
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-white/30"
              />
              <button className="rounded-xl bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-200">
                Get started
              </button>
            </form>
            <p className="mt-2 text-xs text-neutral-400">No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    { q: 'Can I use Nova for free?', a: 'Yes. The Starter plan is free forever and is great for small side projects.' },
    { q: 'Do you offer student discounts?', a: 'Absolutely. Students get 30% off Pro—just email support after signup.' },
    { q: 'How secure is Nova?', a: 'We provide SSO, RBAC, and audit logs. Data is encrypted in transit and at rest.' },
  ]
  return (
    <section id="faq" className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Frequently asked questions</h2>
        <div className="mt-8 space-y-4">
          {items.map((it, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="flex cursor-pointer items-center justify-between">
                <span className="text-base font-medium">{it.q}</span>
                <span className="ml-4 text-neutral-400 group-open:rotate-45 transition">
                  <Icon className="w-5 h-5">{icons.close}</Icon>
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-300">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400" />
              <span className="font-semibold">Nova</span>
            </div>
            <p className="mt-3 text-neutral-400">Make better product decisions, faster.</p>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Product</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Company</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Resources</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Nova Analytics Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
