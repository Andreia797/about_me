export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  type?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "projectItems.1.title",
    description: "projectItems.1.description",
    tech: ["Django", "React", "PostgreSQL"],
    type: "projectItems.1.type",
    github: "https://github.com/Andreia797"
  },
  {
    id: "2",
    title: "projectItems.2.title",
    description: "projectItems.2.description",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Andreia797"
  }
];

