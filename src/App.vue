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
        <transition-group
          class="row align-center justify-center carousel"
          tag="div"
          name="list"
        >
          <v-col
            cols="3"
            v-for="item in computedTitles"
            class="list-item"
            :key="item"
          >
            <test-card class="slide" :title="item" />
          </v-col>
        </transition-group>
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
<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
  transform: translateX(30px);
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.list-enter-to {
  opacity: 1;
  transition: 1s;
}
</style>
