<template>
<Container>
  <DisplayCircleTimer :isStarted="isStarted" :time="time">
    <TimerDisplay :isStarted="isStarted" :legend="legend"/>
  </DisplayCircleTimer>
</Container>
</template>

<script>
import DisplayCircleTimer from '@/components/molecules/DisplayCircleTimer.vue';
import Container from '@/components/molecules/Container.vue';
import TimerDisplay from './TimerDisplay.vue';

export default {
  name: 'CloudWatch',
  components: {
    DisplayCircleTimer,
    Container,
    TimerDisplay,
  },
  props: {
    legend: {
      type: String,
      default: 'Trabalho',
    },
    time: {
      type: Number,
      default: 10,
    },
    isStarted: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
