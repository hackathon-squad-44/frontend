<template>
  <div class="home">
    <div class="container">
      <div class="row ">
        <div class="col-6 mx-auto mb-4 mt-5 ">
          <div class="mx-auto navTamanho">
            <a class="mx-auto fonteLogo navbar-brand" href="index.html">
              <p class="fonteLogo setarMargin">Mochila cheia</p>
              <img
                class="logo ms-4"
                src="../assets/imgs/logo.svg"
                alt="Mochila Cheia"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- NavBar -->
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs ">
          <div class="col-3">
            <li class="nav-item">
              <a class="nav-link" href="">Inicio</a>
            </li>
          </div>
          <div class="col-3">
            <router-link to="/nossacausa">
              <li class="nav-item">
                <a class="nav-link" href="">Nossa Causa</a>
              </li>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/contato">
              <li class="nav-item"></li>
              <a class="nav-link" href="">Contato</a></router-link
            >
          </div>
          <div class="col-3">
            <router-link to="/cadastrarConta">
              <li class="nav-item px-2 mt-1">
                <a
                  class="btn verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                  href=""
                  >LOGIN</a
                >
              </li>
            </router-link>
          </div>
        </ul>
      </div>
    </div>
    <!-- NavBar -->
    <main>
      <section class="conatiner ">
        <div class="row">
          <div class="col-12 ms-2 pt-5 pb-5 text-center ">
            <h2 class="manrope h2Index mx-auto">
              Bem vindo ao Mochila Cheia aqui, aqui você faz a diferença!
            </h2>
          </div>
        </div>
      </section>
      <section class="container-fluid">
        <div class="row ">
          <img
            class="mx-auto materiasIndex img-fluid"
            src="../assets/imgs/mochila.svg"
            alt="desenho de mochila aberta com materiais"
          />
        </div>

        <div class="row background mt-n1 bordaDiv"></div>
      </section>
      <section class="conatiner ">
        <div class="row">
          <div class="col-6 mx-auto pt-5 text-center">
            <p class="manrope2">
              Diversos alunos querem estudar mas não possuem condições.
            </p>
            <p>
              Aqui diversas escolas próxima á você estão recebendo doações e
              mudando o futuro dos jovens
            </p>
            <h6 class="display-4  roxoLetra">Bora doar!</h6>
          </div>
        </div>
      </section>
      <section class="conatiner col-6 mx-auto pt-5 pb-5 ">
        <div class="d-grid gap-2 col-6 mx-auto">
          <p>Basta criar uma conta ou logar clicando no botão abaixo:</p>
          <button class="btn botao  botaoVerde mx-auto" type="button">
            <router-link to="/cadastrarconta">
              <a href="">Criar Conta</a></router-link
            >
          </button>
        </div>
      </section>
      <section class="container-fluid backIndex  mt-5 pb-5">
        <div class="col-12 mx-auto">
          <h3 class="manrope2 mx-auto mt-5 mb-5">
            <b class="mx-auto"> É facil entender como funciona!</b>
          </h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm mt-5 mb-5">
              <h4 class="manrope3">1. Procure escolas</h4>
              <p class="manrope2">Procure a escola mais próxima de você</p>
            </div>
            <div class="col-sm mt-5 mb-5">
              <h4 class="manrope3">2. Selecione um aluno e o que vai doar</h4>
              <p class="manrope2">
                Escolha o material e a quantidade dele para doar
              </p>
            </div>
            <div class="col-sm mt-5 mb-5">
              <h4 class="manrope3">2. Selecione um aluno e o que vai doar</h4>
              <p class="manrope2">
                Escolha o material e a quantidade dele para doar
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}
</style>
