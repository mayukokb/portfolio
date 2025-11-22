type HeroCardProps = {
  title: string;
  description: string;
  accent: 'accentBlue' | 'accentGreen' | 'accentOrange';
  onClick: () => void;
};

const borderAccent: Record<HeroCardProps['accent'], string> = {
  accentBlue: 'border-t-2 border-accentBlue',
  accentGreen: 'border-t-2 border-accentGreen',
  accentOrange: 'border-t-2 border-accentOrange'
};

export function HeroCard({ title, description, accent, onClick }: HeroCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex h-full flex-col gap-3 rounded-2xl bg-[#f7f7f7] p-6 text-left shadow-[0_12px_30px_rgba(10,10,10,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,10,10,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f7f7] ${borderAccent[accent]}`}
    >
      <div className="text-lg font-semibold text-[#0a0a0a]">{title}</div>
      <p className="text-sm leading-relaxed text-neutral-700">{description}</p>
    </button>
  );
}
