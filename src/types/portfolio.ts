export type ProjectCategory = "Teaching" | "Community" | "Video";

export type Project = {
  number: string;
  type: string;
  title: string;
  description: string;
  href: string;
  category: ProjectCategory[];
  symbol: string;
  accentGradient: string;
};

export type Experience = {
  number: string;
  period: string;
  role: string;
  place: string;
  description: string;
  tags: string[];
};

export type Skill = {
  title: string;
  value: number;
  note: string;
};

export type Achievement = [string, string, string]; // [title, organization, date]

export type SocialLink = {
  label: string;
  href: string;
  mark: string;
};

export type SectionItem = {
  id: string;
  number: string;
  label: string;
};
