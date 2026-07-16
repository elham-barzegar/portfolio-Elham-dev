import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import {
  contactItems,
  filters,
  navLinks,
  portfolioItems,
  posts,
  services,
  skills,
  stats,
} from "./data/content";

export default function Home() {
  return (
    <div className="bg-[#0c111a] text-zinc-100">
      <Hero navLinks={navLinks} />
      <About skills={skills} />
      <Portfolio items={portfolioItems} filters={filters} />
      <Services services={services} />
      <Stats stats={stats} />
      <Blog posts={posts} />
      <Contact contactItems={contactItems} />
      <footer className="border-t border-white/5 bg-[#0b111d] py-6 text-center text-sm text-zinc-500">
        Copyright 2026 All rights reserved.
      </footer>
    </div>
  );
}
