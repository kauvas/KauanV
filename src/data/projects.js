// Edite esta lista para adicionar, remover ou atualizar seus projetos.
export const projects = [
  {
    number: "01",
    title: "Engenharia e Ciência de Dados: Pipeline ETL para uma empresa fictícia",
    description:
      "Desenvolvimento de uma esteira completa de dados (Pipeline ETL) para coleta, processamento e análise de dados operacionais e financeiros de uma plataforma móvel de manutenção residencial. Configuração e automação do pipeline de ingestão utilizando o Apache NiFi, gerenciando fluxos de dados crus desde a captura via requisições HTTP até a conversão estruturada de formatos complexos. Criação de consultas avançadas em SQL (QueryRecord no NiFi) para higienização matemática (ABS/REPLACE), deduplicação inteligente, padronização categórica e tratamento resiliente de inconsistências em strings de data. Modelagem de banco de dados relacional e persistência robusta em tabelas estruturadas no PostgreSQL, aplicando regras de negócio e novas colunas computadas via scripts SQL de atualização (Update/Alter).Integração das tabelas tratadas com o Power BI para modelagem dimensional, amostragem visual de métricas críticas (como taxas de retrabalho e eficiência por serviço) e geração de dashboards voltados para insights e tomadas de decisão gerenciais.",
    technologies: ["Docker", "Apache NiFi", "SQL", "PostgreSQL", "Power BI"],
  },
  {
    number: "02",
    title: "Sistema de inscrições em Workshop",
    description:
      "Desenvolvimento de uma aplicação Web completa para gerenciamento de workshops utilizando PHP no Back-end e HTML no Front-end.Implementação de um sistema de autenticação e de inscrições, apresentando todas as funcionalidades CRUD (Create, Read, Update, Delete) no banco de dados.Aplicação do Padrão de Arquitetura MVC, garantindo a separação de responsabilidades, manutenção e escalabilidade do código. Projeto acadêmico colaborativo gerenciado através do GitHub.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://github.com/66biel66/WorkshopPJphp",
    linkLabel: "Ver no GitHub",
  },
  {
    number: "03",
    title: "Sistema de Gestão Financeira Pessoal",
    description:
      "Criação de uma aplicação full stack voltada para controle financeiro individual com sistema seguro de autenticação e sessões protegidas. Desenvolvimento de um Dashboard interativo que consome dados brutos de orçamentos (entradas) e despesas (saídas) e os transforma em gráficos dinâmicos via JavaScript. Estruturação do projeto sob o padrão arquitetural MVC, garantindo total separação de responsabilidades, escalabilidade e facilidade de manutenção do código. Modelagem de dados e persistência robusta utilizando triggers e filtragem de inputs no banco de dados MySQL.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://github.com/kauvas/ProjDash",
    linkLabel: "Ver no GitHub",
  },
  {
    number: "04",
    title: "Fórum de Discussão com Sistema de Credenciais",
    description:
      "Desenvolvimento de uma plataforma web de fórum voltada para debates confiáveis utilizando o padrão de arquitetura MVC. Implementação de sistema completo de postagens, comentários e votação interativa (upvote/downvote) gerenciada dinamicamente com JavaScript. Criação do diferencial de exibição de credenciais e conquistas dos usuários na área de comentários para validação de autoridade e contexto. Gerenciamento de múltiplas entidades complexas (Usuários, Posts, Comentários, Votos e Credenciais) através de operações CRUD e relacionamento robusto em MySQL. ",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://github.com/kauvas/Forum",
    linkLabel: "Ver no GitHub",
  },
];
