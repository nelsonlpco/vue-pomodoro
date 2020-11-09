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

let minuteTimeout = null;
let secondsTimeout = null;

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

      if (minuteTimeout) {
        clearTimeout(minuteTimeout);
      }

      minuteTimeout = setTimeout(() => {
        this.$emit('keyup', time.toString());
      }, 400);
    },
    onChangeSeconds(v) {
      this.$emit('keyup', Number(v));

      if (secondsTimeout) {
        clearTimeout(secondsTimeout);
      }

      secondsTimeout = setTimeout(() => {
        this.$emit('keyup', v.toString());
      }, 400);
    },
  },
  mounted() {
    this.dataMinutes = this.$props.minutes;
    this.dataSeconds = this.$props.seconds;
  },
};
</script>

<style>

</style>
