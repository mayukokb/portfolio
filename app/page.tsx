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
    icon: '✨',
    target: '#about'
  },
  {
    title: 'Projects',
    description: 'Selected UX / product work across web and mobile.',
    accent: 'accentGreen' as const,
    icon: '🧭',
    target: '#projects'
  },
  {
    title: 'Contact & Blog',
    description: 'Let’s collaborate or browse thoughts-in-progress.',
    accent: 'accentOrange' as const,
    icon: '✉️',
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
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <section className="flex flex-col items-start gap-8 py-10 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Portfolio</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">Your Name Here</h1>
            <p className="text-lg font-medium text-slate-700 sm:text-xl">UX / UI &amp; Product Designer</p>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              I design digital products that balance thoughtful research, crisp interaction patterns, and narrative clarity.
            </p>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>
      </main>

      <SectionShell id="about" className="bg-white">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="h-28 w-28 rounded-full bg-slate-100" aria-hidden />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">About Me</h2>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              I translate messy, ambiguous problems into confident product directions. I partner closely with teams to prototype, test,
              and refine experiences that feel effortless for people.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="projects" className="bg-white">
        <div className="space-y-6">
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Projects</h2>
            <p className="text-base text-slate-600 sm:text-lg">Selected case studies that explore research-led product design.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="text-lg font-semibold text-slate-900">{project.title}</div>
                <p className="text-sm text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                  <a
                    href="#"
                    className="text-sm font-semibold text-accentBlue transition hover:text-slate-900"
                    onClick={(e) => e.preventDefault()}
                  >
                    View more details ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="contact" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Contact</h2>
            <p className="text-base text-slate-600 sm:text-lg">Let’s explore collaborations, workshops, or product design sprints.</p>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
              <p className="text-sm font-medium text-slate-700">Email</p>
              <p className="text-lg font-semibold text-slate-900">you@example.com</p>
            </div>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/40"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/40"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/40"
                  placeholder="Project idea, collaboration, or a friendly hello"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accentGreen px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-accentGreen"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Blog</h2>
            <p className="text-base text-slate-600 sm:text-lg">Notes from in-progress thinking and product experiments.</p>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
                      <p className="text-sm text-slate-600">{post.description}</p>
                    </div>
                    <span className="rounded-full bg-accentOrange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accentOrange">
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
