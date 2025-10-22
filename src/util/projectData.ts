export const projects = {
  admin: {
    nome: "Administração de Vendas",
    descricao:
      "A plataforma Admin é um sistema web desenvolvido para gerenciamento interno de dados e usuários, com acesso restrito por login. Hospedada na Vercel e construída com tecnologias modernas como Next.js, oferece uma interface limpa e responsiva. Seu foco é proporcionar uma administração ágil, segura e intuitiva.",
    imagem: "/siteAdmin.png",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    slug: "admin",
  },
  // outroProjeto: {
  //   nome: "Portal Educacional",
  //   descricao: "Um sistema voltado para o ensino à distância...",
  //   imagem: "/portal.png",
  //   tecnologias: ["Next.js", "Node.js", "PostgreSQL"],
  //   slug: "portal-educacional",
  // },
};
export const projetos = Object.values(projects);
