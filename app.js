import { getContatos, criarContato, atualizarContato, deletarContato } from "./contatos.js"

const form = document.querySelector('form')
const lista = document.getElementById('lista-contatos')
const mensagem = document.getElementById('mensagem')

let editandoId = null

function mostrarMensagem(texto, tipo = 'sucesso') {
  mensagem.textContent = texto
  mensagem.className = `mensagem ${tipo}`
  setTimeout(() => mensagem.textContent = '', 3000)
}

function mascaraCelular(e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor.length > 11) valor = valor.slice(0, 11)

  if (valor.length <= 10) {
    valor = valor
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
  } else {
    valor = valor
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }

  e.target.value = valor
}

document.getElementById('celular').addEventListener('input', mascaraCelular)

// Preview de imagem (integração com preview.js do professor)
document.getElementById('preview-input').addEventListener('change', function ({ target }) {
  if (target.files[0]) {
    document.getElementById('preview-image').src = URL.createObjectURL(target.files[0])
  }
})

function renderizarCard(contato) {
  const card = document.createElement('div')
  card.className = 'card'
  card.dataset.id = contato.id

  card.innerHTML = `
    <img src="${contato.foto || 'https://placehold.co/64x64/e0839a/fff?text=?'}" alt="Foto de ${contato.nome}">
    <h4>${contato.nome}</h4>
    <p>${contato.email}</p>
    <p>${contato.celular}</p>
    <span class="badge">${contato.cidade}</span>
    <p>${contato.endereco}</p>
    <div class="card-actions">
      <button class="btn-editar" data-id="${contato.id}">Editar</button>
      <button class="btn-deletar" data-id="${contato.id}">Deletar</button>
    </div>
  `

  lista.appendChild(card)
}

async function carregarContatos() {
  lista.innerHTML = '<p class="carregando">Carregando...</p>'
  try {
    const contatos = await getContatos()
    lista.innerHTML = ''
    contatos.forEach(renderizarCard)
  } catch (erro) {
    lista.innerHTML = ''
    mostrarMensagem(erro.message, 'erro')
  }
}

function validarFormulario(contato) {
  const erros = []

  if (!contato.nome.trim())
    erros.push('Nome é obrigatório')

  if (!contato.email.trim())
    erros.push('E-mail é obrigatório')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contato.email))
    erros.push('E-mail inválido')

  if (!contato.celular.trim())
    erros.push('Celular é obrigatório')
  else if (contato.celular.replace(/\D/g, '').length < 11)
    erros.push('Celular inválido. Digite pelo menos 11 números')

  if (!contato.cidade.trim())
    erros.push('Cidade é obrigatória')

  if (!contato.endereco.trim())
    erros.push('Endereço é obrigatório')

  return erros
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  // Pega a URL da imagem do preview (gerada pelo URL.createObjectURL)
  const fotoSrc = document.getElementById('preview-image').src
  const fotoValida = fotoSrc.startsWith('blob:') ? fotoSrc : ''

  const contato = {
    nome:     document.getElementById('nome').value,
    email:    document.getElementById('email').value,
    celular:  document.getElementById('celular').value,
    cidade:   document.getElementById('cidade').value,
    endereco: document.getElementById('endereco').value,
    foto:     fotoValida
  }

  const erros = validarFormulario(contato)
  if (erros.length > 0) {
    mostrarMensagem(erros[0], 'erro')
    return
  }

  try {
    if (editandoId) {
      await atualizarContato(editandoId, contato)
      mostrarMensagem('Contato atualizado com sucesso!')
      editandoId = null
      document.querySelector('input[type="submit"]').value = 'Salvar Contato'
    } else {
      await criarContato(contato)
      mostrarMensagem('Contato cadastrado com sucesso!')
    }

    form.reset()
    document.getElementById('preview-image').src = 'https://placehold.co/64x64/e0839a/fff?text=?'
    carregarContatos()
  } catch (erro) {
    mostrarMensagem(erro.message, 'erro')
  }
})

lista.addEventListener('click', async (e) => {

  if (e.target.classList.contains('btn-deletar')) {
    const id = e.target.dataset.id
    if (!confirm('Deseja realmente deletar este contato?')) return
    try {
      await deletarContato(id)
      mostrarMensagem('Contato deletado!')
      carregarContatos()
    } catch (erro) {
      mostrarMensagem(erro.message, 'erro')
    }
  }

  if (e.target.classList.contains('btn-editar')) {
    const id = e.target.dataset.id
    const card = document.querySelector(`.card[data-id="${id}"]`)

    editandoId = id
    document.getElementById('nome').value     = card.querySelector('h4').textContent
    document.getElementById('email').value    = card.querySelector('p:nth-of-type(1)').textContent
    document.getElementById('celular').value  = card.querySelector('p:nth-of-type(2)').textContent
    document.getElementById('cidade').value   = card.querySelector('.badge').textContent
    document.getElementById('endereco').value = card.querySelector('p:nth-of-type(3)').textContent

    // Mostra a foto atual do contato no preview ao editar
    const fotoAtual = card.querySelector('img').src
    document.getElementById('preview-image').src = fotoAtual

    document.querySelector('input[type="submit"]').value = 'Atualizar Contato'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

carregarContatos()