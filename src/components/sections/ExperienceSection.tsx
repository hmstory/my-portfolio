import React from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { User } from "firebase/auth";
import { Experience, EditingItem, FormData } from "../../types";
import { ItemForm } from "../ItemForm";

interface ExperienceSectionProps {
  user: User | null;
  experiences: Experience[];
  isAdding: string | null;
  editingItem: EditingItem | null;
  formData: FormData;
  onStartAdd: (type: string) => void;
  onStartEdit: (type: string, item: Experience) => void;
  onDelete: (type: string, id: string) => void;
  onFormDataChange: (data: FormData) => void;
  onSave: (type: string) => void;
  onCancel: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  user,
  experiences,
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
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="section-title">Professional Experience</h2>
          {user && (
            <button
              onClick={() => onStartAdd("experience")}
              className="btn-primary py-3 px-5 text-sm flex items-center gap-2"
              aria-label="Add experience"
            >
              <Plus size={18} /> Add
            </button>
          )}
        </div>

        {(isAdding === "experience" || editingItem?.type === "experience") && (
          <ItemForm
            type="experience"
            editingItem={editingItem}
            formData={formData}
            onFormDataChange={onFormDataChange}
            onSave={() => onSave("experience")}
            onCancel={onCancel}
          />
        )}

        <div className="space-y-8">
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <div key={exp.id} className="glass-card p-8 rounded-3xl group relative">
                {user && (
                  <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button onClick={() => onStartEdit("experience", exp)} className="icon-btn-edit" aria-label="Edit experience">
                      <Edit2 size={16} />
                    </button>
                    <button onClick={() => onDelete("experience", exp.id)} className="icon-btn-delete" aria-label="Delete experience">
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.details &&
                    exp.details.map((detail: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed group-hover:text-secondary-foreground transition-colors"
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))
          ) : (
            <>
              <div className="glass-card p-8 rounded-3xl group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
                      Podcast & Video Producer
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      Krafton - Publishing Platform Division
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                    2025 - Present
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Produced internal podcasts and videos for 200+ staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Full production cycle: script, host, record, film, edit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Used AI tools for faster editing and new storytelling</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-3xl group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
                      Content Strategy & Operations
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      Krafton - Deep Learning Division (AUDIC)
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border">
                    2022 - 2024
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Led content strategy for AI-based voice UGC platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Analyzed user data to guide programming and growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Onboarded 4 creator communities; sustained WAU ≈ 3,000</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-3xl group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
                      Producer & Writer
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">Radio & Podcast (TBS, EBS, Gugak FM)</p>
                  </div>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border">
                    2015 - 2021
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Won 2017 Korean PD Award (TBS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Won 2018 Program of the Month Award (EBS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Directed 200+ guest interviews per year</span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
