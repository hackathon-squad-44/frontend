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
    <!-- BarNav -->
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs mb-5 ">
          <div class="col-3">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Inicio</a>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <a class="nav-link" href="nossaCausa.html">Nossa Causa</a>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <a class="nav-link " href="contatos.html">Contato</a>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item px-2 mt-1">
              <a
                class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                href="index.html"
                >SAIR</a
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
    <!-- BarNav -->
    <main>
      <section class="conatiner ">
        <div class="row">
          <div class="col-6 mx-auto  pt-5 pb-5 text-start ">
            <h2 class="manrope mx-auto">
              Parabéns! te contataremos assim que tivermos um doador :)
            </h2>
          </div>
        </div>
      </section>
      <section class="conatiner ">
        <div class="row">
          <div class="col-6 mx-auto pt-5">
            <p class="manrope2 mb-5 text-start">
              Aguarde as informações no nosso site ou por e-mail Você poderá
              buscar sua doação na escola com o endereço abaixo:
            </p>
          </div>
        </div>
      </section>
      <section class="conatiner ">
        <div class="row">
          <div class="col-6 mx-auto  ">
            <p class="manrope2 mb-5 text-start">
              End: R. Fcamara, 84 - Jardim dos UX - DevCity
            </p>
          </div>
        </div>
      </section>
      <section class="conatiner ">
        <div class="row">
          <div class="col-6 mx-auto  mb-5">
            <p class="manrope2 mb-5 text-start">
              ID da sua doação: 17839789739
            </p>
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
export default {};
</script>

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}
</style>
