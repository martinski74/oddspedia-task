<template>
    <div 
        v-for="(team, index) in teams"
        :tabindex="index" 
        :key="index" 
        :class="{ active: selectedItemIndex === index }"
        class="teamholder" @keyup.down="nextListItem(teams.length)"
        @keyup.up="previousListItem" @click="selectItem(index)">
        <SingleTeam :team="team" 
        :searchTerm="searchTerm" 
        :selected="selectedItemIndex === index" @onSelect="selectTeam" />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import SingleTeam from './SingleTeam.vue';
export default {

    components: {
        SingleTeam
    },
    props: ['teams', 'searchTerm', 'selected'],

    data() {
        return {
            selectedItemIndex: -1,

        }
    },

    methods: {
        ...mapActions(['followTeam']),
        selectTeam(team) {
            this.followTeam(team);
        },
        nextListItem(resultCount) {

            if (this.selectedItemIndex < resultCount) {
                this.selectedItemIndex += 1;
                if (this.selectedItemIndex > resultCount - 1) {
                    this.selectedItemIndex = 0
                }
            }
        },
        previousListItem() {
            if (this.selectedItemIndex > 0) {
                this.selectedItemIndex -= 1;
            }
        },

        selectItem(index) {
            this.selectedItemIndex = -1;
            this.selectedItemIndex = index
        }
    },


}
</script>

<style scoped lang="scss">
.active {
    background-color: #F5F7F9;
    outline: none;
}

.teamholder {
    outline: none;
}
</style>