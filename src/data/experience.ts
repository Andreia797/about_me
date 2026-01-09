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
    title: "Engenheira de Teste de Software",
    company: "Freelancer",
    location: "Remoto",
    period: "2022 – Atual",
    description: "Execução de testes manuais, identificação e reporte de bugs em projetos diversos. Experiência em plataformas: Tester Work, Test IO, Testlio e uTest.",
    category: "testing"
  },
  {
    id: "2",
    title: "Estagiário em Suporte ao Desenvolvimento e Documentação Técnica",
    company: "Quality Making",
    location: "Remoto, Cabo Verde",
    period: "03/2025 – 10/2025",
    description: "Criação de manuais técnicos e de utilizadores para aplicações. Análise de sistemas, suporte ao desenvolvimento e utilização do Trello para gestão de tarefas e progresso.",
    category: "development"
  },
  {
    id: "3",
    title: "Estágio na Área de Desenvolvimento de Software",
    company: "IDEIA",
    location: "Praia, Cabo Verde",
    period: "02/2025 – 07/2025",
    description: "Desenvolvimento de aplicações web utilizando o framework Laravel (PHP). Utilização do XAMPP para gerenciamento de bases de dados locais (MySQL). Participação em reuniões com clientes para levantamento de requisitos e apresentação de soluções. Apoio na análise e implementação de melhorias nos sistemas desenvolvidos.",
    category: "development"
  },
  {
    id: "4",
    title: "Estágio de Developer Tester",
    company: "Universidade de Cabo Verde",
    location: "Praia, Cabo Verde",
    period: "07/2022 – 02/2023",
    description: "Realização de testes de sistemas e suporte na gestão de repositórios no GitLab. Otimização e gerenciamento de bases de dados relacionais (PostgreSQL). Análise de requisitos e implementação de funcionalidades com Yii PHP. Contribuição para o desenvolvimento e manutenção de aplicações web.",
    category: "testing"
  },
  {
    id: "5",
    title: "Startup Founder",
    company: "Cabo Verde Digital",
    location: "Cabo Verde",
    period: "2023",
    description: "Participação no desenvolvimento de projetos tecnológicos e de inovação. Desenvolvimento de protótipos e estratégias de criação de negócios. Aprimoramento de competências em empreendedorismo e execução de projetos inovadores.",
    category: "development"
  }
];
