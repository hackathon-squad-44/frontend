<template>
  <div>
    <header class="px-3 py-2 bg-green text-white">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <ul
            class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
          >
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#home" />
                </svg>
                Início
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#speedometer2" />
                </svg>
                Nossa Causa
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#table" />
                </svg>
                Contato
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#grid" />
                </svg>
                Products
              </a>
            </li>
          </ul>

          <a
            href="/"
            class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <img
              src="../assets/mochila-cheia.png"
              alt="logo"
              class="bi me-2 size"
            />
          </a>
          <div>
            <button>DOAR</button>
          </div>
        </div>
      </div>
    </header>

    <div class="px-3 py-2 border-bottom mb-3">
      <div class="container d-flex flex-wrap justify-content-center"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-green {
  background-color: green;
}

.size {
  width: 200px;
  height: 80px;
}

@media (max-width: 360px) {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
  }

  li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  /* Change the link color on hover */
  li a:hover {
    background-color: #555;
    color: white;
  }

  body {
    background-color: aqua;
  }
}
</style>
