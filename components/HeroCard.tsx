import { ReactNode } from 'react';

type HeroCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  accent: 'accentBlue' | 'accentGreen' | 'accentOrange';
  onClick: () => void;
};

const containerAccent: Record<HeroCardProps['accent'], string> = {
  accentBlue: 'hover:border-accentBlue focus-visible:ring-accentBlue',
  accentGreen: 'hover:border-accentGreen focus-visible:ring-accentGreen',
  accentOrange: 'hover:border-accentOrange focus-visible:ring-accentOrange'
};

const iconAccent: Record<HeroCardProps['accent'], string> = {
  accentBlue: 'bg-accentBlue/10 text-accentBlue',
  accentGreen: 'bg-accentGreen/10 text-accentGreen',
  accentOrange: 'bg-accentOrange/10 text-accentOrange'
};

export function HeroCard({ title, description, icon, accent, onClick }: HeroCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-start gap-3 rounded-2xl border border-transparent bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-2 ${containerAccent[accent]}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition duration-200 group-hover:scale-105 ${iconAccent[accent]}`}
      >
        {icon}
      </div>
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <p className="text-sm text-slate-600">{description}</p>
    </button>
  );
}
