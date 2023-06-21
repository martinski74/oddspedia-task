<template>
    <div class="container">
        <h2 class="container__hedaing">MY TEAMS</h2>

        <div v-if="false" class="container__results">

        </div>
        <div v-else class="container__empty-results">
            <p class="container__message">You aren't following any teams yet.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.cdnfonts.com/css/montserrat');

.container {
    background-color: #FFFFFF;
    padding: 15px;
    width: 600px;
    margin: 15px auto;

    &__hedaing {
        font-size: 14px;
        font-family: 'Montserrat';
        color: #1A3150;
        font-weight: bold;
        font-style: italic;


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
}
</style>