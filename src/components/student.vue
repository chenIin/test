<template>
  <div>
    {{ msg }}
    {{ apiUrl }}
    {{ NODE_ENV }}
  </div>

</template>
<script>
export default {
  name: 'student-test',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      apiUrl: process.env.VUE_APP_API_URL,
      NODE_ENV: process.env.NODE_ENV,
    }
  }
}
</script>
<style scoped>

</style>
