<template>
  <div class="title" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    margin: {
      type: String,
      default: '0 0 26px 0',
    },
  },
  data() {
    return {
      style: {
        margin: this.$props.margin,
      },
    };
  },
};
</script>
