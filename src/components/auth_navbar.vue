<template>
  <v-app-bar flat color="white" class="appbar">
    <div
      class="company-logo"
      @click.prevent="$router.push('/')"
      style="cursor: pointer"
    >
      <img
        width="50px"
        :src="require('../assets/logo.webp')"
        alt="jowam logo"
      />
      <h1>JowamTC - Student Portal</h1>
    </div>
    <v-spacer />
    <v-btn depressed dark class="mr-5" color="green" to="/accounts/signup">
      Sign Up
    </v-btn>
    <v-btn depressed color="grey lighten-4" to="/accounts/login">Login</v-btn>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-toolbar__content {
  padding: 0 3rem;
}

.company-logo {
  display: flex;
  align-items: center;
  img {
    margin-right: 1rem;
  }
}
</style>
