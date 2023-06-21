<template>
    <div class="container">
        <h2 class="container__search-heading">SEARCH TEAMS</h2>
        <div class="container__search">
            <img class="container__icon-search" src="./../assets/search.svg" alt="serach">
            <input type="text" placeholder="Search for a team">
            <img class="container__close" src="./../assets/close.svg" alt="close">
        </div>
        <div class="container__results">
            <TeamsList :teams="teams" />
        </div>
    </div>
</template>

<script>
import TeamsList from './TeamsList.vue';
export default {
    components: {
        TeamsList
    },
    data() {
        return {
            teams: [
                {
                    "id": 1,
                    "name": "Real Madrid",
                    "stadium": "Estadio Alfredo Di Stefano",
                    "leagues": [
                        "Primera Division",
                        "Champions League"
                    ],
                    "is_following": false
                },
                {
                    "id": 3,
                    "name": "Barcelona",
                    "stadium": "Camp Nou",
                    "leagues": [
                        "Primera Division",
                        "Champions League"
                    ],
                    "is_following": false
                },
                {
                    "id": 40,
                    "name": "Villarreal",
                    "stadium": "Estadio de La Ceramica",
                    "leagues": [
                        "Primera Division",
                        "Europa League"
                    ],
                    "is_following": false
                },


            ]
        }
    },
    methods: {

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