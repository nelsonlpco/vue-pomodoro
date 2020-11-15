<template>
  <Container direction="row">
    <NumberInput :value="dataMinutes" @change="onChangeMinutes"/>
    <span class="timer-text">:</span>
    <NumberInput :value="dataSeconds" @change="onChangeSeconds" />
  </Container>
</template>

<script>
import Container from '@/components/atoms/Container.vue';
import NumberInput from '@/components/atoms/NumberInput.vue';

export default {
  components: {
    Container,
    NumberInput,
  },
  props: {
    minutes: {
      type: Number,
      default: 0,
    },
    seconds: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      dataMinutes: 0,
      dataSeconds: 0,
    };
  },
  methods: {
    onChangeMinutes(v) {
      const time = Number(v) * 60 + Number(this.$props.seconds);
      this.$emit('keyup', time);
    },
    onChangeSeconds(v) {
      this.$emit('keyup', v.toString());
    },
  },
  mounted() {
    this.dataMinutes = this.$props.minutes;
    this.dataSeconds = this.$props.seconds;
  },
};
</script>
