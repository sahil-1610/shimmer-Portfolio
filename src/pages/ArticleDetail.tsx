import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Article, articles } from "@/data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      const articleId = parseInt(id);
      const foundArticle = articles.find((p) => p.id === articleId);
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        navigate("/articles");
      }
    }
  }, [id, navigate]);

  if (!article) {
    return (
      <Layout>
        <div className="h-[50vh] flex items-center justify-center">
          <div className="animate-pulse">Loading article...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${article.title} | Sahil Tiwari`}
        description={article.description}
        keywords={`${article.title}, ${article.tags.join(", ")}, Sahil Tiwari`}
        article={true}
        publishedTime={article.date}
      />
      <div className="animate-fade-in max-w-5xl mx-auto w-full">
        <Button
          variant="ghost"
          onClick={() => navigate("/articles")}
          className="mb-6 md:mb-8 -ml-2 inline-flex items-center gap-2 hover:bg-background/80"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Back to Articles</span>
          <span className="sm:hidden">Back</span>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mb-8 md:mb-10 w-full">
          <div className="lg:col-span-2 min-w-0">
            <span className="text-xs sm:text-sm text-muted-foreground block mb-2">
              {article.date}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {article.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs sm:text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {article.description}
            </p>

            <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              {article.content.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 md:mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <h2 className="text-xl sm:text-2xl font-bold mt-8 md:mt-10 mb-4 md:mb-6">
                Key Takeaways
              </h2>
              <ul className="space-y-2 md:space-y-3">
                {article.content.keyPoints.map((point, index) => (
                  <li key={index} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1 min-w-0">
            <div className="lg:sticky lg:top-8 space-y-6 w-full">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg order-first lg:order-none w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="border border-border rounded-lg p-4 sm:p-5 w-full">
                <h3 className="font-medium mb-2 md:mb-3 text-sm sm:text-base">
                  About this article
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  This article was published on {article.date} and covers topics
                  in {article.tags.join(", ")}.
                </p>
                <Button
                  className="w-full"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Back to top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
