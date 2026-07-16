import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { PortfolioItem } from "../data/content";
import { ArrowIcon } from "./icons";

type PortfolioProps = {
  items: PortfolioItem[];
  filters: string[];
};

export function Portfolio({ items, filters }: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-[#0c111a] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Portfolio"
          subtitle="Selected work across web design, brand systems, and interactive experiences."
        />
        <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
          {filters.map((item) => (
            <span
              key={item}
              className={`rounded-full border px-4 py-2 ${
                item === "Web Design"
                  ? "border-emerald-400/80 bg-emerald-500/15 text-white"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl border border-white/5 bg-[#0f1624] shadow-lg shadow-black/15 transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b111d] via-transparent" />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-400">
                    {item.category}
                  </p>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-emerald-400">
                  <ArrowIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
