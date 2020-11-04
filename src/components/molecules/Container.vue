<template>
  <div :style="style"><slot /></div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    direction: {
      type: String,
      default: 'column',
    },
    justifyContent: {
      type: String,
      default: 'center',
    },
    alignItems: {
      type: String,
      default: 'center',
    },
    flex: {
      type: Number,
      default: 1,
    },
    margin: {
      type: String,
      default: '0 0 0 0',
    },
  },
  data() {
    return {
      style: {
        display: 'flex',
        justifyContent: this.$props.justifyContent,
        alignItems: this.$props.alignItems,
        flex: this.$props.flex,
        flexDirection: this.$props.direction,
        margin: this.$props.margin,
      },
    };
  },
};
</script>
