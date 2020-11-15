<template>
  <label class="container">
    {{label}}
    <input type="checkbox" :checked="isActive" :value="isActive" @change="onChange">
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'ChangeInput',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange() {
      this.$emit('change', !this.$props.isActive);
    },
  },
};
</script>

<style lang="scss" scoped>

@import '../../theme/theme.scss';

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: $textColor;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: $textColor;
}

.container:hover input ~ .checkmark {
  background-color: $textColor;
}

.container input:checked ~ .checkmark {
  background-color: $primaryDark;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid $textColor;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>
