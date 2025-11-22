import { ReactNode } from 'react';

type HeroCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  accent: 'accentBlue' | 'accentGreen' | 'accentOrange';
  onClick: () => void;
};

const containerAccent: Record<HeroCardProps['accent'], string> = {
  accentBlue: 'border-accentBlue/30 hover:border-accentBlue focus-visible:ring-accentBlue/30 shadow-[0_10px_40px_rgba(79,131,255,0.12)] hover:shadow-[0_18px_50px_rgba(79,131,255,0.18)]',
  accentGreen: 'border-accentGreen/30 hover:border-accentGreen focus-visible:ring-accentGreen/30 shadow-[0_10px_40px_rgba(108,203,142,0.12)] hover:shadow-[0_18px_50px_rgba(108,203,142,0.18)]',
  accentOrange: 'border-accentOrange/30 hover:border-accentOrange focus-visible:ring-accentOrange/30 shadow-[0_10px_40px_rgba(244,183,64,0.12)] hover:shadow-[0_18px_50px_rgba(244,183,64,0.18)]'
};

const iconAccent: Record<HeroCardProps['accent'], string> = {
  accentBlue: 'from-accentBlue/20 via-accentBlue/10 to-accentBlue/5 text-accentBlue',
  accentGreen: 'from-accentGreen/20 via-accentGreen/10 to-accentGreen/5 text-accentGreen',
  accentOrange: 'from-accentOrange/20 via-accentOrange/10 to-accentOrange/5 text-accentOrange'
};

export function HeroCard({ title, description, icon, accent, onClick }: HeroCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex h-full flex-col items-start gap-4 rounded-2xl border bg-white/90 p-6 text-left transition duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 ${containerAccent[accent]}`}
    >
      <span className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${iconAccent[accent]}`}></span>
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconAccent[accent]} transition duration-200 group-hover:scale-105`}
        >
          {icon}
        </div>
        <div className="text-xl font-semibold text-slate-900">{title}</div>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </button>
  );
}
