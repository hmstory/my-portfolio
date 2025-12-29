export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  type: "blog" | "video" | "podcast";
  videoId?: string;
  createdAt?: Date | any;
  order?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  details: string[];
  order?: number;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
  order?: number;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
  order?: number;
}

export interface EditingItem {
  type: "project" | "experience" | "education" | "skill";
  id: string;
}

export interface ProjectFormData {
  title: string;
  description: string;
  link: string;
  linkText: string;
  type: "blog" | "video" | "podcast";
  videoId: string;
}

export interface ExperienceFormData {
  role: string;
  company: string;
  period: string;
  description: string;
  details: string[];
  detailsStr?: string;
}

export interface EducationFormData {
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface SkillFormData {
  category: string;
  items: string;
}

export type FormData = ProjectFormData | ExperienceFormData | EducationFormData | SkillFormData;
