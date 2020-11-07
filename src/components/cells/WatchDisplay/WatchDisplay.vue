<template>
<Container>
  <DisplayCircleTimer>
    <TimerDisplay :isStarted="store.state.isStarted" :legend="store.state.legend"/>
  </DisplayCircleTimer>
</Container>
</template>

<script>
import DisplayCircleTimer from '@/components/molecules/DisplayCircleTimer.vue';
import Container from '@/components/molecules/Container.vue';
import Store from '@/store';
import TimerDisplay from './TimerDisplay.vue';

export default {
  name: 'CloudWatch',
  components: {
    DisplayCircleTimer,
    Container,
    TimerDisplay,
  },
  data() {
    return {
      store: Store,
    };
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
