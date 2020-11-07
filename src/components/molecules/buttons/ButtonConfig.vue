<template>
  <ButtonBase>
    <IconConfig />
  </ButtonBase>
</template>

<script>
import IconConfig from '@/components/atoms/icons/IconConfig.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonConfig',
  components: {
    ButtonBase,
    IconConfig,
  },
};
</script>
