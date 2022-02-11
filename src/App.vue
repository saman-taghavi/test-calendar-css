<template>
  <v-app>
    <v-main>
      <v-container justify-center>
        <test-calendar class="pa-16" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TestCalendar from "./components/TestCalendar.vue";

export default {
  name: "App",

  components: {
    TestCalendar,
  },
};
</script>
