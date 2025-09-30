# Projeto: Formulário de Cadastro

Este projeto é uma aplicação web desenvolvida com **React** e **TypeScript**, com o objetivo de estruturar um formulário de cadastro funcional,
visando a conclusão da **Atividade: Sistema de Cadastro de Usuários em React** do curso de **Front-end da Estartando Dev's** .

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) — Biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [Vite](https://vitejs.dev/) — Ferramenta de build rápida e moderna

## Estrutura do Projeto

```bash
src/
├── components/
│   ├── form/
│   │   ├── Form.tsx
│   │   └── form.css
│   ├── user-list/
│   │   ├── UserList.tsx
│   │   └── user-list.css
│   └── buttons/
│       ├── ButtonRegister.tsx
│       ├── ButtonRemove.tsx
│       └── button-register.css
├── App.tsx
├── main.tsx
└── App.css
```

## Funcionalidades

- ✅ Validação de campos obrigatórios com mensagens de erro específicas
- ✅ Validação avançada de email com `@` e `.` usando expressão regular
- ✅ Verificação de idade maior que zero
- ✅ Verificação de email duplicado antes do cadastro
- ✅ Feedback visual de sucesso após envio do formulário
- ✅ Limpeza automática dos campos após envio
- ✅ Lista de usuários cadastrados exibida dinamicamente
- ✅ Mensagem de aviso quando não há usuários cadastrados
- ✅ Remoção de usuários da lista com botão dedicado
- ✅ Persistência de dados com `localStorage`
- ✅ Tipagem forte com `interface Formulario` compartilhada entre componentes
- ✅ Uso correto de `key` em listas para renderização eficiente
- ✅ Componentização dos botões de ação (`Cadastrar` e `Remover`)

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/TiagoLeopoldo/sistema-de-cadastro-de-usuarios-em-react.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse em `http://localhost:5173`

## Branches

- `main`: branch principal
- `sandbox`: branch de testes e desenvolvimento inicial

## Observações

Este projeto está em constante evolução. As últimas melhorias incluíram:

- Validação avançada de email com regex
- Verificação de idade válida
- Integração entre `Form.tsx` e `App.tsx` via props
- Criação da função `adicionarUsuario` para atualizar o estado global
- Implementação do componente `UserList.tsx` com renderização condicional
- Estilização completa do `user-list.css` seguindo o padrão visual do projeto
- Persistência de dados com `localStorage`
- Remoção de usuários com botão dedicado

Próximos passos sugeridos:

- Implementar botão de edição de usuários
- Adicionar campo de busca para filtrar usuários
- Construir contador de usuários geral, maiores e menores de idade

Desenvolvido por **Tiago de Noronha Leopoldo**, com foco em aprendizado, boas práticas e evolução contínua.

---
