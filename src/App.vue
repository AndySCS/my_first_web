<!--template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template-->

<template>
  <header class="header-bar">
    <div class="container" id="nav">
      <h3>
        <!--a href="/" class="router-link-exact-active router-link-active">Home</a>|
        <a href="/about" class="router-link-exact-active router-link-active">About</a>|
        <a href="/QRCodeGenerate" 
        class="router-link-exact-active router-link-active">QR Code Generator</a-->
        <router-link to="/" class="nav-link">Home</router-link> |
        <router-link to="/about" class="nav-link">About</router-link>|
        <router-link to="/QRCodeGenerate" class="nav-link">QR Code Generator</router-link>
      </h3>
    </div>
  </header>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
.container {
  /*padding: 5%;*/
  color: #fff;
  padding-left: 5%;
  padding-top: 1%;
  position: absolute;
  top: 0;
  left: 0;
}
.nav-link {
  color: white;
  /* Additional styles */
}
.header-bar {
  background-color: #333;
  color: #fff;
  padding: 30px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
