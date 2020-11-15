<template>
  <Container direction="row">
    <ChangeInput :label="$t('playInLoop')" :isActive="isActive" @change="onChange"/>
  </Container>
</template>

<script>
import Container from '@/components/atoms/Container.vue';
import ChangeInput from '@/components/atoms/ChangeInput.vue';

export default {
  components: {
    Container,
    ChangeInput,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(value) {
      this.$emit('change', value);
    },
  },
};
</script>
