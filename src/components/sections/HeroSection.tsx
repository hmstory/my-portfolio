import React from "react";
import { Mail, Linkedin, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative pt-20">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold animate-fade-in-up">
          <Sparkles size={16} />
          Content Strategist & Producer
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-[0.95] tracking-tight animate-fade-in-up delay-100 font-display">
          Hyeongmo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">Kim</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
          Combining <span className="text-foreground font-medium">Content</span>,{" "}
          <span className="text-foreground font-medium">AI</span>, and{" "}
          <span className="text-foreground font-medium">Psychology</span> to create impactful digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up delay-300">
          <button
            onClick={() => onNavigate("contact")}
            className="btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3"
          >
            <Mail size={20} /> Get in Touch
          </button>
          <a
            href="https://www.linkedin.com/in/hmstory0111"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary py-4 px-8 text-lg flex items-center justify-center gap-3"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
