# ServeRest Automation

Este projeto contém uma suíte de testes automatizados para a plataforma **ServeRest**, abrangendo atualmente cenários de interface de utilizador (Front-end), com o objetivo de futuramente incluir testes de API (Back-end). 

A automação é desenvolvida utilizando o ecossistema do framework **Cypress**.

---

## Tecnologias Utilizadas

* **Cypress** (Framework de testes de ponta a ponta)
* **JavaScript / Node.js** (Linguagem de programação e ambiente de execução)

---

## 📁 Estrutura do Projeto

Com base na arquitetura do projeto, a árvore de diretórios está organizada da seguinte forma:

```text
SERVEREST
├── .github/workflows/
│   └── cypress.yml          # Pipeline de Integração Contínua (CI - GitHub Actions)
├── cypress/
│   ├── e2e/                 # Cenários de testes (End-to-End / Integração)
│   │   ├── 1.cadastrarUsuario.cy.js
│   │   ├── 2.login.cy.js
│   │   └── 3.adicionarLista.cy.js
│   ├── fixtures/            # Massa de dados estática para os testes
│   │   └── users.json
│   ├── screenshots/         # Capturas de ecrã geradas automaticamente em caso de falhas
│   └── support/             # Comandos personalizados e configurações globais
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js        # Arquivo de configuração principal do Cypress
├── package.json             # Dependências do projeto e scripts de execução
└── package-lock.json        # Bloqueio de versões das dependências

```
---

## Pré-requisitos
Antes de começar, necessita de ter instalado na sua máquina:

Node.js (versão recomendada: LTS)

Um gestor de pacotes como o npm (instalado nativamente com o Node)

##  Instalação
Clone o repositório para a sua máquina local:

Bash
git clone <URL_DO_REPOSITORIO>
Aceda à pasta do projeto:

Bash
cd SERVEREST
Instale as dependências necessárias:

Bash
npm install
## Executando os Testes
Pode executar os testes de duas maneiras distintas:

Modo Interativo (Interface Visual)
Para abrir a interface gráfica do Cypress, onde pode selecionar e acompanhar a execução dos testes em tempo real:

Bash
npx cypress open

Modo Headless (Linha de Comando)
Para executar todos os testes em segundo plano diretamente no terminal (ideal para pipelines de CI):

Bash
npx cypress run
##  Próximos Passos
[ ] Finalizar os fluxos principais de testes no Front-end.

[ ] Implementar e estruturar a arquitetura para testes de API REST (Back-end).

[ ] Refatorar seletores e criar novos comandos personalizados em support/commands.js.
"""
