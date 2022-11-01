<template>
  <v-container class="sidenav green darken-2">
    <h2 class="app-name">
      <span
        ><v-icon color="white" style="margin-right: 10px"
          >mdi-account-school</v-icon
        ></span
      >
      Student Portal
    </h2>

    <ul class="nav-links" style="margin-top: 2rem">
      <router-link class="nav-link" tag="li" exact-active-class="active" to="/"
        ><span><v-icon color="white">mdi-home</v-icon></span
        >Home</router-link
      >
      <router-link class="nav-link" tag="li" active-class="active" to="/modules"
        ><span><v-icon color="white">mdi-bookshelf</v-icon></span
        >My Modules</router-link
      >
      <router-link class="nav-link" tag="li" active-class="active" to="#"
        ><span><v-icon color="white">mdi-calendar-text-outline</v-icon></span
        >Notices</router-link
      >
      <router-link class="nav-link" tag="li" active-class="active" to="#"
        ><span><v-icon color="white">mdi-school-outline</v-icon></span
        >My Profile</router-link
      >
      <router-link
        class="nav-link"
        tag="li"
        active-class="active"
        to="/accounts/login"
        ><span><v-icon color="white">mdi-logout</v-icon></span
        >Logout</router-link
      >
    </ul>
  </v-container>
</template>

<style lang="scss" scoped>
.sidenav {
  color: white;
  height: 100vh;
  padding: 4rem 10px 0 10px;
  .nav-links {
    list-style: none;
    padding: 0;
    .nav-link {
      padding: 10px;
      margin: 1rem 0;
      cursor: pointer;
      border-radius: 5px;
      &:hover,
      &.active {
        background: rgb(225, 225, 225, 0.2);
      }
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
