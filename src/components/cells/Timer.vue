<template>
    <TimerText>{{minutes}}:{{seconds}}</TimerText>
</template>

<script>
import TimerText from '@/components/molecules/TimerText.vue';
import Store from '@/store';

export default {
  name: 'Timer',
  components: {
    TimerText,
  },
  computed: {
    minutes() {
      const minutes = Math.floor(this.store.state.currentTime / 60);
      return this.getPaddedTime(minutes);
    },
    seconds() {
      const seconds = Math.floor(this.store.state.currentTime % 60);
      return this.getPaddedTime(seconds);
    },
  },
  data() {
    return {
      store: Store,
    };
  },
  methods: {
    getPaddedTime(value) {
      return value.toString().padStart(2, '0');
    },
  },
};
</script>
