<template>
<Container>
  <DisplayCircleTimer>
    <TimerDisplay />
  </DisplayCircleTimer>
  <Container margin="26px 0 0 0">
    <ButtonStop />
  </Container>
</Container>
</template>

<script>
import DisplayCircleTimer from '@/components/molecules/DisplayCircleTimer.vue';
import Container from '@/components/molecules/Container.vue';
import ButtonStop from '@/components/cells/buttons/ButtonStop.vue';
import TimerDisplay from './TimerDisplay.vue';

export default {
  name: 'CloudWatch',
  components: {
    ButtonStop,
    DisplayCircleTimer,
    Container,
    TimerDisplay,
  },
  props: {
    legend: {
      type: String,
      default: 'Trabalho',
    },
  },
};
</script>
