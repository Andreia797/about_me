export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programação e Desenvolvimento",
    skills: ["C", "Java 21", "Python", "Django", "HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "TypeScript", "SQL", "Prolog", "React", "Next.js", "Node.js", "Yii Framework", "Laravel", "PHP", "jQuery", "Spring Boot", "Spring Framework"]
  },
  {
    category: "Base de Dados",
    skills: ["PostgreSQL", "MySQL", "SQLite"]
  },
  {
    category: "Desenvolvimento Mobile",
    skills: ["Android", "Android Studio", "APIs externas"]
  },
  {
    category: "APIs e Integração",
    skills: ["APIs RESTful", "Desenvolvimento e consumo de APIs", "Integração com APIs externas"]
  },
  {
    category: "Redes e Infraestrutura",
    skills: ["Protocolos de comunicação", "Roteamento de rede", "Configuração de sistemas", "Resolução de problemas de conectividade"]
  },
  {
    category: "Segurança da Informação",
    skills: ["Criptografia", "Controlo de acesso", "Segurança de aplicações web", "Proteção de dados pessoais"]
  },
  {
    category: "Engenharia de Software",
    skills: ["Análise de requisitos", "Modelagem de sistemas", "Testes de software manuais e automatizados"]
  },
  {
    category: "Metodologias de Desenvolvimento",
    skills: ["Agile", "Scrum"]
  },
  {
    category: "Ferramentas e Tecnologias",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Visual Studio Code", "Android Studio", "XAMPP", "Docker", "Postman", "Jira", "Trello", "Figma", "Canva", "ONNX"]
  },
  {
    category: "Plataformas de Teste",
    skills: ["Tester Work", "Test IO", "Testlio", "uTest"]
  }
];

