# Portfolio Pessoal

Um portfólio moderno e responsivo construído com React, Vite, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones SVG
- **Radix UI** - Componentes primitivos acessíveis

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes UI base (shadcn/ui)
│   ├── Navigation.tsx  # Navegação principal
│   └── Footer.tsx      # Rodapé
├── sections/           # Seções da página
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── JourneySection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
├── lib/               # Utilitários
│   └── utils.ts       # Funções auxiliares
├── types/             # Definições TypeScript
│   └── index.ts
└── App.tsx            # Componente principal
```

## 🎨 Seções do Portfólio

1. **Home (Hero)** - Apresentação principal com nome, descrição e links sociais
2. **About** - Informações pessoais, habilidades e estatísticas
3. **Journey** - Experiência profissional e educação
4. **Testimonials** - Depoimentos de clientes e colegas
5. **Projects** - Projetos desenvolvidos com tecnologias utilizadas
6. **Contact** - Formulário de contato e informações de contato
7. **Footer** - Links rápidos e redes sociais

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter

## 🚀 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel:

1. Faça push do código para o GitHub
2. Conecte o repositório ao Vercel
3. O deploy será feito automaticamente

### Configuração Manual

Se preferir fazer o deploy manualmente:

1. Execute `npm run build`
2. Faça upload da pasta `dist` para o Vercel

## 🎨 Personalização

### Cores e Tema
O projeto usa um tema escuro por padrão. Para personalizar as cores, edite as variáveis CSS em `src/index.css`.

### Conteúdo
Para personalizar o conteúdo:

1. **Informações pessoais**: Edite os componentes em `src/sections/`
2. **Projetos**: Modifique o array `projects` em `ProjectsSection.tsx`
3. **Experiência**: Atualize o array `experiences` em `JourneySection.tsx`
4. **Depoimentos**: Edite o array `testimonials` em `TestimonialsSection.tsx`

### Imagens
- Substitua os emojis por imagens reais nos componentes
- Adicione suas fotos e imagens de projetos na pasta `public/`
- Atualize as referências nos componentes

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔧 Configurações Adicionais

### Alias de Importação
O projeto usa o alias `@` para importações relativas ao diretório `src/`.

### TypeScript
Configuração completa do TypeScript com tipagem estrita e path mapping.

### Tailwind CSS
Configuração customizada com variáveis CSS para tema escuro e componentes shadcn/ui.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no portfólio ou pelas redes sociais.