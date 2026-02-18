export interface Experience {
  id: string;
  title: string;
  company?: string;
  location: string;
  period: string;
  description?: string;
  category: 'development' | 'testing' | 'cybersecurity' | 'all';
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "experienceItems.1.title",
    company: "experienceItems.1.company",
    location: "experienceItems.1.location",
    period: "experienceItems.1.period",
    description: "experienceItems.1.description",
    category: "testing"
  },
  {
    id: "2",
    title: "experienceItems.2.title",
    company: "experienceItems.2.company",
    location: "experienceItems.2.location",
    period: "experienceItems.2.period",
    description: "experienceItems.2.description",
    category: "development"
  },
  {
    id: "3",
    title: "experienceItems.3.title",
    company: "experienceItems.3.company",
    location: "experienceItems.3.location",
    period: "experienceItems.3.period",
    description: "experienceItems.3.description",
    category: "development"
  },
  {
    id: "4",
    title: "experienceItems.4.title",
    company: "experienceItems.4.company",
    location: "experienceItems.4.location",
    period: "experienceItems.4.period",
    description: "experienceItems.4.description",
    category: "testing"
  },
  {
    id: "5",
    title: "experienceItems.5.title",
    company: "experienceItems.5.company",
    location: "experienceItems.5.location",
    period: "experienceItems.5.period",
    description: "experienceItems.5.description",
    category: "all"
  },
  {
    id: "6",
    title: "experienceItems.6.title",
    company: "experienceItems.6.company",
    location: "experienceItems.6.location",
    period: "experienceItems.6.period",
    description: "experienceItems.6.description",
    category: "development"
  }

];
