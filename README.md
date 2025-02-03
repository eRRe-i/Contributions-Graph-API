# Documentação do Projeto: Contribution Graph API

[![GitHub](https://img.shields.io/badge/GitHub-API-blue?logo=github)](https://github.com)
[![GraphQL](https://img.shields.io/badge/GraphQL-Middleware-blue?logo=graphql)](https://graphql.org)
[![Node.js](https://img.shields.io/badge/Node.js-Server-green?logo=node.js)](https://nodejs.org)

## Visão Geral

O **Contribution Graph API** é uma API GraphQL que fornece dados das contribuições de um usuário do GitHub, apresentados em um gráfico de contribuições. O objetivo principal é permitir que desenvolvedores integrem esses dados em seus projetos, seja através de um bot do Discord ou de iframes incorporados em páginas HTML.

O objetivo da API é ser um Middleware stateless entre o cliente e o A GithubAPI, limitando e organizando a requsição para obter os dados requeridos no formato desejado.

O gráfico de contribuições é gerado com base nos dados da API do GitHub e inclui:

- Um cabeçalho com o nome completo (**fullName**) e o nome de usuário do GitHub (**gitHubUsername**).
- Informações opcionais, como o total de contribuições do dia atual e do dia anterior.
- Detalhes das contribuições, como tipo (**Pull Request, Issue Opened, Issue Closed, Code Review, etc.**) e descrição.

O projeto também possui um front que entrega as imagens com um forms para ajudar a montar a requisição, bem como um docs que mostra como utilizar a ferramenta.

## Funcionalidades Principais

### Gráfico de Contribuições:
- Exibe as contribuições do usuário em um formato visual (quadrados coloridos).
- O gráfico pode ser personalizado com cores e estilos.

### Cabeçalho Personalizado:
- Mostra o nome completo (**fullName**) e o nome de usuário do GitHub (**gitHubUsername**).

### Informações Adicionais:
- Total de contribuições do dia atual e do dia anterior.
- Lista detalhada das contribuições, incluindo tipo e descrição.

### Integrações:
- **Bot do Discord**: Permite que usuários solicitem seus gráficos de contribuição diretamente no Discord.
- **Iframes**: Permite a incorporação do gráfico em páginas HTML.


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
- **GitHub:** eRRe-i

Aqui está um **README.md** completo para o seu projeto **Contribution Graph API**, baseado nas informações fornecidas:

---

# **Contribution Graph API**

![GitHub](https://img.shields.io/badge/GitHub-API-brightgreen)
![GraphQL](https://img.shields.io/badge/GraphQL-Middleware-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)

O **Contribution Graph API** é uma API GraphQL que atua como um **middleware stateless** entre o cliente e a API do GitHub. Ele organiza e refina os dados das contribuições de um usuário do GitHub, fornecendo um gráfico de contribuições personalizável e informações detalhadas sobre as atividades do usuário.

---

## **Visão Geral**

O objetivo principal da API é fornecer dados das contribuições de um usuário do GitHub em um formato estruturado e fácil de usar. A API pode ser integrada em:
- **Bots do Discord**: Para que usuários possam solicitar seus gráficos de contribuição diretamente no Discord.
- **Iframes em páginas HTML**: Para que desenvolvedores possam exibir seus históricos de contribuição em seus portfólios ou sites pessoais.

A API atua como um **middleware**, limitando e organizando as requisições à API do GitHub para retornar apenas os dados necessários no formato desejado.

---

## **Funcionalidades Principais**

### **Gráfico de Contribuições**
- Exibe as contribuições do usuário em um formato visual (quadrados coloridos).
- Personalização de cores e estilos do gráfico.

### **Cabeçalho Personalizado**
- Mostra o nome completo (`fullName`) e o nome de usuário do GitHub (`gitHubUsername`).

### **Informações Adicionais**
- Total de contribuições do dia atual e do dia anterior.
- Lista detalhada das contribuições, incluindo:
  - Tipo (Pull Request, Issue Opened, Issue Closed, Code Review, etc.).
  - Descrição da contribuição.

### **Integrações**
- **Bot do Discord**: Permite que usuários solicitem seus gráficos de contribuição diretamente no Discord.
- **Iframes**: Permite a incorporação do gráfico em páginas HTML.

---

## **Tecnologias Utilizadas**

### **Backend**
- **Node.js**: Runtime para execução do servidor.
- **Express GraphQL**: Para criar a API GraphQL e gerenciar as requisições.
- **GitHub API**: Para obter os dados brutos das contribuições dos usuários.

### **Frontend (Iframes)**
- **HTML/CSS/JavaScript**: Para renderização do gráfico em páginas web.

### **Bot do Discord**
- **Discord.js**: Para interação com o Discord e envio de gráficos de contribuição.

---

## **Como Funciona?**

1. **Requisição do Cliente**:
   - O cliente (bot do Discord ou página HTML) faz uma requisição à API GraphQL.
   - Exemplo de requisição:
     ```graphql
     query {
       getUserContributions(username: "octocat") {
         fullName
         githubUsername
         contributions {
           type
           description
           date
         }
       }
     }
     ```

2. **Middleware**:
   - A API recebe a requisição e faz uma chamada à API do GitHub para obter os dados brutos.
   - Processa e organiza os dados, filtrando apenas as informações necessárias.

3. **Resposta**:
   - A API retorna os dados refinados no formato GraphQL.
   - EXEMPLO de resposta:
     ```json
     {
       "data": {
         "getUserContributions": {
           "fullName": "The Octocat",
           "githubUsername": "octocat",
           "contributions": [
             {
               "type": "PullRequest",
               "description": "Fixed bug in API",
               "date": "2023-10-01T12:00:00Z"
             },
             {
               "type": "IssueOpened",
               "description": "Reported bug in UI",
               "date": "2023-10-01T10:00:00Z"
             }
           ]
         }
       }
     }
     ```

---

## **Instalação e Configuração**

### **Pré-requisitos**
- Node.js (v18 ou superior).
- Conta no GitHub com um token de acesso pessoal.

### **Passos para Executar o Projeto**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/contribution-graph-api.git
   cd contribution-graph-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```plaintext
   GITHUB_TOKEN=seu_token_aqui
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

5. Acesse a API GraphQL em:
   ```
   http://localhost:4000/graphql
   ```

---

## **Exemplos de Uso**

### **1. Obter Gráfico de Contribuições**
**Requisição**:
```graphql
query {
  getUserContributions(username: "octocat") {
    fullName
    githubUsername
    contributions {
      type
      description
      date
    }
  }
}
```

**Resposta**:
```json
{
  "data": {
    "getUserContributions": {
      "fullName": "The Octocat",
      "githubUsername": "octocat",
      "contributions": [
        {
          "type": "PullRequest",
          "description": "Fixed bug in API",
          "date": "2023-10-01T12:00:00Z"
        },
        {
          "type": "IssueOpened",
          "description": "Reported bug in UI",
          "date": "2023-10-01T10:00:00Z"
        }
      ]
    }
  }
}
```

### **2. Integração com Bot do Discord**
O bot do Discord pode usar a API para enviar gráficos de contribuição diretamente no chat. Exemplo de comando:
```
!contributions octocat
```

---

## **Contribuição**

Contribuições são bem-vindas! Siga os passos abaixo:
1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

---

## **Licença**

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## **Contato**

Para dúvidas ou sugestões, entre em contato:
- **Discord**: umgnomochamadoAltair
- **GitHub**: [eRRe-i](https://github.com/eRRe-i)


