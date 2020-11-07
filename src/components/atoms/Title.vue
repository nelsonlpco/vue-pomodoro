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
