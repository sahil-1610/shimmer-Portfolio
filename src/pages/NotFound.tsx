import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-md w-full px-4 animate-scale-in">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-primary mb-4">
          404
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't seem to exist.
        </p>
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link to="/" className="inline-flex items-center justify-center">
            <Home size={16} className="mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
