<template>
    <div v-for="team in teams" :key="team.id" class="teamholder">
        <SingleTeam :team="team" />
    </div>
</template>
<script>
import SingleTeam from './SingleTeam.vue';
export default {

    components: {
        SingleTeam
    },
    props: ['teams'],

    methods: {

    }

}
</script>

<style scoped lang="scss"></style>