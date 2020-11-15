<template>
  <transition enter-active-class="slidefadeIn" leave-active-class="slidefadeOut" appear>
<Container width="100%">
  <ModalMessage v-if="this.store.state.requestNotificationPermission" />
  <Container>
    <Clock />
    <Container margin="26px 0 0 0">
      <PlayConfig @click="onClick"/>
    </Container>
  </Container>
</Container>
  </transition>
</template>

<script>
import Clock from '@/components/organisms/Clock.vue';
import Container from '@/components/atoms/Container.vue';
import PlayConfig from '@/components/organisms/PlayConfig.vue';
import ModalMessage from '@/components/organisms/ModalMessage.vue';

export default {
  name: 'Pomodoro',
  components: {
    Container,
    Clock,
    PlayConfig,
    ModalMessage,
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

<style lang="scss" scoped>
  .slidefadeIn {
    position: absolute ;
    z-index: 1000;
    animation: open 0.4s ease-in forwards;
  }

  .slidefadeOut {
    position: absolute;
    z-index: 1000;
    animation: close 0.4s ease-out forwards;
  }

@keyframes open {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateX(200px);
    }
  }
</style>
