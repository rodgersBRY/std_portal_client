<template>
  <div class="modules">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="content">
        <v-card width="80%" class="pa-5 mt-10">
          <h1>Enrolled Courses</h1>

          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(mdl, i) in modules" :key="i">
              <v-expansion-panel-header>{{
                mdl.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content class="pa-4">
                <p v-for="(topic, i) in mdl.topics" :key="i">{{ topic }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modules: [
        {
          title: "Mixology",
          topics: ["Introduction to Mixology", "Tasting and Mixing"],
        },
        {
          title: "Barista",
          topics: [
            "Introduction to Barista",
            "Grading coffee beans",
            "Understanding different coffee blends",
          ],
        },
      ],
    };
  },

  methods: {
    expandAccordion() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modules {

  main {
    margin-left: 260px;
    .v-card {
      margin: auto;
      .accordion {
        background: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: display 0.4s ease;
      }

      .panel {
        padding: 0 18px;
        display: none;
        overflow: hidden;
      }
    }
  }
}
</style>
