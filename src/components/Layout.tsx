import React from "react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import { TracingBeam } from "../components/ui/tracing-beam";

type LayoutProps = {
  children: React.ReactNode;
  title?: string; // Added title as an optional prop
};

const Layout = ({ children, title }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {!isMobile && <Sidebar />}
      {isMobile && <MobileNav />}

      {/* Theme Toggle - Fixed Position for Desktop */}
      {!isMobile && (
        <div className="fixed top-4 right-4 md:top-6 md:right-8 lg:top-8 lg:right-12 z-[100]">
          <ThemeToggle />
        </div>
      )}

      <main
        className={`${
          !isMobile ? "ml-0 md:ml-64" : "ml-0"
        } min-h-screen flex-1 w-full max-w-[100vw]`}
      >
        <div className="animate-fade-in pb-8 w-full pt-16 md:pt-20">
          <TracingBeam>{children}</TracingBeam>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
