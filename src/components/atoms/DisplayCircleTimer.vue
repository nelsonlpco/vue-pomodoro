<template>
  <div class="timer">
      <div class="timer-container">
        <svg xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid"
          :width="size"
          :height="size">
          <circle
            :cx="cx"
            :cy="cy"
            :r="r"
            :stroke="bgColor"
            stroke-linecap="round"
            stroke-width="10"
            fill="none"
          />
          <circle
            :style="animationStyle"
            :cx="cx"
            :cy="cy"
            :r="r"
            :stroke="actionColor"
            stroke-linecap="round"
            stroke-width="10"
            fill="none"
            stroke-dasharray="754"
            stroke-dashoffset="754"
          />
        </svg>
      </div>
      <div class="timer-display">
        <slot />
      </div>
  </div>
</template>

<script>
import theme from '@/theme/theme';

export default {
  name: 'DisplayCircleTimer',
  props: {
    bgColor: {
      type: String,
      default: theme.colors.primaryDark,
    },
    actionColor: {
      type: String,
      default: theme.colors.primary,
    },
    size: {
      type: Number,
      default: 260,
    },
    animationStyle: {
      type: Object,
      default() { return { animation: '' }; },
    },
  },
  computed: {
    cx() { return this.$props.size / 2; },
    cy() { return this.$props.size / 2; },
    r() { return this.$props.size / 2 - 10; },
  },
};
</script>

<style lang="scss" scoped>
  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 260px;
    height:260px;
  }
  .container {
    position: absolute;
    top:0;
    left: 0;
  }
  .timer-container {
    transform: rotate(-90deg);
    z-index: -1;
    position: absolute;
  }
  .timer-display {
    z-index: 10;
    color: white;
  }
</style>
