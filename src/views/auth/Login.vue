<template>
  <div>
    <auth-nav-bar />

    <main>
      <section class="login d-flex align-center">
        <div class="img mr-10">
          <v-img
            width="100%"
            :src="require('@/assets/retro.svg')"
            alt="ecommerce"
          ></v-img>
        </div>
        <div class="form">
          <form action="#">
            <label for="email">Email*</label>
            <input type="email" name="email" id="email" v-model="email" />
            <label for="password">Password*</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
            />

            <input type="submit" value="Login" />
          </form>
          <v-divider class="mb-8"></v-divider>
          <div class="recover-account">
            <p>Forgot Password?</p>
            <p>Don't have an account?</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <auth-footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Login",

  components: {
    "auth-nav-bar": require("@/components/auth_navbar.vue").default,
    "auth-footer": require("@/components/auth_footer.vue").default,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 70%;
  height: 70vh;
  margin: auto;
  display: flex;
  .img,
  .form {
    flex: 2;
  }
  .form {
    label {
      display: block;
      margin: 2rem 0 0.5rem 0;
    }
    input[type="email"],
    input[type="password"] {
      padding: 10px;
      border: 1px solid rgb(224, 224, 224);
      border-radius: 5px;
      width: 100%;
      &:focus {
        outline: none;
      }
    }

    input[type="submit"] {
      display: block;
      margin: 2rem 0;
      background: green;
      padding: 10px;
      border-radius: 5px;
      width: 100px;
      color: white;
      &:hover {
        background: rgb(88, 129, 88);
      }
    }
    .recover-account {
      display: flex;
      justify-content: space-between;
      p {
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: green;
        }
      }
    }
  }
}

footer {
  position: absolute;
  bottom: 2%;
}
</style>
