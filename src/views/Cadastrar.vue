<template>
  <div>
    <div class="container">
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
                class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2"
                href="login.html"
                >LOGIN</a
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
    <main>
      <section class="container-sm col-12 ">
        <div class="row">
          <div class=" container-md col-12  pt-4 setarMargin ">
            <h2 class="teste roxoLetra setarPadding mx-auto">
              Crie sua conta
            </h2>
          </div>
        </div>
      </section>

      <section class="container-sm col-12">
        <div class="row ">
          <form class=" container-md col-12 mb-3  mx-auto ">
            <div class="container-md col-12 mb-3 pt-3 mx-auto ">
              <div class="teste mx-auto">
                <label for="exampleInputEmail1" class="form-label roxoLetra"
                  >E-mail</label
                >
              </div>
              <input
                type="email"
                class="form-control inputInfo  mx-auto"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text teste  mx-auto">
                Nunca compartilhe suas informações pessoais.
              </div>
            </div>
            <div class="container-md col-12 mb-3 mx-auto ">
              <div class="teste mx-auto">
                <label for="exampleInputEmail1" class="form-label roxoLetra"
                  >Senha</label
                >
              </div>
              <input
                type="password"
                id="inputPassword5"
                class="form-control inputInfo mx-auto"
                aria-describedby="passwordHelpBlock"
              />
              <div id="passwordHelpBlock" class="form-text teste mx-auto ">
                Conter de 8 a 20 caracteres, letras, números e caracteres
                especiais.Não podendo conter espaços ou emojis.
                <label for="inputPassword5" class="form-label mx-auto"
                  >Senha</label
                >
                <input
                  type="password"
                  id="inputPassword5"
                  class="form-control inputInfo"
                  aria-describedby="passwordHelpBlock"
                />
                <div id="passwordHelpBlock" class="form-text alinhamento"></div>
                <div class="container-md col-12 mb-3 pt-3 mx-auto form-check">
                  <input
                    type="checkbox"
                    class="form-check-input col-4 form-check"
                    id="exampleCheck1"
                  />
                  <label
                    class="form-check-label roxoLetra ms-2"
                    for="exampleCheck1 "
                    >Não sou robô</label
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section class="container-sm col-6">
        <div
          class=" container-md col-12 mb-3  setarPadding  form-check teste mx-auto "
        >
          <button type="submit" class="btn botaoVerde botao2  alinhamentoBotao">
            <a href="formCriarConta.html">Criar Conta</a>
          </button>
          <p class="teste mt-2 roxoLetra mx-auto">
            Ja possui uma conta?
            <router-link to="/login"
              ><a href="login.html">Entrar</a></router-link
            >
          </p>
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

<style></style>
