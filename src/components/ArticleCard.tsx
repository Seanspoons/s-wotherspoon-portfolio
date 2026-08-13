import { Link } from "react-router-dom";
import type { Article } from "./TechnicalWriting";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/articles/${article.slug}`}>
      <article className="rounded-xl bg-paper ring-1 ring-primary/5 p-4 sm:p-5 hover:shadow-md hover:ring-primary/10 transition h-full">
        <p className="text-xs text-slate-400 mb-1">{article.date}</p>
        <h3 className="text-sm font-semibold text-primary">{article.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{article.summary}</p>
        <span className="mt-2 inline-flex text-xs text-accent">
          Read article →
        </span>
      </article>
    </Link>
  );
}