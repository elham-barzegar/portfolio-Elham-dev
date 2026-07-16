import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Post } from "../data/content";
import { ArrowIcon } from "./icons";

type BlogProps = {
  posts: Post[];
};

export function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="bg-[#0d1320] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Blog"
          subtitle="Notes on design, code, and building memorable experiences on the web."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-[#0f1624] shadow-lg shadow-black/15 transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <div className="relative h-44">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b111d] via-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-400">
                  {post.category} / By {post.author}
                </p>
                <h3 className="text-lg font-semibold leading-snug text-white">{post.title}</h3>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{post.date}</p>
                <p className="flex-1 text-sm leading-relaxed text-zinc-300">

                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  Read more
                  <ArrowIcon className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
