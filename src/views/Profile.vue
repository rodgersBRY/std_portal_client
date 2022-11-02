<template>
  <div class="profile">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="information-card mt-7">
        <v-card class="px-10 py-3">
          <v-card-title class="pl-0">
            <h1>Personal Information</h1>
          </v-card-title>
          <v-divider />
          <p class="mt-5">Name: {{ profileInfo.name }}</p>
          <p>Email: {{ profileInfo.email }}</p>
          <p>Age: {{ profileInfo.age }}</p>
          <p>Gender: {{ profileInfo.gender }}</p>
          <p>Nationality: {{ profileInfo.nationality }}</p>
          <p>Course: {{ profileInfo.course }}</p>
          <p>ID Number: {{ profileInfo.id_no }}</p>
        </v-card>
      </section>

      <section class="modules">
        <v-card class="px-10 py-3">
          <v-card-title class="pl-0">
            <h1>Modules</h1>
          </v-card-title>
          <v-divider />
          <p class="mt-6">
            Mixology <span class="green--text ml-3">Completed</span>
          </p>
          <p>Barista <span class="green--text ml-3">Completed</span></p>
          <p>Roasting <span class="orange--text ml-3">In Progress</span></p>
        </v-card>
      </section>

      <section class="fee-structure">
        <v-card class="px-10 py-3">
          <v-card-title class="pl-0"><h1>Fee Structure</h1></v-card-title>
          <v-divider />
          <p class="mt-6">
            Fee Amount: <span class="grey--text">Ksh. 40,000</span>
          </p>
        </v-card>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      profileInfo: {
        name: "Brian Mawira",
        email: "brian@mail.com",
        age: "24",
        gender: "Male",
        nationality: "Kenyan",
        course: "Mixology",
        id_no: "34153329",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  main {
    margin-left: 260px;
    .information-card,
    .modules,
    .fee-structure {
      width: 80%;
      margin: auto;
      padding: 3rem 2rem;
    }
  }
}
</style>
