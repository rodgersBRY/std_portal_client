<template>
  <div class="home">
    <v-container class="sidenav green darken-2">
      <h2 class="app-name">
        <span
          ><v-icon color="white" style="margin-right: 10px"
            >mdi-account-school</v-icon
          ></span
        >
        Student Portal
      </h2>

      <ul class="nav-links" style="margin-top: 2rem">
        <router-link
          class="nav-link"
          tag="li"
          exact-active-class="active"
          to="/"
          ><span><v-icon color="white">mdi-home</v-icon></span
          >Home</router-link
        >
        <router-link class="nav-link" tag="li" active-class="active" to="#"
          ><span><v-icon color="white">mdi-bookshelf</v-icon></span
          >My Modules</router-link
        >
        <router-link class="nav-link" tag="li" active-class="active" to="#"
          ><span><v-icon color="white">mdi-calendar-text-outline</v-icon></span
          >Notices</router-link
        >
        <router-link class="nav-link" tag="li" active-class="active" to="#"
          ><span><v-icon color="white">mdi-school-outline</v-icon></span
          >My Profile</router-link
        >
        <router-link class="nav-link" tag="li" active-class="active" to="/accounts/login"
          ><span><v-icon color="white">mdi-logout</v-icon></span
          >Logout</router-link
        >
      </ul>
    </v-container>

    <main>
      <h1>Dashboard</h1>

      <section class="categories">
        <v-card
          class="category"
          width="400px"
          v-for="(cat, i) in categories"
          :key="i"
        >
          <v-img height="300px" :src="cat.img"> </v-img>
          <v-card-subtitle class="grey--text">CATEGORY</v-card-subtitle>
          <v-card-title>{{ cat.title }}</v-card-title>
          <v-card-text>{{ cat.text }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn outlined color="green darken-3" style="text-transform: capitalize"
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
        },
        {
          img: require("../assets/retro.svg"),
          title: "Notices",
          text: "All notices that need your attention.",
          btnText: "Notices",
        },
        {
          img: require("../assets/cranium.svg"),
          title: "Events",
          text: "All upcoming events you'll be interested in.",
          btnText: "Events",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  .sidenav {
    color: white;
    height: 100vh;
    padding: 4rem 10px 0 10px;
    flex: 1;
    .nav-links {
      list-style: none;
      padding: 0;
      .nav-link {
        padding: 10px;
        margin: 1rem 0;
        cursor: pointer;
        border-radius: 5px;
        &:hover,
        &.active {
          background: rgb(225, 225, 225, 0.2);
        }
        span {
          margin-right: 10px;
        }
      }
    }
  }

  main {
    flex: 5;
    height: 80vh;
    width: 80%;
    margin: auto 2rem;
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
