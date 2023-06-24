<template>
    <div class="wrapper"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
        <div class="wrapper__info">
            <div :class="{ active: hover }" class="wrapper__img-holder"><img src="./../assets/team-placeholder.png"
                    alt="placeholder"></div>
            <div class="info">
                <div class="first-line">
                    {{ team.leagues.join(', ') }}
                </div>
                <div class="second-line">
                    <span v-html="matchName(team.name)" class="wrapper__team-name"></span> | <img
                        src="./../assets/stadium.png" alt="stadium"> <span v-html="matchName(team.stadium)"></span>
                </div>
            </div>
        </div>
        <div class="follow">
            <button :class="{ following: isFollow }" class="wrapper__follow-btn" @click="selectTeam(team)">{{ isFollow ?
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
        },
        searchTerm: {
            type: String
        }
    },
    data() {
        return {
            isFollow: false,
            hover: false,
            selectedItemIndex: -1
        }
    },
    methods: {
        nextListItem() {
         debugger
            console.log('keydow pressed');
            // if (this.selectedItemIndex < index) {
            //     this.selectedItemIndex++;
            // }
        },
        previousListItem() {
            console.log('keyUp');
        },
        checkFirstLetterCapital(_string) {
            return /[A-Z]/.test(_string[0]);
        },
        selectTeam() {
            this.$emit('onSelect', this.team)
            this.isFollow = !this.isFollow
        },
        matchName(current) {
            let reggie = new RegExp(this.searchTerm, "ig");
            let found = current.search(reggie) !== -1;
            if (this.checkFirstLetterCapital(current)) {
                return !found ? current : current.replace(reggie, '<span style="color:#00B1FF;">' + this.searchTerm.charAt(0).toUpperCase() + this.searchTerm.slice(1) + '</span>');

            }
        },

    },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.wrapper {


    &:hover {
        background-color: #F5F7F9;
    }


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

    &__img-holder:hover {
        background-color: white;
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

    .active {
        background-color: white;
    }
}
</style>