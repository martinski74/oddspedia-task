<template>
  <AppHeader />
  <NavBar />
  <router-view />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import NavBar from './components/NavBar.vue';
import { mapActions } from 'vuex'
export default {
  components: {
    AppHeader,
    NavBar,

  },
  methods: {
    ...mapActions(['getTeams']),

  },
  async created() {
    try {
      await this.getTeams()
    } catch (error) {
      console.log(error.message);

    }

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

#app,
body {
  max-width: 1280px;
  margin: auto;
  background-color: #F5F7F9;
}
</style>
