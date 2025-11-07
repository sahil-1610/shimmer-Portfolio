import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const location = useLocation();
  const profileImageSrc = "/images/PP.jpg";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Bar - Profile and Theme Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <div
            className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary cursor-pointer flex-shrink-0"
            onClick={() => setImageDialogOpen(true)}
          >
            <img
              src={profileImageSrc}
              alt="Sahil Tiwari"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-sm truncate">Sahil Tiwari</h3>
            <p className="text-xs text-muted-foreground truncate">
              Software Developer
            </p>
          </div>
        </Link>
        <ThemeToggle />
      </div>
      {/* Bottom Left Floating Menu Button */}
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <Button
          variant="default"
          size="icon"
          onClick={toggleMenu}
          className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 bg-primary hover:bg-primary/90"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>
      {/* Slide-in Sidebar from Left */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed left-0 top-0 bottom-0 w-72 bg-background shadow-2xl animate-slide-in-left overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Profile Section */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary cursor-pointer flex-shrink-0"
                  onClick={() => setImageDialogOpen(true)}
                >
                  <img
                    src={profileImageSrc}
                    alt="Sahil Tiwari"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base">Sahil Tiwari</h3>
                  <p className="text-sm text-muted-foreground">
                    Software Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground font-medium shadow-md"
                          : "hover:bg-accent hover:translate-x-1"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="text-base">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
      <div className="md:hidden h-16"></div> {/* Spacer for fixed header */}
    </>
  );
};

export default MobileNav;
