<template>
<Container>
  <DisplayCircleTimer :animationStyle="store.state.animation">
    <TimeDisplay
      :isStarted="store.state.isStarted"
      :legend="store.state.legend"
      :seconds="store.state.currentTime"/>
  </DisplayCircleTimer>
</Container>
</template>

<script>
import TimeDisplay from '@/components/molecules/TimeDisplay.vue';
import DisplayCircleTimer from '@/components/atoms/DisplayCircleTimer.vue';
import Container from '@/components/atoms/Container.vue';

export default {
  name: 'Clock',
  components: {
    TimeDisplay,
    DisplayCircleTimer,
    Container,
  },
  inject: ['store'],
};
</script>
