🌸 Sobre o Projeto
Interface web moderna que permite ao usuário criar, listar, editar e deletar contatos consumindo uma API REST externa via fetch. O projeto foi desenvolvido com foco em boas práticas de JavaScript moderno, organização de código em módulos e experiência do usuário.

🌸Funcionalidades
FuncionalidadeDescrição🌸Listar contatosExibe todos os contatos em cards estilizados🌸Cadastrar contatoFormulário com validações completas🌸Editar contatoPreenche o formulário com os dados existentes🌸Deletar contatoRemove com confirmação prévia📷Preview de imagemUpload direto com visualização antes de salvar📱Máscara de celularFormatação automática (XX) XXXXX-XXXX💬Feedback visualMensagens de sucesso e erro em tempo real⏳Estado de carregamentoIndicador enquanto os dados são buscados


 API REST
Base URL: https://bakcend-fecaf-render.onrender.com/contatos
MétodoEndpointDescriçãoGET/contatosLista todos os contatosPOST/contatosCria um novo contatoPUT/contatos/:idAtualiza um contatoDELETE/contatos/:idDeleta um contato

 Validações do Formulário

✅ Nome, e-mail, celular, cidade e endereço são obrigatórios
✅ E-mail deve ter formato válido
✅ Celular deve conter pelo menos 11 dígitos
✅ Feedback imediato com mensagem de erro ao usuário


Tecnologias Utilizadas

HTML5 — estrutura semântica
CSS3 — layout responsivo com Grid e Flexbox
JavaScript ES Modules — import/export com organização em módulos
Fetch API — requisições HTTP com async/await
URL.createObjectURL — preview de imagem local




📚 Requisitos Atendidos
<div align="center">
RequisitoStatusHTML funcional com formulário e listagem✅CSS organizado com layout responsivo✅Integração app.js ↔ contatos.js✅Listar contatos — GET✅Cadastrar contato — POST✅Atualizar contato — PUT✅Deletar contato — DELETE✅JavaScript puro (sem frameworks)✅Módulos ES com import/export✅async/await em todas as requisições✅Erros visíveis ao usuário✅Renderização de imagem do contato✅Bônus — Mensagens de feedback✅Bônus — Estado de carregamento✅Bônus — Validações adicionais✅Bônus — Máscara de celular✅Bônus — Preview de imagem via upload✅
</div>

<div align="center">
Desenvolvido por Andy 🌸 para a Fatec 2026
Professor orientador: Fernando Leonid
</div>