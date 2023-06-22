<template>
    <div v-for="team in teams" :key="team.id" class="teamholder">
        <SingleTeam :team="team" @onSelect="selectTeam" />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import SingleTeam from './SingleTeam.vue';
export default {

    components: {
        SingleTeam
    },
    props: ['teams'],

    methods: {
        ...mapActions(['followTeam']),
        selectTeam(team) {
            this.followTeam(team);
        }
    }

}
</script>

<style scoped lang="scss"></style>