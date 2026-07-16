type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">Discover</p>
      <h2 className="text-3xl font-black uppercase tracking-tight text-white">{title}</h2>
      <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}
