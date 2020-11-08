const SETPRODUTOS = (state, produtos) => {
  var existente = false
  for (var i = 0; i < produtos.length; i++) {
    for (var x = 0; x < state.produtos.length; x++) {
      if (produtos[i].id === state.produtos[x].id) {
        existente = true
        break
      }
    }
    if (existente === false) {
      state.produtos.push(produtos[i])
    }
    existente = false
  }
  console.log(state.produtos)
}
const REMOVEPRODUTOS = (state, id) => {
  for (var i = 0; i < state.produtos.length; i++) {
    if (state.produtos[i].id === id) {
      state.produtos.splice(i, 1)
    }
  }
  console.log(state.produtos)
}
const FILTRARPRODTIT = (state, filtro) => {
  const needle = filtro.toLowerCase()
  state.produtos = state.produtos.filter(v => v.title.toLowerCase().indexOf(needle) > -1)
  console.log(state.produtos)
}
const FILTRARPRODDESC = (state, filtro) => {
  const needle = filtro.toLowerCase()
  state.produtos = state.produtos.filter(v => v.description.toLowerCase().indexOf(needle) > -1)
  console.log(state.produtos)
}
const AVALIAPRODUTOS = (state, params) => {
  for (var i = 0; i < state.produtos.length; i++) {
    if (state.produtos[i].id === params.id) {
      state.produtos[i].avaliacao = params.avaliacao[params.id]
      break
    }
  }
  console.log(state.produtos)
}
export {
  SETPRODUTOS,
  REMOVEPRODUTOS,
  FILTRARPRODTIT,
  FILTRARPRODDESC,
  AVALIAPRODUTOS
}
