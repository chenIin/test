<template>
  <div>
    <button @click="handleClick">
      点击
    </button>
    {{ msg }}
    {{ apiUrl }}
    {{ NODE_ENV }}
  </div>

</template>
<script>
import router from "@/router/views";

export default {
  name: 'student-test',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      apiUrl: process.env.VUE_APP_API_URL,
      NODE_ENV: process.env.NODE_ENV,
    }
  },
  methods: {
    handleClick() {
      console.log('click')
      router.push('/Home')
    }
  }
}
</script>
<style scoped>

</style>
