export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tech: string[];
  description: string[];
  stats?: string; // e.g. "71% accuracy"
  link?: string;
}

export interface Skill {
  name: string;
  icon: string; // simple-icons slug or icon name
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}