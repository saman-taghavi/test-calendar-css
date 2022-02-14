<template>
  <v-row align-content="center" justify="center">
    <v-col cols="3">
      <v-text-field
        v-model="date"
        name="name"
        label="label"
        id="id"
        class="custom-input"
      ></v-text-field>
      <date-picker v-model="date" custom-input=".custom-input" range>
        <!-- slot for "day-item" -->
        <template #day-item="{ day, color }">
          <span
            :class="{
              'vpd-day-effect': !day.isFirst || !day.isLast,
              'first-day': day.isFirst,
              'between-days': day.isBetween,
              'last-day': day.isLast,
            }"
            :style="{ 'background-color': color }"
          />

          <span
            @click="log(day)"
            class="vpd-day-text fix-hover"
            v-text="day.formatted"
          />
        </template>
      </date-picker>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TestCalendar",
  data() {
    return {
      date: "",
    };
  },
  methods: {
    log(item) {
      console.log(
        `%c ${item} =>`,
        "background: #2ecc71;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em",
        { item }
      );
    },
  },
};
</script>

<style>
.first-day {
  border-top-right-radius: 100px !important;
  border-bottom-right-radius: 100px !important;
  transform: translate(2px) !important;
}
.last-day {
  border-top-left-radius: 100px !important;
  border-bottom-left-radius: 100px !important;
  transform: translate(-2px) !important;
}
.between-days {
  border-radius: 8% !important;
  transform: scale(1.2, 1) rotateX(45deg) !important;
}

/* text is after the day-effect  so this is how i select it*/
.vpd-day:hover .between-days {
  border-radius: 5px !important;

  transform: scale(1.1) !important;
}
.vpd-day .fix-hover:hover,
.vpd-day .fix-hover:hover ~ .between-days {
  border-radius: 5px !important;

  transform: scale(1.1) !important;
}
</style>
