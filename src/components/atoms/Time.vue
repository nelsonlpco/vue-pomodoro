<template>
  <span class="timer-text">
    {{minutes}}:{{seconds}}
  </span>
</template>

<script>
export default {
  name: 'Time',
  props: {
    minutes: {
      type: String,
      default: '00',
    },
    seconds: {
      type: String,
      default: '00',
    },
  },
};
</script>
