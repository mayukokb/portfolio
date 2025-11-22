'use client';

// Quick editing guide for you later:
// - Update your name (hero title)
// - Update your tagline and subheading
// - Replace the bio text in the About section
// - Swap project titles, descriptions, and tags
// - Update the contact email
// - Replace blog post titles and descriptions

import { useCallback } from 'react';
import { NavBar } from '@/components/NavBar';
import { HeroCard } from '@/components/HeroCard';
import { SectionShell } from '@/components/SectionShell';

const SparkIcon = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 3v6m0 14v6m-7-7h6m2 0h6m-9-9-4-4m12 12-4-4m0 0-4 4m12-12-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="11" />
    <path d="m13 13-3 10 10-3 3-10-10 3Z" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="8" width="22" height="16" rx="2" />
    <path d="m6 10 10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const heroCards = [
  {
    title: 'About Me',
    description: 'Get a quick snapshot of my design story and strengths.',
    accent: 'accentBlue' as const,
    icon: <SparkIcon />,
    target: '#about'
  },
  {
    title: 'Projects',
    description: 'Selected UX / product work across web and mobile.',
    accent: 'accentGreen' as const,
    icon: <CompassIcon />,
    target: '#projects'
  },
  {
    title: 'Contact & Blog',
    description: 'Let’s collaborate or browse thoughts-in-progress.',
    accent: 'accentOrange' as const,
    icon: <EnvelopeIcon />,
    target: '#contact'
  }
];

const expertiseBadges = ['UX Research', 'Interaction Design', 'Prototyping', 'Service Design'];

const projects = [
  {
    title: 'Service Portal Reimagined',
    description: 'Redesigned a legacy service portal into a streamlined, self-serve experience.',
    tags: ['Product Strategy', 'Figma', 'Design Systems']
  },
  {
    title: 'Mobile Wellness Companion',
    description: 'Crafted an empathetic companion app that nudges healthy routines and reflection.',
    tags: ['User Interviews', 'Prototyping', 'Motion']
  },
  {
    title: 'Retail Checkout Simplified',
    description: 'Improved in-store checkout by reducing decision friction and clarifying steps.',
    tags: ['Interaction Design', 'Research Ops', 'Analytics']
  }
];

const blogPosts = [
  {
    title: 'Designing for calm defaults',
    description: 'Thoughts on lowering cognitive load in high-signal experiences.'
  },
  {
    title: 'Workshops that actually align teams',
    description: 'Lightweight facilitation patterns that invite real co-creation.'
  },
  {
    title: 'Prototyping as a negotiation tool',
    description: 'Using prototypes to negotiate trade-offs before code.'
  }
];

export default function HomePage() {
  const scrollTo = useCallback((target: string) => {
    const element = document.querySelector(target);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#eef2ff] to-white">
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Designing confident digital products for people and teams.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
              I partner with founders and product teams to turn complex problems into experiences that feel effortless. Research-led, systems-minded, and always prototyping.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {heroCards.map((card) => (
                <HeroCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  accent={card.accent}
                  onClick={() => scrollTo(card.target)}
                />
              ))}
            </div>
          </div>

          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accentBlue/90 via-accentOrange/70 to-accentGreen/80 opacity-80 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span className="font-semibold">Selected work</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">In focus</span>
              </div>
              <div className="mt-8 space-y-6 text-white">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.28em] text-accentOrange">Experience snapshot</p>
                  <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Guiding products from research to launch.</h2>
                  <p className="max-w-xl text-sm text-slate-200/90">
                    Workshops, service blueprints, interaction models, and polished prototypes to help teams move with clarity.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-200/80">Toolkit</p>
                    <p className="mt-2 text-lg font-semibold">Research → Strategy → Systems</p>
                    <p className="text-sm text-slate-200/80">Align teams with evidence and articulate the path forward.</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-200/80">Craft</p>
                    <p className="mt-2 text-lg font-semibold">Interfaces with intent</p>
                    <p className="text-sm text-slate-200/80">Design systems, motion cues, and flows that feel cohesive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SectionShell id="about" className="bg-white/80 backdrop-blur">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">About</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Design partner & product generalist.</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
              I translate ambiguous problems into confident product directions. From framing and research to interaction design, I help teams craft experiences that respect both the business and the people using them.
            </p>
            <div className="flex flex-wrap gap-3">
              {expertiseBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-[#eef2ff] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,131,255,0.12),_transparent_45%),_radial-gradient(circle_at_bottom_right,_rgba(244,183,64,0.12),_transparent_40%)]" aria-hidden />
            <div className="relative space-y-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-accentBlue/80 via-accentOrange/70 to-accentGreen/80" aria-hidden />
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Profile</p>
                <p className="text-lg font-medium text-slate-800">Based in Anywhere · Available for remote collaborations and in-person workshops.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Approach</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">Evidence first, then bold design moves.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Collab</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">Partnering with PMs, engineers, and stakeholders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="projects" className="bg-white">
        <div className="space-y-8">
          <div className="flex flex-col gap-3 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Projects</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Case studies with measurable outcomes.</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              A snapshot of product collaborations that blend research, design systems, and narrative storytelling to ship with confidence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-xl font-semibold text-slate-900">{project.title}</div>
                  <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">New</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-accentBlue">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 transition hover:text-slate-900"
                    onClick={(e) => e.preventDefault()}
                  >
                    View more details
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="contact" className="bg-gradient-to-br from-white via-slate-50 to-[#eef2ff]">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Contact</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Let’s design the next release together.</h2>
            <p className="text-lg leading-relaxed text-slate-700">Let’s explore collaborations, workshops, or product design sprints.</p>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Email</p>
              <p className="text-xl font-semibold text-slate-900">you@example.com</p>
            </div>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/30"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/30"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/30"
                  placeholder="Project idea, collaboration, or a friendly hello"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Journal</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Signals, notes, and essays in progress.</h2>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{post.description}</p>
                    </div>
                    <span className="rounded-full bg-accentOrange/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accentOrange">
                      Coming soon
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
