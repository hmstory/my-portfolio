import React from "react";
import { Plus, Edit2, Trash2, BarChart2, Video } from "lucide-react";
import { User } from "firebase/auth";
import { Skill, EditingItem, FormData } from "../../types";
import { ItemForm } from "../ItemForm";

interface SkillsSectionProps {
  user: User | null;
  skills: Skill[];
  isAdding: string | null;
  editingItem: EditingItem | null;
  formData: FormData;
  onStartAdd: (type: string) => void;
  onStartEdit: (type: string, item: Skill) => void;
  onDelete: (type: string, id: string) => void;
  onFormDataChange: (data: FormData) => void;
  onSave: (type: string) => void;
  onCancel: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  user,
  skills,
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
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-16 relative">
          <h2 className="section-title text-center">Skills & Expertise</h2>
          {user && (
            <button
              onClick={() => onStartAdd("skill")}
              className="absolute right-0 top-1 btn-primary py-2 px-3 text-xs"
              aria-label="Add skill"
            >
              <Plus size={16} />
            </button>
          )}
        </div>

        {(isAdding === "skill" || editingItem?.type === "skill") && (
          <ItemForm
            type="skill"
            editingItem={editingItem}
            formData={formData}
            onFormDataChange={onFormDataChange}
            onSave={() => onSave("skill")}
            onCancel={onCancel}
          />
        )}

        <div className="grid md:grid-cols-2 gap-10">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div key={skill.id} className="relative group">
                {user && (
                  <div className="absolute -top-2 -right-2 z-20 flex gap-1 opacity-0 group-hover:opacity-100 transition-all">
                    <button onClick={() => onStartEdit("skill", skill)} className="icon-btn-edit" aria-label="Edit skill">
                      <Edit2 size={12} />
                    </button>
                    <button onClick={() => onDelete("skill", skill.id)} className="icon-btn-delete" aria-label="Delete skill">
                      <Trash2 size={12} />
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <BarChart2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-display">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skill.items &&
                    skill.items.map((item: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-secondary hover:bg-muted text-secondary-foreground rounded-lg text-sm border border-border hover:border-primary/30 transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <BarChart2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-display">Strategy & Data</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Audience Insights", "Content Analytics", "Roadmapping", "Cross-functional Ops"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm border border-border hover:border-primary/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Video size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-display">Production & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Pro Tools", "Premiere Pro", "Final Cut Pro", "AI Editing Tools"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm border border-border hover:border-primary/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
