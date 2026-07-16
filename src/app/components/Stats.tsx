import { Stat } from "../data/content";

type StatsProps = {
  stats: Stat[];
};

export function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-[#0c111a] py-12">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-[#0f1624] px-6 py-5 text-center shadow-lg shadow-black/10"
          >
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30" />
            <div className="text-3xl font-bold text-white">{stat.value}</div>
            <div className="mt-1 text-sm uppercase tracking-[0.22em] text-zinc-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
