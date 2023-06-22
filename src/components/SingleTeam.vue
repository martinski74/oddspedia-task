<template>
    <div class="wrapper">
        <div class="wrapper__info">
            <div class="wrapper__img-holder"><img src="./../assets/team-placeholder.png" alt="placeholder"></div>
            <div class="info">
                <div class="first-line">
                    {{ team.leagues.join(', ') }}
                </div>
                <div class="second-line">
                    <span class="wrapper__team-name">{{ team.name }}</span> | <img src="./../assets/stadium.png"
                        alt="stadium"> <span>{{ team.stadium }}</span>
                </div>
            </div>
        </div>
        <div class="follow">
            <button :class="{ following: isFollow }" class="wrapper__follow-btn" @click="followTeam">{{ isFollow ?
                'FOLLOWING' : 'FOLLOW'
            }}</button>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        team: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isFollow: false
        }
    },
    methods: {
        followTeam() {

            this.isFollow = !this.isFollow
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.wrapper {
    display: flex;
    justify-content: space-between;
    padding: 8px 0 8px 0;

    &__info {
        display: flex;
        color: #6F8CAA;
        cursor: pointer;
    }

    &__img-holder {
        background-color: #F5F7F9;
        border-radius: 50%;
        padding: 6px;
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }

    &__follow-btn {
        border: none;
        background-color: #00B1FF;
        color: white;
        padding: 8px 20px;
        border-radius: 15px;
        font-family: 'Roboto';
        font-size: 12px;
        cursor: pointer;
    }

    &__team-name {
        color: #1A3150;
        font-size: 14px;
        font-family: 'Roboto';
        font-weight: 600;
    }

    .following {
        background-color: white;
        color: #00B1FF;
        border: 1px solid #00B1FF;
        font-weight: 600;
    }
}
</style>