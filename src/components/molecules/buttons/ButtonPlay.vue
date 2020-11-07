<template>
  <ButtonBase @click="onClick">
    <IconPlay width="33"/>
  </ButtonBase>
</template>

<script>
import IconPlay from '@/components/atoms/icons/IconPlay.vue';
import ButtonBase from './ButtonBase.vue';

export default {
  name: 'ButtonPlay',
  components: {
    ButtonBase,
    IconPlay,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
