## Mini E-commerce – Desafio Frontend
Projeto de um e-commerce funcional com listagem, busca, filtro, detalhes e carrinho.

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
├── components/        # Componentes UI
├── contexts/          # Estado global (carrinho)
├── pages/             # Páginas (Home, Product)
├── services/          # Lógica de acesso aos dados (API ou JSON)
├── types/             # Tipos TypeScript




```

## Como rodar o projeto localmente:

```
# instalar dependências
npm install

# rodar em modo dev
npm run dev

A aplicação estará disponível em:
http://localhost:5173
````
---------

## Deploy Público

Veja o projeto funcionando online:

🔗 https://uncode-mini-ecommerce.netlify.app


----------


## Decisões técnicas relevantes:

Eu usei o Context API para gerir o estado global do carrinho, mantendo lógica separada em serviços.
Tratei o JSON para aceitar formatos diferentes, prevenindo erros como map is not a function em produção.


----------

## Visualização 

![Home Page](https://raw.githubusercontent.com/Jufariass/uncode-mini-ecommerce/refs/heads/main/images/preview.png)

----------


## Diferenciais implementados:

Busca de produtos por nome

Filtro por categoria

Gerenciamento de carrinho

Projeto totalmente tipado com TypeScript

Deploy automatizado via GitHub + Netlify


-----------

## Uso de IA
Ferramentas de IA foram utilizadas como apoio durante o desenvolvimento, principalmente para:

Revisão de lógica

Organização de código

Apoio em decisões técnicas

Todo o código foi compreendido, adaptado e validado manualmente.

-----------

## Observações finais:

O foco desse projeto foi clareza, organização e funcionalidade, priorizando simplicidade e boas práticas, de acordo com todas as orientações do desafio.

## Sobre

Feito por *Júlia Araújo Farias* para o desafio Uncode.










