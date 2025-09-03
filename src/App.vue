<template>
  <img alt="Vue logo" src="./assets/logo.png">
  {{msg}}
  {{apiUrl}}
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      apiUrl: process.env.VUE_APP_API_URL,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
