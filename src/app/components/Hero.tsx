import Image from "next/image";
import { NavLink } from "../data/content";

type HeroProps = {
  navLinks: NavLink[];
};

export function Hero({ navLinks }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/comp-3.jpg"
          alt="Portrait of Elham Barzeghar"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b111d] via-[#0b111d]/90 to-[#0b111d]/55" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-8">
        <nav className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
          <span className="text-lg font-bold tracking-tight text-white">Elham  Barzeghar</span>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-green-400 hover:text-green-300 md:inline-flex"
          >
            Hire Me
          </a>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="space-y-6 flex flex-col items-center justify-center">
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0c111a] shadow-lg shadow-emerald-500/30">
               React Developer

            </div>
              <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0c111a] shadow-lg shadow-emerald-500/30">
                  Front-End Developer
              </div>
              <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0c111a] shadow-lg shadow-emerald-500/30">
                  AI-powered Developer
              </div>


              <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Hello</p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                I&apos;m Elham Barzeghar
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
              I craft digital experiences that balance conversion and creativity. From clean code to
              pixel-perfect visuals, I help brands tell sharp stories on the web.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0c111a] transition hover:bg-emerald-400"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl shadow-emerald-500/10 backdrop-blur-sm md:h-[440px]">
            {/*<div className="absolute -left-8 top-6 z-20 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0c111a] shadow-lg shadow-emerald-500/30">*/}
            {/*  Available for freelance*/}
            {/*</div>*/}
            <Image
              src="/images/my-pic-4.jpg"
              alt="Austin Dalton smiling"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b111d] via-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
