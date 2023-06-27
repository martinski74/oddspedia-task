<template>
  <div class="navbar">
    <div class="navbar__inner">
      <div class="leftside">
        <img class="navbar__left-arrow" src="../assets/arrow-left.svg" alt="arrow-left">
        <img class="navbar__logo-mobile" src="../assets/logo-mobile.svg" alt="logo-mobile">
        <img class="navbar__logo" src="./../assets/logo.png" alt="logo">
      </div>
      <div class="navbar__rightside">
        <img src="./../assets/notification.svg" alt="ring">
        <span class="navbar__not">2</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background-color: #1E3554;
  height: 80px;

  @media screen and (max-width: 600px) {
    width: 100%
  }



  &__logo-mobile {
    display: none;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
  }

  &__left-arrow {
    margin-left: 25px;
    margin-right: 16px;
    margin-bottom: 3px;
  }

  &__rightside {
    margin-right: 32px;
  }

  &__not {
    position: absolute;
    border-radius: 50%;
    background-color: #00B1FF;
    font-size: 10px;
    font-family: sans-serif;
    width: 14px;
    height: 14px;
    text-align: center;
    top: 40px;
    margin-left: -8px;
    border: solid 1px;
    border-color: #1E3554;
    color: white;
  }

  @media (max-width:375px) {
    width: 100%;

    &__logo {
      display: none;
    }

    &__logo-mobile {
      display: inline-block;
    }
  }
}
</style>
