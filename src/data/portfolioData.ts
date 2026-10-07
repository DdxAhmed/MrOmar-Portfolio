import type { SectionItem, Experience, Project, Skill, Achievement, SocialLink } from "../types/portfolio";

export const sections: SectionItem[] = [
  { id: "about", number: "01", label: "About" },
  { id: "experience", number: "02", label: "Experience" },
  { id: "learning", number: "03", label: "Learning" },
  { id: "skills", number: "04", label: "What I bring" },
  { id: "proof", number: "05", label: "Proof points" },
  { id: "selected-work", number: "06", label: "Selected work" },
  { id: "contact", number: "07", label: "Contact" },
];

export const experiences: Experience[] = [
  {
    number: "01",
    period: "2025 — now",
    role: "Short-form Content Creator",
    place: "TikTok · English with Omar",
    description:
      "Short educational videos that make English easier to follow, using trends, storytelling, grammar explanations, and vocabulary tips.",
    tags: ["Scripting", "Video editing", "Content strategy"],
  },
  {
    number: "02",
    period: "2024 — 2025",
    role: "English Teacher Assistant",
    place: "Bright Stars Academy",
    description:
      "Supported lessons for children aged 4–10 through games, stories, pronunciation practice, classroom activities, and confidence-building.",
    tags: ["Lesson planning", "Classroom support", "Communication"],
  },
  {
    number: "03",
    period: "2023 — now",
    role: "Community Organizer & Mentor",
    place: "Telegram · English with Omar",
    description:
      "Built a study community of 897 learners sharing notes, live exams, practice tests, and quick language tips.",
    tags: ["Community building", "Live teaching", "E-learning"],
  },
  {
    number: "04",
    period: "2023 — now",
    role: "English Tutor & Content Creator",
    place: "YouTube · English with Omar",
    description:
      "Created 140+ educational videos that turn grammar and vocabulary into clear explanations with examples.",
    tags: ["Teaching", "CapCut", "Educational design"],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    type: "YouTube channel",
    title: "English with Omar",
    description:
      "Long-form English lessons for beginners who want the fog around English to finally clear.",
    href: "https://www.youtube.com/@english_with_omarr",
    category: ["Teaching", "Video"],
    symbol: "▶",
    accentGradient: "from-blue-600 to-sky-500",
  },
  {
    number: "02",
    type: "Telegram community",
    title: "Study room, online",
    description:
      "A focused corner for secondary students: notes, practice tests, live exams, and motivation.",
    href: "https://t.me/english_with_omarr",
    category: ["Community", "Teaching"],
    symbol: "↗",
    accentGradient: "from-emerald-600 to-teal-500",
  },
  {
    number: "03",
    type: "TikTok series",
    title: "Tiny lessons, big reach",
    description:
      "Short-form grammar, vocabulary, and storytelling designed to be useful before it is viral.",
    href: "https://www.tiktok.com/@englishwithomar3",
    category: ["Video", "Community"],
    symbol: "✳",
    accentGradient: "from-indigo-600 to-blue-500",
  },
];

export const skills: Skill[] = [
  {
    title: "Teaching",
    value: 90,
    note: "Patient explanations that meet beginners where they are.",
  },
  {
    title: "Communication",
    value: 95,
    note: "Making people feel comfortable enough to ask the next question.",
  },
  {
    title: "Content creation",
    value: 90,
    note: "Turning useful ideas into lessons people want to finish.",
  },
  {
    title: "Adaptability",
    value: 90,
    note: "Finding a new way to explain it when the first one doesn't land.",
  },
];

export const achievements: Achievement[] = [
  ["IELTS Academic", "British Council / IDP: IELTS UK", "20 Oct 2025"],
  ["120-hour TESOL / TEFL", "Worlds TESOL Academy", "March 2025"],
  ["3rd Place · Chess Tournament", "LKS “START” Wola Mielecka", "14 Sep 2024"],
  ["4th Place · School Chess League", "SDK-Lotnik · Mielec", "30 Jun 2024"],
];

export const socials: SocialLink[] = [
  { label: "YouTube", href: "https://www.youtube.com/@english_with_omarr", mark: "YT" },
  { label: "TikTok", href: "https://www.tiktok.com/@englishwithomar3", mark: "TK" },
  { label: "Telegram", href: "https://t.me/english_with_omarr", mark: "TG" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omarmohameden/", mark: "in" },
  { label: "GitHub", href: "https://github.com/omarmohamed05", mark: "GH" },
];
