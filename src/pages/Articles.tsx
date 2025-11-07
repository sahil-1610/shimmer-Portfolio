import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";

const Articles = () => {
  // Sort articles by date (latest first)
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Layout title="Articles">
      <SEO
        title="Technical Articles & Blog | Sahil Tiwari"
        description="Read in-depth articles on AI, Machine Learning, React, TypeScript, and modern web development. Learn about MCP, tokenization, prompt engineering, vector databases, and more."
        keywords="technical articles, blog, AI articles, machine learning, React tutorials, TypeScript, web development, MCP, tokenization, prompt engineering, LLMs, vector databases"
      />
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="section-title mb-6 md:mb-8">
          <FileText size={20} className="text-primary flex-shrink-0" />
          <span className="text-xl sm:text-2xl md:text-3xl">
            Technical Articles & Insights
          </span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 md:mb-10">
          I write about web development, AI integration, and software
          architecture. Here are my latest articles.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {sortedArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="article-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full md:w-1/3 h-40 sm:h-48 overflow-hidden rounded-lg flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-6">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {article.date}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-2 mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
