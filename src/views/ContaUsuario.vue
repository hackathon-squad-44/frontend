<template>
  <div>
    <div class="container">
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
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs ">
          <div class="col-3">
            <router-link to="/">
              <li class="nav-item">
                <a class="nav-link" href="">Inicio</a>
              </li>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/nossacausa">
              <li class="nav-item">
                <a class="nav-link" href="">Nossa Causa</a>
              </li>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="contato">
              <li class="nav-item">
                <a class="nav-link " href="">Contato</a>
              </li>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/">
              <li class="nav-item px-2 mt-1">
                <a
                  class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                  href=""
                  >Sair</a
                >
              </li>
            </router-link>
          </div>
        </ul>
      </div>
    </div>
    <main>
      <section class="container-sm col-12 ">
        <div class="row">
          <div class=" container-md col-12  pt-5 setarMargin ">
            <p class="teste roxoLetra setarPadding mx-auto">
              Nome do usuario
            </p>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="col-6  mb-5 ">
          <input
            type="submit"
            class="col-6 btn fotoTamanho2 botaoVerde text-white"
            id=""
          />
          <label
            class="input-group-text fotoTamanho2 botaoVerde text-white"
            for=""
            >Carregar foto</label
          >
        </div>
      </div>
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a
            class="nav-link active "
            aria-current="page"
            href="../views/contaUsuario.html"
            >Doar</a
          >
        </li>
        <li class="nav-item">
          <router-link to="/contausuariocadastrardoacao">
            <a class="nav-link " href="">Cadastrar estudantes</a></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link " href="../views/contaUsuarioInfo.html">Infos</a>
        </li>
      </ul>
      <section class="conatiner ">
        <div class="row">
          <div class="col-12 ms-2 pt-5 pb-2 text-center ">
            <h2 class="manrope h2Index mx-auto">
              Fazer doação
            </h2>
          </div>
        </div>
      </section>
      <section class="container-sm col-12 mt-2 mb-2">
        <div class="row me-3 ms-3">
          <div
            class="col-md-6 position-relative mx-auto mt-3  mb-5 setarPadding"
          >
            <p class="">
              Clicando no botão “Doar”, você será direcionado para uma tela de
              pesquisa. Lá você poderá selecionar o que quer doar e aonde será
              feita a doação
            </p>
          </div>
        </div>
      </section>
      <section class="container-sm col-12 mb-4">
        <div
          class=" container-md col-12 mb-3  setarPadding  form-check teste mx-auto "
        >
          <button
            type="submit"
            class="btn botaoVerde botao2 roxoLetra  alinhamentoBotao"
          >
            <a href="paginaUsuario.html">Doar</a>
          </button>
        </div>
      </section>
    </main>
    <div class=" container-fluid backVerde ">
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
