<template>
  <div class="home">
    <header>
      <sidenav />
    </header>

    <main>
      <h1>Dashboard</h1>

      <section class="categories">
        <v-card
          class="category"
          width="300px"
          v-for="(cat, i) in categories"
          :key="i"
        >
          <v-img width="100%" height="200px" :src="cat.img"> </v-img>
          <v-card-subtitle class="grey--text">CATEGORY</v-card-subtitle>
          <v-card-title>{{ cat.title }}</v-card-title>
          <v-card-text>{{ cat.text }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              outlined
              color="green darken-3"
              style="text-transform: capitalize"
              :to="cat.link"
              >{{ cat.btnText
              }}<span>
                <v-icon>mdi-arrow-right</v-icon>
              </span></v-btn
            >
          </v-card-actions>
        </v-card>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      categories: [
        {
          img: require("../assets/color_braid.svg"),
          title: "My Modules",
          text: "All courses you are currently enrolled in.",
          btnText: "My Modules",
          link: "/modules",
        },
        {
          img: require("../assets/retro.svg"),
          title: "Notices",
          text: "All notices that need your attention.",
          btnText: "Notices",
          link: "#",
        },
        {
          img: require("../assets/cranium.svg"),
          title: "Events",
          text: "Upcoming events you'll be interested in.",
          btnText: "Events",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  main {
    margin: auto 0 0 260px;
    padding: 1rem;
    height: 80vh;
    width: 80%;
    h1 {
      margin-bottom: 3rem;
    }
    .categories {
      display: flex;
      justify-content: center;
      .category {
        margin: 0 1rem;
      }
    }
  }
}
</style>
