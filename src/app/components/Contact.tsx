import { SectionHeading } from "./SectionHeading";
import { ContactItem } from "../data/content";

type ContactProps = {
  contactItems: ContactItem[];
};

export function Contact({ contactItems }: ContactProps) {
  return (
    <section id="contact" className="bg-[#0c111a] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Contact"
          subtitle="Let's build something together. Drop a note and I'll respond quickly."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactItems.map(({ title, detail, Icon }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#0f1728] px-5 py-4 shadow-lg shadow-black/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{title}</p>
                  <p className="text-sm font-semibold text-white sm:text-base">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="space-y-4 rounded-2xl border border-white/5 bg-[#0f1728] p-6 shadow-lg shadow-black/15">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name*"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Phone"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Comment*"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0c111a] transition hover:bg-emerald-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
