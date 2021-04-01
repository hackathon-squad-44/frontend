<template>
  <div>
    <header class="box">
      <img src="../assets/mochila-cheia.png" alt="logo" />

      <nav>
        <ul>
          <li><a href="">Nossa Causa</a></li>
          <li><a href="">Área de Usuário</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>

      <button class="text">DOAR</button>
    </header>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style>
header {
  width: 100%;
  height: 72px;
  left: 0px;
  border-radius: 0px;
  background: rgba(247, 247, 252, 1);
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul li {
  list-style-type: none;
}

li a {
  text-decoration: none;
  color: rgba(20, 20, 43, 1);
  padding: 15px 30px;
}

img {
  max-width: 148px;
  height: auto;
  left: 21px;
  top: 2px;
  border-radius: 0px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
}

button {
  width: 100px;
  height: 40px;
  background-color: #66922a;
  border-radius: 8px;
  margin: 0px 32px;
}

.text {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #ffffff;
}
</style>
