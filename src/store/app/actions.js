const mudandoProdutos = ({ commit }, produtos) => {
  commit('SETPRODUTOS', produtos)
}
const removeProdutos = ({ commit }, produtos) => {
  commit('REMOVEPRODUTOS', produtos)
}
const filtrarProdTit = ({ commit }, produtos) => {
  commit('FILTRARPRODTIT', produtos)
}
const filtrarProdDesc = ({ commit }, produtos) => {
  commit('FILTRARPRODDESC', produtos)
}
const avaliaProdutos = ({ commit }, produtos) => {
  commit('AVALIAPRODUTOS', produtos)
}

export {
  mudandoProdutos,
  removeProdutos,
  filtrarProdTit,
  filtrarProdDesc,
  avaliaProdutos
}
