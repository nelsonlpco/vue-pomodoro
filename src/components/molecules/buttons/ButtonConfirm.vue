<template>
  <ButtonBase>
    <IconConfirm />
  </ButtonBase>
</template>

<script>
import IconConfirm from '@/components/atoms/icons/IconOk.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonConfirm',
  components: {
    ButtonBase,
    IconConfirm,
  },
};
</script>
