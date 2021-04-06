<template>
  <div>
    <div class="container">
      <div class="row ">
        <div class="col-6 mx-auto mb-4 mt-5 ">
          <div class="mx-auto navTamanho">
            <a class="mx-auto fonteLogo navbar-brand" href="">
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
        <ul class="nav1 nav-tabs ">
          <div class="col-3">
            <li class="nav-item">
              <router-link to="/"
                ><a class="nav-link" href="">Inicio</a></router-link
              >
            </li>
          </div>
          <div class="col-3">
            <router-link to="/nossacausa">
              <li class="nav-item">
                <a class="nav-link" href="">Nossa Causa</a>
              </li>
            </router-link>
          </div>
          <div class="col-4">
            <li class="nav-item">
              <router-link to="/contato">
                <a class="nav-link " href="">Contato</a></router-link
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
    <main>
      <section class="container-sm col-12">
        <div class="row ">
          <form
            class=" container-md col-12 mb-3  mx-auto "
            @submit.prevent="autorizar"
          >

            <div class="container-md col-12 mb-3 pt-5 mx-auto ">
              <div class="teste mx-auto">
                <label for="exampleInputEmail1" class="form-label roxoLetra"
                  >E-mail {{ user.email }}</label
                >
              </div>
              <input
                type="email"
                class="form-control inputInfo  mx-auto"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v.model="user.email"
              />
              <div id="emailHelp" class="form-text teste  mx-auto">
                Nunca compartilhe suas informações pessoais.
              </div>
            </div>
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
              v-model="user.password"
            />

            <div id="passwordHelpBlock" class="form-text teste mx-auto ">
              <div class="container-md col-12 mb-3 pt-3 mx-auto form-check">
                <button
                  type="submit"
                  class="btn botaoVerde botao2 roxoLetra  alinhamentoBotao"
                >
                  <router-link to="/contausuario"
                    ><a href="">Login</a></router-link
                  >
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section class="container-sm col-12 ">
        <div
          class=" container-md col-12 mb-3  setarPadding  form-check teste mx-auto "
        >
          <p class="teste mt-2 roxoLetra text-center mx-auto">
            Não possui uma conta?
            <router-link to="/cadastrarconta"
              ><a href="">Criar Conta</a></router-link
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
/*
import User from "../service/user";
*/
export default {
  data() {
    return {
      user: {
        address: "",
        cep: "",
        city: "",
        cpf: "",
        district: "",
        email: "",
        name: "",
        number: "",
        password: "",
        phone: "",
        state: "",
      },
    };
  },
  methods: {
    autorizar() {
      /*
      User.autorizar(this.user).then((resposta) => {
        console.log(resposta);

      });
            */
      alert(this.user.email)
    },
  },
};
</script>

<style>
.nav1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-bottom: 0;
  list-style: none;
}
</style>
