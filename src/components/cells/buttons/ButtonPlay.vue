<template>
  <ButtonBase>
    <IconPlay width="33"/>
  </ButtonBase>
</template>

<script>
import IconPlay from '@/components/molecules/icons/IconPlay.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonPlay',
  components: {
    ButtonBase,
    IconPlay,
  },
};
</script>
