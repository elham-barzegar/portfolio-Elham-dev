import { SectionHeading } from "./SectionHeading";
import { Service } from "../data/content";

type ServicesProps = {
  services: Service[];
};

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="bg-[#0d1320] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Services"
          subtitle="Strategy through delivery - design, build, and iterate to move metrics and make delight."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/5 bg-[#0f1728] p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
