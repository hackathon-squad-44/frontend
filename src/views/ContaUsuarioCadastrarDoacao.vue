<template>
  <div>
    <div class="container">
      <div></div>
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
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs ">
          <div class="col-3">
            <li class="nav-item">
              <a class="nav-link" href="infos.html">Inicio</a>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <a class="nav-link" href="infos.html">Nossa Causa</a>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <a class="nav-link " href="infos.html">Contato</a>
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item px-2 mt-1">
              <a
                class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                href="login.html"
                >Sair</a
              >
            </li>
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
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <router-link to="/contausuario"
              ><a class="nav-link " aria-current="page" href=""
                >Doar</a
              ></router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="contaUsuarioCadastrarDoacao.html"
              >Cadastrar estudantes</a
            >
          </li>
          <li class="nav-item">
            <router-link to="/contausuarioinfo"
              ><a class="nav-link " href="">Infos</a></router-link
            >
          </li>
        </ul>
        <section class="conatiner ">
          <div class="row">
            <div class="col-12 ms-2 pt-5 pb-2 text-center ">
              <h2 class="manrope h2Index mx-auto">
                Meus estudantes
              </h2>
            </div>
          </div>
        </section>
        <section class="container-sm col-9 mt-2 mb-5">
          <div class="row">
            <div class="col-md-8 position-relative mt-3  mb-5 setarPadding">
              <p>
                Você ainda não cadastrou nenhum estudante, clique no botão ao
                lado para cadastrar
                <router-link to="/estudantelistamateriais">
                  <a href="">
                    <button class="botaoAdd ms-2">
                      <img src="../assets/imgs/add.svg" alt="" /></button
                  ></a>
                </router-link>
              </p>
            </div>
          </div>
        </section>
      </div>
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
