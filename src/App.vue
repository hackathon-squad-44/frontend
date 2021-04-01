<template>
  <div id="app" class="container">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Manrope", sans-serif;
}

body {
  height: 2747px;
  width: 1440px;
}
</style>
