<template>
  <div>
    <img width="50px" :src="require('../assets/logo.webp')" />
    <h3>Student Portal</h3>
    <v-divider vertical class="grey lighten-3 mx-10"></v-divider>
    <p>
      &copy; {{ year }} Jowam Training Centre
      <span class="mx-5">--</span> Mawira Corp
    </p>
  </div>
</template>

<script>
export default {
  name: "footer",

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
