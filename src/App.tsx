import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "./hooks/useAuth";
import { useFirestore } from "./hooks/useFirestore";
import { useScroll } from "./hooks/useScroll";
import { Navigation } from "./components/Navigation";
import { AdminModal } from "./components/AdminModal";
import { AdminFAB } from "./components/AdminFAB";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";
import {
  ProjectFormData,
  ExperienceFormData,
  EducationFormData,
  SkillFormData,
  FormData,
  EditingItem,
  Project,
  Experience,
  Education,
  Skill,
} from "./types";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [editingItem, setEditingItem] = useState<EditingItem | null>(null);
  const [isAdding, setIsAdding] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({} as FormData);
  const [error, setError] = useState<string | null>(null);

  const scrolled = useScroll();
  const { user, loginError, login, logout, setLoginError } = useAuth();
  const {
    projects,
    experiences,
    educations,
    skills,
    loading,
    error: firestoreError,
    fetchData,
    saveDocument,
    deleteDocument,
  } = useFirestore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (firestoreError) {
      setError(firestoreError);
    }
  }, [firestoreError]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  const initForm = useCallback((type: string, data: any = null) => {
    if (type === "project") {
      setFormData(
        (data ||
          {
            title: "",
            description: "",
            link: "",
            linkText: "View Project",
            type: "blog",
            videoId: "",
          }) as ProjectFormData
      );
    } else if (type === "experience") {
      setFormData(
        (data || {
          role: "",
          company: "",
          period: "",
          description: "",
          details: [],
        }) as ExperienceFormData
      );
    } else if (type === "education") {
      setFormData(
        (data || {
          school: "",
          degree: "",
          period: "",
          description: "",
        }) as EducationFormData
      );
    } else if (type === "skill") {
      setFormData(
        (data || {
          category: "",
          items: "",
        }) as SkillFormData
      );
    }
  }, []);

  const startAdd = useCallback(
    (type: string) => {
      setIsAdding(type);
      setEditingItem(null);
      initForm(type);
    },
    [initForm]
  );

  const startEdit = useCallback(
    (type: string, item: Project | Experience | Education | Skill) => {
      setEditingItem({ type: type as any, id: item.id });
      setIsAdding(null);
      let processedData = { ...item };
      if (type === "skill" && Array.isArray((item as Skill).items)) {
        (processedData as any).items = (item as Skill).items.join(", ");
      }
      if (type === "experience" && Array.isArray((item as Experience).details)) {
        (processedData as any).detailsStr = (item as Experience).details.join("\n");
      }
      initForm(type, processedData);
    },
    [initForm]
  );

  const cancelEdit = useCallback(() => {
    setIsAdding(null);
    setEditingItem(null);
    setFormData({} as FormData);
    setError(null);
  }, []);

  const handleSave = useCallback(
    async (type: string) => {
      try {
        // Form validation
        if (type === "project") {
          const data = formData as ProjectFormData;
          if (!data.title || !data.description || !data.linkText) {
            setError("Please fill in all required fields");
            return;
          }
          if (data.type === "video" && !data.videoId) {
            setError("Please provide a YouTube Video ID for video projects");
            return;
          }
          if (data.type !== "video" && !data.link) {
            setError("Please provide a link URL");
            return;
          }
        } else if (type === "experience") {
          const data = formData as ExperienceFormData;
          if (!data.role || !data.company || !data.period) {
            setError("Please fill in all required fields");
            return;
          }
        } else if (type === "education") {
          const data = formData as EducationFormData;
          if (!data.school || !data.degree || !data.period) {
            setError("Please fill in all required fields");
            return;
          }
        } else if (type === "skill") {
          const data = formData as SkillFormData;
          if (!data.category || !data.items) {
            setError("Please fill in all required fields");
            return;
          }
        }

        setError(null);
        let dataToSave: any = { ...formData, createdAt: new Date() };
        if (!dataToSave.order) dataToSave.order = Date.now();

        if (type === "skill") {
          dataToSave.items = (formData as SkillFormData).items
            .split(",")
            .map((s: string) => s.trim())
            .filter((s: string) => s);
        }
        if (type === "experience" && (formData as ExperienceFormData).detailsStr) {
          dataToSave.details = (formData as ExperienceFormData).detailsStr
            ?.split("\n")
            .filter((s: string) => s.trim());
          delete dataToSave.detailsStr;
        }

        const collectionName = `${type}s` as "projects" | "experiences" | "educations" | "skills";
        const success = await saveDocument(
          collectionName,
          dataToSave,
          editingItem && editingItem.type === type ? editingItem.id : undefined
        );

        if (success) {
          cancelEdit();
        }
      } catch (e: any) {
        setError(e.message || "Failed to save document");
      }
    },
    [formData, editingItem, saveDocument, cancelEdit]
  );

  const handleDelete = useCallback(
    async (type: string, id: string) => {
      if (!window.confirm("Are you sure you want to delete this item?")) return;
      const collectionName = `${type}s` as "projects" | "experiences" | "educations" | "skills";
      await deleteDocument(collectionName, id);
    },
    [deleteDocument]
  );

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      const success = await login(email, password);
      if (success) {
        setIsAdminMode(false);
      }
      return success;
    },
    [login]
  );

  const handleLogout = useCallback(async () => {
    await logout();
    setIsAdminMode(false);
    cancelEdit();
  }, [logout, cancelEdit]);

  const backgroundElements = useMemo(
    () => (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/30 rounded-full blur-[200px]"></div>
      </div>
    ),
    []
  );

  if (loading && projects.length === 0 && experiences.length === 0 && educations.length === 0 && skills.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative overflow-x-hidden">
      {backgroundElements}

      <AdminFAB
        user={user}
        isAdminMode={isAdminMode}
        onToggleAdminMode={() => setIsAdminMode(!isAdminMode)}
        onLogout={handleLogout}
      />

      <AdminModal
        isOpen={isAdminMode && !user}
        onClose={() => {
          setIsAdminMode(false);
          setLoginError("");
        }}
        onLogin={handleLogin}
        loginError={loginError}
      />

      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[102] bg-destructive/90 text-destructive-foreground px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {error}
          <button
            onClick={() => setError(null)}
            className="ml-4 underline"
            aria-label="Dismiss error"
          >
            Dismiss
          </button>
        </div>
      )}

      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onNavigate={scrollToSection}
      />

      <HeroSection onNavigate={scrollToSection} />

      <AboutSection
        user={user}
        educations={educations}
        isAdding={isAdding}
        editingItem={editingItem}
        formData={formData}
        onStartAdd={startAdd}
        onStartEdit={startEdit}
        onDelete={handleDelete}
        onFormDataChange={setFormData}
        onSave={handleSave}
        onCancel={cancelEdit}
      />

      <ExperienceSection
        user={user}
        experiences={experiences}
        isAdding={isAdding}
        editingItem={editingItem}
        formData={formData}
        onStartAdd={startAdd}
        onStartEdit={startEdit}
        onDelete={handleDelete}
        onFormDataChange={setFormData}
        onSave={handleSave}
        onCancel={cancelEdit}
      />

      <ProjectsSection
        user={user}
        projects={projects}
        isAdding={isAdding}
        editingItem={editingItem}
        formData={formData}
        onStartAdd={startAdd}
        onStartEdit={startEdit}
        onDelete={handleDelete}
        onFormDataChange={setFormData}
        onSave={handleSave}
        onCancel={cancelEdit}
      />

      <SkillsSection
        user={user}
        skills={skills}
        isAdding={isAdding}
        editingItem={editingItem}
        formData={formData}
        onStartAdd={startAdd}
        onStartEdit={startEdit}
        onDelete={handleDelete}
        onFormDataChange={setFormData}
        onSave={handleSave}
        onCancel={cancelEdit}
      />

      <ContactSection />
    </div>
  );
};

export default Index;
