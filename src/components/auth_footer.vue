<template>
  <div>
    <v-avatar size="60" color="orange darken-3" class="mr-5">
      <v-img :src="require('../assets/logo.webp')"></v-img>
    </v-avatar>
    <h3>Student Portal</h3>
    <v-divider vertical class="grey lighten-3 mx-10"></v-divider>
    <p>&copy; {{ year }} Jowam Training Centre <span class="mx-5">--</span> Mawira Corp</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 0 2rem;
  display: flex;
  align-items: center;
  p {
    margin: 0;
  }
}
</style>
