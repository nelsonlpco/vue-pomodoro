<template>
  <button class="button" @click="onClick()">
    <div :style="{width: width, height: height,}">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: {
    width: {
      type: [Number, String],
      default: '40px',
    },
    height: {
      type: [Number, String],
      default: '40px',
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
  @import '@/theme/theme.scss';

  .button {
    all:unset;
    background-color: $primary;
    color: var(--app-color-text);
    width: 80px;
    height: 80px;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
