<template>
  <ButtonBase>
    <IconCancel />
  </ButtonBase>
</template>

<script>
import IconCancel from '@/components/molecules/icons/IconCancel.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonCancel',
  components: {
    ButtonBase,
    IconCancel,
  },
};
</script>
