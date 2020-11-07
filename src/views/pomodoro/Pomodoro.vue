<template>
  <Container>
    <Clock />
    <Container margin="26px 0 0 0">
      <ButtonStartStop @click="onClick" :isStarted="isStarted"/>
    </Container>
  </Container>
</template>

<script>
import Clock from '@/components/organisms/Clock.vue';
import Container from '@/components/atoms/Container.vue';
import ButtonStartStop from '@/components/molecules/buttons/ButtonStartStop.vue';

export default {
  name: 'Pomodoro',
  components: {
    Container,
    Clock,
    ButtonStartStop,
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
