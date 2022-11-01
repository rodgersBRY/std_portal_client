<template>
  <div>
    <auth-nav-bar></auth-nav-bar>
    <main>
      <p>{{ role }}</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "Register",

  components: {
    "auth-nav-bar": require("../../components/auth_navbar.vue").default,
  },

  data() {
    return {
      role: this.$route.params.role,
    };
  },
};
</script>
