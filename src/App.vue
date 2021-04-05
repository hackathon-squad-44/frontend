<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |

      <router-link
        v-for="(view, index) in getViews()"
        :key="`route-link-${index}`"
        :to="`/${view.toLowerCase()}`"
      >
        {{ view }}
        <span v-if="index !== getViews().length - 1">| |</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
const response = require.context("./views", true, /^((?!vue).)*$/, "lazy");
export default {
  methods: {
    getViews() {
      return response
        .keys()
        .map((item) => item.replace("./", ""))
        .filter((item) => item !== "Home");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Manrope", sans-serif;
}

@font-face {
  font-family: "Bubblegum Sans", cursive;
  src: url("https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap");
  font-family: "Manrope", sans-serif;
  src: url
    ("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap");
}
.fonteLogo {
  font-family: "Bubblegum Sans", cursive;
  font-size: 20px;
  align-items: center;
  margin: auto;
  text-decoration: none;
  color: #000;
}
.navTamanho {
  width: 150px;
}
.manrope {
  font-family: "Manrope", sans-serif;
  font-size: 22px;
}
.manrope2 {
  font-weight: 800px;
  font-weight: 16px;
  color: #14142b;
  text-align: center;
}
.manrope3 {
  font-weight: 600px;
  font-weight: 24px;
  color: #14142b;
  text-align: center;
}
.backIndex {
  background: #d9dbe9;
}

.h2Index {
  width: 328px;
}
.materiasIndex {
  width: 326px;
}
.bordaDiv {
  border-radius: 0px 0px 0px 30px;
}
.botaoVerde {
  background-color: #66922a;
}
.backVerde {
  background: #66922a;
}
.botaoVerde:hover {
  background-color: #880fa3;
  color: white;
}
.botaoVerde a {
  text-decoration: none;
  color: white;
}
.botaoRoxo {
  background: #880fa3;
}

.roxoLetra {
  color: #880fa3;
}

.background {
  background-image: linear-gradient(to right, #66922a, #91b54c);
  height: 104px;
}

.inputInfo {
  border: 1px solid #d9dbe9;
  box-sizing: border-box;
  border-radius: 5px;
  width: 300px;
  height: 46px;
  margin: 0px;
  padding: 0px;
}

.botao2 {
  border-radius: 8px;
  width: 100%;
  height: 60px;
}
.alinhamento {
  text-align: center;
}
.padding16 {
  padding: 16px;
}
.setarMargin {
  margin: 0px;
}
.setarPadding {
  padding: 0px;
}
.teste {
  width: 300px;
}

.alinhamentoBotao {
  margin: 0px auto;
}
.copy {
  width: 400px;
  height: 55px;
}
.barraPesquisa {
  width: 328px;
}
.botaoEstudante {
  width: 157px;
  height: 38px;
}
.bot {
  width: 180px;
}
.botao {
  width: 188px;
  height: 43px;
}
.tamanho {
  width: 440px;
}

.tamanho2 {
  width: 400px;
}
.texto {
  color: #4e4b66;
}
.titulo {
  color: #14142b;
}

.logo {
  width: 80px;
}
.mt-n1 {
  margin-top: -70px !important;
}

a:active {
  text-decoration: underline;
  text-decoration: #880fa3;
}
</style>
