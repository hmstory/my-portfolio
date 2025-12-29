import React from "react";
import { Edit2, Plus, Save, RotateCcw } from "lucide-react";
import { EditingItem, FormData } from "../types";

interface ItemFormProps {
  type: "project" | "experience" | "education" | "skill";
  editingItem: EditingItem | null;
  formData: FormData;
  onFormDataChange: (data: FormData) => void;
  onSave: () => void;
  onCancel: () => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({
  type,
  editingItem,
  formData,
  onFormDataChange,
  onSave,
  onCancel,
}) => {
  const isEdit = editingItem && editingItem.type === type;

  const updateField = (field: string, value: any) => {
    onFormDataChange({ ...formData, [field]: value } as FormData);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl mb-8 animate-fade-in-up border-primary/30 ring-1 ring-primary/20">
      <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2 font-display">
        {isEdit ? <Edit2 size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
        {isEdit ? "Edit Item" : "Add New Item"}
      </h4>
      <div className="grid gap-5">
        {type === "project" && (
          <>
            <input
              className="input-field"
              placeholder="Title"
              value={(formData as any).title || ""}
              onChange={(e) => updateField("title", e.target.value)}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                className="input-field"
                value={(formData as any).type || "blog"}
                onChange={(e) => updateField("type", e.target.value)}
                required
              >
                <option value="blog">Blog</option>
                <option value="video">Video</option>
                <option value="podcast">Podcast</option>
              </select>
              <input
                className="input-field"
                placeholder="Link Text"
                value={(formData as any).linkText || ""}
                onChange={(e) => updateField("linkText", e.target.value)}
                required
              />
            </div>
            <textarea
              className="input-field min-h-[100px]"
              placeholder="Description"
              value={(formData as any).description || ""}
              onChange={(e) => updateField("description", e.target.value)}
              required
            />
            {(formData as any).type === "video" ? (
              <input
                className="input-field"
                placeholder="YouTube Video ID"
                value={(formData as any).videoId || ""}
                onChange={(e) => updateField("videoId", e.target.value)}
                required
              />
            ) : (
              <input
                className="input-field"
                placeholder="Link URL"
                value={(formData as any).link || ""}
                onChange={(e) => updateField("link", e.target.value)}
                required
              />
            )}
          </>
        )}
        {type === "experience" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="input-field"
                placeholder="Role / Job Title"
                value={(formData as any).role || ""}
                onChange={(e) => updateField("role", e.target.value)}
                required
              />
              <input
                className="input-field"
                placeholder="Company"
                value={(formData as any).company || ""}
                onChange={(e) => updateField("company", e.target.value)}
                required
              />
            </div>
            <input
              className="input-field"
              placeholder="Period (e.g. 2022 - 2024)"
              value={(formData as any).period || ""}
              onChange={(e) => updateField("period", e.target.value)}
              required
            />
            <textarea
              className="input-field min-h-[150px]"
              placeholder="Details (One item per line)"
              value={(formData as any).detailsStr || ""}
              onChange={(e) => updateField("detailsStr", e.target.value)}
            />
          </>
        )}
        {type === "education" && (
          <>
            <input
              className="input-field"
              placeholder="School Name"
              value={(formData as any).school || ""}
              onChange={(e) => updateField("school", e.target.value)}
              required
            />
            <input
              className="input-field"
              placeholder="Degree / Major"
              value={(formData as any).degree || ""}
              onChange={(e) => updateField("degree", e.target.value)}
              required
            />
            <input
              className="input-field"
              placeholder="Period / Location"
              value={(formData as any).period || ""}
              onChange={(e) => updateField("period", e.target.value)}
              required
            />
            <textarea
              className="input-field min-h-[100px]"
              placeholder="Description"
              value={(formData as any).description || ""}
              onChange={(e) => updateField("description", e.target.value)}
            />
          </>
        )}
        {type === "skill" && (
          <>
            <input
              className="input-field"
              placeholder="Category"
              value={(formData as any).category || ""}
              onChange={(e) => updateField("category", e.target.value)}
              required
            />
            <textarea
              className="input-field min-h-[100px]"
              placeholder="Skills (Comma separated)"
              value={(formData as any).items || ""}
              onChange={(e) => updateField("items", e.target.value)}
              required
            />
          </>
        )}
        <div className="flex gap-3 pt-2">
          <button onClick={onSave} className="btn-primary px-6 py-3 flex items-center gap-2">
            <Save size={18} /> Save
          </button>
          <button onClick={onCancel} className="btn-secondary px-6 py-3 flex items-center gap-2">
            <RotateCcw size={18} /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
