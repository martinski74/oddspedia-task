<template>
  <div class="home">
    <SearchTeams />
    <MyTeams />

  </div>
</template>

<script>
// @ is an alias to /src

import SearchTeams from '@/components/SearchTeams.vue';
import MyTeams from '@/components/MyTeams.vue';
export default {
  name: 'HomeView',
  components: {
    SearchTeams,
    MyTeams

  }
}
</script>
