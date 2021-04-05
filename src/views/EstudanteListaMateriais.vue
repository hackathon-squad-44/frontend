<template>
  <div>
    <div class="container">
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
                >LOGIN</a
              >
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

      <section class="container-sm col-12">
        <form class="row ">
          <div class="mx-auto setarPadding">
            <div class="col-md-6 position-relative mt-2 mx-auto">
              <label for="validationTooltip01" class="form-label roxoLetra mx-2"
                >Digite o nome do Estudante</label
              >
              <input
                type="text"
                class="form-control verdeLetra"
                id="validationTooltip01"
                value=""
                required
              />
            </div>
            <div class="col-md-6 position-relative mt-3 mx-auto">
              <label for="validationTooltip02" class="form-label roxoLetra mx-2"
                >Digite o nome da Escola</label
              >
              <input
                type="text"
                class="form-control verdeLetra"
                id="validationTooltip02"
                value=""
                required
              />
            </div>
            <div class="col-md-6 position-relative mt-3 mx-auto">
              <div
                class="input-group flex-nowrap container-md col-6 setarPadding"
              >
                <span class="input-group-text" id="addon-wrapping">
                  &#128269;</span
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pesquisar material"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
      <section>
        <div class="container tamanho">
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

<style>
.px-2a {
  padding-right: 4.5rem !important;
  padding-left: 3.5rem !important;
}
</style>
