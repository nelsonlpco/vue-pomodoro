<template>
  <div class="home">
    <Title>Pomodoro</Title>
    <WatchDisplay />
  </div>
</template>

<script>
import Title from '@/components/molecules/Title.vue';
import WatchDisplay from '@/components/cells/WatchDisplay/WatchDisplay.vue';

export default {
  name: 'Home',
  components: {
    WatchDisplay,
    Title,
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'Pomodoro', params: { type: 'work' } });
    },
  },
};
</script>
