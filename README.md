# Portfólio pessoal

Um site de portfólio feito com React e Vite. Os textos entre colchetes, como
`[Seu nome]`, são marcadores: substitua-os pelos seus dados antes de publicar.

## Executar localmente

Instale o [Node.js](https://nodejs.org/) e, na pasta do projeto, execute:

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local no terminal. Para conferir a versão de
produção, use `npm run build` e depois `npm run preview`.

## Onde editar

- `src/App.jsx` reúne as seções da página na ordem em que aparecem.
- `src/components/` contém componentes pequenos e reutilizáveis:
  - `Header.jsx` mostra a marca e os links de navegação.
  - `Hero.jsx` é a apresentação inicial.
  - `Projects.jsx` percorre os dados e monta um cartão para cada projeto.
  - `Skills.jsx` lista as habilidades.
  - `Contact.jsx` mostra os links de contato.
  - `Footer.jsx` fecha a página com o rodapé.
- `src/data/projects.js` guarda os projetos fora dos componentes. Copie um
  objeto da lista para adicionar um projeto; atualize título, descrição,
  tecnologias e link.
- `src/data/skills.js` guarda a lista de habilidades.
- `src/styles.css` define cores, tipografia, layout responsivo e estilos de foco.

Os componentes recebem esses dados por importação e os exibem com `.map()`.
Assim, para mudar o conteúdo dos cartões ou das habilidades, basta editar os
arquivos em `src/data/`.

## Publicar no GitHub Pages

O repositório configurado é `kauvas/KauanV`, então `vite.config.js` usa
`base: "/KauanV/"`. Se o nome do repositório mudar, atualize esse valor também.

1. Envie o projeto para a branch `main` do repositório `KauanV`.
2. No GitHub, abra **Settings → Pages** e escolha **GitHub Actions** como fonte
   de publicação.
3. A cada envio para `main`, `.github/workflows/deploy.yml` instala as
   dependências, gera `dist/` e publica o site.

O endereço esperado é `https://kauvas.github.io/KauanV/`.
