# Mini E-commerce – Desafio Frontend

O projeto foi desenvolvido como parte do desafio técnico de Frontend, com o objetivo de demonstrar organização de código, boas práticas em React e TypeScript, além de um deploy público funcional.

---

## Tecnologias utilizadas aqui:

- **React**
- **TypeScript**
- **Vite**
- **CSS Modules**
- **Netlify** (deploy)
- **Context API** (gerenciamento de estado do carrinho)

---

## Por que eu escolhi esse stack?

Eu escolhi **React + Vite + TypeScript** por serem tecnologias modernas, bem leves e extremamente utilizadas no mercado.  
O Vite oferece um ambiente de desenvolvimento rápido, enquanto o TypeScript ajuda a evitar erros comuns e melhora muito a manutenção do código.

---

## Estrutura do projeto

```bash
src/
├── components/        # Componentes reutilizáveis (Header, Footer, ProductCard, etc)
├── contexts/          # Context API (Carrinho)
├── pages/             # Páginas da aplicação (Home, Product)
├── services/          # Camada de acesso aos dados
├── types/             # Tipagens TypeScript
└── main.tsx           # Ponto de entrada da aplicação

Os dados dos produtos estão simulados em um arquivo estático:
public/products.json



```

Como rodar o projeto localmente:

```
# instalar dependências
```
npm install

```
# rodar em modo desenvolvimento
```
npm run dev

A aplicação estará disponível em:

http://localhost:5173

---------

Deploy público
O projeto está publicado e acessível em:

🔗 https://uncode-mini-ecommerce.netlify.app


----------

Decisões técnicas relevantes:

Utilização de Context API para gerenciar o estado do carrinho de forma global.

Separação clara entre camada de serviços e componentes de UI.

Tratamento de erro para carregamento de produtos.

Compatibilidade com diferentes formatos de products.json.

Uso de componentes reutilizáveis para melhor escalabilidade.

----------

Diferenciais implementados:

Busca de produtos por nome

Filtro por categoria

Gerenciamento de carrinho

Projeto totalmente tipado com TypeScript

Deploy automatizado via GitHub + Netlify


-----------

Uso de IA
Ferramentas de IA foram utilizadas como apoio durante o desenvolvimento, principalmente para:

Revisão de lógica

Organização de código

Apoio em decisões técnicas

Todo o código foi compreendido, adaptado e validado manualmente.

-----------

Observações finais
O foco desse projeto foi clareza, organização e funcionalidade, priorizando simplicidade e boas práticas, de acordo com todas as orientações do desafio.









