<template>
  <Container>
    <Clock />
    <Container margin="26px 0 0 0">
      <PlayConfig @click="onClick"/>
    </Container>
  </Container>
</template>

<script>
import Clock from '@/components/organisms/Clock.vue';
import Container from '@/components/atoms/Container.vue';
import PlayConfig from '@/components/organisms/PlayConfig.vue';

export default {
  name: 'Pomodoro',
  components: {
    Container,
    Clock,
    PlayConfig,
  },
  inject: ['store'],
  computed: {
    isStarted() {
      return this.store.state.isStarted;
    },
  },
  methods: {
    onClick() {
      this.store.startStop();
    },
  },
};

</script>
