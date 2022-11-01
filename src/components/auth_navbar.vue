<template>
  <v-app-bar flat color="white" class="appbar">
    <div @click.prevent="$router.push('/')" style="cursor: pointer">
      <v-img alt="jowam logo"></v-img>
      <h1>JowamTC - Student Portal</h1>
    </div>
    <v-spacer></v-spacer>
    <v-btn depressed dark class="mr-5" color="green" to="/accounts/signup"
      >Sign Up</v-btn
    >
    <v-btn depressed color="grey lighten-4" to="/accounts/login">Login</v-btn>
  </v-app-bar>
</template>

<style scoped>
.v-toolbar__content {
  padding: 0 3rem;
}
</style>