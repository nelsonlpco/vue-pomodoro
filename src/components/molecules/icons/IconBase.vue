<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${viewPortWidth} ${viewPortHeight}`"
    preserveAspectRatio="none"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    :width="width"
    :height="height"
    :aria-labelledby="iconName">
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
import theme from '@/theme/theme';

export default {
  props: {
    viewPortWidth: {
      type: Number,
      default: 200,
    },
    viewPortHeight: {
      type: Number,
      default: 250,
    },
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: '100%',
    },
    iconColor: {
      type: String,
      default: theme.colors.primaryBackground,
    },
  },
};
</script>
