<template>
  <div class="avue-contail">
    <div class="avue-header">1</div>
    <div class="avue-layout">
      <div class="avue-left">
        <div class="avue-sidebar">
          <div data-v-17e1ebb7="" class="avue-logo">
            <span><span class="avue-logo_title">111111 </span></span>
          </div>
          <div class="el-scrollbar">
            22222
          </div>
        </div>
      </div>
      <div class="avue-main">
          <test1-t></test1-t>

      </div>
    </div>

  </div>
</template>
<script>
import Test1T from "@/components/test1.vue";

export default {
  name: 'home-test',
  components: {Test1T},
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>
<style scoped>

.avue-contail {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  background-size: 100%;
  background-repeat: no-repeat;
}


.avue-header {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #409eff;
  height: 64px;
}

.avue-layout {


}

.avue-left {
  position: fixed;
  left: 0;
  top: 0;
  width: 240px;
  height: 100%;
  z-index: 1025;
}

.avue-sidebar {
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, .15);
  box-shadow: 2px 0 6px rgba(0, 21, 41, .15);
  background-color: #fff;
  padding-top: 42px;
}


.avue-logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 64px;
  line-height: 64px;
  background-color: #409eff;
  font-size: 18px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
  color: hsla(0, 0%, 100%, 1);
  z-index: 1024;
  text-align: center;
}
.el-scrollbar{
  height: 100%;
  margin-top: 22px;
}


.avue-main {
  position: absolute;
  left: 240px;
  padding: 0;
  padding-bottom: 20px;
  width: calc(100% - 240px);
  height: calc(100% - 88px);
  overflow: hidden;
  -webkit-transition: all .5s;
  transition: all .5s;
  background: #f0f2f5;
  z-index: 1026;

}

</style>
