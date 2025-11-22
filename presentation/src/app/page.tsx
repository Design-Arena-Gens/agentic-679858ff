'use client';

import { useMemo, useState } from "react";

const navItems = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "Regulatory Lens", href: "#regulatory" },
  { label: "Transformation Roadmap", href: "#roadmap" },
  { label: "Investment Case", href: "#investment" },
  { label: "Action Plan", href: "#action-plan" },
];

const performanceMetrics = [
  {
    label: "Fleet Coverage",
    value: "92%",
    helper: "Share of vessels assessed for EEXI gap",
  },
  {
    label: "Average Delta",
    value: "-7.4%",
    helper: "Required improvement vs. reference line",
  },
  {
    label: "Fuel Cost Exposure",
    value: "$36M",
    helper: "Projected annual fuel spend at 2024 bunker prices",
  },
  {
    label: "Retrofit IRR",
    value: "18-22%",
    helper: "Blended return for propulsion & digital upgrades",
  },
];

const regulatoryHighlights = [
  {
    title: "IMO 2023",
    detail:
      "EEXI compliance mandatory for all vessels ≥400 GT in 2023; non-compliance triggers corrective action plans or detention.",
  },
  {
    title: "Carbon Intensity Indicator (CII)",
    detail:
      "Annual operational rating tightens year-on-year. EEXI retrofits mitigate the risk of C/D ratings that drive charter penalties.",
  },
  {
    title: "Regional Schemes",
    detail:
      "EU ETS inclusion in 2024 and FuelEU Maritime in 2025 materially impact OPEX; proactive EEXI upgrades offset carbon price escalation.",
  },
];

const timeline = [
  {
    phase: "Now – Q3 2024",
    title: "Insight & Prioritization",
    bullets: [
      "Digital twin baseline for propulsion, hull, auxiliary systems.",
      "Rank vessels by delta to EEXI reference and charter exposure.",
      "Vendor shortlist for engine power limitation (EPL) and propulsion packages.",
    ],
  },
  {
    phase: "Q4 2024",
    title: "Design Authority",
    bullets: [
      "Approve technology stack: EPL automation, wake equalizing ducts, advanced hull coatings.",
      "Secure drydock windows and class approvals per vessel tranche.",
      "Structure financing via green-linked debt and charter pass-through.",
    ],
  },
  {
    phase: "2025",
    title: "Execution & Scale",
    bullets: [
      "Install EPL kits and propulsion upgrades for top 40% fuel consumers.",
      "Deploy trim optimization and weather routing platform fleet-wide.",
      "Track verified savings through MRV-ready measurement framework.",
    ],
  },
];

const optimizationLevers = [
  {
    title: "Propulsion Efficiency",
    items: [
      "EPL with adaptive control logic & bridge dashboards",
      "High-efficiency propeller retrofits/silicon-based coatings",
      "Rudder bulb + wake equalizing duct synergies",
    ],
  },
  {
    title: "Hull & Hydrodynamics",
    items: [
      "Low-friction nano-coatings delivering 2–4% fuel reduction",
      "Condition-based hull cleaning triggered by sensor data",
      "Air lubrication feasibility for LNG carriers & cruise vessels",
    ],
  },
  {
    title: "Operational Intelligence",
    items: [
      "Digital twin scenario engine with noon-report ingestion",
      "AI voyage planning with weather, congestion, fuel pricing",
      "Charter party compliance automation & KPI dashboards",
    ],
  },
];

