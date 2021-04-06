<template>
  <div>
    <div class="container">
      <div></div>
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
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link" href="">Inicio</a>
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
              <router-link to="/">
                <a
                  class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                  href=""
                  >Sair</a
                >
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <main>
      <section class="container-sm col-12 ">
        <div class="row">
          <div class=" col-12  pt-5 setarMargin ">
            <h2 class="teste roxoLetra setarPadding mx-auto">
              Bem vindo(a), {{userName}}
            </h2>
          </div>
        </div>
      </section>
      <div class="container">        
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
        <div class="col-md-8 position-relative mt-3  mb-5 setarPadding">              
          <p>
            clique no botão ao lado para cadastrar um novo Estudante
            <router-link to="/estudantelistamateriais">
              <a href="">
                <button class="botaoAdd ms-2">
                  <img src="../assets/imgs/add.svg" alt="" /></button
              ></a>
            </router-link>
          </p>
        </div>
        <section class="container-sm col-12 mt-2 mb-5">
          <div class="row">
            <div class="col-md col-12 mt-5 mx-auto tamanho2">
              <div class="col-12 ">
                <table class="table table-striped table-bordered border-success  mx-auto">
                  <thead class="col-12">
                    <tr>
                      <th class="text-warning" scope="col">ID</th>
                      <th class="text-warning" scope="col">Nome</th>
                      <th class="text-warning" scope="col">Escola</th>
                    </tr>
                  </thead>            
                  <tbody>
                    <tr v-for="student in this.students" :key="student.id">
                      <td>{{student.id}}</td>
                      <td><a v-bind:href="'/#/estudantelistamateriais?student='+student.id">{{student.name}}</a></td>
                      <td>{{student.schoolName}}</td>
                    </tr>                            
                  </tbody>
                </table>          
              </div>
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
import Parent from '../service/parent'
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      userName: VueCookies.get('user').name,
      students: {

      }
    }    
  }, 
  mounted() {
      Parent.getById(VueCookies.get('user').parentId).then(resposta => {
        console.log(resposta)
        this.students = resposta.data.dependents
      })
  },
  methods: {
    
  }  
}

</script>

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}
</style>
