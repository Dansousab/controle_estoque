import {addMaterial} from './services/service.js';

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sPreco = document.querySelector('#m-funcao')
const sQuant = document.querySelector('#m-Quant')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = true, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sPreco.value = itens[index].Preco
    sQuant.value = itens[index].Quantidade
    id = index
  } else {
    sNome.value = ''
    sPreco.value = ''
    sQuant.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td> ${parseFloat(Number(item.Preco)).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}</td>

    <td> ${item.Quantidade}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sPreco.value == '' || sQuant.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].Preco = sPreco.value
    itens[id].Quantidade = sQuant.value
  } else {
    itens.push({'nome': sNome.value, 'Preco': sPreco.value, 'Quantidade': sQuant.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()

const material = {
  nome: input.nome,
  preco: Number(input.preco),
  quantidade: Number(input.quantidade)
  }
  addMaterial(material)
