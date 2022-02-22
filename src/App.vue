<template>
  <v-app>
    <v-main>
      <v-container justify-center>
        <test-calendar class="pa-16" />

        <v-row align="center" justify="space-between">
          <v-col>
            <v-btn class="float-right" @click="rotateTitles(1)" color="success"
              >go right by 1</v-btn
            >
          </v-col>
          <v-col>
            <v-btn class="float-left" @click="rotateTitles(-1)" color="success"
              >go left by 1</v-btn
            >
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="3" v-for="item in computedTitles" :key="item">
            <test-card :title="item" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TestCalendar from "./components/TestCalendar.vue";
import TestCard from "./components/TestCard.vue";
export default {
  name: "App",
  components: {
    TestCalendar,
    TestCard,
  },
  data() {
    return {
      titles: ["Elected", "Appointed", "Greek", "German"],
    };
  },
  computed: {
    computedTitles() {
      return this.titles.slice(0, 3);
    },
  },
  methods: {
    rotateTitles(n) {
      var len = this.titles.length;
      this.titles = !(n % len)
        ? this.titles.slice()
        : this.titles.map((e, i, a) => a[(i + (len + (n % len))) % len]);
    },
  },
};
</script>