const retrofitPackages = {
  technical: [
    {
      name: "Tier 1: Power Limitation",
      capex: "$0.4M / vessel",
      benefit: "5–7% EEXI improvement, 2% fuel savings",
      notes:
        "Rapid deployment in 3–4 days; voyage management tools ensure charter compliance.",
    },
    {
      name: "Tier 2: Propulsion Suite",
      capex: "$1.2M / vessel",
      benefit: "Up to 9% EEXI improvement, 6% fuel savings",
      notes:
        "Combines propeller upgrade, rudder enhancements, and premium hull coating.",
    },
    {
      name: "Tier 3: Next-Gen Retrofit",
      capex: "$3.6M / vessel",
      benefit: "15%+ EEXI improvement, 10–12% fuel savings",
      notes:
        "Air lubrication or hybridization options; targets flagship vessels with high carbon exposure.",
    },
  ],
  operational: [
    {
      name: "Voyage Intelligence",
      capex: "$0.15M / fleet",
      benefit: "3–5% fuel efficiency uplift",
      notes: "Dynamic route optimization, port call analytics, and Carbon Intensity Indicator score tracking.",
    },
    {
      name: "Data Stack Modernization",
      capex: "$0.22M / fleet",
      benefit: "Single source of truth for emissions KPIs",
      notes: "API ingestion from noon reports, VDR, flow meters into a cloud emissions lakehouse.",
    },
    {
      name: "Crew Enablement",
      capex: "$0.08M / fleet",
      benefit: "1–2% efficiency through behavior change",
      notes: "E-learning, bridge simulator refreshers, performance gamification tied to charter party incentives.",
    },
  ],
};

const investmentDrivers = [
  {
    title: "Fuel & Carbon Arbitrage",
    value: "$6.5M",
    detail: "Annual savings at $650/t fuel with EU ETS at €45/t by 2025.",
  },
  {
    title: "Charter Rate Premium",
    value: "4–6%",
    detail: "Average hire uplift for EEXI-ready tonnage in 2023 fixtures.",
  },
  {
    title: "Reputation & Compliance",
    value: "Zero detentions",
    detail: "Maintains unblemished vetting record for oil majors & liner alliances.",
  },
];

const caseStudy = {
  headline: "Case Study: 10 Suezmax Tankers",
  details: [
    "Invested $12.4M in propulsion retrofits and digital performance tools.",
    "Delivered 9.8% measured fuel reduction validated by third-party class society.",
    "Secured long-term charter extensions with 5% rate premium post-upgrade.",
  ],
  figures: [
    { label: "Payback", value: "2.3 yrs" },
    { label: "CO₂ abatement", value: "78k t/y" },
    { label: "NPV (7%)", value: "$14.6M" },
  ],
};

