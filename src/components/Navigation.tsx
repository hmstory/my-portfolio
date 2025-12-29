import React from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (section: string) => void;
}

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export const Navigation: React.FC<NavigationProps> = ({
  scrolled,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
}) => {
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          onClick={() => onNavigate("home")}
          className="text-2xl font-black text-foreground cursor-pointer hover:text-primary transition-colors font-display"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onNavigate("home")}
          aria-label="Go to home"
        >
          HK<span className="text-primary">.</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-all"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={onToggleMenu}
            className="text-foreground p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border animate-slide-down absolute w-full">
          <div className="px-6 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
