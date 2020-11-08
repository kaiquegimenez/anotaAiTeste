const routes = [
  { path: '/', component: () => import('pages/Index.vue') },
  { path: '/addProduto', component: () => import('../pages/AddProduto.vue') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
