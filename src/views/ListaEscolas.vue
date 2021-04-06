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
        <input
          type="text"
          class="form-control"
          placeholder="Digite o material ou escola"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
    <div
      class="input-group flex-nowrap container-md col-12  pt-5 mb-3 mx-auto barraPesquisa mx-auto "
    >
      <span class="input-group-text" id="addon-wrapping">
        <img src="../assets/imgs/alfinete.svg" alt="" />
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Cidade, Estado ou CEP"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>
    <section class="container-sm col-12 mb-2">
      <div class="row">
        <div
          class="form-check container-md col-12  pt-5 barraPesquisa mx-auto setarPadding "
        >
          <button
            type="submit"
            class="btn botaoVerde botao2  alinhamentoBotao text-white"
          >
            Procurar Escolas
          </button>
        </div>
      </div>
    </section>
    <section class="container-sm col-12 mb-5">
      <div class="col-md col-12 mt-5 mx-auto tamanho2">
        <div class="col-6 tamanho2">
          <table
            class="table table-striped table-bordered border-success mx-auto"
          >
            <thead class="col-9">
              <tr>
                <th class="text-warning" scope="col">#</th>
                <th class="text-warning" scope="col">Escola</th>
                <th class="text-warning" scope="col">Estudante</th>
                <th class="text-warning" scope="col">Material</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="escola in lista" :key="escola.id">
                <td>{{ escola.id }}</td>
                <td>{{ escola.name }}</td>
                <td>{{}}</td>
              </tr>
            </tbody>
          </table>
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

export default {
  data() {
    return {
      lista: [],
    };
  },

  mounted() {
    School.listar().then((resposta) => {
      console.log(resposta.data);
      this.lista = resposta.data;
    });
  },
};

// new Vue({
//   el: "#escola",
//   data() {
//     return {
//       lista: [],
//     };
//   },
// });
</script>

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}
</style>
