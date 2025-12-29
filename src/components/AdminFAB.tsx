import React from "react";
import { Lock, LogOut } from "lucide-react";
import { User } from "firebase/auth";

interface AdminFABProps {
  user: User | null;
  isAdminMode: boolean;
  onToggleAdminMode: () => void;
  onLogout: () => void;
}

export const AdminFAB: React.FC<AdminFABProps> = ({
  user,
  isAdminMode,
  onToggleAdminMode,
  onLogout,
}) => {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!user ? (
        <button
          onClick={onToggleAdminMode}
          className="p-4 bg-card/90 backdrop-blur-xl rounded-full shadow-2xl border border-border hover:bg-secondary hover:scale-110 transition-all duration-300 group"
          title="Admin Login"
          aria-label="Open admin login"
        >
          <Lock size={20} className="text-muted-foreground group-hover:text-foreground" />
        </button>
      ) : (
        <div className="flex gap-3 items-center animate-fade-in-up">
          <span className="bg-primary/90 backdrop-blur text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            Admin Mode
          </span>
          <button
            onClick={onLogout}
            className="p-4 bg-destructive/90 backdrop-blur-xl text-destructive-foreground rounded-full shadow-2xl hover:bg-destructive hover:scale-110 transition-all duration-300"
            title="Logout"
            aria-label="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
