export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Oracle Certified Foundations Associate – Oracle Cloud Infrastructure 2025",
    issuer: "Oracle",
    year: "09/2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=90A2F6DF62B1D2397BE7F6C76984D2CD9523F60F36E79C80CDC1C7D4701F168E"
  },
  {
    id: "2",
    title: "Programa ONE Tech Foundation G8 - Back End",
    issuer: "Oracle & Alura",
    year: "07/2025",
    link: "https://cursos.alura.com.br/program/certificate/40634ec9-5bfa-4eaf-b7fe-698d652d166d?lang"
  },
  {
    id: "3",
    title: "Embaixadora Pan-Africana da Juventude para a governança da Internet em Cabo Verde",
    issuer: "Pan-African Youth Ambassadors for Internet Governance (PAYAIG)",
    year: "10/2023",
    link: "https://credsverse.com/credentials/29890124-1575-4aee-a7b1-46f8bca2a59b"
  }
];

