<template>
    <div class="outher">
        <div class="outher__avatar">
            <img class="outher__img" src="../assets/avatar.png" alt="user">
            <div class="outher__name">
                RichyRich
            </div>
        </div>
        <div class="outher__level">Level 5</div>
        <ul class="outher__navigation">
            <li class="outher__nav-item">
                <router-link to="/">MY TEAMS</router-link>
            </li>
            <li class="outher__nav-item">
                <router-link to="/about">ABOUT</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
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
        padding-top: 5px;

    }

    a {
        text-decoration: none;
        color: #6F8CAA;
    }


    a.router-link-active,
    a:active {

        color: white;
        border-bottom: 3px solid #00B1FF;
        padding-bottom: 9px;
    }

    &__name {
        font-size: 16px;
        font-style: italic;
        font-size: 16px;
        font-weight: 700;
        font-family: 'Montserrat';
    }

    @media screen and (max-width: 600px) {
        width: 100%
    }


    @media (max-width:375px) {
        & {
            border-top-right-radius: 0;
            border-top-left-radius: 0;
            margin-top: 0;
        }

        &__name {
            position: absolute;
            top: 30px;
            left: 38%;
        }

        &__img {
            display: block;
            margin: auto;
        }

        &__level {
            text-align: center;
        }
    }

}
</style>