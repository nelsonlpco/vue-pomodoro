<template>
  <ButtonBase @click="onClickHandler">
    <IconCancel />
  </ButtonBase>
</template>

<script>
import IconCancel from '@/components/atoms/icons/IconCancel.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonCancel',
  components: {
    ButtonBase,
    IconCancel,
  },
  methods: {
    onClickHandler() {
      this.$emit('click');
    },
  },
};
</script>
