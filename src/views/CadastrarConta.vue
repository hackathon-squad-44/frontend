<template>
  <div>
    <div class="container">
      <div class="row ">
        <div class="col-6 mx-auto mb-4 mt-5 ">
          <div class="mx-auto navTamanho">
            <a class="mx-auto fonteLogo navbar-brand" href="">
              <p class="fonteLogo setarMargin">Mochila cheia</p>
              <router-link to="/"
                ><img
                  class="logo ms-4"
                  src="../assets/imgs/logo.svg"
                  alt="Mochila Cheia"
              /></router-link>
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
            <router-link to="/contato">
              <li class="nav-item"></li>
              <a class="nav-link" href="">Contato</a></router-link
            >
          </div>
          <div class="col-3">
            <router-link to="/CadastrarConta">
              <li class="nav-item px-2 mt-1">
                <a
                  class="btn verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                  href="/login.vue"
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
      <div v-if = "isLogedIn">
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
          <form
            class=" container-md col-12 mb-3  mx-auto "
            v-if="!hasAccount"
            @submit.prevent="salvar"
          >
            <div class="container-md col-12 mb-3 pt-3 mx-auto ">
              <div class="teste mx-auto">
                <label for="exampleInputEmail1" class="form-label roxoLetra"
                  >Nome</label
                >
              </div>
              <input
                type="text"
                class="form-control inputInfo  mx-auto"
                id="inputName"
                aria-describedby="emailHelp"
                v-model="user.name"
              />

              <div class="teste mx-auto">
                <label for="exampleInputEmail1" class="form-label roxoLetra"
                  >CPF</label
                >
              </div>
              <input
                type="text"
                class="form-control inputInfo  mx-auto"
                id="inputCpf"
                aria-describedby="emailHelp"
                v-model="user.cpf"
              />

              <div class="container-md col-12 mb-3 pt-3 mx-auto ">
                <div class="teste mx-auto">
                  <label for="exampleInputEmail1" class="form-label roxoLetra"
                    >Email</label
                  >
                </div>
                <input
                  type="text"
                  class="form-control inputInfo  mx-auto"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  v-model="user.email"
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
                  v-model="user.password"
                />
                <div id="passwordHelpBlock" class="form-text teste mx-auto ">
                  Conter de 8 a 20 caracteres, letras, números e caracteres
                  especiais.Não podendo conter espaços ou emojis.
                </div>
                <div id="passwordHelpBlock" class="form-text alinhamento"></div>
              </div>
            </div>
            <div
              class=" container-md col-12 mb-3  setarPadding  form-check teste mx-auto "
            >
              <button
                type="submit"
                class="btn botaoVerde botao2  alinhamentoBotao"
              >
                <router-link to="/contausuariocadastrardoacao"
                  ><a href="">Criar Conta</a></router-link
                >
              </button>
            </div>
          </form>

          <form
            class=" container-md col-12 mb-3  mx-auto "
            v-if="hasAccount"
            @submit.prevent="autorizar"
          >
            <div class="container-md col-12 mb-3 pt-3 mx-auto ">
              <div class="container-md col-12 mb-3 pt-3 mx-auto ">
                <div class="teste mx-auto">
                  <label for="exampleInputEmail1" class="form-label roxoLetra"
                    >Email</label
                  >
                </div>
                <input
                  type="text"
                  class="form-control inputInfo  mx-auto"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  v-model="login.email"
                />
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
                  v-model="login.password"
                />

                <div id="passwordHelpBlock" class="form-text alinhamento"></div>
              </div>
            </div>
            <div
              class=" container-md col-12 mb-3  setarPadding  form-check teste mx-auto "
            >
              <button
                type="submit"
                class="btn botaoVerde botao2  alinhamentoBotao"
              >
                <router-link to="/contausuariocadastrardoacao"
                  ><a href="">Login</a></router-link
                >
              </button>
            </div>
          </form>
        </div>
      </section>
      <section class="container-sm col-6">
        <div
          class=" container-md col-12 mb-3  setarPadding  form-check teste mx-auto "
        >
          <form v-if="!hasAccount" @submit.prevent="flip">
            <p class="teste mt-2 roxoLetra mx-auto">
              Ja possui uma conta?
            </p>

            <button
              type="submit"
              class="btn botaoVerde botao2  alinhamentoBotao"
              @submit.prevent="salvar"
            >
              faça login
            </button>
          </form>
          <form v-if="hasAccount" @submit.prevent="flip">
            <p class="teste mt-2 roxoLetra mx-auto">
              Ainda não possui uma conta?
            </p>

            <button
              type="submit"
              class="btn botaoVerde botao2  alinhamentoBotao"
              @submit.prevent="salvar"
            >
              cadastre-se
            </button>
          </form>
        </div>
      </section>
      </div>
      <div v-if = "!isLogedIn">

        <p>Você já está logado</p>
                        <button
                type="submit"
                class="btn botaoVerde botao2  alinhamentoBotao"
              >
                <router-link to="/contausuariocadastrardoacao"
                  ><a href="">Seguir para a página do usuário</a></router-link
                >
              </button>
        <p>  </p>
      </div>
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
import User from "../service/user";
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      isLogedIn: false,
      hasAccount: true,
      login: {
        email: "",
        password: "",
      },
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

  mounted() {
    this.getLogedIn()
  },

  methods: {
    salvar() {
      User.salvar(this.user).then((resposta) => {
        console.log(resposta);
      });
    },
    autorizar() {
      User.autorizar(this.login).then((resposta) => {
        if (resposta.status == 200){
        VueCookies.set('user' , resposta.data, "24h") 
        }
        console.log(resposta);

      });
    },
    flip() {
      this.hasAccount = !this.hasAccount;
    },

    getLogedIn(){
        if (VueCookies.get('user'))
        {
          this.isLogedIn = true
        }
    }

  }
};
</script>

<style></style>
