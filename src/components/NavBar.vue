<template>
    <div class="outher">
        <div class="outher__avatar">
            <img class="outher__img" src="./../assets/avatar.png" alt="user">
            <div>
                RichyRich
            </div>
        </div>
        <div class="outher__level">Level 5</div>
        <ul class="outher__navigation">

            <li class="outher__nav-item">
                <router-link exact to="/home">MY TEAMS</router-link>
            </li>
            <li class="outher__nav-item">
                <router-link to="/about">ABOUT</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.cdnfonts.com/css/montserrat');

.outher {
    background-color: #112948;
    margin: 16px auto;
    width: 600px;
    color: white;
    padding: 40px 40px 0 40px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    &__level {
        font-size: 10px;
        font-family: sans-serif;
        margin-left: 12px;
        margin-top: 6px;
    }

    &__avatar {
        display: flex;
        align-items: center;
    }

    &__img {
        margin-right: 20px;
    }

    &__navigation {
        display: flex;
        justify-content: center;
        height: 30px;
        margin-top: 50px;
    }

    &__nav-item {
        font-size: 11px;
        margin-right: 25px;
        font-family: 'Roboto', sans-serif;

        a {
            text-decoration: none;
            color: white;
        }

    }

}
</style>