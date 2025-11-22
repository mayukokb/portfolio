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

const heroCards = [
  {
    title: 'About Me',
    description: 'Get a quick snapshot of my design story and strengths.',
    accent: 'accentBlue' as const,
    target: '#about'
  },
  {
    title: 'Projects',
    description: 'Selected UX / product work across web and mobile.',
    accent: 'accentGreen' as const,
    target: '#projects'
  },
  {
    title: 'Contact & Blog',
    description: 'Let’s collaborate or browse thoughts-in-progress.',
    accent: 'accentOrange' as const,
    target: '#contact-blog'
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
    <div className="min-h-screen">
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 py-24 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-600">Portfolio</p>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-[#0a0a0a] sm:text-5xl md:text-6xl lg:text-7xl">
                Designing confident digital products.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 sm:text-xl">
                I partner with founders and product teams to turn complex problems into experiences that feel effortless. Research-led,
                systems-minded, and always prototyping.
              </p>
            </div>
          </div>

          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#cfe0ff] via-[#f7e6c4] to-[#d8f3dc] shadow-[0_32px_80px_rgba(10,10,10,0.16)]" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[0_24px_70px_rgba(10,10,10,0.12)] backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(79,131,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(244,183,64,0.18),transparent_30%),radial-gradient(circle_at_60%_90%,rgba(108,203,142,0.18),transparent_35%)]" aria-hidden />
              <div className="relative space-y-6 text-[#0a0a0a]">
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-600">Strategy meets craft</p>
                  <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">Focused on clarity, momentum, and trustworthy experiences.</h2>
                  <p className="max-w-xl text-sm leading-relaxed text-neutral-700">
                    From mapping systems to shaping interfaces, I help teams move from ambiguity to confident releases.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(10,10,10,0.08)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">Approach</p>
                    <p className="mt-2 text-base font-semibold text-[#0a0a0a]">Evidence first, decisive outcomes.</p>
                    <p className="text-sm leading-relaxed text-neutral-700">Align research, intent, and delivery to keep the team moving together.</p>
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(10,10,10,0.08)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">Craft</p>
                    <p className="mt-2 text-base font-semibold text-[#0a0a0a]">Interfaces that stay cohesive.</p>
                    <p className="text-sm leading-relaxed text-neutral-700">Systems, motion, and prototyping that make complex flows feel simple.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">Navigate</p>
            <h2 className="text-2xl font-semibold text-[#0a0a0a]">Jump to the essentials.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {heroCards.map((card) => (
              <HeroCard
                key={card.title}
                title={card.title}
                description={card.description}
                accent={card.accent}
                onClick={() => scrollTo(card.target)}
              />
            ))}
          </div>
        </section>
      </main>

      <SectionShell id="about" className="bg-white/70 backdrop-blur">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">About</p>
            <h2 className="text-3xl font-bold text-[#0a0a0a] sm:text-4xl">Design partner & product generalist.</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
              I translate ambiguous problems into confident product directions. From framing and research to interaction design, I help
              teams craft experiences that respect both the business and the people using them.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {expertiseBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-semibold text-[#0a0a0a] shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-4 rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-[0_18px_60px_rgba(10,10,10,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-600">Profile</p>
              <p className="text-lg font-medium text-[#0a0a0a]">Based in Anywhere · Available for remote collaborations and in-person workshops.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-[0_12px_40px_rgba(10,10,10,0.06)]">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">Approach</p>
                <p className="mt-2 text-base font-semibold text-[#0a0a0a]">Evidence first, then bold design moves.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-[0_12px_40px_rgba(10,10,10,0.06)]">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">Collaboration</p>
                <p className="mt-2 text-base font-semibold text-[#0a0a0a]">Partnering with PMs, engineers, and stakeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="projects" className="bg-white/60 backdrop-blur">
        <div className="space-y-8">
          <div className="space-y-3 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">Projects</p>
            <h2 className="text-3xl font-bold text-[#0a0a0a] sm:text-4xl">Case studies with measurable outcomes.</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
              A snapshot of product collaborations that blend research, design systems, and narrative storytelling to ship with confidence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white/85 p-6 shadow-[0_18px_60px_rgba(10,10,10,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(10,10,10,0.08)]"
              >
                <div className="text-xl font-semibold text-[#0a0a0a]">{project.title}</div>
                <p className="text-sm leading-relaxed text-neutral-700">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-[#f7f7f7] px-3 py-1 text-xs font-semibold text-[#0a0a0a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-2 text-sm font-semibold text-accentBlue">Details coming soon</div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="contact-blog" className="bg-white/70 backdrop-blur">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">Contact</p>
            <h2 className="text-3xl font-bold text-[#0a0a0a] sm:text-4xl">Let’s design the next release together.</h2>
            <p className="text-lg leading-relaxed text-neutral-700">Let’s explore collaborations, workshops, or product design sprints.</p>
            <div className="rounded-2xl border border-neutral-200 bg-white/85 p-6 shadow-[0_16px_50px_rgba(10,10,10,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-600">Email</p>
              <p className="text-xl font-semibold text-[#0a0a0a]">you@example.com</p>
            </div>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-3 text-[#0a0a0a] shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/30"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-3 text-[#0a0a0a] shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/30"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-3 text-[#0a0a0a] shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/30"
                  placeholder="Project idea, collaboration, or a friendly hello"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#0a0a0a] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(10,10,10,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(10,10,10,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">Journal</p>
            <h2 className="text-3xl font-bold text-[#0a0a0a] sm:text-4xl">Signals, notes, and essays in progress.</h2>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="rounded-2xl border border-neutral-200 bg-white/85 p-5 shadow-[0_16px_50px_rgba(10,10,10,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(10,10,10,0.08)]"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#0a0a0a]">{post.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-700">{post.description}</p>
                  </div>
                  <span className="mt-3 inline-block rounded-full bg-accentOrange/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accentOrange">
                    Coming soon
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
