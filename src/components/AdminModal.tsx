import React, { useState, FormEvent } from "react";
import { X } from "lucide-react";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<boolean>;
  loginError: string;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, onLogin, loginError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const success = await onLogin(email, password);
    if (success) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[101] flex items-center justify-center p-4 animate-fade-in">
      <div className="glass-panel p-8 rounded-3xl w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground font-display">Admin Login</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close login modal"
          >
            <X className="text-muted-foreground hover:text-foreground" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>
          {loginError && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm text-center">
              {loginError}
            </div>
          )}
          <button type="submit" className="w-full btn-primary py-4 text-base">
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};
