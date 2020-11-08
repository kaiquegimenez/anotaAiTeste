<template>
  <div style="padding:0px;" class="q-pa-md">
    <div class="row">
      <div class="col-12 flex flex-center">
        <q-input color="black" style="width: 50%" filled label="Título" v-model="title"/>
      </div>
    </div>
    <div style="margin: 10px" class="row">
      <div class="col-12 flex flex-center">
        <q-input color="black" style="width: 50%" filled label="Preço" v-model="price"/>
      </div>
    </div>
    <div style="margin: 10px" class="row">
      <div class="col-12 flex flex-center">
        <q-input color="black" style="width: 50%" filled label="Foto" v-model="picture"/>
      </div>
    </div>
    <div style="margin: 10px" class="row">
      <div class="col-12 flex flex-center">
        <q-input color="black" style="width: 50%" filled label="Foto2" v-model="thumbnail"/>
      </div>
    </div>
    <div style="margin: 10px" class="row">
      <div class="col-12 flex flex-center">
        <q-input color="black" style="width: 50%" filled label="Descrição" type="textarea" v-model="description"/>
      </div>
    </div>
    <div style="margin-top: 10px;" class="row">
      <div class="col-12 flex flex-center">
        <q-btn @click="adicionarProd()" color="black">
          <q-icon name="add" />
          <div>Adicionar Produto</div>
        </q-btn>
        <q-btn style="margin-left: 10px; width: 200px;" @click="voltar()" color="black">
          <q-icon name="arrow_back_ios" />
          <div>Voltar</div>
        </q-btn>
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
  data () {
    return {
      title: '',
      description: '',
      price: '',
      picture: '',
      thumbnail: ''
    }
  },
  methods: {
    adicionarProd () {
      var id = this.produtos.length + 1
      var produtoNovo = [{
        id: id,
        title: this.title,
        description: this.description,
        price: this.price,
        picture: this.picture,
        thumbnail: this.thumbnail
      }]
      this.$store.dispatch('app/mudandoProdutos', produtoNovo)
      this.$router.push({ path: '/' })
    },
    voltar () {
      this.$router.push({ path: '/' })
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
