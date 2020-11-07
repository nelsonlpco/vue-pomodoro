<template>
  <Container>
    <Title :class="{upTitle: isStarted, downTitle: !isStarted}">Pomodoro</Title>
    <Container :class="{upDisplay: isStarted, downDisplay: !isStarted}">
      <Timer v-if="isStarted" />
      <Subtitle v-if="isStarted">{{this.legend}}</Subtitle>
    </Container>
  </Container>
</template>

<script>
import Container from '@/components/molecules/Container.vue';
import Subtitle from '@/components/molecules/Subtitle.vue';
import Title from '@/components/molecules/Title.vue';
import Timer from '@/components/cells/Timer.vue';

export default {
  name: 'TimerDisplay',
  components: {
    Container,
    Subtitle,
    Title,
    Timer,
  },
  props: {
    isStarted: {
      type: Boolean,
      default: false,
    },
    legend: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" >
  .upTitle {
    animation: upTitle .5s ease-out forwards;
  }

  .downTitle {
    animation: downTitle .5s ease-out forwards;
  }

  .upDisplay{
    opacity: 0;
    animation: upDisplay .5s ease-out forwards;
  }

  .downDisplay{
    animation: downDisplay .5s ease-out forwards;
  }

  @keyframes upTitle {
    to {
      transform: translateY(-120px);
      font-size: 3rem;
    }
  }

  @keyframes downTitle {
    from {
      transform: translateY(-120px);
      font-size: 3rem;
    }
    to {
      transform: translateY(0px);
      font-size: 2.123rem;
    }
  }

  @keyframes upDisplay {
    to {
      transform: translateY(-40px);
      opacity: 1;
    }
  }

  @keyframes downDisplay {
    from {
      transform: translateY(-40px);
      opacity: 1;
    }
    to {
      transform: translateY(40px);
      opacity: 0;
    }
  }
</style>
