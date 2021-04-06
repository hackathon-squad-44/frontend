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
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs ">
          <div class="col-3">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link" href="/#/contausuariocadastrardoacao">Inicio</a>
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
                  >SAIR</a
                >
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <main>
      <section class="container-sm col-12">
        <div class="row mx-auto">
          <div class=" container-md col-6  pb-3 pt-5 mx-auto setarPadding ">
            <h2 class="teste roxoLetra ">
              Estudante
            </h2>
          </div>
        </div>
      </section>

      <section class="container-sm col-12" v-if="!this.$route.query.student">
        <form class="row" @submit.prevent="salvar">
          <div class="mx-auto setarPadding">
            <div class="col-md-6 position-relative mt-2 mx-auto">
              <label for="validationTooltip01" class="form-label roxoLetra mx-2"
                >Digite o nome do Estudante</label
              >
              <input
                type="text"
                class="form-control verdeLetra"
                id="inputName"
                v-model="student.name"
                required
              />
            </div>
            <div class="col-md-6 position-relative mt-3 mx-auto">
              <label for="validationTooltip02" class="form-label roxoLetra mx-2"
                >Selecione a Escola</label
              >
              <select class="form-control" v-model="student.schoolId">
                <option v-for="school in schools" :value="item.id" :key="school.id">
                  {{ school.name }}
                </option>
              </select>
            </div>
          </div>

          <section class="col-md-6 position-relative mt-3 mx-auto">
            <div class="row row-cols-2 ">
              <div class="col bot setarPadding  mx-auto">
                <button
                  type="submit"
                  class="btn botaoVerde botaoEstudante mt-1 mx-2 col-2 alinhamentoBotao"
                >
                  Cadastrar Aluno
                </button>
              </div>
            </div>
          </section>
        </form>
      </section>

      <section v-if="this.$route.query.student">
        <div class="mx-auto setarPadding">
          <div class="col-md-6 position-relative mt-2 mx-auto">
            <h4>{{ studentFind.name }}</h4>
          </div>
        </div>
        <div class="mx-auto setarPadding">
          <div class="col-md-6 position-relative mt-2 mx-auto">
            <h4>{{ studentFind.schoolName }}</h4>
          </div>
        </div>
      </section>

    <div v-if=this.$route.query.student>
      <section>
        <form class="row" @submit.prevent = "adicionarItem">
          <div class="container tamanho">          
            <div class="col-md-12 position-relative mt-3 mx-auto">
              <label for="validationTooltip02" class="form-label roxoLetra mx-1">Seleciona o Material</label> 
              <select class="form-control" v-model = "itemOrder.itemId">
                <option v-for="item in items" :value="item.id" :key="item.id">
                {{ item.product }}
                </option>
              </select>            
            </div><br>
            <div class="row row-cols-2 ">
              <div class="col bot setarPadding  mx-auto">                
                <label for="formQuantity" class="roxoLetra mx-1">Selecione a Quantidade</label> 
                <select
                  class="btn text-white botaoVerde botaoEstudante mx-2 mt-3 col-6 alinhamentoBotao"
                  name="validationItens"
                  v-model="itemOrder.quantity"
                  id="formQuantity"                  
                  >
                  <option selected>1</option>                  
                  <option >2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="col bot setarPadding  mx-auto" style="margin-top:25px">
                <button
                  type="submit"
                  class="btn text-white botaoVerde botaoEstudante mt-3 mx-2 col-6 alinhamentoBotao">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </form>
        </section>        
        <div class="col-md col-12 mt-5 mx-auto tamanho2">
          <div class="col-6 tamanho2  ">
            <table
              class="table table-striped table-bordered border-success  mx-auto"
            >
              <thead class="col-6">
                <tr>
                  <th class="text-warning" scope="col">#</th>
                  <th class="text-warning" scope="col">Material</th>
                  <th class="text-warning" scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in this.studentFind.itemOrder" :key="item.id">
                  <td>{{ item.itemId }}</td>
                  <td>{{ item.itemProduct }}</td>
                  <td>{{ item.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    <br /><br />
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
import Student from "../service/student";
import School from "../service/school";
import VueCookies from "vue-cookies";
import ItemOrder from '../service/itemOrder'
import Item from '../service/item';

export default {
  data() {
    return {
      student: {
        name: "",
        schoolId: "",
        parentId: VueCookies.get("user").parentId,
      },
      schools: {},
      items: {},
      studentFind: {
        name: '',
        schoolName: '',
        itemOrder: {}
      },      
      itemOrder: {
        orderId: '',
        quantity: '',
        itemId: ''
      }
    }
  }, 
  mounted() {
    School.listar().then((school) => this.schools = school.data);
    Item.listar().then((item) => this.items = item.data);
    if (this.$route.query.student) {
      Student.getById(this.$route.query.student).then((student) => {
        this.studentFind.name = student.data.name;
        this.studentFind.schoolName = student.data.schoolName;
        this.itemOrder.orderId = student.data.orderId
        this.studentFind.itemOrder = student.data.itemOrder
      });
    }
  },
  methods: {
    salvar() {
      Student.salvar(this.student).then((resposta) => {
        this.$router.push(
          "estudantelistamateriais?student=" + resposta.data.id
        );
      });
    },

    adicionarItem() {      
      console.log(this.itemOrder)
      ItemOrder.salvar(this.itemOrder).then(resposta => {        
        console.log(resposta)
        location.reload();
      })
    }
  }
}
</script>

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}
</style>
