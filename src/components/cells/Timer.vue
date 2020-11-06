<template>
    <TimerText>{{minutes}}:{{seconds}}</TimerText>
</template>

<script>
import TimerText from '@/components/molecules/TimerText.vue';

export default {
  name: 'Timer',
  components: {
    TimerText,
  },
  props: {
    time: {
      type: Number,
      default: 1200,
    },
    isStarted: {
      type: Boolean,
      default: false,
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
