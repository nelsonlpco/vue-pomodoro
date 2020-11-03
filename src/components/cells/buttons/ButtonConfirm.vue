<template>
  <ButtonBase>
    <IconConfirm />
  </ButtonBase>
</template>

<script>
import IconConfirm from '@/components/molecules/icons/IconOk.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonConfirm',
  components: {
    ButtonBase,
    IconConfirm,
  },
};
</script>
