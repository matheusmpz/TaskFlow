# TaskFlow

**TaskFlow** é uma aplicação de gerenciamento de tarefas que permite aos usuários criar, editar e excluir listas de tarefas de forma intuitiva. Desenvolvido com um foco em usabilidade e design para desktop, o TaskFlow visa ajudar os usuários a organizarem suas atividades diárias de maneira eficiente. Atualmente, o TaskFlow é um protótipo com a parte visual (front-end) implementada e algumas interações dinâmicas utilizando JavaScript.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação
- **CSS**: Estilização da interface
- **JavaScript**: Interatividade e manipulação do DOM
- **Tailwind CSS**: Estilização rápida
- **Heroicons**: Ícones utilizados na interface

## Funcionalidades

- **Criação de Tarefas**: Adicione novas tarefas com facilidade.
- **Edição de Tarefas**: Altere detalhes de tarefas existentes.
- **Exclusão de Tarefas**: Remova tarefas que não são mais necessárias.
- **Categorias de Tarefas**: O TaskFlow permite que os usuários organizem suas tarefas em diferentes categorias. Cada tarefa pode ser atribuída a uma prioridade — baixa, média ou alta — e também pode incluir um horário específico (por exemplo, 10:00 - 11:00) para ajudar na gestão do tempo.
- **Prioridade de Tarefas**: Cada tarefa pode ter uma prioridade (baixa, média ou alta) e um horário (ex: 10:00 - 11:00).
- **Filtro por Lista**: Cada lista possui um sistema de filtragem. Os usuários podem filtrar as tarefas com base em diferentes propriedades, como prioridade, horário e nome da tarefa, garantindo uma experiência de uso mais eficiente.
- **Visualizar Tarefas Realizadas**: Com um simples clique em um botão, um modal se abre, exibindo todas as tarefas finalizadas na lista específica, proporcionando uma visão clara do progresso.
- **Criar Nova Lista de Tarefas**: Os usuários têm a opção de criar novas listas de tarefas. Ao fazer isso, podem escolher o nome da lista e definir os tipos de prioridades que desejam aplicar, personalizando ainda mais a experiência de gerenciamento de tarefas.
- **Modo Light**: A interface atualmente possui apenas o modo light, com planos futuros de incluir um modo escuro.

## Como Usar

1. Clone o repositório:
   ```bash
   https://github.com/matheusmpz/TaskFlow.git

2. Navegue até a pasta do projeto
   ```bash
    TaskFlow\app\src\pages

3. Abra o arquivo index.html em seu navegador.

## Estrutura do Projeto
```
TaskFlow/
│
├── app/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.html
│   │   │   ├── list-1.html
│   │   │   ├── list-2.html
│   │   │   ├── list-3.html
│   │   │   └── list-4.html
│   │   ├── css/
│   │   │   ├── input.css
│   │   │   └── output.css
│   │   ├── js/
│   │   │   └── script.js
│   │   └── assets/
│   │
│   │ ── package.json
│   └── tailwind.config.js
└
```

## Contribuição
Este projeto aceita contribuições, especialmente para a parte de back-end, onde planejo implementar funcionalidades que integrem um banco de dados às funcionalidades do front-end já apresentado.

## Informações adicionais
Apresentação no behance: https://www.behance.net/matheusmpz

Para perguntas ou feedback, sinta-se à vontade para entrar em contato:
- **E-mail:** matheus.psoares4@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/matheusmpz/

Este projeto é de uso pessoal e não deve ser utilizado sem a minha autorização.
