<template>
  <div class="timer">Timer: {{minutes}}:{{seconds}}</div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    time: {
      type: Number,
      default: 1200,
    },
  },
  computed: {
    minutes() {
      const minutes = Math.floor(this.timeInSeconds / 60);
      return this.getPaddedTime(minutes);
    },
    seconds() {
      const seconds = Math.floor(this.timeInSeconds % 60);
      return this.getPaddedTime(seconds);
    },
  },
  data() {
    return {
      timeInSeconds: 0,
    };
  },
  methods: {
    startCountDown() {
      const countdownTimer = window.setInterval(() => {
        if (!this.timeInSeconds) {
          window.clearInterval(countdownTimer);
          this.setTime();
          this.$router.push({ name: 'Pomodoro', params: { type: 'rest' } });
          return;
        }

        this.onSecondElapse();
      }, 1000);
    },
    onSecondElapse() {
      this.timeInSeconds -= 1;
    },
    setTime() {
      this.timeInSeconds = this.$props.time;
    },
    getPaddedTime(value) {
      return value.toString().padStart(2, '0');
    },
  },
  mounted() {
    this.setTime();
    this.startCountDown();
  },
};
</script>

<style scoped>
  .timer {
    color: var(--app-color-text);
  }
</style>
