<template>
  <div>
    <div class="container">
      <div class="row ">
        <div class="col-6 mx-auto mb-4 mt-5 ">
          <div class="mx-auto navTamanho">
            <a class="mx-auto fonteLogo navbar-brand" href="index.html">
              <p class="fonteLogo setarMargin">Mochila cheia</p>
              <router-link to="/">
                <img
                  class="logo ms-4"
                  src="../assets/imgs/logo.svg"
                  alt="Mochila Cheia"
                />
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs ">
          <div class="col-3">
            <li class="nav-item ">
              <router-link to="/">
                <a class="nav-link active " aria-current="page" href=""
                  >Inicio</a
                >
              </router-link>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <router-link to="/nossacausa">
                <a class="nav-link" href="">Nossa Causa</a>
              </router-link>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <router-link to="/contato">
                <a class="nav-link " href="">Contato</a>
              </router-link>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item px-2 mt-1">
              <router-link to="/login">
                <a
                  class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                  href=""
                  >LOGIN</a
                >
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <section class="container-sm col-12 ">
      <div class="row">
        <div class=" container-md col-12  pt-5 setarMargin ">
          <h2 class="teste roxoLetra setarPadding mx-auto">
            Escolas
          </h2>
        </div>        
      </div>
    </section>    
    <div class="row ">
      <div
        class="input-group flex-nowrap container-md col-12  pt-5 mx-auto barraPesquisa mx-auto "
      >
        <span class="input-group-text" id="addon-wrapping">
          <img src="../assets/imgs/lupa.svg" alt=""
        /></span>
        <form             @submit.prevent="filtrarNome">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar o nome da escola"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          v-model = "filtroNome"
        />
                  <button
            type="submit"
            class="btn botaoVerde botao2  alinhamentoBotao text-white"
          >
            Buscar
          </button>
          </form>
      </div>
    </div>
    <div
      class="input-group flex-nowrap container-md col-12  pt-5 mb-3 mx-auto barraPesquisa mx-auto "
    >
      <span class="input-group-text" id="addon-wrapping">
        <img src="../assets/imgs/alfinete.svg" alt="" />
      </span>
      <form             @submit.prevent="filtrarCidade">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar a escola por Cidade"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        v-model = "filtroCidade"
      />
                <button
            type="submit"
            class="btn botaoVerde botao2  alinhamentoBotao text-white"
          >
            Buscar
          </button>
          </form>
    </div>
    <section class="container-sm col-12 mb-2">
      <div class="row">
        <div
          class="form-check container-md col-12  pt-5 barraPesquisa mx-auto setarPadding "
        >
        </div>
      </div>
    </section>
    <section class="container-sm col-12 mb-5">
      <div
        v-for="i in lista"
        :key="i.id"
        class="accordion accordion-flush"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              href="#collapseExample"
              role="button"
            >
              Escolas : {{ i.name }}
            </button>
          </h2>
          <ul v-for="j in i.students" :key="j.id">
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              v-if="j.itemOrder.length > 0"
            >
              <span class="nome"> {{ j.name }} </span>
              <li v-for="k in j.itemOrder" :key="k.id">
                id: {{ k.id }} - {{ k.itemProduct }} | quantidade:
                {{ k.quantity }} | recebidos: {{ k.received }}
                <br />
                <input type="number" name="quantidade" />
                <button class="doar">Doar</button>
              </li>
              <div class="accordion-body"></div>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <div class=" container-fluid backVerde">
      <div class="container">
        <div class="row">
          <p class="copy roxoLetra pt-3 mx-auto">
            © 2021 Mochila Cheia. Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import School from "../services/escola";
import ItemOrder from "../services/itemOrder"
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      lista: [],
      donatorId: '',
      filtroNome: '',
      filtroCidade: '',
      donation: []
      }
    }
  ,

  mounted() {
    this.donation.donatorId = VueCookies.get("user").donatorId

    School.listar().then((resposta) => {
      console.log(resposta.data);
      this.lista = resposta.data;
    });
  },
 methods: {
      doar() {
      ItemOrder.doar(this.donation).then((resposta) => {
        console.log(resposta)
      });
    },
     filtrarCidade() {
      School.listarCidade(this.filtroCidade).then((resposta) => {
        if (resposta.status == 200){
        console.log(resposta)
        this.lista = resposta.data
        }
      });
    },
          filtrarNome() {
      School.listarNome(this.filtroNome).then((resposta) => {
        if (resposta.status == 200){
        console.log(resposta)
        this.lista = resposta.data
        }
      });
    },

    insertDonation(){
      this.donation.push()
    }
 }
}
</script>

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}

ul {
  list-style: none;
}

.doar {
  padding: 5px;
  margin-left: 4px;
  border-radius: 8px;
  background-color: #66922a;
  color: white;
}

.doar:hover {
  background-color: #880fa3;
}
</style>
