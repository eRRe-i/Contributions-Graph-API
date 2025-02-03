# ContributionsGrid

[![GitHub](https://img.shields.io/badge/GitHub-API-blue?logo=github)](https://github.com)
[![GraphQL](https://img.shields.io/badge/GraphQL-Middleware-blue?logo=graphql)](https://graphql.org)
[![Node.js](https://img.shields.io/badge/Node.js-Server-green?logo=node.js)](https://nodejs.org)

## Visão Geral

### **ContributionsGrid**

O objetivo da API é ser um Middleware stateless entre o cliente e o A GithubAPI, limitando e organizando a requsição para obter os dados requeridos no formato desejado.

O gráfico de contribuições é gerado com base nos dados da API do GitHub e inclui:

- Um cabeçalho com o nome completo (**fullName**) e o nome de usuário do GitHub (**gitHubUsername**).
- Informações opcionais, como o total de contribuições do dia atual e do dia anterior.
- Detalhes das contribuições, como tipo (**Pull Request, Issue Opened, Issue Closed, Code Review, etc.**) e descrição.

O projeto também possui um front que entrega as imagens com um forms para ajudar a montar a requisição, bem como um docs que mostra como utilizar a ferramenta.

### **ContributionsTree**

O objetivo principal da API é fornecer um histórico estruturado das contribuições de um usuário no GitHub, organizado em um grafo que inclui:

    Projeto -> Pull Requests -> Commits (associados ao Pull Request).
    Projeto -> Issues (Abertas ou Fechadas).
    Projeto -> Code Reviews.
    Projeto -> Commits avulsos.

Além disso, o grafo pode incluir:

    Um cabeçalho com o nome completo (fullName) e o nome de usuário do GitHub (gitHubUsername).
    Filtros para mostrar apenas Issues, Pull Requests ou Commits.


## Funcionalidades Principais

### Gráfico de Contribuições:
- Exibe as contribuições do usuário em um formato visual (quadrados coloridos).
- O gráfico pode ser personalizado com cores e estilos.

### Cabeçalho Personalizado:
- Mostra o nome completo (**fullName**) e o nome de usuário do GitHub (**gitHubUsername**).

### Informações Adicionais:
- Total de contribuições do dia atual e do dia anterior.
- Lista detalhada das contribuições, incluindo tipo e descrição.

## Tecnologias Utilizadas

### Backend:
- **Express GraphQL** (para a API GraphQL).

### Frontend (Iframes):
- **HTML, CSS e JavaScript** para renderização do gráfico.

### Integração com GitHub:
- **API do GitHub** para obter dados de contribuições.

### Bot do Discord:
- **Discord.js** para interação com o Discord.

### Canvas:
- **canvas** para a criação da imagem.



#### `GET /api/users/{discordId}`
- Retorna as informações do usuário registrado.


## Instalação e Configuração

### Pré-requisitos
- **Node.js** (v18 ou superior).
- Conta no **GitHub** com um token de acesso pessoal.


### Passos para Executar o Projeto

```bash
git clone https://github.com/seu-usuario/contribution-graph-api.git
cd contribution-graph-api
npm install
```

Crie um arquivo `.env` e configure:
```plaintext
MONGODB_URI=mongodb://localhost:27017/contribution_graph
GITHUB_TOKEN=seu_token_aqui
CRYPTO_SECRET_KEY=chave_secreta_para_argon2
```

Inicie o servidor:
```bash
npm start
```

## Contribuição
Contribuições são bem-vindas! Siga os passos:
- Fork do repositório.
- Crie uma branch (`git checkout -b feature/nova-feature`).
- Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
- Push e PR.

## Licença
Este projeto está sob a **MIT License**.

## Contato
- **Discord:** umgnomochamadoaltair
- **GitHub:** [eRRe-i](https://github.com/eRRe-i)





