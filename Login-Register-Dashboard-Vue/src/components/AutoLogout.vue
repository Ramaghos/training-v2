<template>
  <div v-if="warningZone">
    We will auto logout in 2 sec if you are not using the site....
  </div>
</template>
<script>
export default {
  data() {
    return {
      event: ["click", "mousemove", "mousedown", "scroll", "keypress", "load"],

      warningTimer: null,
      logoutTimer: null,
      warningZone: false,
    };
  },
  mounted() {
    this.event.forEach(function(events) {
      window.addEventListener(events, this.resetTimer);
    }, this);
    this.setTimer();
  },
  unmounted() {
    this.event.forEach(function(events) {
      window.removeEventListener(events, this.resetTimer);
    }, this);
    this.resetTimer();
  },
  methods: {
    setTimer() {
      this.warningTimer = setTimeout(this.warningMessage, 4 * 1000);
      this.logoutTimer = setTimeout(this.logoutUser, 10 * 1000);
      this.warningZone = false;
    },
    warningMessage() {
      this.warningZone = true;
    },
    logoutUser() {
      this.$router.push("/Signin-page");
    },
    resetTimer() {
      clearTimeout(this.warningTimer);
      clearTimeout(this.logoutTimer);
      this.setTimer();
    },
  },
};
</script>
