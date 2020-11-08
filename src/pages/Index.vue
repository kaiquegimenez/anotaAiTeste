<template>
  <div style="padding:0px;" class="q-pa-md fundo">
    <div class="row">
      <div style="text-align: center;" class="col-12">
        <h6 style="color: white;">Cardápio Digital AnotaAi</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-12 flex flex-center">
        <q-input color="black" style="width: 50%" @input="filtrar(pesquisa)" filled label="Pesquisar" v-model="pesquisa">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-radio color="black" v-model="tipoDeFiltro" val="descricao" label="Descrição" />
        <q-radio color="black" v-model="tipoDeFiltro" val="titulo" label="Título" />
      </div>
    </div>
    <div style="margin-top: 10px;" class="row">
      <div class="col-12 flex flex-center">
        <q-btn @click="adicionarProd()" color="black">
          <q-icon name="add" />
          <div>Adicionar Produto</div>
        </q-btn>
      </div>
    </div>
    <!-- Lista de Produtos -->
    <div class="row">
      <div style="margin-top: 20px;" v-for="produto in produtos" :key="produto.id" class="col-3 flex flex-center">
        <q-layout class="flex flex-center">
          <q-card style="width: 80%; margin: 10px; min-height: 550px;" class="my-card">
            <q-img :src="produto.picture" />
            <q-card-section>
              <div class="text-h6">{{ produto.title }}</div>
              <div class="text-subtitle2" style="color: green;">R$ {{ produto.price }}</div>
            </q-card-section>
            <q-card-section style="padding-top: 0px; padding-left: 16px; padding-right: 0px;">
              <q-radio left-label @input="avaliar(produto.id)" v-model="avaliacao[produto.id]" val="1" label="1" />
              <q-radio left-label @input="avaliar(produto.id)" v-model="avaliacao[produto.id]" val="2" label="2" />
              <q-radio left-label @input="avaliar(produto.id)" v-model="avaliacao[produto.id]" val="3" label="3" />
              <q-radio left-label @input="avaliar(produto.id)" v-model="avaliacao[produto.id]" val="4" label="4" />
              <q-radio left-label @input="avaliar(produto.id)" v-model="avaliacao[produto.id]" val="5" label="5" />
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ produto.description }}.
            </q-card-section>
            <q-footer>
              <q-btn-group spread>
                <q-btn label="Remover Produto" @click="removerProduto(produto.id)" color="red"></q-btn>
              </q-btn-group>
            </q-footer>
          </q-card>
        </q-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['produtos'])
  },
  name: 'PageIndex',
  data () {
    return {
      tipoDeFiltro: 'descricao',
      pesquisa: '',
      avaliacao: [],
      dados: [
        {
          category_title: 'Burger',
          products: [
            {
              id: 0,
              title: 'Burger',
              description: 'Pão tipo brioche, carne de res e queijo',
              price: 17.54,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/001.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_001.jpg'
            },
            {
              id: 1,
              title: 'Burger Especial',
              description: 'Pão tipo brioche, carne de res e bacon, queijo mussarela',
              price: 22,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/002.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_002.jpg'
            },
            {
              id: 2,
              title: 'Burger Chimichurri',
              description: 'Pão tipo brioche, 2 burger de carne de res, queijo mussarela e molho chimichurri',
              price: 26,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/003.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_003.jpg'
            },
            {
              id: 3,
              title: 'Super Burger',
              description: 'Pão tipo brioche, 200g de carne, queijo, alface e cebola',
              price: 28.82,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/004.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_004.jpg'
            },
            {
              id: 4,
              title: 'Cheeseburger',
              description: 'Pão tipo brioche, 2 burger de carne bonina, queijo duplo e creme de cheddar',
              price: 22.99,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/005.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_005.jpg'
            },
            {
              id: 5,
              title: 'Monster Burger',
              description: 'Pão tipo brioche, 3 burger de carne de res e bacon, queijo mussarela especial, cream cheese, cebola roxa, rúcula, tomate, pepino japonês artesanal e maionese defumada',
              price: 31.84,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/006.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_006.jpg'
            },
            {
              id: 6,
              title: 'Burger Crispy',
              description: 'Pão tipo brioche, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              price: 22.55,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/007.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_007.jpg'
            },
            {
              id: 7,
              title: 'Burger com Batata',
              description: 'Pão tipo brioche, abitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
              price: 27.77,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/008.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_008.jpg'
            },
            {
              id: 8,
              title: 'Burger Pork',
              description: 'Pão tipo brioche, suspendisse placerat est nec velit condimentum maximus',
              price: 29,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/009.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_009.jpg'
            },
            {
              id: 9,
              title: 'Fish Burger',
              description: 'Pão tipo brioche, ut dictum placerat purus, et semper ex egestas sit amet',
              price: 14,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/010.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_010.jpg'
            },
            {
              id: 10,
              title: 'Burger Toscana',
              description: 'Pão tipo brioche, carne e aenean molestie risus et lorem aliquet maximus',
              price: 20.22,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/011.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_011.jpg'
            },
            {
              id: 11,
              title: 'Mad Burger',
              description: 'Pão tipo brioche, morbi maximus diam metus, nec dictum quam ultrices in vestibulum ornare augue sed vehicula mollis',
              price: 25.52,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/012.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_012.jpg'
            },
            {
              id: 12,
              title: 'Beef Burger',
              description: 'Pão tipo brioche, cras in congue elit, nec rutrum nunc duis egestas consequat rhoncus',
              price: 31.30,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/013.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_013.jpg'
            },
            {
              id: 13,
              title: 'Burger Chicken',
              description: 'Pão tipo brioche, phasellus congue tempor auctor suspendisse quis purus feugiat, tincidunt arcu sagittis, ornare dui',
              price: 24.19,
              picture: 'https://front-end-test-app.s3.amazonaws.com/burger/014.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/burger/t_014.jpg'
            }
          ]
        },
        {
          category_title: 'Pizza',
          products: [
            {
              id: 14,
              title: 'Americana',
              description: 'Presunto, palmito, ervilha, bacon e cobertura de mussarela',
              price: 40.99,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/001.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_001.jpg'
            },
            {
              id: 15,
              title: 'Rúcula',
              description: 'Mussarela de búfala, rúcula, tomate seco e mussarela',
              price: 38,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/002.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_002.jpg'
            },
            {
              id: 16,
              title: 'Vegetariana',
              description: 'Mussarela, brócolis, milho, ervilha, champignon, palmito e tomate',
              price: 41.01,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/003.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_003.jpg'
            },
            {
              id: 17,
              title: 'Frango com Bacon',
              description: 'Mussarela, frango, milho, catupiry e bacon',
              price: 35.50,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/004.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_004.jpg'
            },
            {
              id: 18,
              title: 'Marguerita',
              description: 'Mussarela, manjericão, tomate e parmesão',
              price: 34.98,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/005.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_005.jpg'
            },
            {
              id: 19,
              title: 'Pizza Especial',
              description: 'Mussarela, lombo, calabresa, palmito, tomate picado, ervilha, bacon, cheddar e parmesão',
              price: 49.99,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/006.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_006.jpg'
            },
            {
              id: 20,
              title: 'Calabresa com Catupiry',
              description: 'Mussarela, calabresa, catupiry e cebola',
              price: 44.44,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/007.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_007.jpg'
            },
            {
              id: 21,
              title: 'Brasileira',
              description: 'Mussarela, presunto, calabresa, ervilha, ovo, palmito, tomate e cebola',
              price: 42,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/008.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_008.jpg'
            },
            {
              id: 22,
              title: 'Angolana',
              description: 'Mussarela, brócolis, champignon, tomate, palmito, catupiry, parmesão e manjericão',
              price: 47,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/009.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_009.jpg'
            },
            {
              id: 23,
              title: 'Sete Quejos',
              description: 'Mussarela, provolone, gorgonzola, catupiry, cheddar, parmesão e mussarela de búfala',
              price: 45,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/010.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_010.jpg'
            },
            {
              id: 24,
              title: 'Napolitana',
              description: 'Mussarela, alho frito, manjericão, parmesão e tomate',
              price: 39.78,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/011.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_011.jpg'
            },
            {
              id: 25,
              title: 'Lombo Canadense',
              description: 'Mussarela, lombinho e cebola',
              price: 32.99,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/012.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_012.jpg'
            },
            {
              id: 26,
              title: 'Frango Xadrez',
              description: 'Mussarela, frango, champignon, palmito, catupiry e cobertura de creme de leite',
              price: 37.77,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/013.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_013.jpg'
            },
            {
              id: 27,
              title: 'Carne Seca',
              description: 'Mussarela, carne seca, ovos, cebola, tomate e bacon',
              price: 46.66,
              picture: 'https://front-end-test-app.s3.amazonaws.com/pizza/014.jpg',
              thumbnail: 'https://front-end-test-app.s3.amazonaws.com/pizza/t_014.jpg'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('app/mudandoProdutos', this.dados[0].products)
    console.log(this.produtos)
    this.$store.dispatch('app/mudandoProdutos', this.dados[1].products)
    console.log(this.produtos)
  },
  methods: {
    removerProduto (id) {
      this.$store.dispatch('app/removeProdutos', id)
    },
    filtrar (filtro) {
      this.$store.dispatch('app/mudandoProdutos', this.dados[0].products)
      this.$store.dispatch('app/mudandoProdutos', this.dados[1].products)
      if (this.tipoDeFiltro === 'titulo') {
        this.$store.dispatch('app/filtrarProdTit', filtro)
      } else {
        this.$store.dispatch('app/filtrarProdDesc', filtro)
      }
    },
    adicionarProd () {
      this.$router.push({ path: '/addProduto' })
    },
    avaliar (id) {
      var dados = {
        id: id,
        avaliacao: this.avaliacao
      }
      this.$store.dispatch('app/avaliaProdutos', dados)
    }
  }
}
</script>

<style>
  html {
    background-image: url("../assets/fundo3.jpg");
    background-repeat: repeat;
  }
</style>
