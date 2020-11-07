<template>
  <ButtonBase @click="onClick">
    <IconStop />
  </ButtonBase>
</template>

<script>
import IconStop from '@/components/atoms/icons/IconStop.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonConfig',
  components: {
    ButtonBase,
    IconStop,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
