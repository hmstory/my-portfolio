import React from "react";
import { Plus, Edit2, Trash2, BookOpen, Mic, ArrowRight } from "lucide-react";
import { User } from "firebase/auth";
import { Project, EditingItem, FormData } from "../../types";
import { ItemForm } from "../ItemForm";

interface ProjectsSectionProps {
  user: User | null;
  projects: Project[];
  isAdding: string | null;
  editingItem: EditingItem | null;
  formData: FormData;
  onStartAdd: (type: string) => void;
  onStartEdit: (type: string, item: Project) => void;
  onDelete: (type: string, id: string) => void;
  onFormDataChange: (data: FormData) => void;
  onSave: (type: string) => void;
  onCancel: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  user,
  projects,
  isAdding,
  editingItem,
  formData,
  onStartAdd,
  onStartEdit,
  onDelete,
  onFormDataChange,
  onSave,
  onCancel,
}) => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="section-title">Selected Works</h2>
          {user && (
            <button
              onClick={() => onStartAdd("project")}
              className="btn-primary py-3 px-5 text-sm flex items-center gap-2"
              aria-label="Add project"
            >
              <Plus size={18} /> Add
            </button>
          )}
        </div>

        {(isAdding === "project" || editingItem?.type === "project") && (
          <ItemForm
            type="project"
            editingItem={editingItem}
            formData={formData}
            onFormDataChange={onFormDataChange}
            onSave={() => onSave("project")}
            onCancel={onCancel}
          />
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Static Projects */}
          <div className="glass-card rounded-2xl overflow-hidden group flex flex-col">
            <div className="h-56 bg-secondary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/20 transition-colors"></div>
              <BookOpen
                size={56}
                className="text-muted-foreground group-hover:text-primary transition-colors z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display">
                Film Review Blog
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                A comprehensive film review platform analyzing cinematic techniques and storytelling structures.
              </p>
              <a
                href="https://medium.com/@hmstory0111"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
              >
                View Blog <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden group flex flex-col">
            <div className="h-56 bg-secondary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent group-hover:from-purple-500/20 transition-colors"></div>
              <Mic
                size={56}
                className="text-muted-foreground group-hover:text-purple-400 transition-colors z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors font-display">
                Film Review Podcast
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                Proof of concept audio series exploring film narratives. Produced, hosted, and edited solo.
              </p>
              <a
                href="https://youtu.be/ZafaT7ibW9I"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
              >
                Listen on YouTube{" "}
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden group flex flex-col">
            <div className="h-56 bg-secondary flex items-center justify-center relative overflow-hidden">
              <img
                src="https://img.youtube.com/vi/kcb8OI46uTA/hqdefault.jpg"
                alt="AI Video"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-red-400 transition-colors font-display">
                AI Creative Video
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                Experimental video content created using Generative AI tools for new visual storytelling.
              </p>
              <a
                href="https://youtu.be/kcb8OI46uTA"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors group/link"
              >
                Watch on YouTube{" "}
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Dynamic Projects */}
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl overflow-hidden group relative flex flex-col">
              {user && (
                <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all bg-background/50 p-1.5 rounded-full backdrop-blur-md">
                  <button onClick={() => onStartEdit("project", project)} className="icon-btn-edit" aria-label="Edit project">
                    <Edit2 size={14} />
                  </button>
                  <button onClick={() => onDelete("project", project.id)} className="icon-btn-delete" aria-label="Delete project">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
              <div className="h-56 bg-secondary flex items-center justify-center relative overflow-hidden">
                {project.type === "video" && project.videoId ? (
                  <img
                    src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                    {project.type === "podcast" ? (
                      <Mic size={56} className="text-muted-foreground group-hover:text-purple-400 z-10" />
                    ) : (
                      <BookOpen size={56} className="text-muted-foreground group-hover:text-primary z-10" />
                    )}
                  </>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm line-clamp-3 leading-relaxed flex-1">
                  {project.description}
                </p>
                <a
                  href={project.type === "video" ? `https://youtu.be/${project.videoId}` : project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  {project.linkText || "View Detail"}{" "}
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
