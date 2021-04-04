<template>
  <div>
    <div class="container">
      <div></div>
      <div class="row ">
        <div class="col-6 mx-auto mb-4 mt-5 ">
          <div class="mx-auto navTamanho">
            <a class="mx-auto fonteLogo navbar-brand" href="">
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
              <router-link to="/"
                ><a class="nav-link" href="">Inicio</a></router-link
              >
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <router-link to="/nossacausa"
                ><a class="nav-link" href="">Nossa Causa</a></router-link
              >
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item">
              <router-link to="/contato"
                ><a class="nav-link " href="">Contato</a></router-link
              >
            </li>
          </div>
          <div class="col-3">
            <li class="nav-item px-2 mt-1">
              <a
                class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2"
                href="login.html"
                >Sair</a
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
