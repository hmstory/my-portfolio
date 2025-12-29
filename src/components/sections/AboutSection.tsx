import React from "react";
import { BookOpen, Plus, Edit2, Trash2, Calendar } from "lucide-react";
import { User } from "firebase/auth";
import { Education, EditingItem, FormData } from "../../types";
import { ItemForm } from "../ItemForm";

interface AboutSectionProps {
  user: User | null;
  educations: Education[];
  isAdding: string | null;
  editingItem: EditingItem | null;
  formData: FormData;
  onStartAdd: (type: string) => void;
  onStartEdit: (type: string, item: Education) => void;
  onDelete: (type: string, id: string) => void;
  onFormDataChange: (data: FormData) => void;
  onSave: (type: string) => void;
  onCancel: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  user,
  educations,
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
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="animate-fade-in-up">
          <h2 className="section-title mb-8">Professional Summary</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a multidisciplinary professional working across{" "}
              <span className="text-foreground font-medium">content strategy, production, and operations</span>. My
              passion lies in bridging the gap between creative storytelling and analytical rigor.
            </p>
            <p>
              Currently, I am expanding my expertise by pursuing an{" "}
              <span className="text-primary font-semibold">M.A. Psychological Science in Digital Innovation</span>, specifically studying
              how AI and data can inform audience behavior analysis and decision-making processes.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl shadow-xl relative animate-fade-in-up delay-200">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display">Education</h3>
            </div>
            {user && (
              <button onClick={() => onStartAdd("education")} className="icon-btn-add" aria-label="Add education">
                <Plus size={20} />
              </button>
            )}
          </div>

          {(isAdding === "education" || editingItem?.type === "education") && (
            <ItemForm
              type="education"
              editingItem={editingItem}
              formData={formData}
              onFormDataChange={onFormDataChange}
              onSave={() => onSave("education")}
              onCancel={onCancel}
            />
          )}

          <div className="space-y-8">
            {educations.length > 0 ? (
              educations.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8 border-l-2 border-border group hover:border-primary/50 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background group-hover:bg-primary transition-colors"></div>
                  {user && (
                    <div className="absolute right-0 top-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button onClick={() => onStartEdit("education", edu)} className="icon-btn-edit" aria-label="Edit education">
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => onDelete("education", edu.id)} className="icon-btn-delete" aria-label="Delete education">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-foreground mb-1 font-display">{edu.school}</h4>
                  <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wide">
                    {edu.degree} • {edu.period}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed bg-secondary/30 p-4 rounded-xl">
                    {edu.description}
                  </p>
                </div>
              ))
            ) : (
              <>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                  <h4 className="text-xl font-bold text-foreground mb-1 font-display">
                    Yonsei University Graduate School of Innovative Psychological Science
                  </h4>
                  <div className="flex items-center gap-3 text-primary font-medium text-sm mb-3">
                    <Calendar size={14} />
                    <span>M.A. Digital Innovation (Expected 2027)</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Focus: Psychology-based AI, Generative AI, Psychological Statistics, Cognitive Engineering Psychology, Gamification & Reinforcement Systems, Cognitive Neuroscience of Memory
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-border"></div>
                  <h4 className="text-xl font-bold text-foreground mb-1 font-display">Yonsei University</h4>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm mb-3">
                    <Calendar size={14} />
                    <span>B.A. International Relations (Wonju) & Psychology (Sinchon) • 2005 - 2013</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
