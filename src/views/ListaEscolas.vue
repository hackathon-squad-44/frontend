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
      <div class="accordion-item" v-for = "school in lista" :key = "school.id">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class=" accordion-button collapsed roxoLetra"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Escola: {{school.name}}
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body" v-for = "student in school.students" :key= "student.id" >
            <div v-if = "student.itemOrder.length > 0">
            <p class="roxoLetra">{{student.name}}</p>
            <ol class="list-group list-group-numbered">
              <div v-for = "order in student.itemOrder" :key = "order.id">
              <li
                class="list-group-item d-flex justify-content-between align-items-start"                
              >

                  <div class="fw-bold">{{order.itemProduct}}    | quantidade: {{order.quantity}} 
                    <form @submit.prevent= "doar(order)">
                      <input
                    type="number"
                    value=""
                    id="flexCheckDefault"
                    v-model = "donation.quantity"
                  />
                  <button type="submit">doar</button>
                  </form></div>
              </li>
              </div>
            </ol>
            </div>
          </div>
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
      donation: {
           donatorId: '',
           itemOrderId: '',
           quantity: ''
      }
    };
  },

  mounted() {
    this.donation.donatorId = VueCookies.get("user").donatorId

    School.listar().then((resposta) => {
      console.log(resposta.data);
      this.lista = resposta.data;
    });
  },

 methods: {
      doar(obj) {
       this.donation.itemOrderId = obj.id 
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
    }
 }
}
</script>

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}
</style>
