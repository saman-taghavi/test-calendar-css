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
      <date-picker
        v-model="date"
        format=" jYYYY jMMMM jDD   "
        custom-input=".custom-input"
        range
      >
        <!-- slot for "header-date" -->
        <template #header-date="{ vm }">
          {{ formatDay(vm) }}
        </template>
        <!-- slot for "day-item" -->
        <template #day-item="{ day, color }">
          <span
            :class="{
              'normal-days': !day.isFirst || !day.isLast,
              'vpd-day-effect': !day.isFirst || !day.isLast,
              'first-day': day.isFirst,
              'between-days': day.isBetween,
              'last-day': day.isLast,
            }"
            :style="{ 'background-color': color }"
          />

          <span @click="log(day)" class="vpd-day-text" v-text="day.formatted" />
        </template>
      </date-picker>
      <date-picker v-model="date" range></date-picker>
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

    formatDay(vm) {
      let dates = vm.selectedDates;
      if (dates.length <= 1) {
        this.log(dates[0]);
        return this.$moment(dates[0]).locale("fa").format("jDD jMMMM");
      }

      let totall = dates[1].diff(dates[0], "days");
      this.log(totall);
      return `از ${this.$moment(dates[0])
        .locale("fa")
        .format("jDD jMMMM")} تا ${this.$moment(dates[1])
        .locale("fa")
        .format("jDD jMMMM")} به مدت ${totall} روز`;
    },
  },
  mounted() {
    this.$moment.locale = "fa";
  },
};
</script>

<style>
.first-day {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  background-color: #4361ee !important;
  transform: scale(0.8, 1) translateX(2px) !important;
}
.last-day {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  background-color: #4361ee !important;
  transform: scale(0.8, 1) translateX(-2px) !important;
}

/* a custom look for days in between selected range */
.between-days {
  border-radius: 0px !important;
  transform: scale(1.3) rotateX(45deg) !important;
}

/* text is after the day-effect  so this is how i select it*/
.vpd-day:hover .between-days {
  transform: scale(1.1) !important;
}
.vpd-day .vpd-day-text:hover,
.vpd-day .vpd-day-text:hover ~ .between-days {
  transform: scale(1.1) !important;
}

/* change border-radius for normal-days which are not last day or first day*/
.vpd-day:hover .normal-days:not(.last-day):not(.first-day) {
  transform: scale(1.1) !important;
}
.normal-days:not(.first-day):not(.last-day) {
  border-radius: 5px !important;
}
</style>
