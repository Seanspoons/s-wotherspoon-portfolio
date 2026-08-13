import { motion } from "framer-motion";
import Section from "./Section";
import ArticleCard from "./ArticleCard";

export type Article = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  href?: string;
};

const ARTICLES: Article[] = [
  {
    slug: "havenview-v1",
    title: "HavenView v1 — Raspberry Pi home security hub",
    date: "Dec 7, 2025",
    summary:
      "A look back at HavenView’s original Raspberry Pi architecture, before the production system moved to a dedicated Ubuntu server.",
  },
];

export default function Articles() {
  const hasArticles = ARTICLES.length > 0;

  return (
    <Section>
      <section id="writing" className="space-y-4 scroll-mt-20">
        <h2
          className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded"
        >
          Technical Writing
        </h2>

        {/* If no articles → show empty state */}
        {!hasArticles && (
          <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-6 text-center">
            <p className="text-sm text-slate-500">
              No articles yet — check back later.
            </p>
          </div>
        )}

        {hasArticles && (
          <div className="grid gap-3">
            {ARTICLES.map((article) => (
              <motion.div
                key={article.slug}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </Section>
  );
}

export { ARTICLES };
