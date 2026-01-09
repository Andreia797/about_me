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
    title: "Plataforma de Gestão das Residências da Universidade de Cabo Verde",
    description: "Desenvolvimento de uma plataforma digital para gestão de candidaturas, residentes e alojamentos, utilizando Django, React e PostgreSQL. Projeto Final de Curso.",
    tech: ["Django", "React", "PostgreSQL"],
    type: "Projeto Final de Curso",
    github: "https://github.com/Andreia797"
  },
  {
    id: "2",
    title: "NhaLiXu",
    description: "Desenvolvimento de uma solução digital para comunicação direta entre a população e a Câmara Municipal, melhorando a eficiência dos serviços de recolha de lixo.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Andreia797"
  }
];