export default function Home() {
  const [activePackage, setActivePackage] = useState<"technical" | "operational">(
    "technical",
  );

  const packages = useMemo(() => retrofitPackages[activePackage], [activePackage]);

  return (
    <div className="relative mx-auto min-h-screen max-w-7xl px-4 pb-28 pt-10 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-10 top-24 -z-10 h-[620px] rounded-3xl bg-white/75 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.55)] backdrop-blur-3xl dark:bg-white/5" />
      <header className="mb-16 flex flex-col gap-10 rounded-3xl border border-white/40 bg-white/70 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">
            Energy Efficiency Existing Ship Index
          </p>
          <h1 className="mt-3 max-w-xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Operational Playbook for High-Performance, EEXI-Compliant Fleets
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            A board-ready narrative aligning regulatory urgency, technical retrofits, and
            commercial upside to accelerate compliance across the existing fleet.
          </p>
        </div>
        <nav className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-300/70 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-500 hover:text-sky-600 dark:border-white/20 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="space-y-20 lg:space-y-24">
        <section
          id="executive-summary"
          className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Executive Summary
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                EEXI is the technical gateway to the IMO&apos;s decarbonization trajectory. Our
                fleet faces an average 7.4% efficiency delta versus the reference line. The
                integrated program—combining targeted retrofits with operational intelligence—closes
                the compliance gap while releasing $6.5M of annual value from fuel and carbon
                arbitrage.
              </p>
              <div className="mt-6 inline-flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                  24-month transformation
                </span>
                <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                  18–22% project IRR
                </span>
                <span className="rounded-full bg-slate-900 px-4 py-1 text-sm font-medium text-white dark:bg-white/10 dark:text-white">
                  Charter-ready compliance
                </span>
              </div>
            </div>
            <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-white/10 dark:bg-white/5">
              <div className="grid grid-cols-2 gap-4">
                {performanceMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/10"
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">
                      {metric.helper}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="regulatory"
          className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Regulatory Landscape & Risk
            </h2>
            <span className="rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white dark:bg-white/10 dark:text-white">
              Mandatory 2023+
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {regulatoryHighlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="roadmap"
          className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              EEXI Transformation Roadmap
            </h2>
            <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
              Sequenced delivery across analytics, engineering, and operations ensures minimum
              off-hire while securing charter compliance. Each phase culminates in measurable EEXI
              uplift and verifiable emissions reporting.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <div
                key={item.phase}
                className="flex h-full flex-col gap-5 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white/90 to-slate-50/60 p-6 dark:border-white/10 dark:from-white/10 dark:to-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
                    {item.phase}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-500 dark:bg-sky-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="investment"
          className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Investment Thesis & Value Drivers
              </h2>
              <p className="mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-300">
                The retrofit program blends high-impact technical upgrades with scalable digital
                solutions. Payback periods remain within 30 months while safeguarding charter
                revenue and reducing carbon exposure.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>Verified via class-approved sea trials & MRV data</span>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 dark:border-white/10 dark:bg-white/10">
              <div className="mb-6 flex flex-wrap gap-3">
                {activePackage === "technical" ? (
                  <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                    Technical Retrofit Stack
                  </span>
                ) : (
                  <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                    Operational Optimization Stack
                  </span>
                )}
                <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  Modeled with conservative bunker prices
                </span>
              </div>
              <div className="mb-6 flex gap-3 rounded-full bg-slate-100/70 p-1 dark:bg-white/10">
                {(["technical", "operational"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActivePackage(type)}
                    className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                      activePackage === type
                        ? "bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white"
                        : "text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {type === "technical" ? "Technical" : "Operational"}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-sm leading-relaxed shadow-sm dark:border-white/10 dark:bg-white/10"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                        {pkg.name}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                        {pkg.capex}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-300">Capex</p>
                    </div>
                    <p className="text-sky-700 dark:text-sky-200">{pkg.benefit}</p>
                    <p className="text-slate-600 dark:text-slate-300">{pkg.notes}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {investmentDrivers.map((driver) => (
                <div
                  key={driver.title}
                  className="rounded-2xl border border-slate-200/80 bg-gradient-to-r from-white/90 to-slate-50/40 p-6 shadow-sm dark:border-white/10 dark:from-white/10 dark:to-white/5"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
                    {driver.title}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                    {driver.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {driver.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr,1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Optimization Pillars
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Technical retrofits and digital levers work together to maintain EEXI compliance
                even as CII thresholds tighten. Each pillar delivers measurable uplift with
                trackable KPIs.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 text-sm text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
              <p className="font-medium text-slate-900 dark:text-white">
                KPI Alignment
              </p>
              <p className="mt-2">
                - EEXI (technical baseline) <br />
                - CII (operational performance) <br />
                - EU ETS verified CO₂ cost
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {optimizationLevers.map((lever) => (
              <div
                key={lever.title}
                className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {lever.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {lever.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-500 dark:bg-sky-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                {caseStudy.headline}
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Full-scale retrofit execution with aligned commercial strategy demonstrates the
                upside of coordinated technical and operational interventions.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                {caseStudy.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-500 dark:bg-emerald-300" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-lg dark:border-white/10">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Performance Snapshot
              </p>
              <div className="grid grid-cols-3 gap-4">
                {caseStudy.figures.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/5 p-4 text-center"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      {item.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/80">
                3rd-party verification: Lloyd&apos;s Register, April 2024 sea trials.
              </p>
            </div>
          </div>
        </section>

        <section
          id="action-plan"
          className="rounded-3xl border border-white/40 bg-slate-900 p-10 text-white shadow-2xl backdrop-blur-xl dark:border-white/10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                90-Day Action Plan
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Mobilize the cross-functional squad and launch the pilot tranche
              </h2>
              <p className="mt-4 max-w-3xl text-base text-white/80">
                Establish the decarbonization PMO, finalize financing structure, and authorize
                engineering work packages. Fast-track the first retrofit tranche to capture fuel
                savings within the fiscal year.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-sm leading-relaxed">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                  <span>
                    Launch EEXI task force (engineering, chartering, finance) with weekly steering.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                  <span>
                    Approve digital twin scope and select analytics platform for KPI dashboarding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                  <span>
                    Execute pilot retrofits on three lead vessels; capture before/after sea trial
                    data within 45 days.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                  <span>
                    Finalize financing & charter alignment model to recycle savings into tranche two.
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#executive-summary"
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  Review Executive Summary
                </a>
                <a
                  href="mailto:decarbonisation@fleet.io"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Align Stakeholders
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
