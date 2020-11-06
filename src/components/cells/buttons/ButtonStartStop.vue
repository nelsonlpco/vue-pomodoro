<template>
  <ButtonBase @click="onClick">
    <div class="play-button" :class="{show: !isStarted, hide: isStarted}">
      <IconPlay width="33"/>
    </div>
    <div class="play-button hided" :class="{show: isStarted, hide: !isStarted}">
      <IconStop />
    </div>
  </ButtonBase>
</template>

<script>
import IconStop from '@/components/molecules/icons/IconStop.vue';
import IconPlay from '@/components/molecules/icons/IconPlay.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonStartStop',
  components: {
    IconStop,
    IconPlay,
    ButtonBase,
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
  .play-button {
    position: absolute;
  }

  .hided {
    opacity: 0;
  }

  .show {
    animation: showIcon .5s ease-out forwards;
  }

  .hide {
    animation: hideIcon .5s ease-out forwards;
  }

  @keyframes showIcon {
    to {
      opacity: 1;
    }
  }

  @keyframes hideIcon {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
