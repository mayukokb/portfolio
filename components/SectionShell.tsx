'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type SectionShellProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export function SectionShell({ id, className = '', children }: SectionShellProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-hidden mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 ${className} ${isVisible ? 'section-visible' : ''}`}
    >
      {children}
    </section>
  );
}
