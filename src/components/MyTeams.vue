<template>
    <div class="container">
        <h2 class="container__heading">my teams</h2>
        <div class="container__selected-teams" v-if="selectedTeams.length > 0">

            <div v-for="team in selectedTeams" :key="team.id" class="container__results">
                <div class="container__image">
                    <img src="../assets/team-placeholder.png" alt="team">
                </div>
                <div class="container__name">
                    {{ team.name }}
                </div>
            </div>
        </div>
        <div v-else class="container__empty-results">
            <p class="container__message">You aren't following any teams yet.</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

    computed: {
        ...mapState(['selectedTeams'])
    }
}
</script>

<style scoped lang="scss">
.container {
    background-color: #FFFFFF;
    padding: 15px;
    width: 600px;
    margin: 15px auto;

    &__heading {
        font-size: 14px;
        font-family: 'Montserrat';
        color: #1A3150;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 16px;
        text-transform: uppercase;

    }

    &__results {
        display: flex;
        align-items: center;
        font-family: 'Roboto';
        font-size: 14px;
        color: #1A3150;
        font-weight: 600;
    }

    &__empty-results {
        background-color: #F5F7F9;
        width: 100%;
        margin-top: 16px;
        border-radius: 8px;
    }

    &__message {
        padding: 37px;
        color: #6F8CAA;
        font-family: 'Roboto';
        font-size: 12px;
    }

    &__image {
        background-color: #F5F7F9;
        border-radius: 50%;
        padding: 6px;
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }

    @media screen and (max-width: 600px) {
        width: 100%
    }
}
</style>