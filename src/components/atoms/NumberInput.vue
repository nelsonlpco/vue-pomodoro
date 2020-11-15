<template>
  <input
    class="input"
    :class="{'--active': isActive}"
    type="text"
    :placeholder="paddedNumber"
    @focus="onFocus"
    @blur="onBlur"
    @keyup="onKeyUp"
    maxlength="2"/>
</template>

<script>
let timeoutRef = null;

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
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onFocus() {
      this.isActive = true;
    },
    onBlur() {
      this.isActive = false;
    },
    onKeyUp(e) {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
      timeoutRef = setTimeout(() => {
        this.$emit('change', e.target.value);
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../theme/theme.scss';

.input {
  color: $textColor;
  font-weight: bold;
  font-size: $font-size-timer-text;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  width: 69px;
  direction: rtl;
  overflow:hidden;

  &::placeholder {
    opacity: 1;
    color: $textColor;
  }

  &.--active {
    &::placeholder {
      opacity: 0.5;
      color: $textColor;
    }
  }
}

</style>
