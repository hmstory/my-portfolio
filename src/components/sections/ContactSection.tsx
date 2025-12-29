import React from "react";
import { Mail } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center glass-panel p-12 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-amber-400 to-primary"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

        <h2 className="text-4xl font-bold text-foreground mb-8 font-display relative z-10">Ready to Collaborate?</h2>
        <p className="text-muted-foreground mb-10 text-lg relative z-10">
          I'm always open to discussing content strategy, AI applications in media, or production opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <a
            href="mailto:hmstory0111@gmail.com"
            className="btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Mail size={22} /> hmstory0111@gmail.com
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm font-medium relative z-10">
          <p>&copy; 2025 Hyeongmo Kim. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
