<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      apiUrl: process.env.VUE_APP_API_URL,
    }
  }
}
</script>

<style >
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  padding: 0;
  margin: 0;
}

</style>
