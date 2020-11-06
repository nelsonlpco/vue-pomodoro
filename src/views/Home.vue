<template>
  <div class="home">
    <WatchDisplay :isStarted="isStarted" />
      <Container margin="26px 0 0 0">
    <ButtonStartStop @click="onClick"  :isStarted="isStarted"/>
  </Container>
  </div>
</template>

<script>
import WatchDisplay from '@/components/cells/WatchDisplay/WatchDisplay.vue';
import Container from '@/components/molecules/Container.vue';
import ButtonStartStop from '@/components/cells/buttons/ButtonStartStop.vue';

export default {
  name: 'Home',
  components: {
    Container,
    WatchDisplay,
    ButtonStartStop,
  },
  data() {
    return {
      isStarted: false,
      status: 'work',
    };
  },
  methods: {
    onClick() {
      this.isStarted = !this.isStarted;
    },
  },
};
</script>
