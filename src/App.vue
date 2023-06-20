<template>
  <AppHeader />
  <NavBar />
  <router-view />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    AppHeader,
    NavBar
  }

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

ol,
ul {
  list-style: none;
}

// #app {
//   max-width: 1280px;
//   margin: auto;
//   background-color: #F5F7F9;
// }
</style>
