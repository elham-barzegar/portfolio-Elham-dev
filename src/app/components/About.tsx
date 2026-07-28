import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Skill } from "../data/content";

type AboutProps = {
  skills: Skill[];
};

export function About({ skills }: AboutProps) {
  return (
    <section id="about" className="bg-[#0d1320] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="I am Elham Barzeghar, a passionate web designer and developer with eight years of experience crafting products that feel polished and purposeful."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex items-center gap-5 rounded-2xl border border-white/5 bg-[#101828] p-6 shadow-lg shadow-black/10">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-emerald-400/70 bg-white/5">
              <Image
                src="/images/my-pic-6.png"
                alt="Austin Dalton portrait"
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
            <div className="space-y-2 text-sm leading-relaxed text-zinc-200 sm:text-base">
              <InfoRow label="Full Name" value="Elham Barzeghar" />
              <InfoRow label="Website" value="elhambarzegar.ir" />
              <InfoRow label="E-Mail" value="elhambarzegar.hs@gmail.com" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#101828] p-6 shadow-lg shadow-black/10">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Skills</h3>
              <div className="h-px w-16 bg-emerald-500" />
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm text-zinc-300">
                    <span>{skill.name}</span>
                    <span className="font-semibold text-white">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
      <span className="text-zinc-400">{label}:</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}
