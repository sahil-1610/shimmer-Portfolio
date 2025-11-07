import React from "react";
import { Heart, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        !isMobile ? "ml-0 md:ml-64" : "ml-0"
      } border-t py-6 mt-auto w-full bg-background/50 backdrop-blur-sm overflow-hidden`}
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left flex-shrink-0">
          © {currentYear} Sahil Tiwari. All rights reserved.
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm flex-shrink-0">
          <span className="text-muted-foreground flex items-center">
            Built with{" "}
            <Heart size={14} className="mx-1 text-red-500 animate-pulse" />
          </span>
        </div>

        <div className="flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-end flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap"
            asChild
          >
            <a
              href="https://github.com/sahil-1610"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} className="sm:w-4 sm:h-4" />
              <span>GitHub</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1Znx5ZTwrTjOOQFWppauODj8_GU8DVZWs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              <span>Resume</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
