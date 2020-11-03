<template>
  <section>
    <h1>Pomodoro</h1>
    {{ $route.params.type }}
    <Timer :time="pomodoroTime" />
    <Button @click="rest()">X</Button>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue';
import PomodoroTypes from './PomodoroTypes';

export default {
  name: 'Pomodoro',
  components: {
    Timer,
  },
  computed: {
    pomodoroTime() {
      const { type } = this.$route.params;
      return PomodoroTypes[type].time;
    },
  },
  methods: {
    rest() {
      if (this.$route.params.type === 'rest') {
        this.$router.push({ name: 'Pomodoro', params: { type: 'rest' } });
      } else {
        this.$router.push({ name: 'Home' });
      }
    },
  },
};
</script>
