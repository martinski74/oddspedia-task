<template>
    <div class="container">
        <h2 class="container__search-heading">SEARCH TEAMS</h2>
        <div class="container__search">
            <img class="container__icon-search" src="./../assets/search.svg" alt="serach">
            <input v-model="searchQuery" type="text" placeholder="Search for a team">
            <img class="container__close" src="./../assets/close.svg" alt="close">
        </div>
        <div class="container__results">
            <TeamsList :teams="resultQuery" />
            <!-- <div v-for="r of resultQuery" :key="r.id">{{ r }}</div> -->
        </div>
    </div>
</template>

<script>
import TeamsList from './TeamsList.vue';
import { mapState } from 'vuex'
export default {
    components: {
        TeamsList
    },
    data() {
        return {
            searchQuery: null,

        }
    },
    computed: {
        ...mapState(['teams']),

        resultQuery() {
            if (this.searchQuery) {
                return this.teams.filter(item => {

                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every(v => (item.name.toLowerCase() || item.stadium.toLowerCase()).startsWith(v));
                });
            } else {
                return null
            }
        }
    },
    methods: {

    },
    mounted() {

    }


}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.cdnfonts.com/css/montserrat');

.container {
    background-color: #FFFFFF;
    padding: 15px;
    width: 600px;
    margin: auto;

    &__search-heading {
        font-size: 14px;
        font-family: 'Montserrat';
        color: #1A3150;
        font-weight: bold;
        font-style: italic;

    }

    input[type=text] {
        background-color: #F5F7F9;
        border: none;
        border-radius: 20px;
        width: 100%;
        padding: 10px 10px 10px 42px;
        margin-top: 16px;

    }

    input[type="text"]::placeholder {
        color: #6F8CAA;
        left: 20px;
    }

    input[type=text]:focus {
        outline: none;
    }

    &__icon-search {
        position: relative;
        top: 47px;
        left: 15px;
    }

    &__close {
        position: relative;
        left: 95%;
        top: -26px;
    }

    @media screen and (max-width: 600px) {
        width: 100%
    }

    @media (max-width:375px) {
        &__close {
            left: 92%;
        }
    }

}
</style>