<template>
  <input
    class="time-input"
    type="text"
    placeholder="00"
    :value="paddedNumber"
    @focus="onFocus"
    @keyup="onKeyUp"
    maxlength="2"/>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    paddedNumber() {
      return this.$props.value.toString().padStart(2, '0');
    },
  },
  methods: {
    onFocus(e) {
      e.target.select();
    },
    onKeyUp(e) {
      this.$emit('change', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../theme/theme.scss';

.time-input {
  color: $textColor;
  font-weight: bold;
  font-size: $font-size-timer-text;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  width: 69px;
  direction: rtl;
  overflow:hidden;
}
</style>
