# 🌸 Projeto Agenda de Contatos

Interface web moderna para gerenciamento de contatos consumindo uma API REST externa com JavaScript puro.

O projeto foi desenvolvido com foco em:

- boas práticas de JavaScript moderno
- organização em módulos ES
- experiência do usuário
- responsividade e feedback visual

---

#  Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🌸 Listar contatos | Exibe todos os contatos em cards estilizados |
| 🌸 Cadastrar contato | Formulário com validações completas |
| 🌸 Editar contato | Preenche automaticamente os dados existentes |
| 🌸 Deletar contato | Remove contatos com confirmação prévia |
| 🌸 Preview de imagem | Upload com visualização antes de salvar |
| 🌸 Máscara de celular | Formatação automática `(XX) XXXXX-XXXX` |
| 🌸 Feedback visual | Mensagens de sucesso e erro em tempo real |
| 🌸 Estado de carregamento | Indicador visual durante requisições |

---

# API REST

## Base URL

```txt
https://bakcend-fecaf-render.onrender.com/contatos
```

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/contatos` | Lista todos os contatos |
| POST | `/contatos` | Cria um novo contato |
| PUT | `/contatos/:id` | Atualiza um contato |
| DELETE | `/contatos/:id` | Remove um contato |

---

# ✅ Validações do Formulário

- ✅ Nome obrigatório
- ✅ E-mail obrigatório e válido
- ✅ Celular obrigatório com no mínimo 11 dígitos
- ✅ Cidade obrigatória
- ✅ Endereço obrigatório
- ✅ Feedback imediato em caso de erro

---

#  Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- Fetch API
- URL.createObjectURL()

---

# 📚 Requisitos Atendidos

| Requisito | Status |
|---|---|
| HTML funcional com formulário e listagem | ✅ |
| CSS organizado e responsivo | ✅ |
| Integração app.js ↔ contatos.js | ✅ |
| Listar contatos — GET | ✅ |
| Cadastrar contato — POST | ✅ |
| Atualizar contato — PUT | ✅ |
| Deletar contato — DELETE | ✅ |
| JavaScript puro (sem frameworks) | ✅ |
| ES Modules com import/export | ✅ |
| async/await em todas as requisições | ✅ |
| Tratamento de erros visível ao usuário | ✅ |
| Renderização de imagem do contato | ✅ |
| Feedback visual | ✅ |
| Estado de carregamento | ✅ |
| Validações adicionais | ✅ |
| Máscara de celular | ✅ |
| Preview de imagem via upload | ✅ |

---

# Desenvolvido por

Andy 🌸  
Projeto desenvolvido para a Fatec — 2026

Professor orientador: Fernando Leonid