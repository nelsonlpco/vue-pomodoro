<template>
  <Container width="100%" ref="container" direction="row">
    <Container  margin="0 79px 0 0">
      <ButtonConfig @click="configHandler" :style="store.state.playConfig.configAnimation"/>
    </Container>
    <ButtonStartStop
      :style="store.state.playConfig.playAnimation"
      @click="startStopHandler"
      :isStarted="store.state.isStarted"/>
</Container>
</template>

<script>
import Container from '@/components/atoms/Container.vue';
import ButtonConfig from '@/components/molecules/buttons/ButtonConfig.vue';
import ButtonStartStop from '@/components/molecules/buttons/ButtonStartStop.vue';

export default {
  name: 'PlayConfig.vue',
  components: {
    Container,
    ButtonConfig,
    ButtonStartStop,
  },
  inject: ['store'],
  methods: {
    getWindowWidth() {
      const containerMiddleWidth = this.$refs.container.$el.scrollWidth / 2 - 40;
      this.store.setPlayConfigMiddleOfContainer(containerMiddleWidth);
    },
    startStopHandler() {
      this.$emit('click');
    },
    configHandler() {
      this.store.clearTimeAnimation();
      this.$router.push('Configurations');
    },
  },
  mounted() {
    this.getWindowWidth();
  },
};
</script>
