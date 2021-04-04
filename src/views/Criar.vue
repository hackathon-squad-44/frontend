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
          <div class=" container-md col-12  pt-5 setarMargin ">
            <h2 class="teste roxoLetra setarPadding mx-auto">
              Crie sua conta
            </h2>
          </div>
        </div>
      </section>

      <section class="container-sm col-12">
        <form class="row  needs-validation" novalidate>
          <div class="col-md-6 position-relative mt-5">
            <label for="validationTooltip01" class="form-label roxoLetra"
              >Primeiro Nome</label
            >
            <input
              type="text"
              class="form-control verdeLetra"
              id="validationTooltip01"
              value="Maria"
              required
            />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div class="col-md-6 position-relative mt-5">
            <label for="validationTooltip02" class="form-label roxoLetra"
              >Sobrenome</label
            >
            <input
              type="text"
              class="form-control verdeLetra"
              id="validationTooltip02"
              value="Silva"
              required
            />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 position-relative mt-5">
            <label for="validationTooltip03" class="form-label roxoLetra"
              >Cidade</label
            >
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              required
            />
            <div class="invalid-tooltip">
              Entre com uma cidade válida.
            </div>
          </div>
          <div class="col-md-4 position-relative mt-5">
            <label for="validationTooltip04" class="form-label roxoLetra"
              >Estado</label
            >
            <select
              class="form-select verdeLetra"
              id="validationTooltip04"
              required
            >
              <option selected disabled value="">Escolha...</option>
              <option value="ac">Acré</option>
              <option value="al">Alagoas</option>
              <option value="ap">Amapá</option>
              <option value="am">Amazonas</option>
              <option value="ba">Bahia</option>
              <option value="df">Distrito federal</option>
              <option value="es">Espirito Santo</option>
              <option value="go">Goiás</option>
              <option value="ma">Maranhão</option>
              <option value="mt">Mato Grosso</option>
              <option value="ms">Mato Grosso do Sul</option>
              <option value="mg">Minas Gerais</option>
              <option value="pa">Pará</option>
              <option value="pb">Paráiba</option>
              <option value="pr">Paraná</option>
              <option value="pe">Pernanbuco</option>
              <option value="pi">Piauí</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="rn">Rio Grande do Norte</option>
              <option value="rs">Rio Grande do Sul</option>
              <option value="ro">Rondônia</option>
              <option value="rr">Roraima</option>
              <option value="sc">Santa Catarina</option>
              <option value="sp">São Paulo</option>
              <option value="to">Tocantins</option>
            </select>
            <div class="invalid-tooltip">
              Entre com um estado válido.
            </div>
          </div>
          <div class="col-md-4 position-relative mt-5">
            <label for="validationTooltip05 " class="form-label roxoLetra"
              >CEP</label
            >
            <input
              type="text"
              class="form-control verdeLetra"
              id="validationTooltip05"
              required
            />
            <div class="invalid-tooltip">
              Entre com um CEP válido.
            </div>
          </div>
          <section class="container-sm col-12 ">
            <div
              class=" container-md col-12 mb-3  setarPadding  form-check teste mx-auto mt-5"
            >
              <button
                type="submit"
                class="btn botaoVerde botao2  alinhamentoBotao"
              >
                <a href="">Finalizar Cadastro</a>
              </button>
              <p class="teste mt-2 roxoLetra text-center mx-auto">
                Ja possui uma conta? <a href="login.html">Entrar</a>
              </p>
            </div>
          </section>
        </form>
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
