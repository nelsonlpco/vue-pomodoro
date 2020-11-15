<template>
  <transition enter-active-class="slidefadeIn" leave-active-class="slidefadeOut" appear>
    <Container>
      <Container margin="0 0 78px 0" width="100%">
        <Title>{{$t('configurations')}}</Title>
      </Container>
      <Container margin="0 0 58px 0">
        <Subtitle>{{$t('workTime')}}</Subtitle>
        <TimeInput :minutes="minutes" :seconds="seconds" @keyup="changeWorkTime" />
      </Container>
      <Container margin="0 0 58px 0">
        <Subtitle>{{$t('intervalTime')}}</Subtitle>
        <TimeInput
          :minutes="intervalMinutes"
          :seconds="intervalSeconds"
          @keyup="changeIntervalTime" />
      </Container>
      <Container direction="row">
        <Container margin="0 79px 0 0">
          <ButtonCancel @click="cancelHandler" />
        </Container>
        <ButtonConfirm @click="confirmHandler" />
      </Container>
    </Container>
  </transition>
</template>

<script>
import Container from '@/components/atoms/Container.vue';
import Title from '@/components/atoms/Title.vue';
import Subtitle from '@/components/atoms/Subtitle.vue';
import ButtonCancel from '@/components/molecules/buttons/ButtonCancel.vue';
import ButtonConfirm from '@/components/molecules/buttons/ButtonConfirm.vue';
import TimeInput from '@/components/molecules/TimeInput.vue';

export default {
  name: 'Configurations',
  inject: ['store'],
  components: {
    Container,
    Title,
    Subtitle,
    ButtonCancel,
    ButtonConfirm,
    TimeInput,
  },
  computed: {
    minutes() {
      return Math.floor(this.store.state.workTime / 60);
    },
    seconds() {
      return Math.floor(this.store.state.workTime % 60);
    },
    intervalMinutes() {
      return Math.floor(this.store.state.intervalTime / 60);
    },
    intervalSeconds() {
      return Math.floor(this.store.state.intervalTime % 60);
    },
  },
  data() {
    return {
      inputedTime: 0,
    };
  },
  methods: {
    cancelHandler() {
      this.store.setWorkTime(this.inputedTime);
      this.$router.push('/');
    },
    confirmHandler() {
      this.store.saveConfig();
      this.$router.push('/');
    },
    changeWorkTime(v) {
      this.store.setWorkTime(Number(v));
    },
    changeIntervalTime(v) {
      this.store.setIntervalTime(Number(v));
    },
  },
  mounted() {
    this.inputedTime = this.store.state.workTime;
  },
};
</script>

<style lang="scss" scoped>
  .slidefadeIn {
    position: absolute ;
    z-index: 1000;
    animation: open 0.4s ease-in forwards;
  }

  .slidefadeOut {
    position: absolute;
    z-index: 1000;
    animation: close 0.4s ease-out forwards;
  }

@keyframes open {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }
</style>
