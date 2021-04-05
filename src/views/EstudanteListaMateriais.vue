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
              <router-link to="/login">
                <a
                  class="btn  verdeLetra btn-outline-primary ml-md-2 mb-2 px-2a"
                  href=""
                  >LOGIN</a
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
      
      <section class="container-sm col-12" v-if=!this.$route.query.student>
        <form class="row" @submit.prevent = "salvar">
          <div class="mx-auto setarPadding">
            <div class="col-md-6 position-relative mt-2 mx-auto">
              <label for="validationTooltip01" class="form-label roxoLetra mx-2">Digite o nome do Estudante</label>
              <input
                type="text"
                class="form-control verdeLetra"
                id="inputName"                
                v-model="student.name"
                required/>
            </div>
            <div class="col-md-6 position-relative mt-3 mx-auto">
              <label for="validationTooltip02" class="form-label roxoLetra mx-2">Selecione a Escola</label>                          
              <select class="form-control" v-model = "student.schoolId">
                <option v-for="item in items" :value="item.id" :key="item.id">
                {{ item.name }}
                </option>
              </select>            
            </div>
          </div>          
          {{student.name}}
          {{schoolId}}          
          
          <section class="col-md-6 position-relative mt-3 mx-auto">
            <div class="row row-cols-2 ">
              <div class="col bot setarPadding  mx-auto">
                <button
                  type="submit"
                  class="btn botaoVerde botaoEstudante mt-1 mx-2 col-2 alinhamentoBotao">
                  Cadastrar Aluno
                </button>
              </div>
            </div>
          </section>          
        </form>
      </section>

      <section v-if=this.$route.query.student>
        <div class="mx-auto setarPadding">
            <div class="col-md-6 position-relative mt-2 mx-auto">
              <h4>{{studentFind.name}}</h4>
            </div>
        </div>
        <div class="mx-auto setarPadding">
            <div class="col-md-6 position-relative mt-2 mx-auto">
              <h4>{{studentFind.schoolName}}</h4>
            </div>
        </div>
      </section>
      

    <div v-if=this.$route.query.student>
      <section>
        <div class="container tamanho">
          <div class="col-md-6 position-relative mt-3 mx-auto">
            <div
              class="input-group flex-nowrap container-md col-6 setarPadding">
              <span class="input-group-text" id="addon-wrapping">
                &#128269;</span>
              <input
                type="text"
                class="form-control"
                placeholder="Pesquisar material"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="row row-cols-2 ">
            <div class="col bot setarPadding  mx-auto">
              <select
                class="btn text-white botaoVerde botaoEstudante mx-2 mt-3 col-6 alinhamentoBotao"
                name="validationItens
                            "
                id="validationItens"
                ><option class="  mt-2 selected disabled value="
                  >Escolha</option
                >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="col bot setarPadding  mx-auto">
              <button
                type="submit"
                class="btn botaoVerde botaoEstudante mt-3 mx-2 col-6 alinhamentoBotao"
              >
                <a href="">Adicionar</a>
              </button>
            </div>
          </div>
        </div>
      </section>      
      <div class="col-md col-6 mt-5 mx-auto tamanho2">
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
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td colspan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </main><br><br>
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
import Student from '../service/student'
import School from '../service/school';



export default {  
  data() {
    return {
      student: {
        name: '',       
        schoolId: '',
        parentId: 1
      },
      items: {         
      },
      studentFind: {
        name: '',
        schoolName: '',
        itemOrder: {}
      }
    }
  }, 
  mounted() {
    School.listar().then(school => {
      this.items = school.data;      
    });
    Student.getById(this.$route.query.student).then(student => {
      console.log(student);
      this.studentFind.name = student.data.name
      this.studentFind.schoolName = student.data.schoolName
      student.data.itemOrder.forEach(element => {
        this.itemOrder = element.data
      });
    })
  },
  methods: {
    salvar() {
      Student.salvar(this.student).then(resposta,erro => {
        if(resposta) {

        }  
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
