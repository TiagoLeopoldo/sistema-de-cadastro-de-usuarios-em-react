# Projeto: Formulário de Cadastro

Este projeto é uma aplicação web desenvolvida com **React** e **TypeScript**, com o objetivo de estruturar um formulário de cadastro funcional, validado e escalável.

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) — Biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [Vite](https://vitejs.dev/) — Ferramenta de build rápida e moderna
- **CSS Modules + CSS tradicional** — Estilização modular e reutilizável com foco em simplicidade

## 📦 Estrutura do Projeto

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
│       └── button-register.css
├── App.tsx
├── main.tsx
└── App.css
```

## ✨ Funcionalidades

- ✅ Validação de campos obrigatórios com mensagens de erro específicas
- ✅ Feedback visual de sucesso após envio do formulário
- ✅ Lista de usuários cadastrados exibida dinamicamente
- ✅ Mensagem de aviso quando não há usuários cadastrados
- ✅ Tipagem forte com `interface Formulario` compartilhada entre componentes
- ✅ Uso correto de `key` em listas para renderização eficiente

## 🚀 Como Executar

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

## 📂 Branches

- `main`: branch principal
- `sandbox`: branch de testes e desenvolvimento inicial

## 📌 Observações

Este projeto está em constante evolução. As últimas melhorias incluíram:

- Integração entre `Form.tsx` e `App.tsx` via props
- Criação da função `adicionarUsuario` para atualizar o estado global
- Implementação do componente `UserList.tsx` com renderização condicional
- Estilização completa do `user-list.css` seguindo o padrão visual do projeto
- Ajustes de tipagem com `import type` para conformidade com TypeScript moderno

Próximos passos sugeridos:

- Persistência de dados com `localStorage`
- Remoção de usuários da lista
- Filtros por cidade ou idade
- Exportação de dados para CSV

## 🧠 Autor

Desenvolvido por **Tiago de Noronha Leopoldo**, com foco em aprendizado, boas práticas e evolução contínua.

---

Se você gostou do projeto, sinta-se à vontade para contribuir ou deixar uma estrela ⭐ no repositório!

---