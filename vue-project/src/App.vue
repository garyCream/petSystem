<template>
  <div id="app">
    <!-- <h1>hello world</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Students from "./components/students/pagination.vue"
export default {
  components: {
    Students
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
