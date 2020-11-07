<template>
  <div class="scene">
    <div class="card" :class="{'is-flipped':isStarted}">
      <div class="card__face card__face--front">
        <ButtonPlay @click="onClick" />
      </div>
      <div class="card__face card__face--back">
        <ButtonStop @click="onClick" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPlay from './ButtonPlay.vue';
import ButtonStop from './ButtonStop.vue';

export default {
  name: 'ButtonStartStop',
  components: {
    ButtonPlay,
    ButtonStop,
  },
  props: {
    isStarted: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
  .scene {
    width: 80px;
    height: 80px;
    perspective: 600px;
  }
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card__face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }

  .card__face--back {
    transform: rotateY(180deg);
  }

  .card.is-flipped {
      transform: rotateY(180deg);
    }
</style>
