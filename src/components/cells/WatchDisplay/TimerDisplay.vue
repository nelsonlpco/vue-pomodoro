<template>
  <Container>
    <Timer />
    <Subtitle>{{this.legend}}</Subtitle>
  </Container>
</template>

<script>
import Container from '@/components/molecules/Container.vue';
import Subtitle from '@/components/molecules/Subtitle.vue';
import Timer from '@/components/cells/Timer.vue';

export default {
  name: 'TimerDisplay',
  components: {
    Container,
    Subtitle,
    Timer,
  },
};
</script>
