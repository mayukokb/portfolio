'use client';

import { useState } from 'react';

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact & Blog', href: '#contact' }
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-lg font-semibold tracking-tight text-slate-900">Your Studio</div>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 sm:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigate(link.href)}
              className="rounded-full px-2 py-1 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 sm:hidden"
        >
          <span className="block h-0.5 w-6 bg-slate-900"></span>
          <span className="mt-1 block h-0.5 w-6 bg-slate-900"></span>
          <span className="mt-1 block h-0.5 w-6 bg-slate-900"></span>
        </button>
      </div>
      {open && (
        <div className="sm:hidden">
          <div className="space-y-2 border-t border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className="block w-full text-left rounded-md px-2 py-2 transition hover:bg-slate-100"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
