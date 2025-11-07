import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({
  title = "Sahil Tiwari - Software Developer | Full Stack Developer Portfolio",
  description = "Sahil Tiwari is a passionate Software Developer specializing in Full Stack Development, AI/ML, and modern web technologies. Explore my portfolio, projects, and technical articles.",
  keywords = "Sahil Tiwari, Software Developer, Full Stack Developer, Web Developer, React, TypeScript, AI, Machine Learning",
  image = "https://sahiltiwari.in/images/ChatGPT Image Mar 28, 2025, 01_23_07 AM.png",
  article = false,
  publishedTime,
  modifiedTime,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://sahiltiwari.in${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (
      attr: string,
      attrValue: string,
      content: string
    ) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement;

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.href = href;
    };

    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);

    // Update Open Graph tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", currentUrl);
    updateMetaTag("property", "og:image", image);
    updateMetaTag("property", "og:type", article ? "article" : "website");

    // Update Twitter tags
    updateMetaTag("property", "twitter:title", title);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", image);
    updateMetaTag("property", "twitter:url", currentUrl);

    // Update article-specific tags
    if (article) {
      if (publishedTime) {
        updateMetaTag("property", "article:published_time", publishedTime);
      }
      if (modifiedTime) {
        updateMetaTag("property", "article:modified_time", modifiedTime);
      }
      updateMetaTag("property", "article:author", "Sahil Tiwari");
    }

    // Update canonical URL
    updateLinkTag("canonical", currentUrl);
  }, [
    title,
    description,
    keywords,
    image,
    currentUrl,
    article,
    publishedTime,
    modifiedTime,
  ]);

  return null;
};

export default SEO;
