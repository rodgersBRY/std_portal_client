<template>
  <div>
    <auth-nav-bar></auth-nav-bar>
    <main>
      <form action="#" v-if="role === 'student'">
        <h1 class="mb-10">Sign up as a Student</h1>
        <div class="align-row">
          <div class="mr-6">
            <label for="fname">First Name*</label>
            <input type="text" name="fname" v-model="studentForm.fname" />
          </div>
          <div>
            <label for="lname">Last Name*</label>
            <input type="text" name="fname" v-model="studentForm.lname" />
          </div>
        </div>

        <div class="align-row">
          <div class="mr-6">
            <label for="email">Email*</label>
            <input type="email" name="email" v-model="studentForm.email" />
          </div>
          <div>
            <label for="lname">Module*</label>
            <select name="modules" v-model="studentForm.modules">
              <option value="mixology">Mixology</option>
              <option value="barista">Barista</option>
              <option value="roasting">Roasting</option>
            </select>
          </div>
        </div>

        <label for="password">Password*</label>
        <input type="password" name="password" v-model="studentForm.password" />
        <label for="confirmPass">Password Confirmation*</label>
        <input
          type="password"
          name="confirmPass"
          v-model="studentForm.confirmPass"
        />

        <v-btn depressed dark color="green darken-3" class="mt-10"
          >Sign Up</v-btn
        >
      </form>

      <form action="#" v-else-if="role === 'instructor'">
        <h1 class="mb-10">Sign up as an Instructor</h1>

        <label for="email">Email*</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="instructorForm.email"
        />
        <label for="password">Password*</label>
        <input
          type="password"
          name="password"
          v-model="instructorForm.password"
        />
        <label for="confirmPass">Password Confirmation*</label>
        <input
          type="password"
          name="confirmPass"
          v-model="instructorForm.confirmPass"
        />

        <v-btn depressed dark color="green darken-3" class="mt-10"
          >Sign Up</v-btn
        >
      </form>
    </main>

    <footer>
      <auth-footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Register",

  components: {
    "auth-nav-bar": require("@/components/auth_navbar.vue").default,
    "auth-footer": require("@/components/auth_footer.vue").default,
  },

  data() {
    return {
      role: this.$route.params.role,

      studentForm: {
        fname: "",
        lname: "",
        email: "",
        modules: "",
        password: "",
        confirmPass: "",
      },

      instructorForm: {
        email: "",
        password: "",
        confirmPass: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 40%;
  margin: 3rem auto;
  input,
  select {
    width: 100%;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 10px;
    padding: 10px;
    &:focus {
      outline: none;
    }
  }

  label {
    display: block;
    margin: 1.5rem 0 5px 0;
  }
  .align-row {
    display: flex;
    justify-content: space-between;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0;
      input,
      select {
        width: 100%;
      }
    }
  }
  .v-btn {
    display: block;
  }
}

footer {
  position: absolute;
  bottom: 2%;
}
</style>
