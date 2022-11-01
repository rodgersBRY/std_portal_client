<template>
  <div>
    <auth-nav-bar />

    <main>
      <section class="prompt">
        <!-- <div class="prompt-div"> -->
        <div class="img">
          <v-img
            width="100%"
            height="500px"
            :src="require('../../assets/color_braid.svg')"
            alt="hero image"
          ></v-img>
        </div>
        <div class="account-type">
          <h1>
            Select the type of account <br />
            you want to create
          </h1>
          <p>
            An instructor gets access to create modules, notices and much more.
          </p>
          <p>A Student can view their modules and notices</p>
          <div class="action-btns">
            <v-btn
              depressed
              class="mr-10"
              dark
              color="green"
              to="/accounts/signup/student"
              >Student</v-btn
            >
            <v-btn depressed to="/accounts/signup/instructor">Instructor</v-btn>
          </div>
        </div>
        <!-- </div> -->
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Register Prompt",

  components: {
    "auth-nav-bar": require("@/components/auth_navbar.vue").default,
  },
};
</script>

<style lang="scss" scoped>
.prompt {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin: 3rem auto;
  .img {
    width: 40%;
  }
  .account-type {
    margin-left: 2rem;
    h1 {
      font-size: 40px;
    }
  }
}
</style>
