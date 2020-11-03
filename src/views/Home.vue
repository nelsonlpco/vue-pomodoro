<template>
  <div class="home">
    <ButtonPlay />
    <ButtonStop />
    <ButtonConfig />
    <ButtonConfirm />
    <ButtonCancel />
    <DisplayCircleTimer />
  </div>
</template>

<script>
import ButtonPlay from '@/components/cells/buttons/ButtonPlay.vue';
import ButtonStop from '@/components/cells/buttons/ButtonStop.vue';
import ButtonConfig from '@/components/cells/buttons/ButtonConfig.vue';
import ButtonConfirm from '@/components/cells/buttons/ButtonConfirm.vue';
import ButtonCancel from '@/components/cells/buttons/ButtonCancel.vue';
import DisplayCircleTimer from '@/components/molecules/DisplayCircleTimer.vue';

export default {
  name: 'Home',
  components: {
    ButtonPlay,
    ButtonStop,
    ButtonConfig,
    ButtonConfirm,
    ButtonCancel,
    DisplayCircleTimer,
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'Pomodoro', params: { type: 'work' } });
    },
  },
};
</script>
