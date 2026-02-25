import { GraduationCap, BookOpen, FlaskConical, Languages, Award } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  features: string[];
}

export const programs: Program[] = [
  {
    id: 'bachelor',
    title: "Bachelor's Degree",
    description:
      'Earn your undergraduate degree at top Chinese universities with programs taught in English and Chinese.',
    icon: GraduationCap,
    features: ['4-year programs', 'English & Chinese medium', '100+ partner universities'],
  },
  {
    id: 'master',
    title: "Master's Degree",
    description:
      'Advance your career with postgraduate studies in engineering, business, medicine, and more.',
    icon: BookOpen,
    features: ['2-3 year programs', 'Research & coursework options', 'Scholarship opportunities'],
  },
  {
    id: 'phd',
    title: 'PhD Programs',
    description:
      'Pursue cutting-edge research at world-ranked Chinese institutions with full funding available.',
    icon: FlaskConical,
    features: ['3-4 year programs', 'Full funding available', 'Global research networks'],
  },
  {
    id: 'language',
    title: 'Language Courses',
    description:
      'Learn Mandarin Chinese through intensive or semester-long courses at accredited language centers.',
    icon: Languages,
    features: ['HSK preparation', 'Beginner to advanced levels', 'Cultural immersion'],
  },
  {
    id: 'scholarship',
    title: 'Scholarships',
    description:
      'Access CSC, university, and provincial scholarships that cover tuition, accommodation, and stipend.',
    icon: Award,
    features: [
      'Full & partial scholarships',
      'Government & university funded',
      'Application assistance',
    ],
  },
];
